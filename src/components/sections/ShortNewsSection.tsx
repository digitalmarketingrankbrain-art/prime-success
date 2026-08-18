"use client";

import { useEffect, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Calendar, X, ShieldCheck, ArrowRight, Loader2 } from "lucide-react";
import type { NewsItem, NewsPayload } from "@/lib/news";
import { useLenis } from "@/components/layout/SmoothScroll";

interface BriefItem extends NewsItem {
  id: string;
  category: "World" | "India";
}

function formatDate(pubDate: string): string {
  const parsed = new Date(pubDate);
  if (Number.isNaN(parsed.getTime())) return pubDate;
  return parsed.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
}

export default function ShortNewsSection() {
  const [items, setItems] = useState<BriefItem[] | null>(null);
  const [activeModalItem, setActiveModalItem] = useState<BriefItem | null>(null);
  const lenis = useLenis();

  // Lock background page scroll while the dispatch brief modal is open — CSS
  // `overflow: hidden` alone isn't enough since Lenis intercepts wheel events
  // directly and still moves window.scrollY underneath the overlay.
  useEffect(() => {
    if (!activeModalItem) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    lenis?.stop();
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      lenis?.start();
    };
  }, [activeModalItem, lenis]);

  useEffect(() => {
    if (!activeModalItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveModalItem(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalItem]);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/news")
      .then((res) => res.json())
      .then((data: NewsPayload) => {
        if (cancelled) return;
        const world: BriefItem[] = data.world.slice(0, 3).map((item, idx) => ({
          ...item,
          id: `world-${idx}`,
          category: "World",
        }));
        const india: BriefItem[] = data.india.slice(0, 3).map((item, idx) => ({
          ...item,
          id: `india-${idx}`,
          category: "India",
        }));
        setItems([...world, ...india]);
      })
      .catch(() => {
        if (!cancelled) setItems([]);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="py-24 bg-luxury-dark text-ivory border-b border-royal-gold/20 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          number="EDITORIAL BRIEFS"
          eyebrow="NEWSROOM DISPATCHES"
          title="SHORT NEWS IN BRIEF"
          subtitle="Live headlines from around the world and from India, refreshed daily."
        />

        {items === null ? (
          <div className="flex items-center justify-center gap-3 my-12 py-12 text-cream/70">
            <Loader2 className="w-5 h-5 text-royal-gold animate-spin" />
            <span className="font-sans text-xs uppercase tracking-widest">Fetching latest dispatches…</span>
          </div>
        ) : items.length === 0 ? (
          <p className="my-12 text-center font-sans text-sm text-cream/60">
            Unable to load live dispatches right now. Please check back shortly.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
            {items.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="p-6 bg-[#120E09] border border-royal-gold/30 rounded-xl hover:border-royal-gold transition-all duration-300 flex flex-col justify-between gap-4 group shadow-xl cursor-pointer hover:-translate-y-1"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-widest border rounded-md bg-[#6B0E16]/40 text-[#E5C158] border-[#E5C158]/40">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-sans text-[#E8DCC4]/60 flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-royal-gold" />
                      <span>{formatDate(item.pubDate)}</span>
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#F9F5EC] group-hover:text-[#E5C158] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </div>
                <div className="text-xs font-sans text-royal-gold font-bold tracking-wider flex items-center gap-1.5 pt-3 border-t border-royal-gold/15 group-hover:translate-x-1 transition-transform">
                  <span>READ DISPATCH BRIEF</span>
                  <ArrowRight className="w-3.5 h-3.5 text-royal-gold" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dispatch Brief Reader Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Dispatch brief — ${activeModalItem.title}`}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveModalItem(null);
          }}
        >
          <div className="max-w-2xl w-full bg-[#120E09] border border-[#E5C158]/50 shadow-2xl rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col gap-5 relative">
            <div className="flex items-center justify-between border-b border-[#E5C158]/20 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#6B0E16] text-[#F9F5EC] text-[10px] font-sans font-bold uppercase tracking-wider rounded-md border border-[#E5C158]/40">
                  {activeModalItem.category}
                </span>
                <span className="text-xs text-[#E5C158] font-sans font-semibold">
                  PUBLISHED: {formatDate(activeModalItem.pubDate)}
                </span>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-[#E8DCC4]/70 hover:text-[#E5C158] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#F9F5EC] leading-snug">
              {activeModalItem.title}
            </h3>

            <p className="font-sans text-sm text-[#E8DCC4] leading-relaxed font-light">
              Reported by {activeModalItem.source || "an independent publisher"}. Follow the link below for the full story.
            </p>

            <div className="pt-4 border-t border-[#E5C158]/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#E5C158] font-bold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
                Source: {activeModalItem.source || "Unknown"}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={activeModalItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-transparent text-[#E5C158] border border-[#E5C158]/50 rounded-md hover:bg-[#E5C158]/10 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  READ FULL COVERAGE
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2 bg-[#6B0E16] text-[#F9F5EC] border border-[#E5C158]/50 rounded-md hover:bg-[#8B121D] transition-colors cursor-pointer"
                >
                  CLOSE BRIEF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
