"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import { magazinesData } from "@/data/mockData";
import MagazineIssueHeader from "@/components/magazine/MagazineIssueHeader";
import MagazinePdfModal from "@/components/magazine/MagazinePdfModal";
import MagazineTableOfContents from "@/components/magazine/MagazineTableOfContents";
import MagazinePrgiAccreditation from "@/components/magazine/MagazinePrgiAccreditation";

interface IssuePageProps {
  params: Promise<{ slug: string }>;
}

export default function MagazineIssueDetailPage({ params }: IssuePageProps) {
  const { slug } = use(params);
  const issue = magazinesData.find((m) => m.slug === slug);
  const [isReaderOpen, setIsReaderOpen] = useState(false);

  if (!issue) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <MagazineIssueHeader
          issue={issue}
          onOpenReader={() => setIsReaderOpen(true)}
        />

        <MagazineTableOfContents issue={issue} />

        <MagazinePrgiAccreditation issue={issue} />
      </div>

      {isReaderOpen && (
        <MagazinePdfModal
          issue={issue}
          onClose={() => setIsReaderOpen(false)}
        />
      )}
    </div>
  );
}
