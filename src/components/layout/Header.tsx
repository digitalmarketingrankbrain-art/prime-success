"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/components/animations/PageTransition";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { name: "SURVEYS", href: "/surveys" },
  { name: "AWARDS", href: "/awards" },
  { name: "INTERVIEWS", href: "/interviews" },
  { name: "MAGAZINE", href: "/magazine" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 40;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateTo(href);
  };

  const isTransparentTop = pathname === "/" && !scrolled;

  return (
    <>
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        isTransparentTop
          ? "bg-[#080604]/95 text-[#F9F5EC] border-b border-royal-gold/25 shadow-2xl"
          : "scrolled-header bg-luxury-black/95 backdrop-blur-xl border-b border-royal-gold/30 py-3.5 shadow-2xl"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        {/* Grand Brand Logo (Clean display without extra code border circles) */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-3.5 group cursor-pointer"
        >
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/icon.png"
              alt="Prime Success Media Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-ivory group-hover:text-royal-gold transition-colors drop-shadow-md leading-none mb-1">
              PRIME SUCCESS
            </span>
            <span className="text-[9.5px] md:text-[10.5px] tracking-[0.32em] text-royal-gold font-sans font-bold uppercase drop-shadow-sm">
              RECOGNISING EXCELLENCE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "font-sans text-xs tracking-[0.2em] transition-colors relative py-1 hover:text-royal-gold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold/60 rounded-sm",
                  isActive ? "text-royal-gold font-bold" : "text-cream font-medium"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-royal-gold shadow-sm shadow-royal-gold" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="/nominate"
            onClick={(e) => handleNavClick(e, "/nominate")}
            className="px-5 py-2.5 bg-[#6B0E16] border border-royal-gold/60 text-[#F9F5EC] text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#8B121D] hover:border-royal-gold transition-all shadow-lg shadow-[#6B0E16]/30 flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
          >
            <span>NOMINATE</span>
            <ChevronRight className="w-3.5 h-3.5 text-royal-gold group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger & Theme Button */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-ivory hover:text-royal-gold p-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-gold"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-royal-gold" /> : <Menu className="w-7 h-7 text-ivory" />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile Menu Overlay (rendered outside <header> so it isn't clipped to the
        header's own containing block when the header has a transform/backdrop-filter) */}
    {mobileMenuOpen && (
      <div className="fixed inset-0 top-[75px] bg-[#080604]/98 backdrop-blur-2xl z-50 flex flex-col px-8 py-10 lg:hidden border-t border-[#E5C158]/25 animate-fadeIn">
        <nav className="flex flex-col gap-6 mb-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "font-serif text-2xl tracking-[0.15em] border-b border-[#E5C158]/20 pb-3 flex items-center justify-between cursor-pointer transition-colors",
                  isActive ? "text-[#E5C158] font-bold" : "text-[#F9F5EC] hover:text-[#E5C158]"
                )}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 text-[#E5C158]" />
              </a>
            );
          })}
        </nav>
        <a
          href="/nominate"
          onClick={(e) => handleNavClick(e, "/nominate")}
          className="w-full py-4 bg-[#6B0E16] border border-[#E5C158] text-center text-[#F9F5EC] font-bold text-xs tracking-[0.2em] uppercase cursor-pointer shadow-lg"
        >
          NOMINATE A LEADER
        </a>
      </div>
    )}
    </>
  );
}
