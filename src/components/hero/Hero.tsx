"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowDown, Crown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bgRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 2.2 }
      )
        .fromTo(
          ".hero-eyebrow",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=1.5"
        )
        .fromTo(
          ".hero-title-1",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.7"
        )
        .fromTo(
          ".hero-title-2",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 px-6 md:px-12 bg-luxury-black"
    >
      {/* Background Image with Theme-aware Overlay */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop"
          alt="Prime Success Royal Atmosphere"
          fill
          priority
          className="object-cover object-center hero-bg-img opacity-45"
        />
        {/* Dark Mode Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/70 to-luxury-black/40 dark-overlay" />
        {/* Light Mode Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EE] via-[#FAF6EE]/80 to-[#FAF6EE]/50 light-overlay hidden" />
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      </div>

      {/* Gold Ornamental Corner Accents */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-royal-gold/40 hidden md:block" />
      <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-royal-gold/40 hidden md:block" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-royal-gold/40 hidden md:block" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-royal-gold/40 hidden md:block" />

      {/* Hero Content Stack */}
      <div
        ref={textRef}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <div className="hero-eyebrow flex items-center gap-3 bg-royal-red/20 backdrop-blur-md border border-royal-gold/40 px-5 py-2 rounded-full shadow-md">
          <Crown className="w-4 h-4 text-royal-gold" />
          <span className="text-xs tracking-[0.3em] font-sans text-royal-gold font-bold uppercase">
            THE INTERNATIONAL HALL OF HONOUR
          </span>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="hero-title-1 font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-ivory leading-none drop-shadow-md">
            PRIME
          </h1>
          <h1 className="hero-title-2 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] text-gold-gradient leading-tight mt-1 drop-shadow-md">
            SUCCESS
          </h1>
        </div>

        <p className="hero-desc font-sans text-base sm:text-lg md:text-xl text-cream max-w-2xl font-normal leading-relaxed mt-2">
          Celebrating Excellence. Honouring Legacy.
          <span className="block text-sm text-cream/80 mt-2 font-light">
            A prestigious global institution recognizing visionaries who shape industries, inspire generations, and redefine what success means.
          </span>
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 mt-6">
          <Button href="/winners" variant="primary" size="lg">
            EXPLORE THE HONOURED
          </Button>
          <Button href="/nominate" variant="outline" size="lg">
            NOMINATE A LEADER
          </Button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-royal-gold animate-bounce font-bold">
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold">
          SCROLL
        </span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
