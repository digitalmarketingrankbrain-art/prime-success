"use client";

import { useState } from "react";
import { MagazineIssue } from "@/types";
import MagazineIssueCard from "./MagazineIssueCard";
import Reveal from "@/components/animations/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { Filter } from "lucide-react";

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

  return (
    <div className="my-20">
      <SectionHeading
        number="DIGITAL ARCHIVE"
        eyebrow="FORTNIGHTLY PRINT & DIGITAL EDITIONS"
        title="EXPLORE THE MAGAZINE COLLECTION"
        subtitle="Access complete digitized print editions of Prime Success Media. Registered with the Press Registrar General of India (PRGI)."
      />

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
            <MagazineIssueCard issue={issue} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
