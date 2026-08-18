"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Briefcase, Mail, MailX, ArrowRight } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";
import type { CareerApplication } from "@/lib/careerApplications";

export default function AdminDashboardPage() {
  const [applications, setApplications] = useState<CareerApplication[] | null>(null);

  useEffect(() => {
    fetch("/api/careers/applications")
      .then((res) => (res.ok ? res.json() : { applications: [] }))
      .then((data) => setApplications(data.applications ?? []))
      .catch(() => setApplications([]));
  }, []);

  const total = applications?.length ?? 0;
  const emailed = applications?.filter((a) => a.emailSent).length ?? 0;
  const notEmailed = total - emailed;

  return (
    <AdminShell>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-10">
          <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.2em] block mb-1">
            OVERVIEW
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ivory">Admin Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-luxury-card border border-royal-gold/25">
            <span className="font-serif text-3xl font-bold text-gold-gradient">{total}</span>
            <p className="text-[11px] font-sans text-cream/70 uppercase font-semibold tracking-wider mt-1">
              Total Applications
            </p>
          </div>
          <div className="p-6 bg-luxury-card border border-royal-gold/25">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-emerald-400" />
              <span className="font-serif text-3xl font-bold text-gold-gradient">{emailed}</span>
            </div>
            <p className="text-[11px] font-sans text-cream/70 uppercase font-semibold tracking-wider mt-1">
              Confirmation Emailed
            </p>
          </div>
          <div className="p-6 bg-luxury-card border border-royal-gold/25">
            <div className="flex items-center gap-2">
              <MailX className="w-5 h-5 text-cream/40" />
              <span className="font-serif text-3xl font-bold text-gold-gradient">{notEmailed}</span>
            </div>
            <p className="text-[11px] font-sans text-cream/70 uppercase font-semibold tracking-wider mt-1">
              Email Pending (SMTP)
            </p>
          </div>
        </div>

        <span className="text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.2em] block mb-4">
          SECTIONS
        </span>
        <Link
          href="/admin/careers"
          className="flex items-center justify-between p-6 bg-luxury-card border border-royal-gold/25 hover:border-royal-gold transition-colors group max-w-md"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-full border border-royal-gold/50 bg-royal-red/30 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-5 h-5 text-royal-gold" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold text-ivory">Career Applications</h3>
              <p className="font-sans text-xs text-cream/60">View and manage hiring applicants</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-royal-gold group-hover:translate-x-1 transition-transform flex-shrink-0" />
        </Link>
      </div>
    </AdminShell>
  );
}
