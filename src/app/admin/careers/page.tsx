"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronLeft, Download, Mail, MailX, RefreshCw, Loader2 } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";
import type { CareerApplication } from "@/lib/careerApplications";

export default function AdminCareersPage() {
  const [applications, setApplications] = useState<CareerApplication[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const fetchApplications = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/careers/applications");
      const data = await res.json();
      setApplications(data.applications ?? []);
    } catch {
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <AdminShell>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-royal-gold hover:text-ivory transition-colors uppercase font-semibold mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>DASHBOARD</span>
        </Link>

        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.2em] block mb-1">
              HR DESK
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">Hiring Applications</h1>
          </div>
          <button
            onClick={fetchApplications}
            className="flex items-center gap-2 px-4 py-2.5 bg-luxury-card border border-royal-gold/40 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors text-xs font-sans font-bold uppercase tracking-widest cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {loading && applications === null ? (
          <div className="flex items-center justify-center gap-3 py-24 text-cream/70">
            <Loader2 className="w-5 h-5 text-royal-gold animate-spin" />
            <span className="font-sans text-xs uppercase tracking-widest">Loading applications…</span>
          </div>
        ) : !applications || applications.length === 0 ? (
          <p className="py-24 text-center font-sans text-sm text-cream/60">No applications received yet.</p>
        ) : (
          <div className="flex flex-col gap-3">
            {applications.map((app) => (
              <div key={app.id} className="bg-luxury-card border border-royal-gold/25 hover:border-royal-gold/50 transition-colors">
                <button
                  type="button"
                  onClick={() => setExpandedId(expandedId === app.id ? null : app.id)}
                  className="w-full text-left p-5 flex flex-wrap items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex flex-col gap-1 min-w-[200px]">
                    <span className="font-serif text-base font-bold text-ivory">{app.fullName}</span>
                    <span className="font-sans text-xs text-cream/60">{app.email} · {app.phone}</span>
                    <span className="font-sans text-[11px] text-cream/50">
                      {app.location} · {app.experience} · Notice: {app.noticePeriod}
                      {app.expectedCtc && ` · CTC: ${app.expectedCtc}`}
                    </span>
                  </div>

                  <span className="px-2.5 py-1 bg-royal-red/40 text-royal-gold text-[10px] font-sans font-bold uppercase tracking-widest border border-royal-gold/40">
                    {app.department}
                  </span>

                  <span className="font-sans text-xs text-cream/60">
                    {new Date(app.submittedAt).toLocaleString("en-GB", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>

                  <span className={`flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-wider ${app.emailSent ? "text-emerald-400" : "text-cream/40"}`}>
                    {app.emailSent ? <Mail className="w-3.5 h-3.5" /> : <MailX className="w-3.5 h-3.5" />}
                    {app.emailSent ? "Emailed" : "Not emailed"}
                  </span>

                  <a
                    href={`/api/careers/resume/${app.storedResumeName}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-2 bg-royal-gold/15 hover:bg-royal-gold text-royal-gold hover:text-luxury-black border border-royal-gold text-[10px] font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Resume
                  </a>
                </button>

                {expandedId === app.id && (
                  <div className="px-5 pb-5 border-t border-royal-gold/15 pt-4 flex flex-col gap-4">
                    {app.portfolioUrl && (
                      <div>
                        <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.15em] block mb-1.5">
                          LinkedIn / Portfolio
                        </span>
                        <a
                          href={app.portfolioUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-sm text-royal-gold hover:underline break-all"
                        >
                          {app.portfolioUrl}
                        </a>
                      </div>
                    )}
                    <div>
                      <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.15em] block mb-1.5">
                        Cover Note
                      </span>
                      <p className="font-sans text-sm text-cream/80 leading-relaxed font-light whitespace-pre-wrap">
                        {app.message || "(No cover note provided)"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
}
