"use client";

export default function ContactOfficeMaps() {
  return (
    <div className="my-16 flex flex-col gap-6">
      <h3 className="font-serif text-2xl font-bold text-ivory text-center">
        OUR OFFICE LOCATIONS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-4 bg-luxury-card border border-royal-gold/30 flex flex-col gap-3 shadow-xl">
          <span className="font-serif text-base font-bold text-royal-gold">Registered Office — Narela</span>
          <div className="w-full h-64 border border-royal-gold/20 overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=Kh.%2037/15%2C%20Street%20No.%201%2C%20Saboli%20Rd%2C%20Sanjay%20Colony%2C%20Narela%2C%20Delhi%2C%20110040&output=embed"
              title="Registered Office Narela Map"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        <div className="p-4 bg-luxury-card border border-royal-gold/30 flex flex-col gap-3 shadow-xl">
          <span className="font-serif text-base font-bold text-royal-gold">Corporate Office — Pitampura</span>
          <div className="w-full h-64 border border-royal-gold/20 overflow-hidden">
            <iframe
              src="https://www.google.com/maps?q=4th%20Floor%2C%20Aggarwal%20Metro%20Height%2C%20458-A%2C%20Netaji%20Subhash%20Place%2C%20Pitampura%2C%20Delhi%20110034&output=embed"
              title="Corporate Office Pitampura Map"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
