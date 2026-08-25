"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LayoutDashboard, Briefcase, Video, LogOut, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

interface Props {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/careers", label: "Career Applications", icon: Briefcase },
  { href: "/admin/interviews", label: "Video Interviews", icon: Video },
];

export default function AdminShell({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [username, setUsername] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    fetch("/api/admin/me")
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => setUsername(data?.username ?? null))
      .catch(() => setUsername(null));
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMobileNavOpen(false);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  const isActive = (href: string) => (href === "/admin" ? pathname === "/admin" : pathname.startsWith(href));

  const navContent = (
    <>
      <Link href="/admin" className="flex items-center gap-2.5 px-5 h-16 border-b border-royal-gold/15 flex-shrink-0">
        <div className="relative w-7 h-7 flex-shrink-0">
          <Image src="/images/icon.png" alt="Prime Success Media" fill className="object-contain" priority />
        </div>
        <div className="flex flex-col leading-none">
          <span className="font-serif text-sm font-bold text-ivory tracking-wide">PRIME SUCCESS</span>
          <span className="text-[9px] font-sans font-semibold text-royal-gold uppercase tracking-[0.2em] mt-0.5">Admin</span>
        </div>
      </Link>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
        {NAV_ITEMS.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 h-10 text-sm font-sans font-medium transition-colors rounded-md",
                active
                  ? "bg-royal-gold/12 text-royal-gold"
                  : "text-cream/70 hover:text-ivory hover:bg-cream/5"
              )}
            >
              <Icon className={cn("w-4 h-4 flex-shrink-0", active ? "text-royal-gold" : "text-cream/50")} />
              <span className="truncate">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-3 border-t border-royal-gold/15 flex-shrink-0">
        <div className="flex items-center justify-between px-3 py-2 mb-1">
          <span className="text-[10px] font-sans text-cream/45 uppercase tracking-wider">Appearance</span>
          <ThemeToggle />
        </div>
        {username && (
          <div className="px-3 py-2 mb-1">
            <span className="block text-[10px] font-sans text-cream/45 uppercase tracking-wider">Signed in as</span>
            <span className="block text-sm font-sans font-semibold text-ivory truncate">{username}</span>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 h-10 text-sm font-sans font-medium text-cream/70 hover:text-royal-gold hover:bg-cream/5 rounded-md transition-colors cursor-pointer"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          <span>Log out</span>
        </button>
      </div>
    </>
  );

  return (
    <div className="bg-luxury-black text-ivory min-h-screen lg:flex">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-luxury-dark border-r border-royal-gold/15">
        {navContent}
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden h-16 border-b border-royal-gold/15 px-4 flex items-center justify-between bg-luxury-dark sticky top-0 z-30">
        <Link href="/admin" className="flex items-center gap-2.5">
          <div className="relative w-7 h-7 flex-shrink-0">
            <Image src="/images/icon.png" alt="Prime Success Media" fill className="object-contain" priority />
          </div>
          <span className="font-serif text-sm font-bold text-ivory tracking-wide">
            PRIME SUCCESS <span className="text-royal-gold">ADMIN</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileNavOpen(true)}
            className="p-2 text-cream/80 hover:text-royal-gold transition-colors cursor-pointer"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileNavOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <button
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close menu"
          />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[80vw] bg-luxury-dark border-r border-royal-gold/20 flex flex-col shadow-2xl">
            <div className="flex items-center justify-end px-3 h-16 border-b border-royal-gold/15 flex-shrink-0">
              <button
                onClick={() => setMobileNavOpen(false)}
                className="p-2 text-cream/70 hover:text-royal-gold transition-colors cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {navContent}
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 lg:pl-64 min-w-0">
        <div className="py-10 px-6 md:px-10 lg:px-12">{children}</div>
      </div>
    </div>
  );
}
