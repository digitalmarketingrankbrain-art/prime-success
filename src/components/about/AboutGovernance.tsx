"use client";

import { ShieldCheck } from "lucide-react";

export default function AboutGovernance() {
  return (
    <div className="my-20 p-8 sm:p-12 bg-royal-red-dark border border-royal-gold/30 text-[#F9F5EC] shadow-2xl relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10 text-center sm:text-left">
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <ShieldCheck className="w-8 h-8 text-royal-gold" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            PRGI Registered & EDITORIAL ETHICS
          </h3>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#E8DCC4] leading-relaxed font-light">
          Prime Success Media is an officially registered fortnightly publication under the Press Registrar General of India (Registration No. <strong>DELENG/2023/90580</strong>). We adhere strictly to verified, non-partisan, independent journalistic standards across all print, digital, and broadcasting channels.
        </p>
      </div>
    </div>
  );
}
