"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const EDITORIAL_BOARD = [
  {
    name: "Mr. Julian Vance",
    role: "Editor-in-Chief & Publisher",
    bio: "Former financial editor with 25 years of international journalism experience across London, Dubai, and New Delhi.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Mrs. Victoria Sterling",
    role: "Senior Editorial Director",
    bio: "Specialist in sovereign wealth governance, industrial policy, and global leadership profiles.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Mr. Devon Reynolds",
    role: "Technology & Innovation Editor",
    bio: "Pioneer in artificial intelligence research journalism and clean energy transition documentation.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function AboutEditorialBoard() {
  return (
    <div className="my-20">
      <SectionHeading
        number="THE BOARD"
        eyebrow="EDITORIAL LEADERSHIP"
        title="OUR EDITORIAL COUNCIL"
        subtitle="Guided by veteran journalists and corporate advisors committed to truth, rigor, and aesthetic dignity."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        {EDITORIAL_BOARD.map((member, idx) => (
          <div
            key={idx}
            className="p-6 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 shadow-xl hover:border-royal-gold transition-colors"
          >
            <div className="relative aspect-square w-full border border-royal-gold/20 overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="font-serif text-xl font-bold text-ivory">{member.name}</h4>
              <span className="text-xs font-sans font-semibold text-royal-gold uppercase tracking-wider">
                {member.role}
              </span>
            </div>
            <p className="font-sans text-xs text-cream/70 font-light leading-relaxed">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
