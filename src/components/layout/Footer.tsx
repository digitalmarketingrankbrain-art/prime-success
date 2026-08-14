"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";

export default function Footer() {
  return (
    <footer className="bg-luxury-dark border-t border-royal-gold/30 text-ivory relative overflow-hidden pt-16 pb-12 px-6 md:px-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Col with Clean Logo Display */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/icon.png"
                  alt="Prime Success Media Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl md:text-3xl font-bold tracking-[0.2em] text-ivory leading-none mb-1">
                  PRIME SUCCESS
                </span>
                <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-royal-gold font-sans font-bold uppercase">
                  RECOGNISING EXCELLENCE
                </span>
              </div>
            </Link>

            <p className="font-sans text-sm text-cream/80 leading-relaxed max-w-sm font-light">
              An international institution and premier editorial magazine celebrating, honouring, and immortalising visionary leaders, entrepreneurs, and icons globally.
            </p>
            
            {/* Contact & Address Bar */}
            <div className="flex flex-col gap-1.5 font-sans text-xs text-cream/90 border-t border-royal-gold/20 pt-3">
              <span className="font-semibold text-royal-gold">Corporate Office:</span>
              <span className="text-cream/80 leading-normal">
                4th Floor, Aggarwal Metro Height, 458-A, Netaji Subhash Place, Pitampura, Delhi 110034
              </span>
              <div className="flex items-center gap-4 mt-2 text-xs font-mono text-royal-gold">
                <a href="tel:+919311512354" className="hover:underline hover:text-ivory transition-colors">+91 93115 12354</a>
                <span className="text-royal-gold/50">•</span>
                <a href="mailto:info@primesuccess.media" className="hover:underline hover:text-ivory transition-colors">info@primesuccess.media</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-1 font-sans text-xs text-royal-gold font-bold uppercase tracking-wider">
              <a href="https://www.instagram.com/prime___success/" target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">
                Instagram
              </a>
              <span className="text-royal-gold/50">•</span>
              <a href="https://www.facebook.com/people/prime-success/61554412108481/" target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">
                Facebook
              </a>
              <span className="text-royal-gold/50">•</span>
              <a href="https://www.linkedin.com/in/prime-success-0748432a6/" target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold tracking-[0.2em] text-royal-gold uppercase border-b border-royal-gold/20 pb-2">
              INSTITUTION
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs tracking-wider text-cream">
              <li><Link href="/about" className="hover:text-royal-gold transition-colors">About Us</Link></li>
              <li><Link href="/awards" className="hover:text-royal-gold transition-colors">The Awards</Link></li>
              <li><Link href="/categories" className="hover:text-royal-gold transition-colors">Categories</Link></li>
              <li><Link href="/events" className="hover:text-royal-gold transition-colors">Grand Gala Event</Link></li>
            </ul>
          </div>

          {/* Editorial & Press */}
          <div className="flex flex-col gap-4">
            <h4 className="font-serif text-xs font-bold tracking-[0.2em] text-royal-gold uppercase border-b border-royal-gold/20 pb-2">
              MAGAZINE
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs tracking-wider text-cream">
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
            <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
              Receive private invitations and editorial dispatches from the Hall of Prime.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 mt-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-luxury-card border border-royal-gold/40 px-4 py-2.5 text-xs text-ivory placeholder:text-cream/50 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-royal-gold p-1.5 hover:text-ivory transition-colors cursor-pointer"
                  aria-label="Subscribe to Dispatches"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <GoldDivider variant="line" className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-cream/60">
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
