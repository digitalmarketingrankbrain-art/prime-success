import SectionHeading from "@/components/ui/SectionHeading";
import ImageReveal from "@/components/ui/ImageReveal";
import GoldDivider from "@/components/ui/GoldDivider";
import NominationCTA from "@/components/sections/NominationCTA";
import Reveal from "@/components/animations/Reveal";
import { Crown, Shield, Award, Sparkles, Globe, UserCheck, Scale, History } from "lucide-react";

export const metadata = {
  title: "About Prime Success — Legacy, Philosophy & The Prime Standard",
  description: "Learn about the institution, advisory board, and mission behind the Prime Success Royal Awards.",
};

const STATS = [
  { value: "$180B+", label: "Combined Enterprise Value of Honorees" },
  { value: "48", label: "Countries Represented in Hall of Fame" },
  { value: "100%", label: "Unanimous Independent Board Vetting" },
  { value: "300", label: "Exclusive Global Gala Guests Annually" },
];

const ADVISORY_MEMBERS = [
  { name: "Lord Harrington Sterling", role: "Chairman of International Jury", region: "London, UK" },
  { name: "Dr. Evelyn Wu-Tanaka", role: "Senior Scientific Advisor", region: "Tokyo, Japan" },
  { name: "Baroness Claudine de Valois", role: "Director of Cultural & Arts Council", region: "Paris, France" },
  { name: "Rajeshwar V. Singhania", role: "Head of Industrial Evaluation", region: "Mumbai, India" },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="INSTITUTION"
          eyebrow="OUR PHILOSOPHY & FOUNDATION"
          title="CELEBRATING EXCELLENCE. HONOURING LEGACY."
          subtitle="Prime Success was established as an international sanctuary for extraordinary human achievement and enduring legacy."
        />

        {/* Impact Stats Banner */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {STATS.map((stat, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="p-8 bg-luxury-card border border-royal-gold/30 text-center flex flex-col items-center gap-2 shadow-lg shadow-luxury-black">
                <span className="font-serif text-3xl md:text-5xl font-bold text-gold-gradient drop-shadow-md">
                  {stat.value}
                </span>
                <span className="font-sans text-xs text-cream/80 font-light tracking-wider uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-20">
          <div className="lg:col-span-6">
            <ImageReveal
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
              alt="Prime Success Boardroom & Philosophy"
              aspectRatio="aspect-[4/3]"
              containerClassName="border-royal-gold/40 shadow-2xl"
            />
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6 font-sans text-sm md:text-base text-cream/90 leading-relaxed font-light">
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-ivory">
              Beyond Recognition — An Immutable Digital Hall of Fame
            </h3>
            <p>
              In a fast-paced world obsessed with ephemeral popularity, Prime Success operates with the gravitas of a century-old royal institution. We evaluate leaders not by social sentiment, but by structural, enduring global contribution.
            </p>
            <p>
              Our honorees include enterprise founders whose innovations power sovereign energy grids, clinical scientists who eradicate rare conditions, architects whose monuments define modern skylines, and philanthropists whose endowments uplift millions.
            </p>
            <div className="p-6 bg-luxury-card border-l-4 border-royal-gold italic font-serif text-lg text-gold-gradient shadow-md">
              “We do not grant awards; we immortalize history as it is written by those who dare to lead.”
            </div>
          </div>
        </div>

        <GoldDivider variant="crest" className="my-20" />

        {/* The 4 Pillars */}
        <div className="my-20">
          <SectionHeading
            eyebrow="THE FOUR PILLARS"
            title="THE PRIME STANDARD"
            subtitle="The fundamental principles guiding our evaluation, nomination, and induction process."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 shadow-lg hover:border-royal-gold transition-all">
                <Crown className="w-8 h-8 text-royal-gold" />
                <h4 className="font-serif text-xl font-bold text-ivory">Monumental Vision</h4>
                <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
                  Evaluating individuals who envision paradigms beyond current technological or economic horizons.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 shadow-lg hover:border-royal-gold transition-all">
                <Shield className="w-8 h-8 text-royal-gold" />
                <h4 className="font-serif text-xl font-bold text-ivory">Uncompromising Ethics</h4>
                <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
                  Ensuring honorees possess spotless integrity, corporate governance, and moral leadership.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 shadow-lg hover:border-royal-gold transition-all">
                <Award className="w-8 h-8 text-royal-gold" />
                <h4 className="font-serif text-xl font-bold text-ivory">Measurable Impact</h4>
                <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
                  Verifying empirical metrics of economic value created, lives saved, or cultural elevation achieved.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 shadow-lg hover:border-royal-gold transition-all">
                <Sparkles className="w-8 h-8 text-royal-gold" />
                <h4 className="font-serif text-xl font-bold text-ivory">Generational Legacy</h4>
                <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">
                  Recognising achievements designed to benefit future generations long into the next century.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <GoldDivider variant="line" className="my-20" />

        {/* International Jury & Advisory Board */}
        <div className="my-20">
          <SectionHeading
            eyebrow="GOVERNANCE & VETTING"
            title="THE INTERNATIONAL ADVISORY COUNCIL"
            subtitle="Distinguished global scholars, diplomats, and former honorees ensuring pristine evaluation standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVISORY_MEMBERS.map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-8 bg-luxury-dark border border-royal-gold/20 flex flex-col gap-3 relative">
                  <div className="w-10 h-10 rounded-full border border-royal-gold/40 bg-royal-red/30 flex items-center justify-center text-royal-gold">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-ivory mt-2">{member.name}</h4>
                  <span className="font-sans text-xs font-bold text-royal-gold uppercase">{member.role}</span>
                  <span className="font-sans text-[11px] text-cream/60">{member.region}</span>
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
