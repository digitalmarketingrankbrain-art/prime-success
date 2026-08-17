"use client";

import { Radio, ChevronRight } from "lucide-react";

const TICKER_HEADLINES = [
  "GST collections surge 15.4% to over ₹2.11 lakh crore in July 2026, driven by strong domestic and import activity",
  "Nifty India Defence index scales fresh high of 9,912.75, gains for fourth straight session",
  "NITI Aayog: India must sustain 9.25% nominal growth for 21 years to reach developed-nation status by 2047",
  "Government reaffirms India's fuel-blending programme relies entirely on domestic supplies, no US ethanol commitment made",
  "4 in 5 small businesses expect online sourcing to drive growth over the next three years, industry survey finds",
  "India's economy shows resilience amid West Asia crisis as GST revenues keep climbing",
  "Prime Success Excellence Awards 2026 nominations open on 15 July",
  "Volume 26 · Issue 07-02 of Prime Success Magazine now available worldwide",
];

// Duplicated once so the -50% translateX marquee loop (see .animate-marquee in globals.css) is seamless
const TICKER_ITEMS = [...TICKER_HEADLINES, ...TICKER_HEADLINES];

export default function NewsTickerBar() {
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
