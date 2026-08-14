"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, Sparkles, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandCrown from "@/components/ui/BrandCrown";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TrophyShowcaseProps {
  className?: string;
}

export default function TrophyShowcase({ className }: TrophyShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trophyRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const trophy = trophyRef.current;
    const ring = ringRef.current;
    const light = lightRef.current;
    if (!container || !trophy || !ring || !light) return;

    const ctx = gsap.context(() => {
      // 3D Floating Rotation & Glow Scrub Trigger
      gsap.to(trophy, {
        rotateY: 360,
        rotateX: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(ring, {
        rotateZ: -360,
        scale: 1.25,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.fromTo(
        light,
        { opacity: 0.2, scale: 0.8 },
        {
          opacity: 0.8,
          scale: 1.3,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="trophy-showcase-section"
      ref={containerRef}
      className={cn(
        "relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#32060B] via-[#1A0306] to-[#32060B] border-y border-[#E5C158]/40 overflow-hidden flex flex-col items-center justify-center text-center text-[#F9F5EC]",
        className
      )}
    >
      {/* Radial Gold Background Glow */}
      <div
        ref={lightRef}
        className="absolute w-[500px] h-[500px] bg-[#E5C158]/15 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Outer Rotating Ornament Ring */}
      <div
        ref={ringRef}
        className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full border border-dashed border-[#E5C158]/40 pointer-events-none flex items-center justify-center"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#E5C158] rotate-45 shadow-md shadow-[#E5C158]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-[#E5C158] rotate-45 shadow-md shadow-[#E5C158]" />
      </div>

      {/* 3D Animated Trophy Monument with Official Brand Crown */}
      <div className="relative z-10 my-8 perspective-1000">
        <div
          ref={trophyRef}
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-[#E5C158] bg-gradient-to-tr from-[#32060B] via-[#080604] to-[#6B0E16]/50 p-6 flex flex-col items-center justify-center shadow-2xl shadow-[#E5C158]/30 cursor-pointer transform-preserve-3d"
        >
          <Trophy className="w-16 h-16 md:w-20 md:h-20 text-[#E5C158] drop-shadow-[0_0_20px_rgba(229,193,88,0.8)] animate-pulse" />
          <BrandCrown className="w-8 h-8 md:w-9 md:h-9 -mt-2" variant="with-shadow" />
        </div>
      </div>

      {/* Editorial Statement */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#080604]/80 border border-[#E5C158]/40 text-[#E5C158] text-xs font-sans font-bold tracking-[0.3em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
          <span>THE 24K GOLD RECOGNITION INSIGNIA</span>
          <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" />
        </div>

        <h3 className="font-serif text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1B0] via-[#E5C158] to-[#B38E22] drop-shadow-md leading-tight">
          CRAFTED FOR IMMUTABLE HISTORY
        </h3>

        <p className="font-sans text-sm md:text-base text-[#E8DCC4] font-light leading-relaxed max-w-2xl">
          Hand-forged by royal master artisans in London, every Prime Success trophy is cast in solid bronze and plated in 24K gold, carrying an individually engraved citation of the honoree&apos;s life legacy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-4 text-xs font-sans text-[#E5C158] font-semibold uppercase tracking-widest">
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#E5C158]" /> 24K PURE GOLD PLATING
          </span>
          <span className="text-[#E5C158]/50">•</span>
          <span>INDIVIDUAL CITATION ENGRAVING</span>
        </div>
      </div>
    </div>
  );
}
