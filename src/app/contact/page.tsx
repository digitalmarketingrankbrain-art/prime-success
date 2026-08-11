"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="CONCIERGE"
          eyebrow="EDITORIAL & PRESS INQUIRIES"
          title="CONTACT PRIME SUCCESS"
          subtitle="Reach our international advisory bureau, editorial desk, or gala concierge."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 bg-luxury-card border border-royal-gold/20 flex flex-col gap-6">
              <h3 className="font-serif text-xl font-bold text-royal-gold">GLOBAL HEADQUARTERS</h3>
              
              <div className="flex items-start gap-4 text-xs font-sans text-cream/80">
                <MapPin className="w-5 h-5 text-royal-gold flex-shrink-0" />
                <div>
                  <strong className="block text-ivory">Mumbai Bureau</strong>
                  <span>The St. Regis Financial Center, Senapati Bapat Marg, Lower Parel, Mumbai, Maharashtra 400013</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-sans text-cream/80">
                <Mail className="w-5 h-5 text-royal-gold flex-shrink-0" />
                <span>concierge@primesuccess.org</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-sans text-cream/80">
                <Phone className="w-5 h-5 text-royal-gold flex-shrink-0" />
                <span>+91 22 8800 9900</span>
              </div>
            </div>

            <div className="p-8 bg-royal-red-dark border border-royal-gold/20 flex flex-col gap-3 text-xs font-sans text-cream/80">
              <h4 className="font-serif text-lg font-bold text-ivory">PRESS & MEDIA DESK</h4>
              <p className="font-light">
                For media credentials, broadcast rights, or syndication of Prime Success magazine stories, email press@primesuccess.org.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-12 bg-luxury-card border border-royal-gold text-center flex flex-col items-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-royal-gold" />
                <h4 className="font-serif text-2xl font-bold text-ivory">MESSAGE TRANSMITTED</h4>
                <p className="font-sans text-xs text-cream/80">
                  Our editorial concierge will review your message and reply within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="p-8 bg-luxury-card border border-royal-gold/20 flex flex-col gap-6"
              >
                <h3 className="font-serif text-2xl font-bold text-ivory">SEND AN INQUIRY</h3>
                
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-sans text-royal-gold uppercase tracking-wider font-semibold">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lord Harrington"
                    className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-sans text-royal-gold uppercase tracking-wider font-semibold">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-sans text-royal-gold uppercase tracking-wider font-semibold">Inquiry Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Press, Gala Accreditation, or General Inquiries"
                    className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-sans text-royal-gold uppercase tracking-wider font-semibold">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="md">
                  TRANSMIT MESSAGE
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
