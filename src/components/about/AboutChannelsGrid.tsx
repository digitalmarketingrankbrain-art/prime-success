"use client";

import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { Video, Vote, Award, BookOpen, Send } from "lucide-react";

const CHANNELS = [
  { label: "INTERVIEWS", href: "/interviews", icon: Video },
  { label: "SURVEYS", href: "/surveys", icon: Vote },
  { label: "AWARDS", href: "/awards", icon: Award },
  { label: "MAGAZINE", href: "/magazine", icon: BookOpen },
  { label: "CONTACT", href: "/contact", icon: Send },
];

export default function AboutChannelsGrid() {
  return (
    <div className="my-16">
      <SectionHeading
        number="MEDIA CHANNELS"
        eyebrow="THE PRIME PORTFOLIO"
        title="EXPLORE OUR ECOSYSTEM"
        subtitle="Navigate directly to our dedicated media channels, awards, magazine, and survey portals."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-12">
        {CHANNELS.map((link, idx) => {
          const IconComp = link.icon;
          return (
            <Link
              key={idx}
              href={link.href}
              className="p-6 bg-luxury-card border border-royal-gold/30 hover:border-royal-gold text-center flex flex-col items-center gap-3 transition-all duration-300 shadow-md group cursor-pointer"
            >
              <IconComp className="w-6 h-6 text-royal-gold group-hover:scale-110 transition-transform" />
              <span className="font-sans text-xs font-bold text-ivory tracking-widest group-hover:text-royal-gold">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
