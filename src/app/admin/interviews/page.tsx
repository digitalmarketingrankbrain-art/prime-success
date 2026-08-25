"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Plus, Pencil, Trash2, Loader2, RefreshCw, Star } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";
import InterviewFormModal from "@/components/admin/InterviewFormModal";
import type { Interview } from "@/types";

export default function AdminInterviewsPage() {
  const [interviews, setInterviews] = useState<Interview[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<Interview | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchInterviews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/interviews");
      const data = await res.json();
      setInterviews(data.interviews ?? []);
    } catch {
      setInterviews([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      void fetchInterviews();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const openAdd = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const openEdit = (interview: Interview) => {
    setEditing(interview);
    setFormOpen(true);
  };

  const handleSaved = () => {
    setFormOpen(false);
    setEditing(null);
    fetchInterviews();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this interview? This cannot be undone.")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/interviews/${id}`, { method: "DELETE" });
      if (res.ok) {
        setInterviews((prev) => prev?.filter((i) => i.id !== id) ?? null);
      }
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <AdminShell>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-ivory">Video Interviews</h1>
            <p className="font-sans text-sm text-cream/60 mt-1">
              Publish and edit the interview broadcasts shown on the site.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchInterviews}
              className="flex items-center gap-2 px-4 py-2.5 bg-luxury-card border border-royal-gold/30 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors text-xs font-sans font-bold uppercase tracking-widest cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={openAdd}
              className="flex items-center gap-2 px-4 py-2.5 bg-royal-gold hover:bg-royal-gold-light text-luxury-black text-xs font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Add Interview
            </button>
          </div>
        </div>

        {loading && interviews === null ? (
          <div className="flex items-center justify-center gap-3 py-24 text-cream/70">
            <Loader2 className="w-5 h-5 text-royal-gold animate-spin" />
            <span className="font-sans text-xs uppercase tracking-widest">Loading interviews…</span>
          </div>
        ) : !interviews || interviews.length === 0 ? (
          <p className="py-24 text-center font-sans text-sm text-cream/60">No interviews yet — add the first one.</p>
        ) : (
          <div className="bg-luxury-card border border-royal-gold/20 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="border-b border-royal-gold/15 text-left">
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider">Broadcast</th>
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider">Category</th>
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider">Duration</th>
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider">Featured</th>
                  <th className="px-5 py-3 text-[11px] font-sans font-bold text-cream/50 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {interviews.map((interview) => (
                  <tr key={interview.id} className="border-b border-royal-gold/10 hover:bg-cream/[0.03] transition-colors">
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative w-16 h-11 flex-shrink-0 bg-luxury-black overflow-hidden border border-royal-gold/15">
                          <Image src={interview.thumbnail} alt={interview.title} fill className="object-cover" />
                        </div>
                        <div className="min-w-0">
                          <span className="block font-sans text-sm font-semibold text-ivory truncate">{interview.guestName}</span>
                          <span className="block font-sans text-xs text-cream/50 truncate max-w-[280px]">{interview.title}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3">
                      <span className="inline-block px-2.5 py-1 bg-royal-red/25 text-royal-gold text-[10px] font-sans font-bold uppercase tracking-wider">
                        {interview.category}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-sans text-xs text-cream/60 whitespace-nowrap">{interview.duration}</td>
                    <td className="px-5 py-3">
                      {interview.isFeatured ? (
                        <Star className="w-4 h-4 text-royal-gold fill-royal-gold" />
                      ) : (
                        <span className="text-cream/25 text-xs font-sans">—</span>
                      )}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => openEdit(interview)}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-royal-gold/15 hover:bg-royal-gold text-royal-gold hover:text-luxury-black border border-royal-gold text-[10px] font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(interview.id)}
                          disabled={deletingId === interview.id}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-danger-bg hover:bg-danger-bg-hover text-danger border border-danger-border text-[10px] font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer disabled:opacity-60"
                        >
                          {deletingId === interview.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {formOpen && (
        <InterviewFormModal
          initial={editing}
          onClose={() => {
            setFormOpen(false);
            setEditing(null);
          }}
          onSaved={handleSaved}
        />
      )}
    </AdminShell>
  );
}
