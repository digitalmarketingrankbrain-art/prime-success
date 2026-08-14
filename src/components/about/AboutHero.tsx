"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import Parallax from "@/components/animations/Parallax";
import Reveal from "@/components/animations/Reveal";

const STATS = [
  { label: "FOUNDED YEAR", value: "2026" },
  { label: "MONTHLY READERSHIP", value: "50,000+" },
  { label: "FORTNIGHTLY EDITIONS", value: "21 ISSUES" },
  { label: "GLOBAL EDITION", value: "DELHI / NCR" },
];

export default function AboutHero() {
  return (
    <div>
      <SectionHeading
        number="THE INSTITUTION"
        eyebrow="RECOGNISING EXCELLENCE & LEGACY"
        title="ABOUT PRIME SUCCESS"
        subtitle="An international institution and premier editorial magazine celebrating, honouring, and immortalising visionary leaders globally."
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        {STATS.map((stat, idx) => (
          <Reveal key={idx} delay={idx * 0.1}>
            <Parallax speed={idx % 2 === 0 ? -10 : 10}>
              <div className="p-6 bg-luxury-card border border-royal-gold/30 text-center flex flex-col items-center gap-2 shadow-lg shadow-luxury-black">
                <span className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient drop-shadow-md">
                  {stat.value}
                </span>
                <span className="font-sans text-xs text-cream/80 font-light tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            </Parallax>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
