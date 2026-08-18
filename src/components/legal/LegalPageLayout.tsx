import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  number: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ number, eyebrow, title, subtitle, lastUpdated, children }: Props) {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading number={number} eyebrow={eyebrow} title={title} subtitle={subtitle} />

        <p className="text-center -mt-8 mb-16 font-sans text-[11px] text-cream/50 uppercase tracking-[0.2em]">
          Last updated: {lastUpdated}
        </p>

        <div className="flex flex-col gap-12">{children}</div>
      </div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3 border-t border-royal-gold/15 pt-8 first:border-t-0 first:pt-0">
      <h2 className="font-serif text-xl sm:text-2xl font-bold text-royal-gold">{title}</h2>
      <div className="font-sans text-sm text-cream/80 leading-relaxed font-light flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
}
