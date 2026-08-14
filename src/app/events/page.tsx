import SectionHeading from "@/components/ui/SectionHeading";
import EventSection from "@/components/sections/EventSection";
import NominationCTA from "@/components/sections/NominationCTA";
import { galaEventData } from "@/data/mockData";
import Reveal from "@/components/animations/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";
import { Clock, MapPin, Sparkles, Shield, Crown } from "lucide-react";

export const metadata = {
  title: "Prime Success Events — Grand Awards Gala 2026",
  description: "Join the annual Prime Success Red-Carpet Grand Awards Gala.",
};

const PAST_GALAS = [
  {
    year: "2025",
    theme: "THE TRIUMPH OF VISION",
    city: "DUBAI, UAE",
    venue: "Burj Al Arab Sovereign Ballroom",
    honoreesCount: "24 Laureates",
  },
  {
    year: "2024",
    theme: "THE LEGACY OF EXCELLENCE",
    city: "LONDON, UK",
    venue: "The Ritz Grand Assembly Hall",
    honoreesCount: "20 Laureates",
  },
  {
    year: "2023",
    theme: "ARCHITECTS OF PROGRESS",
    city: "SINGAPORE",
    venue: "Marina Bay Sands Private Sky Gallery",
    honoreesCount: "18 Laureates",
  },
];

export default function EventsPage() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="GALA"
          eyebrow="THE ANNUAL CEREMONY"
          title="PRIME SUCCESS EVENTS"
          subtitle="Explore the upcoming Grand Awards Gala and historic ceremony archives."
        />

        {/* Gala Feature */}
        <EventSection event={galaEventData} />

        {/* Event Schedule Timeline */}
        <div className="my-24">
          <SectionHeading
            eyebrow="EVENT ITINERARY"
            title="CEREMONY SCHEDULE"
            subtitle="An evening designed for royal distinction, keynotes, and high-net-worth networking."
          />

          <div className="max-w-3xl mx-auto flex flex-col gap-6">
            {galaEventData.schedule.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-6 bg-luxury-card border border-royal-gold/30 flex items-center gap-6 justify-between shadow-lg shadow-luxury-black hover:border-royal-gold transition-colors">
                  <div className="flex items-center gap-3 text-royal-gold font-sans text-xs font-bold tracking-widest">
                    <Clock className="w-4 h-4 text-royal-gold" />
                    <span>{item.time}</span>
                  </div>
                  <div className="font-serif text-lg font-bold text-ivory">
                    {item.activity}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <GoldDivider variant="crest" className="my-24" />

        {/* Historic Gala Archives */}
        <div className="my-20">
          <SectionHeading
            eyebrow="CEREMONY ARCHIVES"
            title="HISTORIC GRAND GALAS"
            subtitle="Explore past editions of the Prime Success international awards ceremonies."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PAST_GALAS.map((gala, idx) => (
              <Reveal key={gala.year} delay={idx * 0.15}>
                <div className="p-8 bg-luxury-card border border-royal-gold/20 flex flex-col gap-4 shadow-lg hover:border-royal-gold/50 transition-all">
                  <div className="flex items-center justify-between border-b border-royal-gold/20 pb-3">
                    <span className="font-serif text-3xl font-bold text-royal-gold">{gala.year}</span>
                    <Crown className="w-5 h-5 text-royal-gold" />
                  </div>
                  <span className="font-serif text-lg font-bold text-ivory">{gala.theme}</span>
                  <div className="flex items-center gap-2 text-xs font-sans text-cream/70">
                    <MapPin className="w-4 h-4 text-royal-gold" />
                    <span>{gala.venue}, {gala.city}</span>
                  </div>
                  <span className="text-[11px] font-sans font-bold text-royal-gold tracking-widest uppercase mt-2">
                    {gala.honoreesCount} INDUCTED
                  </span>
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
