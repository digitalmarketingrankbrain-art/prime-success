import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  number?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  number,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col mb-12 md:mb-16",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {number && (
        <span className="font-serif text-royal-gold text-xs tracking-[0.35em] uppercase mb-2 font-bold flex items-center gap-2 justify-center">
          <span className="w-2 h-[1px] bg-royal-gold" />
          [{number}]
          <span className="w-2 h-[1px] bg-royal-gold" />
        </span>
      )}
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-royal-gold" />
          <span className="font-sans text-[11px] font-bold tracking-[0.3em] text-royal-gold uppercase drop-shadow-[0_0_8px_rgba(229,193,88,0.3)]">
            {eyebrow}
          </span>
          <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-royal-gold" />
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight leading-tight max-w-4xl drop-shadow-md",
          light ? "text-luxury-black font-semibold" : "text-ivory"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 font-sans text-sm md:text-base max-w-2xl leading-relaxed font-light",
            light ? "text-luxury-black/70" : "text-cream/90"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
