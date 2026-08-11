"use client";

import Link from "next/link";
import { Crown, ArrowUpRight } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-royal-gold/20 text-cream relative overflow-hidden pt-16 pb-12 px-6 md:px-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-royal-gold/60 flex items-center justify-center bg-royal-red/30">
                <Crown className="w-5 h-5 text-royal-gold" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-ivory">
                PRIME SUCCESS
              </span>
            </Link>
            <p className="font-sans text-sm text-cream/70 leading-relaxed max-w-sm font-light">
              An international institution and premier editorial magazine celebrating, honouring, and immortalising visionary leaders, entrepreneurs, and icons globally.
            </p>
            <div className="flex items-center gap-4 text-xs tracking-widest text-royal-gold uppercase font-serif">
              <span>EST. 2026</span>
              <span>•</span>
              <span>GLOBAL EDITION</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold tracking-[0.2em] text-royal-gold uppercase border-b border-royal-gold/20 pb-2">
              INSTITUTION
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs tracking-wider text-cream/80">
              <li><Link href="/about" className="hover:text-royal-gold transition-colors">About Us</Link></li>
              <li><Link href="/awards" className="hover:text-royal-gold transition-colors">The Awards</Link></li>
              <li><Link href="/winners" className="hover:text-royal-gold transition-colors">Hall of Prime</Link></li>
              <li><Link href="/categories" className="hover:text-royal-gold transition-colors">Categories</Link></li>
              <li><Link href="/events" className="hover:text-royal-gold transition-colors">Grand Gala Event</Link></li>
            </ul>
          </div>

          {/* Editorial & Press */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold tracking-[0.2em] text-royal-gold uppercase border-b border-royal-gold/20 pb-2">
              MAGAZINE
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs tracking-wider text-cream/80">
              <li><Link href="/magazine" className="hover:text-royal-gold transition-colors">Cover Stories</Link></li>
              <li><Link href="/magazine" className="hover:text-royal-gold transition-colors">Leadership</Link></li>
              <li><Link href="/magazine" className="hover:text-royal-gold transition-colors">Innovation</Link></li>
              <li><Link href="/nominate" className="hover:text-royal-gold transition-colors">Submit Nomination</Link></li>
              <li><Link href="/contact" className="hover:text-royal-gold transition-colors">Press Concierge</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold tracking-[0.2em] text-royal-gold uppercase border-b border-royal-gold/20 pb-2">
              DISPATCHES
            </h4>
            <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
              Receive private invitations and editorial dispatches from the Hall of Prime.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 mt-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-luxury-black border border-royal-gold/30 px-4 py-2.5 text-xs text-ivory placeholder:text-cream/40 focus:outline-none focus:border-royal-gold"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-royal-gold p-1 hover:text-white"
                  aria-label="Subscribe"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <GoldDivider variant="line" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-cream/50">
          <p>© 2026 PRIME SUCCESS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-royal-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-royal-gold transition-colors">Terms of Distinction</Link>
            <Link href="#" className="hover:text-royal-gold transition-colors">Editorial Ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
