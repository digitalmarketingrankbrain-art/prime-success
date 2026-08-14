import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { PageTransitionProvider } from "@/components/animations/PageTransition";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prime Success — Celebrating Excellence. Honouring Legacy.",
  description:
    "An ultra-premium international awards organisation and editorial magazine celebrating visionary leaders, entrepreneurs, and changemakers globally.",
  keywords: [
    "Prime Success",
    "Royal Awards",
    "Leadership Awards",
    "Hall of Fame",
    "Excellence",
    "Luxury Magazine",
    "Business Visionaries",
  ],
  icons: {
    icon: "/images/prime-success-logo.png",
    shortcut: "/images/prime-success-logo.png",
    apple: "/images/prime-success-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeScript = `
    (function () {
      try {
        var savedTheme = localStorage.getItem("prime-theme");
        var prefersLight = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches;
        var theme = savedTheme || (prefersLight ? "light" : "dark");
        document.documentElement.classList.remove(theme === "light" ? "dark" : "light");
        document.documentElement.classList.add(theme);
        document.documentElement.style.colorScheme = theme;
      } catch (_) {
        document.documentElement.classList.add("dark");
        document.documentElement.style.colorScheme = "dark";
      }
    })();
  `;

  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${jakarta.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="icon" href="/images/prime-success-logo.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/images/prime-success-logo.png" />
        <link rel="apple-touch-icon" href="/images/prime-success-logo.png" />
      </head>
      <body
        className="bg-luxury-black text-ivory font-sans antialiased selection:bg-royal-gold selection:text-luxury-black min-h-screen flex flex-col overflow-x-hidden"
        suppressHydrationWarning
      >
        <SmoothScroll>
          <PageTransitionProvider>
            <Header />
            <main className="flex-1 w-full relative">{children}</main>
            <Footer />
          </PageTransitionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
