"use client";

import Image from "next/image";
import { Play, Clock, Video } from "lucide-react";
import { Interview } from "@/types";

interface Props {
  interview: Interview;
  onPlay: (interview: Interview) => void;
}

export default function InterviewCard({ interview, onPlay }: Props) {
  return (
    <div
      onClick={() => onPlay(interview)}
      className="bg-luxury-card border border-royal-gold/25 hover:border-royal-gold transition-all duration-300 shadow-xl overflow-hidden group cursor-pointer flex flex-col justify-between"
    >
      <div className="relative aspect-video w-full bg-luxury-black overflow-hidden">
        <Image
          src={interview.thumbnail}
          alt={interview.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/30 to-transparent" />
        
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-royal-gold/90 text-luxury-black flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Category Badge */}
        <span className="absolute top-3 left-3 px-2.5 py-1 bg-royal-red/90 text-[#F9F5EC] text-[9px] font-sans font-bold uppercase tracking-widest border border-royal-gold/30">
          {interview.category}
        </span>

        <span className="absolute bottom-3 right-3 text-[10px] font-mono text-royal-gold bg-luxury-black/80 px-2 py-1 flex items-center gap-1 border border-royal-gold/20">
          <Clock className="w-3 h-3" /> {interview.duration}
        </span>
      </div>

      <div className="p-6 flex flex-col gap-3 flex-grow justify-between border-t border-royal-gold/15">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-sans font-bold text-royal-gold">
            {interview.guestName}
          </span>
          <span className="text-[11px] font-sans text-cream/70">
            {interview.guestRole}, <strong>{interview.organization}</strong>
          </span>
          <h4 className="font-serif text-base font-bold text-ivory group-hover:text-royal-gold transition-colors leading-snug mt-1">
            {interview.title}
          </h4>
        </div>

        <div className="text-xs font-sans text-royal-gold font-semibold tracking-wider flex items-center gap-1.5 pt-2 border-t border-royal-gold/10">
          <Video className="w-3.5 h-3.5" />
          <span>WATCH INTERVIEW</span>
        </div>
      </div>
    </div>
  );
}
