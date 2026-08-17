import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageReveal from "@/components/ui/ImageReveal";
import { Winner } from "@/types";
import BrandCrown from "@/components/ui/BrandCrown";

interface WinnerCardProps {
  winner: Winner;
  index: string;
}

export default function WinnerCard({ winner, index }: WinnerCardProps) {
  return (
    <Link
      href={`/winners/${winner.slug}`}
      className="group block relative flex flex-col bg-luxury-card border border-royal-gold/25 hover:border-royal-gold transition-all duration-500 overflow-hidden shadow-lg shadow-luxury-black hover:shadow-royal-gold/10 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <ImageReveal
          src={winner.image}
          alt={winner.name}
          aspectRatio="aspect-[4/5]"
          containerClassName="border-b border-royal-gold/20"
        />
        <div className="absolute top-4 left-4 z-20 bg-luxury-black/85 backdrop-blur-md px-3 py-1 border border-royal-gold/60 text-royal-gold text-[10px] tracking-[0.25em] font-serif font-bold uppercase shadow-md flex items-center gap-1.5">
          <BrandCrown className="w-4 h-4" />
          <span>{index}</span>
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-1 relative bg-gradient-to-b from-luxury-card via-luxury-dark to-luxury-black border-t border-royal-gold/10">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-4 bg-royal-gold" />
            <span className="text-[10px] tracking-[0.2em] font-sans font-bold text-royal-gold uppercase">
              {winner.award} · {winner.year}
            </span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold-gradient transition-colors mt-2">
            {winner.name}
          </h3>
          <p className="font-sans text-xs text-cream/80 font-light mt-1">
            {winner.role}, <span className="text-ivory font-semibold">{winner.organization}</span>
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-royal-gold/20 flex items-center justify-between">
          <span className="text-[11px] font-sans tracking-widest text-cream/70 group-hover:text-royal-gold transition-colors font-semibold">
            READ HONOUR PROFILE
          </span>
          <div className="w-8 h-8 rounded-full border border-royal-gold/40 flex items-center justify-center bg-royal-red/20 group-hover:bg-royal-gold group-hover:text-luxury-black transition-all">
            <ArrowUpRight className="w-4 h-4 text-royal-gold group-hover:text-luxury-black" />
          </div>
        </div>
      </div>
    </Link>
  );
}
