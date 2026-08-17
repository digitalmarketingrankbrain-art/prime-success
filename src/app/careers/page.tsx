import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import GoldDivider from "@/components/ui/GoldDivider";
import { PenTool, Palette, TrendingUp, Code, Crown, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Careers — Join Prime Success Media",
  description: "Explore career opportunities across editorial, design, business development, and technology at Prime Success Media.",
};

const DEPARTMENTS = [
  {
    icon: <PenTool className="w-6 h-6 text-royal-gold" />,
    title: "Editorial & Content",
    desc: "Writers, researchers, and journalists shaping our magazine and digital coverage.",
  },
  {
    icon: <Palette className="w-6 h-6 text-royal-gold" />,
    title: "Design & Creative",
    desc: "Visual designers and video editors crafting the Prime Success aesthetic.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-royal-gold" />,
    title: "Business Development",
    desc: "Sales, partnerships, and sponsorship teams driving institutional growth.",
  },
  {
    icon: <Code className="w-6 h-6 text-royal-gold" />,
    title: "Technology",
    desc: "Engineers and digital product specialists building our platform.",
  },
];

const PERKS = [
  {
    icon: <Crown className="w-5 h-5 text-royal-gold" />,
    title: "Prestige & Impact",
    desc: "Work on stories and campaigns that reach a global, influential audience.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-royal-gold" />,
    title: "Collaborative Culture",
    desc: "A close-knit team that values initiative, craft, and mutual respect.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-royal-gold" />,
    title: "Editorial Integrity",
    desc: "Be part of a PRGI-accredited institution built on rigor and trust.",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-royal-gold" />,
    title: "Room to Grow",
    desc: "Clear paths for advancement as the organisation scales globally.",
  },
];

export default function CareersPage() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="JOIN US"
          eyebrow="CAREERS AT PRIME SUCCESS"
          title="BUILD YOUR CAREER WITH US"
          subtitle="We're always looking for talented, driven individuals to join our editorial, design, business, and technology teams."
        />

        {/* Departments Hiring */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
          {DEPARTMENTS.map((dept, idx) => (
            <Reveal key={dept.title} delay={idx * 0.1}>
              <div className="p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 h-full shadow-lg hover:border-royal-gold transition-colors">
                <div className="w-12 h-12 rounded-full border border-royal-gold/50 bg-royal-red/30 flex items-center justify-center">
                  {dept.icon}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-ivory mb-2">{dept.title}</h4>
                  <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">{dept.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <GoldDivider variant="crest" className="my-20" />

        {/* Why Work With Us */}
        <div className="my-16">
          <SectionHeading
            eyebrow="WHY PRIME SUCCESS"
            title="WHAT YOU CAN EXPECT"
            subtitle="A culture built around craft, integrity, and meaningful work."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PERKS.map((perk, idx) => (
              <Reveal key={perk.title} delay={idx * 0.1}>
                <div className="p-6 bg-luxury-dark border border-royal-gold/25 flex items-start gap-4 shadow-md hover:border-royal-gold transition-colors">
                  <div className="flex-shrink-0 mt-0.5">{perk.icon}</div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-ivory mb-1">{perk.title}</h4>
                    <p className="font-sans text-xs text-cream/80 leading-relaxed font-light">{perk.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Application CTA */}
        <div className="p-12 bg-royal-red-dark border border-royal-gold/30 text-center flex flex-col items-center gap-4 relative overflow-hidden shadow-2xl my-16 text-[#F9F5EC]">
          <Crown className="w-10 h-10 text-royal-gold" />
          <h3 className="font-serif text-3xl font-bold text-[#F9F5EC]">
            DON&apos;T SEE YOUR ROLE LISTED?
          </h3>
          <p className="font-sans text-sm text-[#E8DCC4] max-w-xl leading-relaxed font-light">
            We're always open to hearing from exceptional talent. Send your resume and a brief note about yourself to our HR team.
          </p>
          <a
            href="mailto:careers@primesuccess.media"
            className="mt-2 inline-flex items-center justify-center px-7 py-3.5 bg-royal-gold text-luxury-black border border-royal-gold hover:bg-royal-gold-light shadow-lg shadow-royal-gold/10 font-sans font-bold tracking-widest uppercase text-xs transition-all duration-300 cursor-pointer"
          >
            EMAIL YOUR RESUME
          </a>
        </div>
      </div>
    </div>
  );
}
