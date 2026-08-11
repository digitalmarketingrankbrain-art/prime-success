"use client";

import Reveal from "@/components/animations/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";
import { Crown } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="py-28 md:py-36 px-6 md:px-12 bg-gradient-to-b from-royal-red-dark via-luxury-dark to-luxury-black relative overflow-hidden text-ivory border-y border-royal-gold/40">
      <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="inline-flex items-center gap-3 bg-luxury-black/80 border border-royal-gold/50 px-5 py-2 rounded-full mb-6">
            <Crown className="w-4 h-4 text-royal-gold" />
            <span className="font-sans text-xs tracking-[0.3em] text-royal-gold uppercase font-bold">
              THE PRIME STANDARD
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <blockquote className="font-serif text-3xl sm:text-4xl md:text-6xl tracking-tight leading-tight my-8 text-gold-gradient drop-shadow-md">
            “SUCCESS IS NOT MEASURED ONLY BY WHAT YOU ACHIEVE. BUT BY THE LEGACY YOU LEAVE BEHIND.”
          </blockquote>
        </Reveal>

        <Reveal delay={0.4}>
          <GoldDivider variant="diamond" className="max-w-md mx-auto" />
        </Reveal>

        <Reveal delay={0.6}>
          <p className="font-sans text-sm md:text-base text-cream/90 max-w-3xl mx-auto leading-relaxed font-light mt-6">
            We exist to immortalize the leaders, innovators, and creators whose dedication alters the trajectory of global progress. Prime Success is more than an award — it is an immutable hall of honor crafted in royal gold and timeless legacy.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
