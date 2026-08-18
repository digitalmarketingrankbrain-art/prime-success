"use client";

import { useEffect, useState } from "react";
import { Radio, ChevronRight } from "lucide-react";
import type { NewsPayload } from "@/lib/news";

const FALLBACK_HEADLINES = [
  "Prime Success Excellence Awards 2026 nominations now open",
  "Volume 26 · Issue 07-02 of Prime Success Magazine now available worldwide",
];

export default function NewsTickerBar() {
  const [headlines, setHeadlines] = useState<string[]>(FALLBACK_HEADLINES);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/news")
      .then((res) => res.json())
      .then((data: NewsPayload) => {
        if (cancelled) return;
        const live = data.breaking.map((item) => `${item.title} — ${item.source}`);
        if (live.length > 0) setHeadlines(live);
      })
      .catch(() => {
        /* keep fallback headlines on failure */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Duplicated once so the -50% translateX marquee loop (see .animate-marquee in globals.css) is seamless
  const TICKER_ITEMS = [...headlines, ...headlines];

  return (
    <div className="w-full px-4 md:px-12 py-3 bg-luxury-black border-y border-royal-gold/15">
      <div className="max-w-7xl mx-auto">
        <div className="w-full bg-[#F6F1E9] dark:bg-[#140F08] border border-royal-gold/30 dark:border-royal-gold/25 rounded-xl py-2.5 px-3 md:px-5 flex items-center gap-3 sm:gap-4 shadow-md shadow-amber-950/5 relative overflow-hidden">
          
          {/* Left Badge: Maroon Pill with Radio Signal Icon */}
          <div className="flex items-center gap-2 bg-[#6B0E16] text-[#F9F5EC] border border-[#E5C158]/40 px-3.5 py-1.5 rounded-lg flex-shrink-0 shadow-md">
            <Radio className="w-4 h-4 text-[#E5C158] animate-pulse" />
            <span className="text-[11px] md:text-xs font-sans font-bold tracking-wider uppercase text-[#F9F5EC] whitespace-nowrap">
              BREAKING NEWS
            </span>
          </div>

          {/* Desktop & Tablet: Marquee Ticker Track */}
          <div className="hidden sm:block overflow-hidden whitespace-nowrap w-full relative">
            <div className="inline-flex gap-8 animate-marquee items-center text-xs font-sans text-[#140E06] dark:text-[#F9F5EC] font-medium tracking-wide">
              {TICKER_ITEMS.map((item, idx) => (
                <span key={idx} className="flex items-center gap-6 flex-shrink-0">
                  <span>{item}</span>
                  <span className="text-[#B79A5B] dark:text-royal-gold text-sm font-bold">•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Mobile: Single Compact Ticker with Chevron */}
          <div className="sm:hidden flex items-center justify-between gap-2 overflow-hidden w-full text-xs font-sans text-[#140E06] dark:text-[#F9F5EC] font-medium">
            <span className="truncate">• {TICKER_ITEMS[0]}</span>
            <ChevronRight className="w-4 h-4 text-[#B79A5B] flex-shrink-0" />
          </div>

        </div>
      </div>
    </div>
  );
}
