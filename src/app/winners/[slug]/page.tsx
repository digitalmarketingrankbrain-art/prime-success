import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Award, Sparkles } from "lucide-react";
import { winnersData } from "@/data/mockData";
import GoldDivider from "@/components/ui/GoldDivider";
import NominationCTA from "@/components/sections/NominationCTA";

interface WinnerPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return winnersData.map((winner) => ({
    slug: winner.slug,
  }));
}

export default async function WinnerDetailPage({ params }: WinnerPageProps) {
  const { slug } = await params;
  const winner = winnersData.find((w) => w.slug === slug);

  if (!winner) {
    notFound();
  }

  return (
    <article className="pt-28 pb-20 bg-luxury-black text-ivory">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 mb-8">
        <Link
          href="/winners"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-royal-gold hover:text-ivory transition-colors uppercase"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>RETURN TO HONOUREES</span>
        </Link>
      </div>

      {/* Winner Header */}
      <header className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-royal-red text-[#F9F5EC] text-[10px] tracking-[0.25em] font-sans font-bold uppercase border border-royal-gold/30">
            {winner.category}
          </span>
          <span className="text-xs text-royal-gold font-sans font-semibold tracking-widest uppercase flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            {winner.award} · {winner.year}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ivory leading-tight">
          {winner.name}
        </h1>

        <p className="font-sans text-base md:text-lg text-cream/80 max-w-2xl font-light leading-relaxed">
          {winner.role}, <span className="text-ivory font-semibold">{winner.organization}</span>
        </p>
      </header>

      {/* Hero Image */}
      <div className="max-w-5xl mx-auto px-6 my-12">
        <div className="relative aspect-[16/9] border border-royal-gold/20 overflow-hidden">
          <Image src={winner.heroImage ?? winner.image} alt={winner.name} fill priority className="object-cover" />
        </div>
      </div>

      {/* Body Content */}
      <div className="max-w-3xl mx-auto px-6 font-sans text-base text-cream/90 leading-relaxed font-light flex flex-col gap-6">
        <blockquote className="p-8 bg-luxury-card border-l-4 border-royal-gold font-serif italic text-xl md:text-2xl text-ivory my-4 leading-snug">
          “{winner.quote}”
        </blockquote>

        {winner.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}

        <div className="p-6 bg-luxury-card border border-royal-gold/25 my-4">
          <div className="flex items-center gap-2 text-royal-gold font-sans text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-4 h-4" />
            Key Achievements
          </div>
          <ul className="flex flex-col gap-2.5">
            {winner.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-cream/90">
                <span className="text-royal-gold mt-1.5 flex-shrink-0">◆</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="font-serif italic text-lg text-royal-gold text-center py-4">
          {winner.impactStatement}
        </p>

        <GoldDivider variant="diamond" className="my-8" />
      </div>

      <NominationCTA />
    </article>
  );
}
