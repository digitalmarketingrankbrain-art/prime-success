"use client";

import { ShieldCheck, Award } from "lucide-react";
import { MagazineIssue } from "@/types";

interface Props {
  issue: MagazineIssue;
}

export default function MagazinePrgiAccreditation({ issue }: Props) {
  return (
    <div className="my-20 p-8 sm:p-12 bg-royal-red-dark border border-royal-gold/30 text-[#F9F5EC] shadow-2xl relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10 text-center sm:text-left">
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <ShieldCheck className="w-8 h-8 text-royal-gold" />
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            PRESS REGISTRAR GENERAL OF INDIA (PRGI)
          </h3>
        </div>
        <p className="font-sans text-xs sm:text-sm text-[#E8DCC4] leading-relaxed font-light">
          This issue ({issue.issueNumber}, {issue.monthYear}) is a government-registered fortnightly publication registered under PRGI Reg No. <strong>{issue.prgiRegNo}</strong>. All digital archival copies preserved in this repository represent exact vector print reproductions.
        </p>
        <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-royal-gold/20 text-xs font-sans text-royal-gold">
          <span className="flex items-center gap-2">
            <Award className="w-4 h-4" /> PRGI REGISTRATION: {issue.prgiRegNo}
          </span>
          <span>•</span>
          <span>OFFICIAL DIGITAL ARCHIVE</span>
        </div>
      </div>
    </div>
  );
}
