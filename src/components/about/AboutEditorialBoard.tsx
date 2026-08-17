"use client";

import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const EDITORIAL_BOARD = [
  {
    name: "Brijesh",
    role: "Founder & CEO",
    bio: "Leads Prime Success Media's overall vision, strategy, and institutional growth.",
    image: "/about/brijesh-sir.webp",
  },
  {
    name: "Nakul",
    role: "Director",
    bio: "Oversees editorial direction and operational execution across the organisation.",
    image: "/about/nakul.webp",
  },
  {
    name: "Ankit",
    role: "Director",
    bio: "Drives key initiatives and cross-functional operations for Prime Success Media.",
    image: "/about/ankit-sir.webp",
  },
];

export default function AboutEditorialBoard() {
  return (
    <div className="my-20">
      <SectionHeading
        number="THE BOARD"
        eyebrow="OUR LEADERSHIP"
        title="MEET THE TEAM"
        subtitle="The founders and directors guiding Prime Success Media's vision, standards, and growth."
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
