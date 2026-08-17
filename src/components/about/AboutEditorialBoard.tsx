"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const EDITORIAL_BOARD = [
  {
    name: "Brijesh Kumar",
    role: "Editor-in-Chief & Publisher",
    bio: "Former financial editor with 25 years of international journalism experience across London, Dubai, and New Delhi.",
    image: "/about/brijesh-sir.webp",
  },
  {
    name: "Yash Kumar",
    role: "Senior Editorial Director",
    bio: "Specialist in sovereign wealth governance, industrial policy, and global leadership profiles.",
    image: "/about/nakul.webp",
  },
  {
    name: "Ankit Pal",
    role: "Technology & Innovation Editor",
    bio: "Pioneer in artificial intelligence research journalism and clean energy transition documentation.",
    image: "/about/ankit-sir.webp",
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
            <div className="relative w-full h-100 border border-royal-gold/20 overflow-hidden bg-luxury-dark">
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
