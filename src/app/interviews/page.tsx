"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { interviewsData } from "@/data/mockData";
import { Interview } from "@/types";
import InterviewHeroPlayer from "@/components/interviews/InterviewHeroPlayer";
import InterviewCategoryFilters from "@/components/interviews/InterviewCategoryFilters";
import InterviewCard from "@/components/interviews/InterviewCard";
import InterviewTranscriptModal from "@/components/interviews/InterviewTranscriptModal";

const CATEGORIES = [
  "ALL",
  "POLITICS & GOVERNANCE",
  "QUALITY & STANDARDS",
  "IT & ENTERPRISE TECH",
  "FINTECH & BLOCKCHAIN",
  "HEALTHCARE INNOVATION",
];

export default function InterviewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeInterview, setActiveInterview] = useState<Interview | null>(null);

  const featuredInterview =
    interviewsData.find((i) => i.isFeatured) || interviewsData[0];

  const filteredInterviews =
    selectedCategory === "ALL"
      ? interviewsData
      : interviewsData.filter((i) => i.category === selectedCategory);

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="INTERVIEW BROADCASTS"
          eyebrow="EXCLUSIVE EXECUTIVE DIALOGUES"
          title="PRIME SUCCESS INTERVIEWS"
          subtitle="Watch high-impact video dispatches and in-depth discussions with the policy makers, founders, and icons shaping India's future."
        />

        {/* Featured Video Player */}
        <InterviewHeroPlayer
          featuredInterview={featuredInterview}
          onPlay={(interview) => setActiveInterview(interview)}
        />

        {/* Category Filters */}
        <InterviewCategoryFilters
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {filteredInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              interview={interview}
              onPlay={(item) => setActiveInterview(item)}
            />
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      {activeInterview && (
        <InterviewTranscriptModal
          interview={activeInterview}
          onClose={() => setActiveInterview(null)}
        />
      )}
    </div>
  );
}
