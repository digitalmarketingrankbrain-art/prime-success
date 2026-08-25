"use client";

import { Fragment, useEffect, useMemo, useState } from "react";
import { Download, Mail, MailX, RefreshCw, Loader2, Search, ChevronDown } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";
import type { CareerApplication } from "@/lib/careerApplications";

export default function AdminCareersPage() {
  const [applications, setApplications] = useState<CareerApplication[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("ALL");

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
    const timeoutId = window.setTimeout(() => {
      void fetchApplications();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const departments = useMemo(() => {
    const set = new Set((applications ?? []).map((a) => a.department));
    return ["ALL", ...Array.from(set)];
  }, [applications]);

  const filtered = useMemo(() => {
    return (applications ?? []).filter((app) => {
      const matchesDept = department === "ALL" || app.department === department;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q || app.fullName.toLowerCase().includes(q) || app.email.toLowerCase().includes(q);
      return matchesDept && matchesQuery;
    });
  }, [applications, department, query]);

  return (
    <AdminShell>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">Hiring Applications</h1>
            <p className="font-sans text-sm text-cream/60 mt-1">
              Review candidate submissions and download resumes.
            </p>
          </div>
          <button
            onClick={fetchApplications}
            className="flex items-center gap-2 px-4 py-2.5 bg-luxury-card border border-royal-gold/30 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors text-xs font-sans font-bold uppercase tracking-widest cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="w-4 h-4 text-cream/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or email…"
              className="w-full h-10 pl-9 pr-3 bg-luxury-card border border-royal-gold/25 focus:border-royal-gold text-sm text-ivory placeholder:text-cream/35 outline-none transition-colors"
            />
          </div>
          <div className="relative">
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="h-10 pl-3 pr-8 bg-luxury-card border border-royal-gold/25 focus:border-royal-gold text-sm text-ivory outline-none appearance-none cursor-pointer transition-colors"
            >
              {departments.map((dept) => (
                <option key={dept} value={dept}>
                  {dept === "ALL" ? "All Departments" : dept}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-cream/40 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {loading && applications === null ? (
          <div className="flex items-center justify-center gap-3 py-24 text-cream/70">
            <Loader2 className="w-5 h-5 text-royal-gold animate-spin" />
            <span className="font-sans text-xs uppercase tracking-widest">Loading applications…</span>
          </div>
        ) : !applications || applications.length === 0 ? (
          <p className="py-24 text-center font-sans text-sm text-cream/60">No applications received yet.</p>
        ) : filtered.length === 0 ? (
          <p className="py-24 text-center font-sans text-sm text-cream/60">No applications match your filters.</p>
        ) : (
          <div className="bg-luxury-card border border-royal-gold/20 overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse">
              <thead>
                <tr className="border-b border-royal-gold/15 text-left">
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider">Candidate</th>
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider">Department</th>
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider">Applied</th>
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider">Status</th>
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider text-right">Resume</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((app) => (
                  <Fragment key={app.id}>
                    <tr
                      onClick={() => setExpandedId(expandedId === app.id ? null : app.id)}
                      className="border-b border-royal-gold/10 hover:bg-cream/[0.03] transition-colors cursor-pointer"
                    >
                      <td className="px-5 py-3.5">
                        <span className="block font-sans text-sm font-semibold text-ivory">{app.fullName}</span>
                        <span className="block font-sans text-xs text-cream/50">{app.email} · {app.phone}</span>
                      </td>
                      <td className="px-5 py-3.5">
                        <span className="inline-block px-2.5 py-1 bg-royal-red/25 text-royal-gold text-[10px] font-sans font-bold uppercase tracking-wider">
                          {app.department}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 font-sans text-xs text-cream/60 whitespace-nowrap">
                        {new Date(app.submittedAt).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                      </td>
                      <td className="px-5 py-3.5">
                        <span className={`flex items-center gap-1.5 text-[10px] font-sans font-bold uppercase tracking-wider ${app.emailSent ? "text-success" : "text-cream/40"}`}>
                          {app.emailSent ? <Mail className="w-3.5 h-3.5" /> : <MailX className="w-3.5 h-3.5" />}
                          {app.emailSent ? "Emailed" : "Pending"}
                        </span>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <a
                          href={`/api/careers/resume/${app.storedResumeName}`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-royal-gold/15 hover:bg-royal-gold text-royal-gold hover:text-luxury-black border border-royal-gold text-[10px] font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          Resume
                        </a>
                      </td>
                    </tr>
                    {expandedId === app.id && (
                      <tr className="border-b border-royal-gold/10 bg-cream/[0.02]">
                        <td colSpan={5} className="px-5 py-4">
                          <div className="flex flex-col gap-3 max-w-2xl">
                            <span className="font-sans text-xs text-cream/50">
                              {app.location} · {app.experience} · Notice: {app.noticePeriod}
                              {app.expectedCtc && ` · CTC: ${app.expectedCtc}`}
                            </span>
                            {app.portfolioUrl && (
                              <div>
                                <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.15em] block mb-1">
                                  LinkedIn / Portfolio
                                </span>
                                <a
                                  href={app.portfolioUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="font-sans text-sm text-royal-gold hover:underline break-all"
                                >
                                  {app.portfolioUrl}
                                </a>
                              </div>
                            )}
                            <div>
                              <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.15em] block mb-1">
                                Cover Note
                              </span>
                              <p className="font-sans text-sm text-cream/80 leading-relaxed font-light whitespace-pre-wrap">
                                {app.message || "(No cover note provided)"}
                              </p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
