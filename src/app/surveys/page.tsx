"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import GoldDivider from "@/components/ui/GoldDivider";
import { surveysData } from "@/data/mockData";
import { SurveyPoll } from "@/types";
import { Vote, CheckCircle2, BarChart3, Crown, Sparkles } from "lucide-react";

export default function SurveysPage() {
  const [polls, setPolls] = useState<SurveyPoll[]>(surveysData);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [votedPolls, setVotedPolls] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({
    "poll-01": true, // Show results by default for poll-01 matching screenshot
  });
  const [totalUserVotes, setTotalUserVotes] = useState(0);

  const totalCategories = new Set(polls.map((poll) => poll.category)).size;

  const handleOptionSelect = (pollId: string, optionId: string) => {
    setSelectedOptions((prev) => ({ ...prev, [pollId]: optionId }));
  };

  const handleVote = (pollId: string) => {
    const chosenOptionId = selectedOptions[pollId];
    if (!chosenOptionId || votedPolls[pollId]) return;

    setPolls((prevPolls) =>
      prevPolls.map((poll) => {
        if (poll.id !== pollId) return poll;
        return {
          ...poll,
          totalVotes: poll.totalVotes + 1,
          options: poll.options.map((opt) =>
            opt.id === chosenOptionId ? { ...opt, votes: opt.votes + 1 } : opt
          ),
        };
      })
    );

    setVotedPolls((prev) => ({ ...prev, [pollId]: true }));
    setShowResults((prev) => ({ ...prev, [pollId]: true }));
    setTotalUserVotes((prev) => prev + 1);
  };

  const toggleResults = (pollId: string) => {
    setShowResults((prev) => ({ ...prev, [pollId]: !prev[pollId] }));
  };

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Eyebrow & Hero Title */}
        <SectionHeading
          number="PRIME SUCCESS · SURVEYS"
          eyebrow="YOUR VOICE · PUBLIC OPINION & POLLS"
          title="PRIME SUCCESS COUNTS YOUR VOICE"
          subtitle="Every poll below is open to any reader, tallied live and published on the record. Pick a category and make your ballot count."
        />

        {/* Live Stats Counter Banner (Matching Screenshot) */}
        <div className="my-12 p-8 bg-luxury-card border border-royal-gold/30 flex flex-wrap items-center justify-around gap-8 text-center shadow-xl">
          <div className="flex flex-col items-center">
            <span className="font-serif text-4xl md:text-5xl font-bold text-gold-gradient drop-shadow-md">
              {polls.length}
            </span>
            <span className="text-xs font-sans text-cream/80 uppercase font-semibold tracking-wider mt-1">
              Live Polls
            </span>
          </div>

          <div className="h-10 w-[1px] bg-royal-gold/20 hidden sm:block" />

          <div className="flex flex-col items-center">
            <span className="font-serif text-4xl md:text-5xl font-bold text-gold-gradient drop-shadow-md">
              {totalCategories}
            </span>
            <span className="text-xs font-sans text-cream/80 uppercase font-semibold tracking-wider mt-1">
              Categories
            </span>
          </div>

          <div className="h-10 w-[1px] bg-royal-gold/20 hidden sm:block" />

          <div className="flex flex-col items-center">
            <span className="font-serif text-4xl md:text-5xl font-bold text-gold-gradient drop-shadow-md">
              50K+
            </span>
            <span className="text-xs font-sans text-cream/80 uppercase font-semibold tracking-wider mt-1">
              Monthly Voters
            </span>
          </div>
        </div>

        {/* Grid of Poll Cards (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          {polls.map((poll) => {
            const hasVoted = votedPolls[poll.id];
            const isResultsVisible = showResults[poll.id];
            const selectedOptId = selectedOptions[poll.id];

            return (
                <div key={poll.id} className="bg-luxury-card border border-royal-gold/30 p-8 flex flex-col justify-between h-full shadow-xl hover:border-royal-gold/60 transition-all duration-300 relative group">
                  
                  {/* Top-Right Circular Dashed Stamp: LIVE */}
                  <div className="absolute top-6 right-6 w-11 h-11 rounded-full border border-dashed border-royal-gold/60 flex items-center justify-center text-[10px] font-sans font-bold text-royal-gold tracking-widest uppercase pointer-events-none">
                    LIVE
                  </div>

                  <div className="flex flex-col gap-4">
                    {/* Category Tag */}
                    <div className="flex items-center justify-between border-b border-royal-gold/20 pb-3 pr-14">
                      <span className="px-3 py-1 bg-royal-red text-[#F9F5EC] text-[10px] tracking-[0.25em] font-sans font-bold uppercase border border-royal-gold/30">
                        {poll.category}
                      </span>
                    </div>

                    {/* Question Title (Centered & Bold like Screenshot) */}
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-ivory text-center leading-snug my-2 pr-2">
                      {poll.title}
                    </h3>

                    {/* Options List */}
                    <div className="flex flex-col gap-3 my-2">
                      {poll.options.map((option) => {
                        const isSelected = selectedOptId === option.id;
                        const percentage =
                          poll.totalVotes > 0
                            ? Math.round((option.votes / poll.totalVotes) * 100)
                            : 0;

                        return (
                          <div
                            key={option.id}
                            onClick={() => !hasVoted && handleOptionSelect(poll.id, option.id)}
                            className={`p-4 border transition-all duration-300 flex flex-col gap-2 relative overflow-hidden ${
                              hasVoted
                                ? "border-royal-gold/30 bg-luxury-dark/60 cursor-default"
                                : isSelected
                                ? "border-royal-gold bg-royal-gold/15 cursor-pointer shadow-md"
                                : "border-royal-gold/20 bg-luxury-dark/40 hover:border-royal-gold/50 cursor-pointer"
                            }`}
                          >
                            <div className="relative z-10 flex items-center justify-between gap-3">
                              <div className="flex items-center gap-3">
                                {/* Radio Circle */}
                                <div
                                  className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                                    isSelected
                                      ? "border-royal-gold bg-royal-gold text-luxury-black"
                                      : "border-royal-gold/50 bg-luxury-black"
                                  }`}
                                >
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-luxury-black" />}
                                </div>

                                {/* Option Label + Percentage & Votes Formatting (Matching Screenshot) */}
                                <span className="font-sans text-xs sm:text-sm text-ivory font-medium">
                                  {option.label}{" "}
                                  {isResultsVisible && (
                                    <span className="font-semibold text-royal-gold ml-1" suppressHydrationWarning>
                                      ({percentage}%, {option.votes.toLocaleString('en-US')} Votes)
                                    </span>
                                  )}
                                </span>
                              </div>
                            </div>

                            {/* Sleek Progress Bar Indicator (Matching Screenshot) */}
                            {isResultsVisible && (
                              <div className="w-full bg-luxury-dark h-1.5 rounded-full overflow-hidden mt-1">
                                <div
                                  className="bg-royal-gold h-full rounded-full transition-all duration-700"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Total Voters Count (Matching Screenshot: "Total Voters: 155,833") */}
                    {isResultsVisible && (
                      <div className="text-center font-sans text-xs text-cream/80 font-medium my-2">
                        Total Voters:{" "}
                        <span className="font-serif font-bold text-royal-gold" suppressHydrationWarning>
                          {poll.totalVotes.toLocaleString('en-US')}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Actions: VOTE button & View Results toggle */}
                  <div className="mt-6 pt-4 border-t border-royal-gold/20 flex flex-col items-center gap-3">
                    {hasVoted ? (
                      <div className="w-full py-3 bg-royal-gold/15 border border-royal-gold text-center text-royal-gold text-xs font-bold font-sans tracking-widest uppercase flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-royal-gold" />
                        <span>VOTE RECORDED · THANK YOU</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleVote(poll.id)}
                        disabled={!selectedOptId}
                        className={`w-full py-3 text-xs tracking-[0.2em] font-sans font-bold uppercase transition-all duration-300 shadow-md ${
                          selectedOptId
                            ? "bg-royal-gold text-luxury-black hover:bg-royal-gold-light border border-royal-gold cursor-pointer"
                            : "bg-luxury-dark text-cream/40 border border-royal-gold/20 cursor-not-allowed"
                        }`}
                      >
                        VOTE
                      </button>
                    )}

                    <button
                      onClick={() => toggleResults(poll.id)}
                      className="text-[11px] font-sans text-royal-gold hover:text-ivory transition-colors flex items-center gap-1.5 font-semibold tracking-wider uppercase mt-1 cursor-pointer"
                    >
                      <BarChart3 className="w-3.5 h-3.5 text-royal-gold" />
                      <span>{isResultsVisible ? "Hide Results" : "View Results"}</span>
                    </button>
                  </div>
                </div>
            );
          })}
        </div>

        <GoldDivider variant="crest" className="my-20" />

        {/* Suggest a Survey Topic Banner */}
        <div className="p-12 bg-royal-red-dark border border-royal-gold/30 text-center flex flex-col items-center gap-4 relative overflow-hidden shadow-2xl my-16 text-[#F9F5EC]">
          <Crown className="w-10 h-10 text-royal-gold" />
          <h3 className="font-serif text-3xl font-bold text-[#F9F5EC]">
            SUGGEST A POLL OR SURVEY TOPIC
          </h3>
          <p className="font-sans text-sm text-[#E8DCC4] max-w-xl leading-relaxed font-light">
            Have a critical question or industry topic you want Prime Success to put to a global vote? Submit your survey proposal to our research bureau.
          </p>
          <Button href="/contact" variant="secondary" size="md" className="mt-2">
            SUBMIT SURVEY TOPIC
          </Button>
        </div>
      </div>
    </div>
  );
}
