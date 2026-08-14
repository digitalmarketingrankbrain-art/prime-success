"use client";

import { Building, MapPin, Phone, Mail } from "lucide-react";

export default function ContactHeadquarters() {
  return (
    <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-6 shadow-xl">
      <h3 className="font-serif text-xl font-bold text-royal-gold border-b border-royal-gold/20 pb-3 flex items-center gap-2">
        <Building className="w-5 h-5 text-royal-gold" />
        <span>OFFICIAL HEADQUARTERS</span>
      </h3>
      
      {/* Registered Office */}
      <div className="flex items-start gap-4 text-xs font-sans text-cream/80">
        <MapPin className="w-5 h-5 text-royal-gold flex-shrink-0 mt-0.5" />
        <div>
          <strong className="block text-ivory text-sm font-semibold mb-1">Registered Office</strong>
          <span className="leading-relaxed">
            Kh. 37/15, Street No. 1, Saboli Rd., Sanjay Colony, Narela, Delhi, 110040
          </span>
        </div>
      </div>

      {/* Corporate Office */}
      <div className="flex items-start gap-4 text-xs font-sans text-cream/80 border-t border-royal-gold/15 pt-4">
        <Building className="w-5 h-5 text-royal-gold flex-shrink-0 mt-0.5" />
        <div>
          <strong className="block text-ivory text-sm font-semibold mb-1">Corporate Office</strong>
          <span className="leading-relaxed">
            4th Floor, Aggarwal Metro Heights, 458-A, Netaji Subhash Place, Pitampura, Delhi 110034
          </span>
        </div>
      </div>

      {/* Direct Line & Email */}
      <div className="flex items-center gap-4 text-xs font-sans text-cream/80 border-t border-royal-gold/15 pt-4 font-mono">
        <Phone className="w-5 h-5 text-royal-gold flex-shrink-0" />
        <a href="tel:+919311512354" className="hover:text-royal-gold transition-colors">+91 93115 12354</a>
      </div>

      <div className="flex items-center gap-4 text-xs font-sans text-cream/80 border-t border-royal-gold/15 pt-4 font-mono">
        <Mail className="w-5 h-5 text-royal-gold flex-shrink-0" />
        <a href="mailto:info@primesuccess.media" className="hover:text-royal-gold transition-colors">info@primesuccess.media</a>
      </div>
    </div>
  );
}
