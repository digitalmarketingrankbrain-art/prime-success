import Hero from "@/components/hero/Hero";
import NewsTickerBar from "@/components/sections/NewsTickerBar";
import PhilosophySection from "@/components/sections/PhilosophySection";
import PrimeSurveySection from "@/components/sections/PrimeSurveySection";
import VideoInterviewsSection from "@/components/sections/VideoInterviewsSection";
import ViksitBharatSection from "@/components/sections/ViksitBharatSection";
import ShortNewsSection from "@/components/sections/ShortNewsSection";
import AwardCategoriesSection from "@/components/sections/AwardCategoriesSection";
import PatronageSection from "@/components/sections/PatronageSection";
import NominationCTA from "@/components/sections/NominationCTA";
import SiteUpdateNotice from "@/components/sections/SiteUpdateNotice";
import ErrorBoundary from "@/components/ui/ErrorBoundary";
import { awardsData } from "@/data/mockData";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col overflow-x-hidden bg-luxury-black">
      {/* SECTION 01: HERO */}
      <ErrorBoundary sectionName="Hero Banner">
        <Hero />
      </ErrorBoundary>

      {/* SECTION 02: LIVE BREAKING NEWS TICKER */}
      <ErrorBoundary sectionName="News Ticker Bar">
        <NewsTickerBar />
      </ErrorBoundary>

      {/* SECTION 03: THE PRIME STANDARD PHILOSOPHY */}
      <ErrorBoundary sectionName="Philosophy Section">
        <PhilosophySection />
      </ErrorBoundary>

      {/* SECTION 05: PRIME SURVEY - LIVE READER POLL */}
      <ErrorBoundary sectionName="Public Sentiment Survey">
        <PrimeSurveySection />
      </ErrorBoundary>

      {/* SECTION 06: VIDEO INTERVIEWS BROADCAST */}
      <ErrorBoundary sectionName="Video Interviews Feed">
        <VideoInterviewsSection />
      </ErrorBoundary>

      {/* SECTION 07: VIKSIT BHARAT @ 2047 CENTENNIAL TIMELINE */}
      <ErrorBoundary sectionName="Centennial Timeline">
        <ViksitBharatSection />
      </ErrorBoundary>

      {/* SECTION 08: SHORT NEWS BRIEFS */}
      <ErrorBoundary sectionName="Editorial Briefs">
        <ShortNewsSection />
      </ErrorBoundary>

      {/* SECTION 10: AWARD CATEGORIES */}
      <ErrorBoundary sectionName="Award Categories Index">
        <AwardCategoriesSection categories={awardsData} />
      </ErrorBoundary>

      {/* SECTION 11: GLOBAL PATRONAGE & INSTITUTIONAL ALLIANCES */}
      <ErrorBoundary sectionName="Patronage Grid">
        <PatronageSection />
      </ErrorBoundary>

      {/* SECTION 13: NOMINATION CTA */}
      <ErrorBoundary sectionName="Nomination Banner">
        <NominationCTA />
      </ErrorBoundary>

      {/* SITE UPDATE NOTICE: New Logo & Theme Announcement */}
      <ErrorBoundary sectionName="Site Update Notice">
        <SiteUpdateNotice />
      </ErrorBoundary>
    </div>
  );
}
