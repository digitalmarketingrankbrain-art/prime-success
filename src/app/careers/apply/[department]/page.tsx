import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CareerApplicationForm from "@/components/careers/CareerApplicationForm";

interface ApplyPageProps {
  params: Promise<{ department: string }>;
}

export async function generateMetadata({ params }: ApplyPageProps) {
  const { department } = await params;
  const title = decodeURIComponent(department);
  return {
    title: `Apply — ${title} — Prime Success Media`,
    description: `Submit your application to join the ${title} team at Prime Success Media.`,
  };
}

export default async function CareerApplyPage({ params }: ApplyPageProps) {
  const { department } = await params;
  const title = decodeURIComponent(department);

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <div className="mb-8">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-royal-gold hover:text-ivory transition-colors uppercase font-semibold"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>RETURN TO CAREERS</span>
          </Link>
        </div>

        <SectionHeading
          eyebrow="CAREER APPLICATION"
          title={title.toUpperCase()}
          subtitle="Fill in your details below and our HR team will review your application."
          centered={false}
        />

        <CareerApplicationForm department={title} />
      </div>
    </div>
  );
}
