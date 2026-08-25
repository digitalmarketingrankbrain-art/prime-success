"use client";

import { useState } from "react";
import { X, Loader2 } from "lucide-react";
import type { Interview } from "@/types";

export interface InterviewFormValues {
  title: string;
  guestName: string;
  titlePrefix: string;
  guestRole: string;
  organization: string;
  badgeTag: string;
  duration: string;
  publishedAt: string;
  category: string;
  videoInput: string;
  thumbnail: string;
  summary: string;
  slug: string;
  isFeatured: boolean;
}

interface Props {
  initial: Interview | null;
  onClose: () => void;
  onSaved: () => void;
}

function toFormValues(interview: Interview | null): InterviewFormValues {
  if (!interview) {
    return {
      title: "", guestName: "", titlePrefix: "", guestRole: "", organization: "",
      badgeTag: "", duration: "", publishedAt: "", category: "", videoInput: "",
      thumbnail: "", summary: "", slug: "", isFeatured: false,
    };
  }
  return {
    title: interview.title,
    guestName: interview.guestName,
    titlePrefix: interview.titlePrefix ?? "",
    guestRole: interview.guestRole,
    organization: interview.organization,
    badgeTag: interview.badgeTag,
    duration: interview.duration,
    publishedAt: interview.publishedAt,
    category: interview.category,
    videoInput: interview.videoUrl,
    thumbnail: interview.thumbnail,
    summary: interview.summary,
    slug: interview.slug,
    isFeatured: Boolean(interview.isFeatured),
  };
}

const inputClass =
  "w-full bg-luxury-black border border-royal-gold/30 focus:border-royal-gold px-3.5 py-2.5 text-sm text-ivory font-sans outline-none transition-colors placeholder:text-cream/30";
const labelClass = "text-[11px] font-sans font-bold text-royal-gold uppercase tracking-[0.15em] block mb-1.5";

export default function InterviewFormModal({ initial, onClose, onSaved }: Props) {
  const [values, setValues] = useState<InterviewFormValues>(toFormValues(initial));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = <K extends keyof InterviewFormValues>(key: K, value: InterviewFormValues[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const url = initial ? `/api/admin/interviews/${initial.id}` : "/api/admin/interviews";
      const method = initial ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error || "Failed to save interview.");
        return;
      }

      onSaved();
    } catch {
      setError("Failed to save interview.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-luxury-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl w-full bg-luxury-dark border border-royal-gold/30 shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
      >
        <div className="p-5 border-b border-royal-gold/20 flex items-center justify-between sticky top-0 bg-luxury-dark z-10">
          <h3 className="font-serif text-lg font-bold text-ivory">
            {initial ? "Edit Interview" : "Add New Interview"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-cream/70 hover:text-royal-gold transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5">
          <div>
            <label className={labelClass}>YouTube Video Link *</label>
            <input
              type="text"
              required
              value={values.videoInput}
              onChange={(e) => set("videoInput", e.target.value)}
              placeholder="https://www.youtube.com/watch?v=... or video ID"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Interview Title *</label>
            <input type="text" required value={values.title} onChange={(e) => set("title", e.target.value)} className={inputClass} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Guest Name *</label>
              <input type="text" required value={values.guestName} onChange={(e) => set("guestName", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Title Prefix</label>
              <input type="text" placeholder="Mr. / Dr. / Mrs." value={values.titlePrefix} onChange={(e) => set("titlePrefix", e.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Guest Role *</label>
              <input type="text" required value={values.guestRole} onChange={(e) => set("guestRole", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Organization *</label>
              <input type="text" required value={values.organization} onChange={(e) => set("organization", e.target.value)} className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Category *</label>
              <input type="text" required value={values.category} onChange={(e) => set("category", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Duration *</label>
              <input type="text" required placeholder="18 MINS" value={values.duration} onChange={(e) => set("duration", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Published *</label>
              <input type="text" required placeholder="AUGUST 2026" value={values.publishedAt} onChange={(e) => set("publishedAt", e.target.value)} className={inputClass} />
            </div>
          </div>

          <div>
            <label className={labelClass}>Summary / Context *</label>
            <textarea
              required
              rows={4}
              value={values.summary}
              onChange={(e) => set("summary", e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>

          <div>
            <label className={labelClass}>Badge Tag (optional — auto-generated if blank)</label>
            <input type="text" value={values.badgeTag} onChange={(e) => set("badgeTag", e.target.value)} className={inputClass} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Slug (optional — auto-generated if blank)</label>
              <input type="text" value={values.slug} onChange={(e) => set("slug", e.target.value)} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Thumbnail URL (optional — from video if blank)</label>
              <input type="text" value={values.thumbnail} onChange={(e) => set("thumbnail", e.target.value)} className={inputClass} />
            </div>
          </div>

          <label className="flex items-center gap-2.5 cursor-pointer w-fit">
            <input
              type="checkbox"
              checked={values.isFeatured}
              onChange={(e) => set("isFeatured", e.target.checked)}
              className="w-4 h-4 accent-royal-gold cursor-pointer"
            />
            <span className="text-xs font-sans font-semibold text-cream/90 uppercase tracking-wider">
              Feature on Interviews page
            </span>
          </label>

          {error && (
            <p className="text-xs font-sans text-danger bg-danger-bg border border-danger-border px-3 py-2.5">{error}</p>
          )}
        </div>

        <div className="p-5 border-t border-royal-gold/20 flex items-center justify-end gap-3 sticky bottom-0 bg-luxury-dark">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-sans font-bold uppercase tracking-widest text-cream/70 hover:text-ivory transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-royal-gold hover:bg-royal-gold-light text-luxury-black text-xs font-sans font-bold uppercase tracking-widest transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {saving && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
            {initial ? "Save Changes" : "Add Interview"}
          </button>
        </div>
      </form>
    </div>
  );
}
