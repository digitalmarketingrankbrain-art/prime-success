import Image from "next/image";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { GalaEvent } from "@/types";

interface EventSectionProps {
  event: GalaEvent;
}

export default function EventSection({ event }: EventSectionProps) {
  return (
    <section className="py-24 px-6 md:px-12 bg-luxury-dark border-y border-royal-gold/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          eyebrow="ANNUAL GALA"
          title="THE GRAND CEREMONY"
          subtitle="An invitation-only red-carpet gathering of global leaders and honorees."
        />

        <div className="relative border border-royal-gold/30 bg-luxury-black overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 relative min-h-[400px] lg:min-h-[500px]">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/40 to-transparent" />
            <div className="absolute top-6 left-6 bg-royal-red/90 border border-royal-gold px-4 py-1.5 text-[#F9F5EC] text-xs font-bold tracking-[0.2em] uppercase">
              CONFIRMED EVENT
            </div>
          </div>

          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-b from-luxury-card to-luxury-black">
            <div>
              <div className="flex items-center gap-2 text-royal-gold text-xs font-sans font-semibold tracking-[0.25em] uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{event.theme}</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-ivory mb-4">
                {event.title}
              </h3>

              <p className="font-sans text-xs md:text-sm text-cream/80 leading-relaxed font-light mb-8">
                {event.description}
              </p>

              <div className="flex flex-col gap-4 border-y border-royal-gold/15 py-6 mb-8">
                <div className="flex items-center gap-4 text-cream/90 text-xs font-sans">
                  <Calendar className="w-5 h-5 text-royal-gold" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-4 text-cream/90 text-xs font-sans">
                  <MapPin className="w-5 h-5 text-royal-gold" />
                  <span>{event.venue}, {event.location}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/events" variant="primary" size="md">
                EXPLORE EVENT & SCHEDULE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
