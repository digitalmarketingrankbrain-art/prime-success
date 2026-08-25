"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
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
  const [interviews, setInterviews] = useState<Interview[] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [activeInterview, setActiveInterview] = useState<Interview | null>(null);

  useEffect(() => {
    fetch("/api/interviews")
      .then((res) => (res.ok ? res.json() : { interviews: [] }))
      .then((data) => setInterviews(data.interviews ?? []))
      .catch(() => setInterviews([]));
  }, []);

  if (!interviews) {
    return (
      <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen flex items-center justify-center gap-3 text-cream/70">
        <Loader2 className="w-5 h-5 text-royal-gold animate-spin" />
        <span className="font-sans text-xs uppercase tracking-widest">Loading interviews…</span>
      </div>
    );
  }

  const featuredInterview = interviews.find((i) => i.isFeatured) || interviews[0];

  const filteredInterviews =
    selectedCategory === "ALL"
      ? interviews
      : interviews.filter((i) => i.category === selectedCategory);

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
        {featuredInterview && (
          <InterviewHeroPlayer
            featuredInterview={featuredInterview}
            onPlay={(interview) => setActiveInterview(interview)}
          />
        )}

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
