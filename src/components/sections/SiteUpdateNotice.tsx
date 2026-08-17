import { Sparkles } from "lucide-react";

export default function SiteUpdateNotice() {
  return (
    <div className="w-full flex justify-center px-6 md:px-12 py-6">
      <div className="flex items-center gap-3 max-w-2xl text-center border border-royal-gold/30 bg-luxury-card/60 rounded-full px-5 py-2.5">
        <Sparkles className="w-4 h-4 text-royal-gold flex-shrink-0" />
        <p className="font-sans text-xs md:text-sm text-cream/90">
          A Refined Identity — our brand logo and site theme have been newly unveiled.
        </p>
      </div>
    </div>
  );
}
