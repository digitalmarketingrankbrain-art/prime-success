"use client";

import { useState } from "react";
import { CheckCircle2, Send, Upload } from "lucide-react";

interface Props {
  department: string;
}

export default function CareerApplicationForm({ department }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-10 md:p-12 bg-luxury-card border border-royal-gold text-center flex flex-col items-center gap-6 shadow-2xl animate-in fade-in duration-500">
        <div className="w-20 h-20 rounded-full bg-royal-gold/15 border border-royal-gold flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-royal-gold" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.2em]">
            APPLICATION RECEIVED
          </span>
          <h4 className="font-serif text-3xl md:text-4xl font-bold text-ivory">
            THANK YOU, {formData.fullName.split(" ")[0] || "CANDIDATE"}
          </h4>
        </div>
        <p className="font-sans text-sm text-cream/80 max-w-md leading-relaxed font-light">
          Your application for <strong className="text-ivory">{department}</strong> has been recorded. Our HR team will review it and reach out if there&apos;s a fit.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-3.5 bg-royal-gold/15 hover:bg-royal-gold text-royal-gold hover:text-luxury-black border border-royal-gold text-xs tracking-[0.2em] font-sans font-bold uppercase transition-all duration-300 cursor-pointer"
        >
          SUBMIT ANOTHER APPLICATION
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 md:p-12 bg-luxury-card border border-royal-gold/30 flex flex-col gap-6 shadow-2xl relative overflow-hidden"
    >
      <div className="border-b border-royal-gold/20 pb-5">
        <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.2em] block mb-1">
          APPLYING FOR
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory tracking-wide">
          {department}
        </h3>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="career-fullname" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
          <span>FULL NAME</span>
          <span className="text-royal-gold" aria-hidden="true">*</span>
        </label>
        <input
          id="career-fullname"
          type="text"
          required
          aria-required="true"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Aarav Mehra"
          className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-email" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
            <span>EMAIL ADDRESS</span>
            <span className="text-royal-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="career-email"
            type="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="career-phone" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
            <span>PHONE NUMBER</span>
            <span className="text-royal-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="career-phone"
            type="tel"
            required
            aria-required="true"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 93115 12354"
            className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="career-resume" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
          <span>RESUME / CV</span>
          <span className="text-royal-gold" aria-hidden="true">*</span>
        </label>
        <label
          htmlFor="career-resume"
          className="w-full flex items-center gap-3 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-cream/70 hover:border-royal-gold/60 transition-all cursor-pointer rounded-none"
        >
          <Upload className="w-4 h-4 text-royal-gold flex-shrink-0" />
          <span className="truncate">{resumeName ?? "Upload PDF or DOC — max 5MB"}</span>
        </label>
        <input
          id="career-resume"
          type="file"
          required
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResumeName(e.target.files?.[0]?.name ?? null)}
          className="sr-only"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="career-message" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em]">
          COVER NOTE
        </label>
        <textarea
          id="career-message"
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us why you'd be a great fit..."
          className="w-full p-4 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none min-h-[140px] leading-relaxed resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full h-14 bg-royal-gold hover:bg-royal-gold-light text-luxury-black font-sans text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 shadow-xl shadow-royal-gold/10 flex items-center justify-center gap-3 cursor-pointer group mt-2 rounded-none"
        aria-label={`Submit application for ${department}`}
      >
        <Send className="w-4 h-4 text-luxury-black group-hover:translate-x-1 transition-transform" />
        <span>SUBMIT APPLICATION</span>
      </button>
    </form>
  );
}
