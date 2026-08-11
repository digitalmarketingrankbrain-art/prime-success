import Button from "@/components/ui/Button";
import Reveal from "@/components/animations/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";

export default function NominationCTA() {
  return (
    <section className="py-28 px-6 md:px-12 bg-royal-red relative overflow-hidden text-center text-ivory">
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-transparent to-luxury-black/70 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <Reveal>
          <span className="font-sans text-xs tracking-[0.3em] text-royal-gold uppercase font-bold bg-luxury-black/60 px-4 py-1.5 border border-royal-gold/40">
            NOMINATIONS NOW OPEN
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ivory my-8">
            WHO DESERVES TO BE REMEMBERED?
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="font-sans text-base md:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed font-light mb-8">
            Nominate an extraordinary individual whose vision, leadership, and achievements deserve recognition on the Prime Success international stage.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <GoldDivider variant="diamond" className="max-w-xs mx-auto mb-8" />
        </Reveal>

        <Reveal delay={0.5}>
          <Button href="/nominate" variant="secondary" size="lg">
            SUBMIT A NOMINATION NOW
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
