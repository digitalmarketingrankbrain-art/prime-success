"use client";

import { useState } from "react";
import { MagazineIssue } from "@/types";
import MagazineIssueCard from "./MagazineIssueCard";
import Reveal from "@/components/animations/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { BookOpen, Layers, ShieldCheck, Sparkles, Filter } from "lucide-react";

interface MagazineIssuesGridProps {
  issues: MagazineIssue[];
}

export default function MagazineIssuesGrid({ issues }: MagazineIssuesGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  // Dynamically derive unique categories from the issues dataset
  const categories = ["ALL", ...Array.from(new Set(issues.map((issue) => issue.category)))];

  const filteredIssues =
    activeCategory === "ALL"
      ? issues
      : issues.filter((issue) => issue.category === activeCategory);

  const totalPagesCount = issues.reduce((acc, curr) => acc + curr.pagesCount, 0);

  return (
    <div className="my-20">
      <SectionHeading
        number="DIGITAL ARCHIVE"
        eyebrow="FORTNIGHTLY PRINT & DIGITAL EDITIONS"
        title="EXPLORE THE MAGAZINE COLLECTION"
        subtitle="Access complete digitized print editions of Prime Success Media. Registered with the Press Registrar General of India (PRGI)."
      />

      {/* Archive Quick Statistics Bar */}
      <div className="my-10 p-6 bg-luxury-card border border-royal-gold/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xl">
        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient">
            {issues.length}
          </span>
          <span className="text-[11px] font-sans text-cream/80 uppercase font-semibold tracking-wider mt-1 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-royal-gold" />
            Official Issues
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient">
            {totalPagesCount}
          </span>
          <span className="text-[11px] font-sans text-cream/80 uppercase font-semibold tracking-wider mt-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-royal-gold" />
            Editorial Pages
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient">
            100%
          </span>
          <span className="text-[11px] font-sans text-cream/80 uppercase font-semibold tracking-wider mt-1 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-royal-gold" />
            PRGI Accredited
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient">
            2026
          </span>
          <span className="text-[11px] font-sans text-cream/80 uppercase font-semibold tracking-wider mt-1 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-royal-gold" />
            Delhi Edition
          </span>
        </div>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-royal-gold/20 no-scrollbar">
        <span className="text-xs font-sans text-royal-gold uppercase font-bold tracking-widest flex items-center gap-1.5 pr-4 shrink-0">
          <Filter className="w-3.5 h-3.5" />
          Filter:
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const count = cat === "ALL" ? issues.length : issues.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 whitespace-nowrap shrink-0 border cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-royal-gold text-luxury-black border-royal-gold shadow-md"
                  : "bg-luxury-card text-cream/70 border-royal-gold/20 hover:border-royal-gold/60 hover:text-ivory"
              }`}
              aria-label={`Filter by ${cat} (${count} issues)`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 font-mono ${
                  isActive ? "bg-luxury-black/20 text-luxury-black font-bold" : "bg-royal-gold/10 text-royal-gold"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Responsive Magazine Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredIssues.map((issue, idx) => (
          <Reveal key={issue.id} delay={idx * 0.08}>
            <MagazineIssueCard issue={issue} isFeatured={issue.isCurrentIssue && activeCategory === "ALL" && idx === 0} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
