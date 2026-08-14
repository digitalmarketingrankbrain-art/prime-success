"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { Flag, Sparkles, TrendingUp, CheckCircle2, ChevronRight } from "lucide-react";

const TIMELINE_STEPS = [
  {
    period: "1947 – 1990",
    title: "Foundations of Self-Reliance",
    desc: "Early industrial and agricultural policy laying the groundwork for a self-sufficient republic.",
    metric: "Industrial & Agricultural Blueprint",
  },
  {
    period: "1991 – 2010",
    title: "Liberalisation & Opening Up",
    desc: "Economic reforms integrate India into global markets, accelerating growth and enterprise.",
    metric: "Global Market Integration",
  },
  {
    period: "2011 – 2024",
    title: "Digital & Infrastructure Leap",
    desc: "Mass digitisation, expressway and rail expansion, and a rising manufacturing base.",
    metric: "Digital Public Infrastructure",
  },
  {
    period: "2025 – 2047",
    title: "The Viksit Bharat Push",
    desc: "A coordinated national push across economy, technology and sustainability toward developed-nation status.",
    metric: "Centennial Developed Status Target",
  },
];

export default function ViksitBharatSection() {
  const [activeStep, setActiveStep] = useState(3);

  return (
    <section className="py-24 bg-luxury-black text-ivory border-b border-royal-gold/20 relative overflow-hidden bg-noise">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading
          number="NATIONAL INITIATIVE"
          eyebrow="CENTENNIAL ROADMAP FOR INDIA"
          title="VIKSIT BHARAT @ 2047"
          subtitle="Tracing India's journey from independence to a fully developed nation by its centennial year."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-12 items-stretch">
          
          {/* Left Summary Box */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-gradient-to-br from-[#32060B] via-[#4A0A10] to-[#220407] border border-royal-gold/40 text-[#F9F5EC] flex flex-col justify-between gap-6 shadow-2xl relative rounded-xl group overflow-hidden">
            <div className="flex flex-col gap-5 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#6B0E16] border border-[#E5C158]/50 flex items-center justify-center shadow-md">
                    <Flag className="w-5 h-5 text-[#E5C158]" />
                  </div>
                  <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#E5C158] uppercase">
                    CENTENNIAL VISION
                  </span>
                </div>
                <Sparkles className="w-4 h-4 text-[#E5C158]" />
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F9F5EC] leading-snug">
                THE CENTENNIAL PUSH TOWARD 2047
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#E8DCC4] leading-relaxed font-light">
                India&apos;s journey since independence, and the monumental initiative to become a fully developed nation by 2047 — traced from early self-reliance to globalization, digital infrastructure, and comprehensive Economic & Sustainability dominance.
              </p>

              <div className="p-4 bg-black/40 border-l-2 border-[#E5C158] text-xs font-sans text-[#E8DCC4] flex items-center gap-3 rounded-r-md">
                <TrendingUp className="w-5 h-5 text-[#E5C158] flex-shrink-0" />
                <span>Active Target: {TIMELINE_STEPS[activeStep].metric}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5C158]/20 flex items-center justify-between text-xs text-[#E5C158] font-bold">
              <span>National Blueprint</span>
              <span className="flex items-center gap-1">
                Explore Full Roadmap <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Right Interactive Timeline Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 border transition-all duration-300 shadow-xl rounded-xl flex flex-col sm:flex-row items-start sm:items-center gap-5 cursor-pointer relative ${
                    isActive
                      ? "bg-[#1C160F] border-[#E5C158] shadow-lg shadow-[#E5C158]/10"
                      : "bg-[#120E09]/80 border-royal-gold/25 hover:border-royal-gold/60 hover:bg-[#1A140C]"
                  }`}
                >
                  {/* Step Period Medallion */}
                  <div className={`px-4 py-2.5 rounded-lg border font-serif text-xs font-bold tracking-wider flex-shrink-0 transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#FFF1B0] to-[#E5C158] text-[#120E09] border-[#FFF1B0]"
                      : "bg-[#1E1810] text-[#E5C158] border-royal-gold/30"
                  }`}>
                    {step.period}
                  </div>

                  <div className="flex flex-col gap-1 flex-grow">
                    <h4 className="font-serif text-lg font-bold text-[#F9F5EC] flex items-center gap-2">
                      {step.title}
                      {isActive && (
                        <CheckCircle2 className="w-4 h-4 text-[#E5C158] flex-shrink-0" />
                      )}
                    </h4>
                    <p className="font-sans text-xs text-[#E8DCC4]/80 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
