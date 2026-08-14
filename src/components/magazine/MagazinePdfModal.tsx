"use client";

import { useState } from "react";
import { X, Download, FileText, Monitor, ChevronLeft, ChevronRight } from "lucide-react";
import { MagazineIssue } from "@/types";

interface Props {
  issue: MagazineIssue;
  onClose: () => void;
}

export default function MagazinePdfModal({ issue, onClose }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [readerMode, setReaderMode] = useState<"PDF" | "SPREAD">("PDF");

  const nextPage = () => setCurrentPage((prev) => Math.min(issue.pagesCount, prev + 1));
  const prevPage = () => setCurrentPage((prev) => Math.max(1, prev - 1));

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Digital Reader — ${issue.title}`}
      className="fixed inset-0 z-50 bg-luxury-black/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-300"
    >
      {/* Reader Top Bar */}
      <div className="h-16 border-b border-royal-gold/20 px-6 flex items-center justify-between bg-luxury-dark text-ivory">
        <div className="flex items-center gap-4">
          <span className="font-serif text-sm sm:text-base font-bold text-royal-gold hidden sm:inline">
            {issue.title}
          </span>
          <span className="px-2.5 py-1 bg-royal-red text-[#F9F5EC] text-[10px] font-sans font-bold uppercase tracking-widest">
            {issue.issueNumber}
          </span>
        </div>

        {/* Reader Controls */}
        <div className="flex items-center gap-4 text-xs font-sans">
          {/* Mode Switcher */}
          <div className="hidden sm:flex items-center border border-royal-gold/30 p-1 bg-luxury-black">
            <button
              onClick={() => setReaderMode("PDF")}
              className={`px-3 py-1 text-[10px] tracking-wider uppercase font-bold transition-colors ${
                readerMode === "PDF" ? "bg-royal-gold text-luxury-black" : "text-cream/70 hover:text-ivory"
              }`}
            >
              REAL PDF VIEW
            </button>
            <button
              onClick={() => setReaderMode("SPREAD")}
              className={`px-3 py-1 text-[10px] tracking-wider uppercase font-bold transition-colors ${
                readerMode === "SPREAD" ? "bg-royal-gold text-luxury-black" : "text-cream/70 hover:text-ivory"
              }`}
            >
              SUMMARY SPREAD
            </button>
          </div>

          {/* Download Link */}
          <a
            href={issue.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-royal-gold/15 text-royal-gold hover:bg-royal-gold hover:text-luxury-black border border-royal-gold text-[10px] font-bold tracking-wider uppercase transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden md:inline">DOWNLOAD PDF</span>
          </a>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-2 text-cream/70 hover:text-royal-gold transition-colors"
            aria-label="Close reader modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Reader Stage */}
      <div className="flex-grow relative overflow-hidden bg-black/80 flex items-center justify-center p-4 sm:p-8">
        {readerMode === "PDF" ? (
          <iframe
            src={issue.pdfUrl.replace("/view", "/preview")}
            title={`PDF Reader for ${issue.title}`}
            className="w-full h-full max-w-5xl border border-royal-gold/30 shadow-2xl bg-white"
          />
        ) : (
          <div className="max-w-4xl w-full bg-luxury-card border border-royal-gold/30 p-8 sm:p-12 text-ivory flex flex-col gap-6 max-h-full overflow-y-auto">
            <div className="border-b border-royal-gold/20 pb-4">
              <span className="text-xs font-sans text-royal-gold font-bold uppercase tracking-wider">
                PAGE {currentPage} OF {issue.pagesCount}
              </span>
              <h3 className="font-serif text-2xl font-bold text-ivory mt-1">
                SUMMARY SPREAD VIEW
              </h3>
            </div>
            <p className="font-sans text-sm text-cream/80 leading-relaxed font-light">
              You are reading page {currentPage} of the official digitized fortnightly print issue registered under Press Registrar General of India (No. {issue.prgiRegNo}). Switch to <strong>REAL PDF VIEW</strong> for high-resolution vector layout.
            </p>
          </div>
        )}
      </div>

      {/* Reader Bottom Pagination Bar */}
      <div className="h-14 border-t border-royal-gold/20 px-6 flex items-center justify-between bg-luxury-dark text-xs font-sans text-cream/80">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-1 hover:text-royal-gold disabled:opacity-30 disabled:hover:text-cream/80 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>PREVIOUS PAGE</span>
        </button>

        <span className="font-mono text-royal-gold">
          PAGE {currentPage} / {issue.pagesCount}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === issue.pagesCount}
          className="flex items-center gap-1 hover:text-royal-gold disabled:opacity-30 disabled:hover:text-cream/80 cursor-pointer"
        >
          <span>NEXT PAGE</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
