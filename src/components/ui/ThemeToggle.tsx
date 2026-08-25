"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setMounted(true);
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("light", nextTheme === "light");
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.documentElement.style.colorScheme = nextTheme;
    localStorage.setItem("prime-theme", nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-full border border-royal-gold/40 bg-luxury-card text-royal-gold transition-all duration-300 flex items-center justify-center shadow-md"
        aria-label="Toggle Theme"
      >
        <Sun className="w-4 h-4 text-royal-gold" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-royal-gold/40 bg-luxury-card hover:border-royal-gold text-royal-gold transition-all duration-300 flex items-center justify-center shadow-md hover:scale-105 cursor-pointer"
      aria-label="Toggle Theme"
      title={`Switch to ${theme === "dark" ? "Royal Ivory" : "Luxury Dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-royal-gold animate-spin-slow" />
      ) : (
        <Moon className="w-4 h-4 text-royal-gold" />
      )}
    </button>
  );
}
