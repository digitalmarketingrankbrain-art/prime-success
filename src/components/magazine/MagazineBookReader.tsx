"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles, AlertTriangle, ZoomIn, ZoomOut, Volume2, VolumeX } from "lucide-react";

// react-pageflip touches the DOM at import time, so it must never run during SSR.
const HTMLFlipBook = dynamic(() => import("react-pageflip"), { ssr: false });

interface Props {
  pdfUrl: string;
  title: string;
}

function extractDriveId(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 1.8;
const ZOOM_STEP = 0.2;

const PAGE_FLIP_SOUND_SRC = "/sounds/page-flip.mp3";

export default function MagazineBookReader({ pdfUrl, title }: Props) {
  const [pages, setPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [soundEnabled, setSoundEnabled] = useState(true);
  // react-pageflip's ref type isn't exported cleanly for this API; `pageFlip()` is documented but untyped.
  // getPageCollection() exposes the library's own spread index/count, which is
  // what actually gates whether a flip is possible — see canFlip() below.
  const bookRef = useRef<{
    pageFlip: () => {
      flipNext: () => void;
      flipPrev: () => void;
      getPageCollection: () => { getCurrentSpreadIndex: () => number; getSpread: () => unknown[] };
    };
  } | null>(null);
  const pageFlipAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(PAGE_FLIP_SOUND_SRC);
    audio.volume = 0.5;
    audio.preload = "auto";
    pageFlipAudioRef.current = audio;
    return () => {
      pageFlipAudioRef.current = null;
    };
  }, []);

  const playPageFlipSound = useCallback(() => {
    const audio = pageFlipAudioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {
      // Autoplay can be blocked before the first user gesture — safe to ignore.
    });
  }, []);

  // The space actually available for the book (everything above the nav row),
  // measured directly rather than guessed via CSS vh — react-pageflip's own
  // "stretch" sizing can't be trusted to read an ancestor's real box reliably
  // across browsers/zoom levels, so we hand it a hard pixel ceiling instead.
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ width: 900, height: 620 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setStageSize({
        width: Math.round(entry.contentRect.width),
        height: Math.round(entry.contentRect.height),
      });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function renderPdfToImages() {
      const driveId = extractDriveId(pdfUrl);
      if (!driveId) {
        setError("Could not read this issue's source file.");
        setLoading(false);
        return;
      }

      try {
        const pdfjsLib = await import("pdfjs-dist");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        const pdf = await pdfjsLib.getDocument({ url: `/api/pdf-proxy?id=${driveId}` }).promise;
        if (cancelled) return;

        setProgress({ done: 0, total: pdf.numPages });
        const rendered: string[] = [];

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          if (cancelled) return;

          const page = await pdf.getPage(pageNum);
          const viewport = page.getViewport({ scale: 2 });
          const canvas = document.createElement("canvas");
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          const ctx = canvas.getContext("2d");
          if (!ctx) continue;

          await page.render({ canvas, canvasContext: ctx, viewport }).promise;
          rendered.push(canvas.toDataURL("image/jpeg", 0.92));

          if (!cancelled) setProgress({ done: pageNum, total: pdf.numPages });
        }

        if (!cancelled) {
          setPages(rendered);
          setLoading(false);
        }
      } catch (err) {
        console.error("MagazineBookReader render failure:", err);
        if (!cancelled) {
          setError("This issue couldn't be loaded in Book View. Try Real PDF View instead.");
          setLoading(false);
        }
      }
    }

    renderPdfToImages();
    return () => {
      cancelled = true;
    };
  }, [pdfUrl]);

  // Book View shows two pages per spread, so react-pageflip's own page index
  // advances by 2 per flip — our `currentPage` (from onFlip's e.data) doesn't
  // land neatly on `pages.length - 1` at the last spread. Asking the library's
  // own spread index/count directly is what correctly gates the last click
  // (and the first, for Previous) regardless of that stepping.
  const canFlip = useCallback((direction: "next" | "prev") => {
    const collection = bookRef.current?.pageFlip().getPageCollection();
    if (!collection) return true;
    const spreadIndex = collection.getCurrentSpreadIndex();
    const totalSpreads = collection.getSpread().length;
    return direction === "next" ? spreadIndex < totalSpreads - 1 : spreadIndex > 0;
  }, []);

  // Play the flip sound the instant the turn is triggered, not when it lands —
  // firing it from onFlip (which resolves only once the ~700ms animation
  // finishes) made it feel noticeably delayed after the click/keypress.
  const goNext = useCallback(() => {
    if (!canFlip("next")) return;
    bookRef.current?.pageFlip().flipNext();
    if (soundEnabled) playPageFlipSound();
  }, [canFlip, soundEnabled, playPageFlipSound]);

  const goPrev = useCallback(() => {
    if (!canFlip("prev")) return;
    bookRef.current?.pageFlip().flipPrev();
    if (soundEnabled) playPageFlipSound();
  }, [canFlip, soundEnabled, playPageFlipSound]);

  const zoomIn = useCallback(() => setZoom((z) => Math.min(MAX_ZOOM, +(z + ZOOM_STEP).toFixed(2))), []);
  const zoomOut = useCallback(() => setZoom((z) => Math.max(MIN_ZOOM, +(z - ZOOM_STEP).toFixed(2))), []);

  const handleFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
  }, []);

  // Keyboard navigation — left/right arrows turn pages while Book View is on screen.
  useEffect(() => {
    if (loading || error) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [loading, error, goNext, goPrev]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 text-cream/70 max-w-sm text-center">
        <AlertTriangle className="w-8 h-8 text-royal-gold" />
        <p className="font-sans text-sm">{error}</p>
      </div>
    );
  }

  if (loading) {
    const pct = progress.total > 0 ? Math.round((progress.done / progress.total) * 100) : 0;
    return (
      <div className="flex flex-col items-center gap-4 w-64">
        <div className="relative w-20 h-20 flex items-center justify-center">
          {/* Theme-matched spinner ring — gold, spinning around the crown */}
          <div className="absolute inset-0 rounded-full border-[3px] border-royal-gold/15 border-t-royal-gold border-r-royal-gold/60 animate-spin" />
          <div className="relative w-14 h-14 drop-shadow-lg">
            <Image src="/images/icon.png" alt="Prime Success" fill className="object-contain" priority />
          </div>
        </div>
        <span className="font-serif text-base tracking-[0.3em] font-bold text-ivory">
          PRIME SUCCESS
        </span>
        <span className="text-[9px] tracking-[0.4em] font-sans text-royal-gold uppercase font-semibold flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-royal-gold" />
          PREPARING BOOK VIEW
          <Sparkles className="w-3 h-3 text-royal-gold" />
        </span>

        <div className="w-full flex flex-col items-center gap-2 mt-1">
          <div className="w-full h-[2px] bg-luxury-dark border border-royal-gold/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-transparent via-royal-gold to-transparent transition-all duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
          {progress.total > 0 && (
            <span className="font-sans text-[10px] tracking-widest text-cream/60 uppercase">
              Page {progress.done} of {progress.total}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Hard pixel ceiling derived from the real measured stage box, minus the
  // frame's own padding — the book can never exceed this, however react-pageflip's
  // internal "stretch" math behaves on a given browser/zoom level. Scaled down
  // slightly so the book doesn't consume the entire stage.
  const framePadding = 24;
  const stageShrink = 0.72;
  const boundedMaxWidth = Math.max(220, stageSize.width - framePadding) * stageShrink;
  const boundedMaxHeight = Math.max(260, stageSize.height - framePadding) * stageShrink;

  return (
    <div className="flex flex-col w-full h-full">
      {/* Ambient glow behind the book for a premium, staged presentation */}
      <div
        ref={stageRef}
        className={`relative flex-1 min-h-0 w-full flex items-center justify-center ${zoom > 1 ? "overflow-auto" : "overflow-hidden"}`}
      >
        <div className="absolute w-[600px] h-[600px] bg-royal-gold/10 rounded-full blur-[120px] pointer-events-none" />

        <div
          className="relative p-2 sm:p-3 bg-gradient-to-b from-[#1C160F] to-[#0F0C08] border border-royal-gold/40 rounded-sm shadow-2xl flex items-center justify-center transition-transform duration-300"
          style={{ width: boundedMaxWidth, transform: `scale(${zoom})` }}
        >
          {/* @ts-expect-error — react-pageflip's props typings mark every setting as required, but the library applies sensible runtime defaults for anything not passed. */}
          <HTMLFlipBook
            key={`${boundedMaxWidth}x${boundedMaxHeight}`}
            ref={bookRef}
            width={Math.round(boundedMaxWidth / 2)}
            height={boundedMaxHeight}
            size="stretch"
            minWidth={Math.min(220, boundedMaxWidth)}
            maxWidth={boundedMaxWidth}
            minHeight={Math.min(260, boundedMaxHeight)}
            maxHeight={boundedMaxHeight}
            usePortrait={false}
            showCover={false}
            mobileScrollSupport={false}
            useMouseEvents={false}
            disableFlipByClick
            showPageCorners={false}
            drawShadow
            maxShadowOpacity={0.6}
            flippingTime={700}
            className="shadow-2xl"
            // react-pageflip's "stretch" sizing derives height from a padding-bottom
            // percentage trick that can overshoot the real available box — this
            // style is passed straight through to the book's root element and
            // hard-clamps it so the book can never grow past the measured stage.
            style={{ maxHeight: boundedMaxHeight, maxWidth: boundedMaxWidth }}
            onFlip={handleFlip}
          >
            {pages.map((src, idx) => (
              <div key={idx} className="bg-[#FAF7F0] flex items-center justify-center overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element -- pre-rendered data URLs, not a next/image-optimizable remote asset */}
                <img src={src} alt={`${title} — page ${idx + 1}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </HTMLFlipBook>
        </div>
      </div>

      {/* Book Navigation */}
      <div className="flex-shrink-0 flex items-center justify-between gap-4 pt-2 text-xs font-sans">
        {/* Zoom & Sound Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={zoomOut}
            disabled={zoom <= MIN_ZOOM}
            aria-label="Zoom out"
            className="p-2 bg-luxury-card border border-royal-gold/40 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors disabled:opacity-40 disabled:hover:border-royal-gold/40 disabled:hover:text-cream disabled:cursor-not-allowed cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="hidden sm:inline font-mono text-royal-gold px-2 py-2 border border-royal-gold/20 bg-luxury-dark w-14 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={zoomIn}
            disabled={zoom >= MAX_ZOOM}
            aria-label="Zoom in"
            className="p-2 bg-luxury-card border border-royal-gold/40 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors disabled:opacity-40 disabled:hover:border-royal-gold/40 disabled:hover:text-cream disabled:cursor-not-allowed cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setSoundEnabled((s) => !s)}
            aria-label={soundEnabled ? "Mute page-turn sound" : "Unmute page-turn sound"}
            className="ml-1 p-2 bg-luxury-card border border-royal-gold/40 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors cursor-pointer"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={goPrev}
            disabled={currentPage === 0}
            className="flex items-center gap-1.5 px-4 py-2 bg-luxury-card border border-royal-gold/40 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors disabled:opacity-40 disabled:hover:border-royal-gold/40 disabled:hover:text-cream disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="tracking-wider font-semibold hidden sm:inline">PREVIOUS</span>
          </button>

          <span className="font-mono text-royal-gold px-3 py-2 border border-royal-gold/20 bg-luxury-dark whitespace-nowrap">
            PAGE {currentPage + 1} / {pages.length}
          </span>

          <button
            onClick={goNext}
            disabled={currentPage >= pages.length - 1}
            className="flex items-center gap-1.5 px-4 py-2 bg-luxury-card border border-royal-gold/40 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors disabled:opacity-40 disabled:hover:border-royal-gold/40 disabled:hover:text-cream disabled:cursor-not-allowed cursor-pointer"
          >
            <span className="tracking-wider font-semibold hidden sm:inline">NEXT</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Spacer to balance the zoom/sound cluster so the center nav stays visually centered */}
        <div className="hidden md:block w-[158px] flex-shrink-0" />
      </div>
    </div>
  );
}
