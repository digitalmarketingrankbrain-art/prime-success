import AboutHero from "@/components/about/AboutHero";
import AboutEditorialBoard from "@/components/about/AboutEditorialBoard";
import AboutGovernance from "@/components/about/AboutGovernance";
import AboutChannelsGrid from "@/components/about/AboutChannelsGrid";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <AboutHero />
        <AboutEditorialBoard />
        <AboutGovernance />
        <AboutChannelsGrid />
      </div>
    </div>
  );
}
