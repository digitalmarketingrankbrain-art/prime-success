import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import CoverStorySection from "@/components/sections/CoverStorySection";
import ImageReveal from "@/components/ui/ImageReveal";
import NominationCTA from "@/components/sections/NominationCTA";
import MagazineIssuesGrid from "@/components/sections/MagazineIssuesGrid";
import { articlesData, magazinesData } from "@/data/mockData";
import Reveal from "@/components/animations/Reveal";
import Parallax from "@/components/animations/Parallax";
import GoldDivider from "@/components/ui/GoldDivider";
import { ArrowUpRight, Clock, Newspaper } from "lucide-react";

export const metadata = {
  title: "Prime Success Magazine — Digital Archive & Print Editions",
  description: "Explore complete digitized print editions, cover stories, and deep dive reports on global leaders.",
};

export default function MagazinePage() {
  const coverStory = articlesData.find((a) => a.isCoverStory) || articlesData[0];
  const regularArticles = articlesData.filter((a) => !a.isCoverStory);

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="OFFICIAL PUBLICATION"
          eyebrow="HIGH-END EDITORIAL DISPATCHES & PRINT EDITIONS"
          title="PRIME SUCCESS MAGAZINE"
          subtitle="In-depth analysis, cover stories, and perspectives from the world's most influential leaders."
        />

        {/* REAL MAGAZINE COLLECTION ARCHIVE GRID */}
        <MagazineIssuesGrid issues={magazinesData} />

        <GoldDivider variant="crest" className="my-24" />

        {/* Featured Cover Story */}
        <CoverStorySection article={coverStory} />

        <GoldDivider variant="line" className="my-24" />

        {/* Regular Articles Grid */}
        <div className="my-20">
          <SectionHeading
            eyebrow="FEATURED DISPATCHES"
            title="LATEST EDITORIAL ARTICLES"
            subtitle="Explore in-depth interviews and long-form analysis written by international editors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularArticles.map((art, idx) => (
              <Reveal key={art.id} delay={idx * 0.12}>
                <Parallax speed={idx % 2 === 0 ? -20 : 20}>
                  <Link
                    href={`/magazine/${art.slug}`}
                    className="group block bg-luxury-card border border-royal-gold/25 hover:border-royal-gold transition-all duration-500 overflow-hidden shadow-xl hover:shadow-royal-gold/10"
                  >
                    <ImageReveal src={art.image} alt={art.title} aspectRatio="aspect-[16/9]" />
                    <div className="p-8 flex flex-col gap-4">
                      <div className="flex items-center justify-between text-xs font-sans">
                        <span className="text-royal-gold font-bold tracking-[0.2em] uppercase">{art.category}</span>
                        <span className="text-cream/60 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-royal-gold" />
                          {art.readTime}
                        </span>
                      </div>

                      <h4 className="font-serif text-2xl font-bold text-ivory group-hover:text-gold-gradient transition-colors">
                        {art.title}
                      </h4>

                      <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
                        {art.subtitle}
                      </p>

                      <div className="pt-4 border-t border-royal-gold/20 flex items-center justify-between text-xs text-royal-gold font-bold">
                        <span>READ ARTICLE</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </div>

        <GoldDivider variant="line" className="my-24" />

        {/* Print Edition Dispatch Banner */}
        <div className="p-12 bg-royal-red-dark border border-royal-gold/30 text-center flex flex-col items-center gap-4 relative overflow-hidden shadow-2xl text-[#F9F5EC]">
          <Newspaper className="w-10 h-10 text-royal-gold" />
          <h3 className="font-serif text-3xl font-bold text-[#F9F5EC]">
            PRINT EDITION & LUXURY BINDING
          </h3>
          <p className="font-sans text-sm text-[#E8DCC4] max-w-xl leading-relaxed font-light">
            In addition to our digital portal, Prime Success produces a fortnightly print folio registered with the Press Registrar General of India (PRGI No. DELENG/2023/90580) distributed to private embassies, sovereign offices, and inaugural laureates.
          </p>
        </div>
      </div>

      <NominationCTA />
    </div>
  );
}
