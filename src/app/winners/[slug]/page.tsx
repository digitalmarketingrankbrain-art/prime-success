import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Award, Building2, CheckCircle2, ChevronLeft, Crown } from "lucide-react";
import { winnersData } from "@/data/mockData";
import Button from "@/components/ui/Button";
import GoldDivider from "@/components/ui/GoldDivider";
import WinnerCard from "@/components/winners/WinnerCard";

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

  const otherWinners = winnersData.filter((w) => w.slug !== slug).slice(0, 2);

  return (
    <div className="pt-28 pb-20 bg-luxury-black text-ivory">
      {/* Header Back Button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/winners"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-royal-gold hover:text-ivory transition-colors uppercase"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>RETURN TO HALL OF PRIME</span>
        </Link>
      </div>

      {/* Winner Hero Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-luxury-card border border-royal-gold/20 p-8 md:p-12 relative overflow-hidden">
          <div className="lg:col-span-5 relative aspect-[4/5] border border-royal-gold/30 overflow-hidden">
            <Image
              src={winner.image}
              alt={winner.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-royal-red text-ivory text-[10px] tracking-[0.25em] font-sans font-bold uppercase border border-royal-gold/30">
                {winner.category}
              </span>
              <span className="text-xs text-royal-gold font-sans font-semibold tracking-widest uppercase">
                HONOURED IN {winner.year}
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-ivory leading-tight">
              {winner.name}
            </h1>

            <div className="flex flex-col gap-1 font-sans text-base text-cream/90">
              <div className="flex items-center gap-2 text-royal-gold font-semibold">
                <Crown className="w-5 h-5" />
                <span>{winner.award}</span>
              </div>
              <div className="flex items-center gap-2 text-cream/70 text-sm mt-1">
                <Building2 className="w-4 h-4 text-royal-gold/60" />
                <span>{winner.role}, <strong className="text-ivory font-normal">{winner.organization}</strong></span>
              </div>
            </div>

            <blockquote className="p-6 bg-luxury-dark border-l-2 border-royal-gold font-serif italic text-base text-ivory leading-relaxed mt-2">
              “{winner.quote}”
            </blockquote>
          </div>
        </div>

        <GoldDivider variant="crest" className="my-16" />

        {/* Biography & Achievements Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 flex flex-col gap-8 font-sans text-sm md:text-base text-cream/80 leading-relaxed font-light">
            <h2 className="font-serif text-3xl font-bold text-ivory border-b border-royal-gold/20 pb-3">
              BIOGRAPHY & VISION
            </h2>
            {winner.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <div className="mt-4 p-8 bg-royal-red-dark border border-royal-gold/30">
              <h3 className="font-serif text-xl font-bold text-ivory mb-2">IMPACT RATIONALE</h3>
              <p className="font-sans text-sm text-cream/90 font-light">{winner.impactStatement}</p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6 bg-luxury-card p-8 border border-royal-gold/15 h-fit">
            <h3 className="font-serif text-xl font-bold text-royal-gold border-b border-royal-gold/20 pb-3">
              KEY ACHIEVEMENTS
            </h3>
            <ul className="flex flex-col gap-4">
              {winner.achievements.map((ach, idx) => (
                <li key={idx} className="flex items-start gap-3 font-sans text-xs md:text-sm text-cream/80">
                  <CheckCircle2 className="w-5 h-5 text-royal-gold flex-shrink-0 mt-0.5" />
                  <span>{ach}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-royal-gold/15 mt-4">
              <Button href="/nominate" variant="outline" size="md" className="w-full">
                NOMINATE A PEER
              </Button>
            </div>
          </div>
        </div>

        {/* Related Winners */}
        <div className="mt-20">
          <h3 className="font-serif text-2xl font-bold text-ivory mb-8 text-center">
            RELATED HONOUREES
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherWinners.map((w, idx) => (
              <WinnerCard key={w.id} winner={w} index={`0${idx + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
