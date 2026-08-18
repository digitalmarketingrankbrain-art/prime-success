"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import GoldDivider from "@/components/ui/GoldDivider";
import { usePageTransition } from "@/components/animations/PageTransition";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  const { navigateTo } = usePageTransition();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-luxury-dark border-t border-royal-gold/30 text-ivory relative overflow-hidden pt-6 pb-4 px-6 md:px-12">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-royal-gold/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
          {/* Brand Col with Clean Logo Display */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 md:w-12 md:h-12 flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/icon.png"
                  alt="Prime Success Media Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-ivory leading-none mb-1">
                  PRIME SUCCESS
                </span>
                <span className="text-[10px] md:text-[11px] tracking-[0.32em] text-royal-gold font-sans font-bold uppercase">
                  RECOGNISING EXCELLENCE
                </span>
              </div>
            </Link>

            <p className="font-sans text-xs text-cream/80 leading-relaxed max-w-sm font-light">
              An international institution and premier editorial magazine celebrating, honouring, and immortalising visionary leaders, entrepreneurs, and icons globally.
            </p>

            {/* Contact & Address Bar */}
            <div className="flex flex-col gap-1 font-sans text-xs text-cream/90 border-t border-royal-gold/20 pt-2">
              <span className="font-semibold text-royal-gold">Corporate Office:</span>
              <span className="text-cream/80 leading-normal">
                4th Floor, Aggarwal Metro Height, 453, Netaji Subhash Place, Pitampura, Delhi 110034
              </span>
              <div className="flex items-center gap-4 mt-1 text-xs font-mono text-royal-gold flex-wrap">
                <a href="mailto:info@primesuccess.media" className="hover:underline hover:text-ivory transition-colors">info@primesuccess.media</a>
                <a href="mailto:press@primesuccess.media" className="hover:underline hover:text-ivory transition-colors">press@primesuccess.media</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/prime___success/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-royal-gold hover:text-ivory transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/people/prime-success/61554412108481/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-royal-gold hover:text-ivory transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-xs font-bold tracking-[0.2em] text-royal-gold uppercase border-b border-royal-gold/20 pb-1.5">
              INSTITUTION
            </h4>
            <ul className="flex flex-col gap-2 font-sans text-xs tracking-wider text-cream">
              <li><Link href="/about" onClick={(e) => handleNavClick(e, "/about")} className="hover:text-royal-gold transition-colors">About Us</Link></li>
              <li><Link href="/awards" className="hover:text-royal-gold transition-colors">The Awards</Link></li>
              <li><Link href="/careers" onClick={(e) => handleNavClick(e, "/careers")} className="hover:text-royal-gold transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Editorial & Press */}
          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-xs font-bold tracking-[0.2em] text-royal-gold uppercase border-b border-royal-gold/20 pb-1.5">
              MAGAZINE
            </h4>
            <ul className="flex flex-col gap-2 font-sans text-xs tracking-wider text-cream">
              <li><Link href="/magazine" className="hover:text-royal-gold transition-colors">Magazine</Link></li>
              <li><Link href="/nominate" className="hover:text-royal-gold transition-colors">Submit Nomination</Link></li>
              <li><Link href="/contact" className="hover:text-royal-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2">
            <h4 className="font-serif text-xs font-bold tracking-[0.2em] text-royal-gold uppercase border-b border-royal-gold/20 pb-1.5">
              SUBSCRIBE
            </h4>
            <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
              Get new magazine issues, award announcements, and private gala invitations delivered straight to your inbox.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 mt-1 text-xs text-royal-gold font-sans font-semibold">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed! Watch your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-luxury-card border border-royal-gold/40 px-4 py-2 text-xs text-ivory placeholder:text-cream/50 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-royal-gold text-luxury-black px-4 py-2 text-xs font-sans font-bold uppercase tracking-widest hover:bg-royal-gold-light transition-colors cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] text-cream/50 font-sans">
                  No spam. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        <GoldDivider variant="line" className="my-3" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-cream/60">
          <p>© 2026 PRIME SUCCESS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-royal-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-royal-gold transition-colors">Terms of Distinction</Link>
            <Link href="/editorial-ethics" className="hover:text-royal-gold transition-colors">Editorial Ethics</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
