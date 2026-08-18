import Link from "next/link";
import { PenTool, Palette, TrendingUp, Code } from "lucide-react";
import Reveal from "@/components/animations/Reveal";

const DEPARTMENTS = [
  {
    icon: <PenTool className="w-6 h-6 text-royal-gold" />,
    title: "Journalism",
    desc: "Reporters and correspondents covering leadership, governance, and business stories for our fortnightly print and digital editions.",
    hiring: true,
  },
  {
    icon: <Palette className="w-6 h-6 text-royal-gold" />,
    title: "Design & Creative",
    desc: "Visual designers and video editors crafting the Prime Success aesthetic.",
    hiring: false,
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-royal-gold" />,
    title: "Business Development",
    desc: "Sales, partnerships, and sponsorship teams driving institutional growth.",
    hiring: false,
  },
  {
    icon: <Code className="w-6 h-6 text-royal-gold" />,
    title: "Technology",
    desc: "Engineers and digital product specialists building our platform.",
    hiring: false,
  },
];

export default function CareerDepartments() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-16">
      {DEPARTMENTS.map((dept, idx) => (
        <Reveal key={dept.title} delay={idx * 0.1}>
          <Link
            href={`/careers/apply/${encodeURIComponent(dept.title)}`}
            className="relative w-full text-left p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-4 h-full shadow-lg hover:border-royal-gold transition-colors cursor-pointer"
          >
            {dept.hiring && (
              <span className="absolute top-4 right-4 px-2.5 py-1 bg-royal-red text-[#F9F5EC] text-[9px] font-sans font-bold uppercase tracking-widest">
                Hiring Now
              </span>
            )}
            <div className="w-12 h-12 rounded-full border border-royal-gold/50 bg-royal-red/30 flex items-center justify-center">
              {dept.icon}
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-ivory mb-2">{dept.title}</h4>
              <p className="font-sans text-xs text-cream/80 leading-relaxed font-light mb-3">{dept.desc}</p>
              <span className="text-[10px] font-sans font-bold text-royal-gold uppercase tracking-[0.15em]">
                Apply Now →
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
