import SectionHeading from "@/components/ui/SectionHeading";
import AwardCategoriesSection from "@/components/sections/AwardCategoriesSection";
import NominationCTA from "@/components/sections/NominationCTA";
import { awardsData } from "@/data/mockData";
import Reveal from "@/components/animations/Reveal";
import Parallax from "@/components/animations/Parallax";
import GoldDivider from "@/components/ui/GoldDivider";
import { Crown, CheckCircle2, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Award Categories Directory — Prime Success",
  description: "Comprehensive guide to all 8 Prime Success award categories.",
};

const JUDGING_STANDARDS = [
  {
    title: "Quantitative Metric Verification",
    desc: "Independent auditing of economic revenue generated, patents held, lives impacted, or structural capital deployed.",
  },
  {
    title: "Moral & Governance Vetting",
    desc: "Comprehensive review of legal compliance, environmental stewardship, corporate ethics, and workplace governance.",
  },
  {
    title: "Peer & Laureate Endorsement",
    desc: "Direct evaluation by previous Prime Success laureates and industry council members across 48 nations.",
  },
  {
    title: "Generational Legacy Assessment",
    desc: "Determining whether the nominee's contribution will continue creating positive societal impact 50 years into the future.",
  },
];

export default function CategoriesPage() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="DIRECTORY"
          eyebrow="DOMAINS OF EXCELLENCE"
          title="AWARD CATEGORIES DIRECTORY"
          subtitle="Detailed criteria and evaluation benchmarks across all eight prestigious categories."
        />

        {/* 8 Categories Grid */}
        <AwardCategoriesSection categories={awardsData} />

        <GoldDivider variant="crest" className="my-24" />

        {/* Expanded Detailed Breakdown Per Category */}
        <div className="my-20">
          <SectionHeading
            eyebrow="BENCHMARKS & SELECTION"
            title="CRITERIA BREAKDOWN & STANDARDS"
            subtitle="The rigorous benchmarks required to qualify for induction in each flagship domain."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awardsData.map((cat, idx) => (
              <Reveal key={cat.id} delay={idx * 0.08}>
                <Parallax speed={idx % 2 === 0 ? -15 : 15}>
                  <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-6 shadow-xl hover:border-royal-gold transition-colors">
                    <div className="flex items-center justify-between border-b border-royal-gold/20 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full border border-royal-gold/50 bg-royal-red/30 flex items-center justify-center font-serif font-bold text-royal-gold text-xs">
                          {cat.number}
                        </span>
                        <h3 className="font-serif text-2xl font-bold text-ivory">{cat.name}</h3>
                      </div>
                      <Crown className="w-5 h-5 text-royal-gold" />
                    </div>

                    <p className="font-sans text-xs text-royal-gold font-bold uppercase tracking-wider">
                      &ldquo;{cat.tagline}&rdquo;
                    </p>
                    <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
                      {cat.description}
                    </p>

                    <div className="bg-luxury-dark p-6 border border-royal-gold/15 flex flex-col gap-3">
                      <span className="text-[10px] font-sans font-bold text-royal-gold uppercase tracking-widest">
                        EVALUATION CRITERIA:
                      </span>
                      <ul className="flex flex-col gap-2">
                        {cat.criteria.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-center gap-2 text-xs font-sans text-cream/90">
                            <CheckCircle2 className="w-4 h-4 text-royal-gold flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </div>

        <GoldDivider variant="line" className="my-24" />

        {/* Universal Evaluation Standards */}
        <div className="my-20 max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="AUDIT PROTOCOL"
            title="THE UNIVERSAL JUDGING PROTOCOL"
            subtitle="Four immutable evaluation checkpoints applied to every nomination regardless of category."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {JUDGING_STANDARDS.map((std, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-8 bg-luxury-dark border border-royal-gold/20 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-royal-gold font-serif text-lg font-bold">
                    <ShieldAlert className="w-5 h-5" />
                    <span>0{idx + 1}. {std.title}</span>
                  </div>
                  <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
                    {std.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <NominationCTA />
    </div>
  );
}
