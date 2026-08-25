"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Mail, MailX, ArrowRight, Video, Star, FileText } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";
import type { CareerApplication } from "@/lib/careerApplications";
import type { Interview } from "@/types";

export default function AdminDashboardPage() {
  const [applications, setApplications] = useState<CareerApplication[] | null>(null);
  const [interviews, setInterviews] = useState<Interview[] | null>(null);

  useEffect(() => {
    fetch("/api/careers/applications")
      .then((res) => (res.ok ? res.json() : { applications: [] }))
      .then((data) => setApplications(data.applications ?? []))
      .catch(() => setApplications([]));

    fetch("/api/admin/interviews")
      .then((res) => (res.ok ? res.json() : { interviews: [] }))
      .then((data) => setInterviews(data.interviews ?? []))
      .catch(() => setInterviews([]));
  }, []);

  const total = applications?.length ?? 0;
  const emailed = applications?.filter((a) => a.emailSent).length ?? 0;
  const notEmailed = total - emailed;
  const recentApplications = (applications ?? []).slice(0, 5);

  const interviewCount = interviews?.length ?? 0;
  const featuredCount = interviews?.filter((i) => i.isFeatured).length ?? 0;
  const recentInterviews = (interviews ?? []).slice(0, 4);

  return (
    <AdminShell>
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">Dashboard</h1>
          <p className="font-sans text-sm text-cream/60 mt-1">
            An overview of hiring activity and published interview broadcasts.
          </p>
        </div>

        {/* Unified stat strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-royal-gold/15 bg-luxury-card border border-royal-gold/20 mb-10">
          <div className="flex items-center gap-3.5 px-6 py-5">
            <FileText className="w-5 h-5 text-royal-gold flex-shrink-0" />
            <div>
              <span className="font-serif text-2xl font-bold text-ivory block leading-none">{total}</span>
              <span className="text-[11px] font-sans text-cream/60 uppercase font-semibold tracking-wider">
                Total Applications
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3.5 px-6 py-5">
            <Mail className="w-5 h-5 text-success flex-shrink-0" />
            <div>
              <span className="font-serif text-2xl font-bold text-ivory block leading-none">{emailed}</span>
              <span className="text-[11px] font-sans text-cream/60 uppercase font-semibold tracking-wider">
                Confirmation Emailed
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3.5 px-6 py-5">
            <MailX className="w-5 h-5 text-cream/40 flex-shrink-0" />
            <div>
              <span className="font-serif text-2xl font-bold text-ivory block leading-none">{notEmailed}</span>
              <span className="text-[11px] font-sans text-cream/60 uppercase font-semibold tracking-wider">
                Email Pending (SMTP)
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Recent applications */}
          <div className="lg:col-span-3 bg-luxury-card border border-royal-gold/20">
            <div className="flex items-center justify-between px-5 h-14 border-b border-royal-gold/15">
              <h2 className="font-serif text-base font-bold text-ivory">Recent Applications</h2>
              <Link
                href="/admin/careers"
                className="flex items-center gap-1 text-xs font-sans font-semibold text-royal-gold hover:text-ivory transition-colors"
              >
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {recentApplications.length === 0 ? (
              <p className="px-5 py-10 text-center font-sans text-sm text-cream/50">No applications yet.</p>
            ) : (
              <div className="divide-y divide-royal-gold/10">
                {recentApplications.map((app) => (
                  <Link
                    key={app.id}
                    href="/admin/careers"
                    className="flex items-center justify-between gap-4 px-5 py-3.5 hover:bg-cream/[0.03] transition-colors"
                  >
                    <div className="min-w-0">
                      <span className="block font-sans text-sm font-semibold text-ivory truncate">{app.fullName}</span>
                      <span className="block font-sans text-xs text-cream/50 truncate">{app.department}</span>
                    </div>
                    <span
                      className={`flex-shrink-0 text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-1 ${
                        app.emailSent ? "text-success bg-success-bg" : "text-cream/50 bg-cream/5"
                      }`}
                    >
                      {app.emailSent ? "Emailed" : "Pending"}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Interview snapshot */}
          <div className="lg:col-span-2 bg-luxury-card border border-royal-gold/20">
            <div className="flex items-center justify-between px-5 h-14 border-b border-royal-gold/15">
              <h2 className="font-serif text-base font-bold text-ivory">Interview Broadcasts</h2>
              <Link
                href="/admin/interviews"
                className="flex items-center gap-1 text-xs font-sans font-semibold text-royal-gold hover:text-ivory transition-colors"
              >
                Manage <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="flex items-center gap-6 px-5 py-3.5 border-b border-royal-gold/10">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-royal-gold" />
                <span className="font-sans text-sm text-cream/80">{interviewCount} published</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-royal-gold" />
                <span className="font-sans text-sm text-cream/80">{featuredCount} featured</span>
              </div>
            </div>

            {recentInterviews.length === 0 ? (
              <p className="px-5 py-10 text-center font-sans text-sm text-cream/50">No interviews yet.</p>
            ) : (
              <div className="divide-y divide-royal-gold/10">
                {recentInterviews.map((interview) => (
                  <Link
                    key={interview.id}
                    href="/admin/interviews"
                    className="flex items-center justify-between gap-3 px-5 py-3 hover:bg-cream/[0.03] transition-colors"
                  >
                    <div className="min-w-0">
                      <span className="block font-sans text-sm font-semibold text-ivory truncate">{interview.guestName}</span>
                      <span className="block font-sans text-xs text-cream/50 truncate">{interview.category}</span>
                    </div>
                    {interview.isFeatured && <Star className="w-3.5 h-3.5 text-royal-gold fill-royal-gold flex-shrink-0" />}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
