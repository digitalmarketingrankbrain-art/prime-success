import SectionHeading from "@/components/ui/SectionHeading";
import ContactHeadquarters from "@/components/contact/ContactHeadquarters";
import ContactSocialGrid from "@/components/contact/ContactSocialGrid";
import ContactInquiryForm from "@/components/contact/ContactInquiryForm";
import ContactOfficeMaps from "@/components/contact/ContactOfficeMaps";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="CONCIERGE & ADVERTISING"
          eyebrow="EDITORIAL, PRESS & MEDIA DESK"
          title="CONTACT PRIME SUCCESS"
          subtitle="Reach our international editorial bureau, press concierge, or advertising team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-12">
          {/* Left Column: Official Addresses & Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ContactHeadquarters />
            <ContactSocialGrid />

            {/* Press & Media Desk Box */}
            <div className="p-8 bg-royal-red-dark border border-royal-gold/30 flex flex-col gap-3 text-xs font-sans text-[#E8DCC4] shadow-xl">
              <h4 className="font-serif text-lg font-bold text-[#F9F5EC]">PRESS & MEDIA DESK</h4>
              <p className="font-light leading-relaxed">
                For media credentials, broadcast rights, gala authentication, or syndication of Prime Success magazine stories, email{" "}
                <a href="mailto:info@primesuccess.media" className="text-royal-gold hover:underline font-semibold">
                  info@primesuccess.media
                </a>
                .
              </p>
            </div>
          </div>

          {/* Right Column: ADVERTISE WITH US / SEND AN INQUIRY FORM */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <ContactInquiryForm />
          </div>
        </div>

        {/* Office Maps Section */}
        <ContactOfficeMaps />
      </div>
    </div>
  );
}
