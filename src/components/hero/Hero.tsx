"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Sparkles, ShieldCheck, BookOpen, Award } from "lucide-react";
import { usePageTransition } from "@/components/animations/PageTransition";
import BrandCrown from "@/components/ui/BrandCrown";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        bgRef.current,
        { scale: 1.15 },
        { scale: 1, duration: 2.2 }
      )
        .fromTo(
          ".hero-update-badge",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=1.6"
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
        )
        .fromTo(
          ".hero-stats-pill",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8 },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 px-6 md:px-12 bg-[#080604] text-[#F9F5EC]"
    >
      {/* Background Image with Permanent Dark Overlay */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop"
          alt="Prime Success Royal Atmosphere"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        {/* Permanent Dark Mode Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080604] via-[#080604]/75 to-[#080604]/50" />
        <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      </div>

      {/* Gold Ornamental Corner Accents */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-[#E5C158]/50 hidden md:block z-10" />
      <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-[#E5C158]/50 hidden md:block z-10" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-[#E5C158]/50 hidden md:block z-10" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-[#E5C158]/50 hidden md:block z-10" />

      {/* Hero Content Stack */}
      <div
        ref={textRef}
        className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <div className="hero-update-badge flex items-center gap-2 border border-[#E5C158]/40 bg-[#120E09]/70 backdrop-blur-md px-4 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#E5C158] flex-shrink-0" />
          <span className="text-[10px] sm:text-xs font-sans text-[#E8DCC4] tracking-wide">
            A Refined Identity — our brand logo and site theme have been newly unveiled
          </span>
        </div>

        <div className="hero-eyebrow flex items-center gap-3 bg-[#6B0E16]/50 backdrop-blur-md border border-[#E5C158]/60 px-5 py-2 rounded-full shadow-lg">
          <BrandCrown className="w-5 h-5" />
          <span className="text-xs tracking-[0.3em] font-sans text-[#E5C158] font-bold uppercase">
            THE INTERNATIONAL HALL OF HONOUR
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#FFF1B0]" />
        </div>

        <div className="flex flex-col items-center">
          <h1 className="hero-title-1 font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#F9F5EC] leading-none drop-shadow-lg">
            PRIME
          </h1>
          <h1 className="hero-title-2 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.15em] leading-tight mt-1 drop-shadow-lg bg-gradient-to-r from-[#FFF1B0] via-[#E5C158] to-[#B38E22] bg-clip-text text-transparent">
            SUCCESS
          </h1>
        </div>

        <p className="hero-desc font-sans text-base sm:text-lg md:text-xl text-[#E8DCC4] max-w-2xl font-normal leading-relaxed mt-2">
          Celebrating Excellence. Honouring Legacy.
          <span className="block text-sm text-[#E8DCC4]/90 mt-2 font-light">
            A prestigious global media institution recognizing visionaries who shape industries, inspire generations, and redefine what success means.
          </span>
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Link
            href="/magazine"
            onClick={(e) => handleNavClick(e, "/magazine")}
            className="px-9 py-4 text-xs tracking-[0.2em] font-sans font-bold uppercase bg-[#6B0E16] text-[#F9F5EC] border border-[#E5C158]/50 hover:bg-[#8B121D] hover:border-[#E5C158] transition-all duration-300 shadow-xl shadow-[#6B0E16]/30 flex items-center justify-center cursor-pointer rounded-sm hover:scale-105"
          >
            EXPLORE THE MAGAZINE
          </Link>
          <Link
            href="/nominate"
            onClick={(e) => handleNavClick(e, "/nominate")}
            className="px-9 py-4 text-xs tracking-[0.2em] font-sans font-bold uppercase bg-transparent text-[#E5C158] border border-[#E5C158]/60 hover:border-[#E5C158] hover:bg-[#E5C158]/15 transition-all duration-300 flex items-center justify-center cursor-pointer rounded-sm hover:scale-105"
          >
            NOMINATE A LEADER
          </Link>
        </div>

        {/* Hero Interactive Live Statistics Pill */}
        <div className="hero-stats-pill mt-4 px-5 sm:px-6 py-3 bg-[#120E09]/80 backdrop-blur-md border border-[#E5C158]/35 rounded-2xl sm:rounded-full flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-6 text-xs text-[#E8DCC4] shadow-xl">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#E5C158] shrink-0" />
            <span className="font-bold text-[#F9F5EC] whitespace-nowrap">21 Digital Print Editions</span>
          </div>
          <span className="text-[#E5C158]/40 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-[#E5C158] shrink-0" />
            <span className="font-bold text-[#F9F5EC] whitespace-nowrap">40+ National Trackers</span>
          </div>
          <span className="text-[#E5C158]/40 hidden sm:inline">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E5C158] shrink-0" />
            <span className="font-bold text-[#E5C158] whitespace-nowrap">PRGI Accredited</span>
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#E5C158] animate-bounce font-bold">
        <span className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold">
          SCROLL
        </span>
        <ArrowDown className="w-4 h-4 text-[#E5C158]" />
      </div>
    </section>
  );
}
