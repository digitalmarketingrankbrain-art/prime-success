import Hero from "@/components/hero/Hero";
import PhilosophySection from "@/components/sections/PhilosophySection";
import HallOfPrimeSection from "@/components/sections/HallOfPrimeSection";
import CoverStorySection from "@/components/sections/CoverStorySection";
import AwardCategoriesSection from "@/components/sections/AwardCategoriesSection";
import TrophyShowcase from "@/components/sections/TrophyShowcase";
import EventSection from "@/components/sections/EventSection";
import PatronageSection from "@/components/sections/PatronageSection";
import NominationCTA from "@/components/sections/NominationCTA";
import { winnersData, articlesData, awardsData, galaEventData } from "@/data/mockData";

export default function HomePage() {
  const coverStory = articlesData.find((a) => a.isCoverStory) || articlesData[0];

  return (
    <div className="w-full flex flex-col overflow-x-hidden bg-luxury-black">
      {/* SECTION 01: HERO */}
      <Hero />

      {/* SECTION 02: THE PRIME STANDARD PHILOSOPHY */}
      <PhilosophySection />

      {/* SECTION 03: FEATURED AWARDEES HALL OF PRIME */}
      <HallOfPrimeSection winners={winnersData} />

      {/* SECTION 04: COVER STORY */}
      <CoverStorySection article={coverStory} />

      {/* SECTION 05: 3D ROTATING TROPHY MONUMENT SHOWCASE */}
      <TrophyShowcase />

      {/* SECTION 06: AWARD CATEGORIES */}
      <AwardCategoriesSection categories={awardsData} />

      {/* SECTION 07: GLOBAL PATRONAGE & INSTITUTIONAL ALLIANCES */}
      <PatronageSection />

      {/* SECTION 08: UPCOMING GRAND GALA EVENT */}
      <EventSection event={galaEventData} />

      {/* SECTION 09: NOMINATION CTA */}
      <NominationCTA />
    </div>
  );
}
