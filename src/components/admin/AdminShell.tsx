"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

export default function AdminShell({ children }: Props) {
  const router = useRouter();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUsername(data?.username ?? null))
      .catch(() => setUsername(null));
  }, []);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <div className="bg-luxury-black text-ivory min-h-screen">
      <div className="h-16 border-b border-royal-gold/20 px-6 flex items-center justify-between bg-luxury-dark sticky top-0 z-20">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image src="/images/icon.png" alt="Prime Success Media Logo" fill className="object-contain" priority />
          </div>
          <span className="font-serif text-sm sm:text-base font-bold text-ivory tracking-wide">
            PRIME SUCCESS <span className="text-royal-gold">ADMIN</span>
          </span>
        </Link>

        <div className="flex items-center gap-4">
          {username && (
            <span className="hidden sm:inline font-sans text-xs text-cream/60">
              Signed in as <span className="text-royal-gold font-semibold">{username}</span>
            </span>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-2 bg-luxury-card border border-royal-gold/40 text-cream hover:border-royal-gold hover:text-royal-gold transition-colors text-[10px] font-sans font-bold uppercase tracking-widest cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </div>

      <div className="pt-10 pb-20">{children}</div>
    </div>
  );
}
