"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ImageRevealProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
  aspectRatio?: string;
}

export default function ImageReveal({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className,
  containerClassName,
  aspectRatio = "aspect-[4/5]",
}: ImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imageRef.current;
    if (!container || !img) return;

    const ctx = gsap.context(() => {
      // Scale reveal & vertical parallax effect
      gsap.fromTo(
        img,
        { scale: 1.25, y: -20 },
        {
          scale: 1,
          y: 20,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden bg-luxury-dark border border-royal-gold/10 group",
        aspectRatio,
        containerClassName
      )}
    >
      <div ref={imageRef} className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          width={fill ? undefined : width || 800}
          height={fill ? undefined : height || 1000}
          fill={fill}
          priority={priority}
          className={cn(
            "object-cover w-full h-full transition-transform duration-700 group-hover:scale-105",
            className
          )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 border border-royal-gold/0 group-hover:border-royal-gold/30 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}
