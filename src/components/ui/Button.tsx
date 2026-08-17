"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/components/animations/PageTransition";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const { navigateTo } = usePageTransition();

  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-widest uppercase transition-all duration-300 text-xs font-semibold relative group overflow-hidden cursor-pointer";

  const variants = {
    primary:
      "bg-royal-red text-[#F9F5EC] border border-royal-gold/40 hover:bg-royal-red/90 hover:border-royal-gold shadow-lg shadow-royal-red/20",
    secondary:
      "bg-royal-gold text-luxury-black border border-royal-gold hover:bg-royal-gold-light shadow-lg shadow-royal-gold/10 font-bold",
    outline:
      "bg-transparent text-royal-gold border border-royal-gold/50 hover:border-royal-gold hover:bg-royal-gold/10",
    ghost: "bg-transparent text-ivory hover:text-royal-gold hover:bg-white/5",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-[11px]",
    md: "px-7 py-3.5 text-xs",
    lg: "px-9 py-4 text-xs tracking-[0.2em]",
  };

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
    </>
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) onClick(e);
    if (href) {
      e.preventDefault();
      navigateTo(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {content}
    </button>
  );
}
