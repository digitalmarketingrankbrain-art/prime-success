import Link from "next/link";
import { ArrowUpRight, Crown, ShieldCheck, Zap, HeartHandshake, Palette, TrendingUp, Award, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { AwardCategory } from "@/types";

interface AwardCategoriesSectionProps {
  categories: AwardCategory[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Crown: <Crown className="w-6 h-6 text-royal-gold" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-royal-gold" />,
  Zap: <Zap className="w-6 h-6 text-royal-gold" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-royal-gold" />,
  Palette: <Palette className="w-6 h-6 text-royal-gold" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-royal-gold" />,
  Award: <Award className="w-6 h-6 text-royal-gold" />,
  Sparkles: <Sparkles className="w-6 h-6 text-royal-gold" />,
};

export default function AwardCategoriesSection({ categories }: AwardCategoriesSectionProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-black relative border-b border-royal-gold/20">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="04"
          eyebrow="PILLARS OF DISTINCTION"
          title="AWARD CATEGORIES"
          subtitle="Eight prestigious domains representing the pinnacle of human endeavor and leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 0.1}>
              <Link
                href={`/categories`}
                className="group block p-8 bg-luxury-card border border-royal-gold/30 hover:border-royal-gold transition-all duration-500 relative overflow-hidden h-full flex flex-col justify-between shadow-lg shadow-luxury-black hover:shadow-royal-gold/10 hover:-translate-y-1"
              >
                <div className="absolute top-0 right-0 p-4 opacity-15 font-serif text-5xl text-royal-gold font-bold group-hover:opacity-30 transition-opacity">
                  {cat.number}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-full border border-royal-gold/50 bg-royal-red/30 flex items-center justify-center mb-6 group-hover:bg-royal-gold group-hover:text-luxury-black transition-colors shadow-md shadow-royal-gold/10">
                    {ICON_MAP[cat.icon] || <Crown className="w-6 h-6 text-royal-gold group-hover:text-luxury-black" />}
                  </div>

                  <span className="text-[10px] tracking-[0.25em] font-sans text-royal-gold uppercase font-bold">
                    CATEGORY {cat.number}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ivory mt-1 group-hover:text-gold-gradient transition-colors">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-xs text-cream/80 mt-3 leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-royal-gold/20 flex items-center justify-between text-xs text-royal-gold font-sans font-bold tracking-wider group-hover:text-royal-gold-light">
                  <span>EXPLORE CRITERIA</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
