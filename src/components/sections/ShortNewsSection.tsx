"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Newspaper, Calendar, X, Share2, ShieldCheck, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const SHORT_NEWS = [
  {
    id: 1,
    category: "Economy",
    title: "GST collections cross ₹2.1 lakh crore for third straight month",
    date: "30 Jun 2026",
    color: "bg-[#6B0E16]/40 text-[#E5C158] border-[#E5C158]/40",
    summary: "India's Gross Goods and Services Tax (GST) collections reached a record ₹2.10 lakh crore in June 2026, marking the third consecutive month above the ₹2 lakh crore milestone. Strong domestic consumption, enhanced compliance tools, and manufacturing momentum contributed to the historic revenue milestone.",
  },
  {
    id: 2,
    category: "Awards",
    title: "Prime Success Excellence Awards 2026 opens for nominations",
    date: "28 Jun 2026",
    color: "bg-[#6B0E16]/40 text-[#E5C158] border-[#E5C158]/40",
    summary: "The Prime Success Media Jury has officially opened global nominations across 18 flagship award categories, honoring trailblazers in Business Leadership, Clean Technology, Public Governance, and Civilisational Preservation. Winners will be felicitated at the Grand Gala Ceremony.",
  },
  {
    id: 3,
    category: "Tourism",
    title: "Ayodhya corridor expansion projected to add 40,000 local jobs",
    date: "27 Jun 2026",
    color: "bg-[#6B0E16]/40 text-[#E5C158] border-[#E5C158]/40",
    summary: "A comprehensive state economic assessment highlights that Phase II of the Ayodhya Cultural & Tourism Corridor will generate over 40,000 direct and indirect employment opportunities across hospitality, artisanal craft, infrastructure, and transport sectors by Q4 2026.",
  },
  {
    id: 4,
    category: "Survey",
    title: "Readers rank infrastructure as top policy priority this quarter",
    date: "25 Jun 2026",
    color: "bg-[#6B0E16]/40 text-[#E5C158] border-[#E5C158]/40",
    summary: "Over 8,400 verified Prime Success Media subscribers participated in the quarterly Public Sentiment Survey. High-speed highway corridors, port connectivity, and urban logistics were identified as the single highest priority for accelerating national GDP growth toward 2047 targets.",
  },
  {
    id: 5,
    category: "Magazine",
    title: "Vol 26, Issue 07-02 — Architects of Tomorrow — now on stands",
    date: "22 Jun 2026",
    color: "bg-[#6B0E16]/40 text-[#E5C158] border-[#E5C158]/40",
    summary: "The latest print & digital issue of Prime Success Magazine is now live across international newsstands and the Prime Success Digital Reader. Featuring deep-dive profiles on clean energy pioneers and national infrastructure architects.",
  },
  {
    id: 6,
    category: "Policy",
    title: "New MSME credit scheme rolls out across six industrial states",
    date: "20 Jun 2026",
    color: "bg-[#6B0E16]/40 text-[#E5C158] border-[#E5C158]/40",
    summary: "The Union Ministry of Micro, Small and Medium Enterprises launched a collateral-free credit guarantee enhancement framework designed to lower borrowing costs for export-oriented manufacturing units across Maharashtra, Gujarat, Tamil Nadu, Uttar Pradesh, Haryana, and Karnataka.",
  },
];

export default function ShortNewsSection() {
  const [activeModalItem, setActiveModalItem] = useState<typeof SHORT_NEWS[0] | null>(null);

  return (
    <section className="py-24 bg-luxury-dark text-ivory border-b border-royal-gold/20 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          number="EDITORIAL BRIEFS"
          eyebrow="NEWSROOM DISPATCHES"
          title="SHORT NEWS IN BRIEF"
          subtitle="Fast-moving items from our editorial desk tracking national economy, policy, and industry developments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {SHORT_NEWS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="p-6 bg-[#120E09] border border-royal-gold/30 rounded-xl hover:border-royal-gold transition-all duration-300 flex flex-col justify-between gap-4 group shadow-xl cursor-pointer hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-widest border rounded-md ${item.color}`}>
                    {item.category}
                  </span>
                  <span className="text-[11px] font-sans text-cream/60 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-royal-gold" />
                    <span>{item.date}</span>
                  </span>
                </div>
                <h4 className="font-serif text-base font-bold text-ivory group-hover:text-royal-gold transition-colors leading-snug">
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
      </div>

      {/* Dispatch Brief Reader Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="max-w-2xl w-full bg-[#120E09] border border-[#E5C158]/50 shadow-2xl rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col gap-5 relative">
            <div className="flex items-center justify-between border-b border-[#E5C158]/20 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#6B0E16] text-[#F9F5EC] text-[10px] font-sans font-bold uppercase tracking-wider rounded-md border border-[#E5C158]/40">
                  {activeModalItem.category}
                </span>
                <span className="text-xs text-[#E5C158] font-sans font-semibold">
                  PUBLISHED: {activeModalItem.date}
                </span>
              </div>
              <button
                onClick={() => setActiveModalItem(null)}
                className="p-1.5 text-cream/70 hover:text-[#E5C158] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#F9F5EC] leading-snug">
              {activeModalItem.title}
            </h3>

            <p className="font-sans text-sm text-[#E8DCC4] leading-relaxed font-light">
              {activeModalItem.summary}
            </p>

            <div className="pt-4 border-t border-[#E5C158]/20 flex flex-wrap items-center justify-between gap-4 text-xs font-sans text-[#E5C158] font-bold">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E5C158]" />
                PRGI Accredited Newsroom Dispatch
              </span>
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-5 py-2 bg-[#6B0E16] text-[#F9F5EC] border border-[#E5C158]/50 rounded-md hover:bg-[#8B121D] transition-colors cursor-pointer"
              >
                CLOSE BRIEF
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
