"use client";

import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

export default function ContactInquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    titlePrefix: "Mr.",
    fullName: "",
    phone: "",
    email: "",
    subject: "Advertise with us",
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
            TRANSMISSION SUCCESSFUL
          </span>
          <h4 className="font-serif text-3xl md:text-4xl font-bold text-ivory">
            MESSAGE RECEIVED
          </h4>
        </div>
        <p className="font-sans text-sm text-cream/80 max-w-md leading-relaxed font-light">
          Thank you, <strong>{formData.titlePrefix} {formData.fullName}</strong>. Our corporate concierge team will review your message and respond within 24 business hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-8 py-3.5 bg-royal-gold/15 hover:bg-royal-gold text-royal-gold hover:text-luxury-black border border-royal-gold text-xs tracking-[0.2em] font-sans font-bold uppercase transition-all duration-300 cursor-pointer"
        >
          SEND ANOTHER MESSAGE
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 sm:p-10 md:p-12 bg-luxury-card border border-royal-gold/30 flex flex-col gap-6 shadow-2xl relative overflow-hidden"
    >
      {/* Form Header */}
      <div className="border-b border-royal-gold/20 pb-5">
        <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.2em] block mb-1">
          EXECUTIVE CONCIERGE
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ivory tracking-wide">
          ADVERTISE WITH US / SEND INQUIRY
        </h3>
        <p className="font-sans text-xs sm:text-sm text-cream/70 mt-1.5 font-light leading-relaxed">
          Reach global CEOs, enterprise leaders, and decision-makers across Delhi/NCR and international print & digital editions.
        </p>
      </div>
      
      {/* Row 1: Title Prefix & Full Name (5-Column Desktop Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
        <div className="sm:col-span-1 flex flex-col gap-1.5">
          <label htmlFor="contact-title" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
            <span>TITLE</span>
            <span className="text-royal-gold" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="contact-title"
              name="titlePrefix"
              required
              aria-required="true"
              value={formData.titlePrefix}
              onChange={(e) => setFormData({ ...formData, titlePrefix: e.target.value })}
              className="w-full h-12 px-3 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all appearance-none pr-8 cursor-pointer rounded-none"
            >
              <option value="Mr." className="bg-luxury-black text-ivory">Mr.</option>
              <option value="Mrs." className="bg-luxury-black text-ivory">Mrs.</option>
              <option value="Ms." className="bg-luxury-black text-ivory">Ms.</option>
              <option value="Dr." className="bg-luxury-black text-ivory">Dr.</option>
              <option value="Lord" className="bg-luxury-black text-ivory">Lord</option>
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-royal-gold/70 text-xs">
              ▼
            </div>
          </div>
        </div>

        <div className="sm:col-span-4 flex flex-col gap-1.5">
          <label htmlFor="contact-fullname" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
            <span>FULL NAME</span>
            <span className="text-royal-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-fullname"
            type="text"
            name="fullName"
            required
            aria-required="true"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="e.g. Mr. Sachin K Verma"
            className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
          />
        </div>
      </div>

      {/* Row 2: Phone & Email (Balanced 2-Column Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-phone" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
            <span>PHONE NUMBER</span>
            <span className="text-royal-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            required
            aria-required="true"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 93115 12354"
            className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
            <span>EMAIL ADDRESS</span>
            <span className="text-royal-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            name="email"
            required
            aria-required="true"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="info@primesuccess.media"
            className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
          />
        </div>
      </div>

      {/* Row 3: Inquiry Type */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-inquiry" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
          <span>INQUIRY TYPE</span>
          <span className="text-royal-gold" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <select
            id="contact-inquiry"
            name="subject"
            required
            aria-required="true"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all appearance-none pr-10 cursor-pointer rounded-none"
          >
            <option value="Advertise with us" className="bg-luxury-black text-ivory">Advertise with us</option>
            <option value="Press Concierge" className="bg-luxury-black text-ivory">Press Concierge & Media Credentials</option>
            <option value="Interview Pitch" className="bg-luxury-black text-ivory">Get Interviewed by Prime Success</option>
            <option value="Gala Ticket Accreditation" className="bg-luxury-black text-ivory">Gala Ticket Accreditation</option>
            <option value="General Inquiry" className="bg-luxury-black text-ivory">General Corporate Inquiry</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-royal-gold/70 text-xs">
            ▼
          </div>
        </div>
      </div>

      {/* Row 4: Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em] flex items-center gap-1">
          <span>MESSAGE</span>
          <span className="text-royal-gold" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          aria-required="true"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Write your advertising requirements, interview proposal, or inquiry details here..."
          className="w-full p-4 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none min-h-[140px] leading-relaxed resize-y"
        />
      </div>

      {/* Row 5: Submit CTA Button */}
      <button
        type="submit"
        className="w-full h-14 bg-royal-gold hover:bg-royal-gold-light text-luxury-black font-sans text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 shadow-xl shadow-royal-gold/10 flex items-center justify-center gap-3 cursor-pointer group mt-2 rounded-none"
        aria-label="Send inquiry message to Prime Success"
      >
        <Send className="w-4 h-4 text-luxury-black group-hover:translate-x-1 transition-transform" />
        <span>SEND MESSAGE</span>
      </button>
    </form>
  );
}
