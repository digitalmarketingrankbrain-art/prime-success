import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImageReveal from "@/components/ui/ImageReveal";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { Article } from "@/types";

interface CoverStorySectionProps {
  article: Article;
}

export default function CoverStorySection({ article }: CoverStorySectionProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-dark border-t border-royal-gold/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          eyebrow="EDITORIAL EXCELLENCE"
          title="MAGAZINE COVER STORY"
          subtitle="Deep dive editorial investigations into leadership, vision, and legacy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-luxury-card border border-royal-gold/20 p-6 md:p-10 relative">
          <div className="lg:col-span-7">
            <ImageReveal
              src={article.image}
              alt={article.title}
              aspectRatio="aspect-[16/10]"
              containerClassName="border-royal-gold/30"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-royal-red text-ivory text-[10px] tracking-[0.25em] font-sans font-bold uppercase">
                  {article.category}
                </span>
                <span className="text-xs text-royal-gold font-sans tracking-widest">
                  {article.publishedAt}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-ivory leading-tight hover:text-royal-gold transition-colors">
                <Link href={`/magazine/${article.slug}`}>{article.title}</Link>
              </h3>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-sans text-sm text-cream/80 leading-relaxed font-light">
                {article.subtitle}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-4 bg-luxury-black/60 border-l-2 border-royal-gold italic font-serif text-sm text-cream/90">
                “{article.pullQuote}”
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-2">
                <Button href={`/magazine/${article.slug}`} variant="primary" size="md">
                  READ FULL COVER STORY
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
