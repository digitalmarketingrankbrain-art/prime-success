"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CheckCircle2, ShieldAlert } from "lucide-react";

export default function NominatePage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nomineeName: "",
    organization: "",
    designation: "",
    category: "Entrepreneurship",
    email: "",
    phone: "",
    achievement: "",
    reasoning: "",
    website: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="NOMINATION"
          eyebrow="RECOGNISE EXCELLENCE"
          title="NOMINATE A LEADER"
          subtitle="Submit an extraordinary individual for consideration by the Prime Success Advisory Board."
        />

        {submitted ? (
          <div className="p-12 bg-luxury-card border border-royal-gold text-center flex flex-col items-center gap-6 my-12 animate-fadeIn">
            <CheckCircle2 className="w-16 h-16 text-royal-gold" />
            <h3 className="font-serif text-3xl font-bold text-ivory">
              NOMINATION RECEIVED
            </h3>
            <p className="font-sans text-sm text-cream/80 max-w-lg leading-relaxed">
              Thank you for submitting your nomination for <strong>{formData.nomineeName}</strong>. Our research bureau will conduct background evaluation and notify selected nominees via encrypted press invitation.
            </p>
            <Button onClick={() => setSubmitted(false)} variant="outline" size="md">
              SUBMIT ANOTHER NOMINATION
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 bg-luxury-card border border-royal-gold/20 flex flex-col gap-8 shadow-2xl my-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold tracking-wider text-royal-gold uppercase">
                  Nominee Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.nomineeName}
                  onChange={(e) => setFormData({ ...formData, nomineeName: e.target.value })}
                  placeholder="e.g. Dr. Alexander Vance"
                  className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold tracking-wider text-royal-gold uppercase">
                  Organization / Enterprise *
                </label>
                <input
                  type="text"
                  required
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  placeholder="e.g. Apex Global Energy"
                  className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold tracking-wider text-royal-gold uppercase">
                  Designation / Role *
                </label>
                <input
                  type="text"
                  required
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                  placeholder="e.g. Executive Chairman"
                  className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold tracking-wider text-royal-gold uppercase">
                  Award Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory focus:outline-none focus:border-royal-gold"
                >
                  <option value="Entrepreneurship">Entrepreneurship</option>
                  <option value="Leadership">Leadership</option>
                  <option value="Innovation">Innovation</option>
                  <option value="Social Impact">Social Impact</option>
                  <option value="Creative Excellence">Creative Excellence</option>
                  <option value="Business Excellence">Business Excellence</option>
                  <option value="Lifetime Achievement">Lifetime Achievement</option>
                  <option value="Rising Icon">Rising Icon</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold tracking-wider text-royal-gold uppercase">
                  Nominator Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-sans font-semibold tracking-wider text-royal-gold uppercase">
                  Website / LinkedIn URL
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://linkedin.com/in/profile"
                  className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans font-semibold tracking-wider text-royal-gold uppercase">
                Key Achievement Summary *
              </label>
              <textarea
                rows={3}
                required
                value={formData.achievement}
                onChange={(e) => setFormData({ ...formData, achievement: e.target.value })}
                placeholder="Highlight key economic value, technological innovation, or societal impact..."
                className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans font-semibold tracking-wider text-royal-gold uppercase">
                Why Should They Be Recognized? *
              </label>
              <textarea
                rows={4}
                required
                value={formData.reasoning}
                onChange={(e) => setFormData({ ...formData, reasoning: e.target.value })}
                placeholder="Elaborate on how the nominee exemplifies The Prime Standard of legacy and leadership..."
                className="bg-luxury-dark border border-royal-gold/30 px-4 py-3 text-sm text-ivory placeholder:text-cream/30 focus:outline-none focus:border-royal-gold resize-none"
              />
            </div>

            <div className="flex items-center gap-3 p-4 bg-luxury-dark border-l-2 border-royal-gold text-xs text-cream/70">
              <ShieldAlert className="w-5 h-5 text-royal-gold flex-shrink-0" />
              <span>All nomination data is strictly confidential and reviewed exclusively by the advisory bureau.</span>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              SUBMIT OFFICIAL NOMINATION
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
