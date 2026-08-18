"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: React.ReactNode;
}

// Admin dashboard routes render their own AdminShell chrome and must not
// carry the public marketing site's Header/Footer — those fixed-position
// elements otherwise sit on top of (and intercept clicks on) admin UI.
export default function SiteChrome({ children }: Props) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Header />}
      <main className="flex-1 w-full relative">{children}</main>
      {!isAdmin && <Footer />}
    </>
  );
}
