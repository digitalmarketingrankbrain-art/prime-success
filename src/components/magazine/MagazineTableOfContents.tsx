"use client";

import { MagazineIssue } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  issue: MagazineIssue;
}

export default function MagazineTableOfContents({ issue }: Props) {
  if (!issue.tableOfContents || issue.tableOfContents.length === 0) return null;

  return (
    <div className="my-20">
      <SectionHeading
        number="ISSUE INDEX"
        eyebrow="TABLE OF CONTENTS"
        title="INSIDE THIS ISSUE"
        subtitle="Key feature stories, national governance dispatches, and public sentiment polls published in this edition."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {issue.tableOfContents.map((toc, idx) => (
          <div
            key={idx}
            className="p-6 bg-luxury-card border border-royal-gold/20 hover:border-royal-gold transition-all duration-300 flex items-center justify-between shadow-lg group"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-sans font-bold text-royal-gold uppercase tracking-widest">
                {toc.category}
              </span>
              <h4 className="font-serif text-base font-bold text-ivory group-hover:text-royal-gold transition-colors">
                {toc.title}
              </h4>
            </div>
            <div className="px-3 py-1 bg-luxury-dark border border-royal-gold/30 font-mono text-xs text-royal-gold font-bold">
              PAGE {toc.page}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
