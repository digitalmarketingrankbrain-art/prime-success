"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import BrandCrown from "@/components/ui/BrandCrown";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Root App Error caught by Next.js Error Boundary:", error);
  }, [error]);

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-24 bg-[#080604] text-[#F9F5EC] bg-noise">
      <div className="max-w-xl w-full bg-[#120E09] border border-[#E5C158]/40 p-8 sm:p-12 shadow-2xl rounded-2xl text-center flex flex-col items-center gap-6 relative overflow-hidden">
        {/* Top Ornamental Brand Badge */}
        <div className="flex items-center gap-3 bg-[#6B0E16]/60 border border-[#E5C158]/50 px-4 py-1.5 rounded-full shadow-lg">
          <BrandCrown className="w-5 h-5" />
          <span className="text-[11px] font-sans font-bold text-[#E5C158] uppercase tracking-[0.25em]">
            SYSTEM CONCIERGE DISPATCH
          </span>
        </div>

        <div className="w-16 h-16 rounded-full bg-[#6B0E16]/30 border border-[#E5C158]/40 flex items-center justify-center text-[#E5C158] shadow-inner">
          <AlertCircle className="w-8 h-8 text-[#E5C158]" />
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#F9F5EC]">
            UNEXPECTED EDITORIAL INTERRUPTION
          </h1>
          <p className="font-sans text-xs sm:text-sm text-[#E8DCC4]/80 font-light leading-relaxed">
            We encountered a temporary rendering exception while loading this page. Our technical concierge team has been automatically notified.
          </p>
          {error.digest && (
            <span className="text-[10px] font-mono text-royal-gold/60 mt-1">
              Error Digest Code: {error.digest}
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4 border-t border-[#E5C158]/20">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-6 py-3 bg-[#6B0E16] text-[#F9F5EC] border border-[#E5C158]/60 text-xs font-sans font-bold tracking-[0.2em] uppercase rounded-md hover:bg-[#8B121D] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <RefreshCw className="w-4 h-4 text-[#E5C158]" />
            <span>RETRY PAGE</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-transparent text-[#E5C158] border border-[#E5C158]/50 text-xs font-sans font-bold tracking-[0.2em] uppercase rounded-md hover:bg-[#E5C158]/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#E5C158]" />
            <span>RETURN TO HALL</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
