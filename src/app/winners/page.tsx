"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import WinnerCard from "@/components/winners/WinnerCard";
import NominationCTA from "@/components/sections/NominationCTA";
import { winnersData } from "@/data/mockData";
import Reveal from "@/components/animations/Reveal";
import Parallax from "@/components/animations/Parallax";
import GoldDivider from "@/components/ui/GoldDivider";
import { Crown, Sparkles, Award, ShieldCheck } from "lucide-react";

const CATEGORIES = [
  "ALL",
  "Entrepreneurship",
  "Innovation",
  "Business Excellence",
  "Creative Excellence",
  "Social Impact",
  "Leadership",
  "Rising Icon",
];

const HALL_STATS = [
  { title: "Inducted Laureates", value: "140+" },
  { title: "Patents Represented", value: "1,200+" },
  { title: "Jobs Created Globally", value: "3.5 Million" },
  { title: "Total Philanthropic Grants", value: "$4.2 Billion" },
];

export default function WinnersPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredWinners =
    selectedCategory === "ALL"
      ? winnersData
      : winnersData.filter((w) => w.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="HALL OF FAME"
          eyebrow="IMMORTALISING GREATNESS"
          title="THE HONOURED WINNERS"
          subtitle="Explore the visionaries, leaders, and icons inducted into the Prime Success Digital Hall of Fame."
        />

        {/* Hall Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {HALL_STATS.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <Parallax speed={idx % 2 === 0 ? -15 : 15}>
                <div className="p-6 bg-luxury-card border border-royal-gold/30 text-center flex flex-col items-center gap-2 shadow-lg shadow-luxury-black">
                  <span className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient drop-shadow-md">
                    {stat.value}
                  </span>
                  <span className="font-sans text-xs text-cream/80 font-light tracking-wider uppercase">
                    {stat.title}
                  </span>
                </div>
              </Parallax>
            </Reveal>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 text-xs tracking-[0.2em] font-sans uppercase transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-royal-gold text-luxury-black font-bold border-royal-gold shadow-md shadow-royal-gold/20"
                  : "bg-luxury-card text-cream/80 border-royal-gold/25 hover:border-royal-gold/60 hover:text-ivory"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredWinners.map((winner, idx) => (
            <Reveal key={winner.id} delay={idx * 0.08}>
              <WinnerCard winner={winner} index={`0${idx + 1}`} />
            </Reveal>
          ))}
        </div>

        <GoldDivider variant="crest" className="my-20" />

        {/* The Hall Charter Section */}
        <div className="my-20 p-12 bg-luxury-card border border-royal-gold/30 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center flex flex-col gap-6 relative z-10">
            <Crown className="w-10 h-10 text-royal-gold mx-auto" />
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ivory">
              THE HALL OF PRIME CHARTER
            </h3>
            <p className="font-sans text-sm md:text-base text-cream/90 leading-relaxed font-light">
              Induction into the Prime Success Digital Hall of Fame is permanent and immutable. Once honored, a laureate's citation, achievements, and impact rationale remain enshrined as a beacon of inspiration for future generations.
            </p>
          </div>
        </div>
      </div>

      <NominationCTA />
    </div>
  );
}
