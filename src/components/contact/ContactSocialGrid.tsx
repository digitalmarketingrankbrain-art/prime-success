"use client";

export default function ContactSocialGrid() {
  return (
    <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 shadow-xl">
      <h3 className="font-serif text-lg font-bold text-royal-gold border-b border-royal-gold/20 pb-2">
        FOLLOW PRIME SUCCESS
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
        <a
          href="https://www.instagram.com/prime___success/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-luxury-dark border border-royal-gold/20 hover:border-royal-gold text-ivory flex flex-col gap-1 transition-colors group"
        >
          <span className="text-[10px] text-royal-gold font-bold uppercase tracking-wider">Instagram</span>
          <span className="font-semibold text-cream group-hover:text-gold-gradient break-all">@prime___success</span>
        </a>
        <a
          href="https://www.facebook.com/people/prime-success/61554412108481/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-luxury-dark border border-royal-gold/20 hover:border-royal-gold text-ivory flex flex-col gap-1 transition-colors group"
        >
          <span className="text-[10px] text-royal-gold font-bold uppercase tracking-wider">Facebook</span>
          <span className="font-semibold text-cream group-hover:text-gold-gradient">Prime Success</span>
        </a>
        <a
          href="https://www.linkedin.com/in/prime-success-0748432a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-luxury-dark border border-royal-gold/20 hover:border-royal-gold text-ivory flex flex-col gap-1 transition-colors group"
        >
          <span className="text-[10px] text-royal-gold font-bold uppercase tracking-wider">LinkedIn</span>
          <span className="font-semibold text-cream group-hover:text-gold-gradient">Prime Success</span>
        </a>
      </div>
    </div>
  );
}
