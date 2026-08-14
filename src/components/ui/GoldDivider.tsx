import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  variant?: "line" | "diamond" | "crest";
}

export default function GoldDivider({
  className,
  variant = "diamond",
}: GoldDividerProps) {
  if (variant === "line") {
    return (
      <div className={cn("w-full h-[1px] bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent my-8", className)} />
    );
  }

  return (
    <div className={cn("flex items-center justify-center gap-4 my-8 w-full opacity-80", className)}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-royal-gold/40 to-royal-gold/60" />
      <div className="w-2 h-2 rotate-45 border border-royal-gold bg-luxury-black shadow-sm shadow-royal-gold" />
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-royal-gold/40 to-royal-gold/60" />
    </div>
  );
}
