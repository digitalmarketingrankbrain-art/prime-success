import SectionHeading from "@/components/ui/SectionHeading";
import AwardCategoriesSection from "@/components/sections/AwardCategoriesSection";
import NominationCTA from "@/components/sections/NominationCTA";
import Reveal from "@/components/animations/Reveal";
import Parallax from "@/components/animations/Parallax";
import { awardsData } from "@/data/mockData";

export const metadata = {
  title: "The Awards — Categories & Nomination Guidelines | Prime Success",
  description: "Explore the 8 flagship award categories, nomination process, and selection standards of Prime Success.",
};

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Nomination Submission",
    description: "Nominations submitted by industry peers, advisory council members, or public entry through our official platform.",
  },
  {
    step: "02",
    title: "Vetting & Due Diligence",
    description: "Our independent research bureau conducts rigorous background verification and impact measurement.",
  },
  {
    step: "03",
    title: "Advisory Council Evaluation",
    description: "A panel of international leaders and past laureates evaluates candidates against The Prime Standard.",
  },
  {
    step: "04",
    title: "Induction & Royal Gala",
    description: "Honorees are officially announced and inducted into the Digital Hall of Fame at the annual Grand Awards Gala.",
  },
];

export default function AwardsPage() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="DISTINCTION"
          eyebrow="THE ACCOLADES OF PRIME SUCCESS"
          title="THE ROYAL AWARDS SYSTEM"
          subtitle="Discover the eight flagship award categories recognizing global visionaries across all fields."
        />

        {/* Process Timeline */}
        <div className="my-16">
          <SectionHeading
            eyebrow="EVALUATION METHODOLOGY"
            title="THE SELECTION PROCESS"
            subtitle="Four distinct stages of rigorous international vetting to ensure pristine evaluation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((item, idx) => (
              <Reveal key={item.step} delay={idx * 0.15}>
                <Parallax speed={idx % 2 === 0 ? -15 : 15}>
                  <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col justify-between h-full relative shadow-lg hover:border-royal-gold transition-colors">
                    <div className="font-serif text-4xl font-bold text-gold-gradient mb-4">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-serif text-xl font-bold text-ivory mb-2">{item.title}</h4>
                      <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">{item.description}</p>
                    </div>
                  </div>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <AwardCategoriesSection categories={awardsData} />
      </div>

      <NominationCTA />
    </div>
  );
}
