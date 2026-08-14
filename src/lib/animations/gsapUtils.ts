"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGSAPContext(scopeRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!scopeRef.current) return;
    const ctx = gsap.context(() => {}, scopeRef.current);
    return () => ctx.revert();
  }, [scopeRef]);
}

export function animateFadeUp(
  target: string | HTMLElement,
  options?: { delay?: number; duration?: number; y?: number }
) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: options?.y || 40 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration || 1,
      delay: options?.delay || 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}
