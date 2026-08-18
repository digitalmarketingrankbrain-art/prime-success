"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, AlertTriangle, Loader2 } from "lucide-react";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Invalid username or password");
      }

      const next = searchParams.get("next") || "/admin";
      router.push(next);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-luxury-black text-ivory min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-8 bg-luxury-card border border-royal-gold/30 flex flex-col gap-5 shadow-2xl"
      >
        <div className="flex items-center gap-2 text-royal-gold">
          <Lock className="w-5 h-5" />
          <h1 className="font-serif text-xl font-bold text-ivory">Admin Login</h1>
        </div>
        <p className="font-sans text-xs text-cream/70">
          Sign in to access the Prime Success Media admin dashboard.
        </p>

        {error && (
          <div className="flex items-center gap-2 px-3 py-2.5 bg-royal-red/10 border border-royal-red/40 text-royal-red text-xs font-sans font-semibold">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <label htmlFor="admin-username" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em]">
            Username
          </label>
          <input
            id="admin-username"
            type="text"
            required
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
            className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="admin-password" className="text-xs font-sans font-bold text-royal-gold uppercase tracking-[0.15em]">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full h-12 px-4 py-3 bg-luxury-dark border border-royal-gold/30 text-sm text-ivory placeholder:text-cream/35 focus:outline-none focus:border-royal-gold focus:ring-1 focus:ring-royal-gold/50 transition-all rounded-none"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="h-12 bg-royal-gold hover:bg-royal-gold-light text-luxury-black font-sans text-xs tracking-[0.2em] font-bold uppercase transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>SIGNING IN…</span>
            </>
          ) : (
            "SIGN IN"
          )}
        </button>
      </form>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="pt-32 pb-20 bg-luxury-black min-h-screen" />}>
      <AdminLoginForm />
    </Suspense>
  );
}
