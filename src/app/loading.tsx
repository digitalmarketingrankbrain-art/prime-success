import BrandCrown from "@/components/ui/BrandCrown";
import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-b from-[#080604] via-[#32060B] to-[#080604] flex flex-col items-center justify-center pointer-events-none border-b-2 border-[#E5C158]/60 shadow-2xl">
      <div className="flex flex-col items-center gap-4 animate-pulse">
        <BrandCrown className="w-20 h-20 drop-shadow-lg" />
        <span className="font-serif text-lg tracking-[0.3em] font-bold text-[#F9F5EC] mt-2">
          PRIME SUCCESS
        </span>
        <span className="text-[10px] tracking-[0.4em] font-sans text-[#E5C158] uppercase font-semibold flex items-center gap-2">
          <Sparkles className="w-3 h-3 text-[#E5C158]" />
          EXCELLENCE & LEGACY
          <Sparkles className="w-3 h-3 text-[#E5C158]" />
        </span>
        <div className="w-48 h-[2px] bg-gradient-to-r from-transparent via-[#E5C158] to-transparent origin-center mt-2" />
      </div>
    </div>
  );
}
