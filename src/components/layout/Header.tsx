"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Crown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePageTransition } from "@/components/animations/PageTransition";
import ThemeToggle from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { name: "ABOUT", href: "/about" },
  { name: "AWARDS", href: "/awards" },
  { name: "WINNERS", href: "/winners" },
  { name: "MAGAZINE", href: "/magazine" },
  { name: "CATEGORIES", href: "/categories" },
  { name: "EVENTS", href: "/events" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    navigateTo(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12",
        scrolled
          ? "bg-luxury-black/90 backdrop-blur-md border-b border-royal-gold/15 py-3 shadow-2xl"
          : "bg-gradient-to-b from-luxury-black/80 via-luxury-black/40 to-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, "/")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full border border-royal-gold/60 flex items-center justify-center bg-royal-red/30 group-hover:border-royal-gold transition-colors">
            <Crown className="w-5 h-5 text-royal-gold" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-[0.2em] text-ivory group-hover:text-royal-gold transition-colors">
              PRIME SUCCESS
            </span>
            <span className="text-[9px] tracking-[0.3em] text-royal-gold/80 font-sans uppercase">
              RECOGNISING EXCELLENCE
            </span>
          </div>
        </a>

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
                  "font-sans text-xs tracking-[0.2em] transition-colors relative py-1 hover:text-royal-gold cursor-pointer",
                  isActive ? "text-royal-gold font-semibold" : "text-cream/80"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-royal-gold" />
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
            className="px-5 py-2.5 bg-royal-red border border-royal-gold/40 text-ivory text-xs font-semibold tracking-[0.2em] uppercase hover:bg-royal-red/90 hover:border-royal-gold transition-all shadow-md shadow-royal-red/20 flex items-center gap-2 group cursor-pointer"
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
            className="text-ivory hover:text-royal-gold p-2 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-luxury-black/95 backdrop-blur-xl z-50 flex flex-col px-8 py-10 lg:hidden border-t border-royal-gold/20 animate-fadeIn">
          <nav className="flex flex-col gap-6 mb-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-2xl tracking-[0.15em] text-ivory hover:text-royal-gold border-b border-white/5 pb-3 flex items-center justify-between cursor-pointer"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 text-royal-gold/50" />
              </a>
            ))}
          </nav>
          <a
            href="/nominate"
            onClick={(e) => handleNavClick(e, "/nominate")}
            className="w-full py-4 bg-royal-red border border-royal-gold text-center text-ivory font-semibold text-xs tracking-[0.2em] uppercase cursor-pointer"
          >
            NOMINATE A LEADER
          </a>
        </div>
      )}
    </header>
  );
}
