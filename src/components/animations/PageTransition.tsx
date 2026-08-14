"use client";

import React, { createContext, useContext, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";
import { Sparkles } from "lucide-react";
import BrandCrown from "@/components/ui/BrandCrown";

interface TransitionContextType {
  navigateTo: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const crownRef = useRef<HTMLDivElement>(null);

  const navigateTo = (href: string) => {
    if (href === pathname) return;

    const overlay = overlayRef.current;
    const line = lineRef.current;
    const crown = crownRef.current;

    if (!overlay || !line || !crown) {
      router.push(href);
      return;
    }

    const tl = gsap.timeline();

    // 1. First animate curtain UP over current page
    tl.to(overlay, {
      y: "0%",
      duration: 0.45,
      ease: "power4.inOut",
    })
      .fromTo(
        crown,
        { scale: 0.5, opacity: 0, rotate: -15 },
        { scale: 1, opacity: 1, rotate: 0, duration: 0.3, ease: "back.out(1.7)" },
        "-=0.15"
      )
      .fromTo(
        line,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.25, ease: "power3.inOut" },
        "-=0.15"
      )
      .call(() => {
        // 2. Perform Next.js page change WHILE covered by curtain
        router.push(href);
      })
      .to(crown, { opacity: 0, scale: 1.2, duration: 0.2, delay: 0.15 })
      .to(overlay, {
        y: "-100%",
        duration: 0.45,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(overlay, { y: "100%" });
        },
      });
  };

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {/* Royal Gold Transition Overlay - Fixed Dark Atmosphere */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[100] bg-gradient-to-b from-[#080604] via-[#32060B] to-[#080604] flex flex-col items-center justify-center pointer-events-none translate-y-full border-b-2 border-[#E5C158]/60 shadow-2xl"
      >
        <div className="flex flex-col items-center gap-4">
          <div ref={crownRef} className="opacity-0 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-full border-2 border-[#E5C158] bg-[#6B0E16]/40 flex items-center justify-center shadow-lg shadow-[#E5C158]/30 overflow-hidden p-2">
              <BrandCrown className="w-10 h-10" variant="icon" />
            </div>
            <span className="font-serif text-lg tracking-[0.3em] font-bold text-[#F9F5EC] mt-2">
              PRIME SUCCESS
            </span>
            <span className="text-[10px] tracking-[0.4em] font-sans text-[#E5C158] uppercase font-semibold flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#E5C158]" />
              EXCELLENCE & LEGACY
              <Sparkles className="w-3 h-3 text-[#E5C158]" />
            </span>
          </div>

          <div
            ref={lineRef}
            className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#E5C158] to-transparent origin-center"
          />
        </div>
      </div>

      {children}
    </TransitionContext.Provider>
  );
}
