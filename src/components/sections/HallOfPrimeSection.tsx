import SectionHeading from "@/components/ui/SectionHeading";
import WinnerCard from "@/components/winners/WinnerCard";
import Button from "@/components/ui/Button";
import { Winner } from "@/types";
import Reveal from "@/components/animations/Reveal";

interface HallOfPrimeSectionProps {
  winners: Winner[];
}

export default function HallOfPrimeSection({ winners }: HallOfPrimeSectionProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-black relative border-b border-royal-gold/20">
      <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="02"
          eyebrow="DIGITAL HALL OF FAME"
          title="THE HALL OF PRIME"
          subtitle="Honouring individuals who have achieved the extraordinary and inspired global transformation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {winners.slice(0, 6).map((winner, idx) => (
            <Reveal key={winner.id} delay={idx * 0.1}>
              <WinnerCard winner={winner} index={`0${idx + 1}`} />
            </Reveal>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/winners" variant="outline" size="lg" className="border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-luxury-black">
            EXPLORE ALL HONOURED INDIVIDUALS ({winners.length})
          </Button>
        </div>
      </div>
    </section>
  );
}
