"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("prime-theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("light", savedTheme === "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("prime-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-royal-gold/40 bg-luxury-card hover:border-royal-gold text-royal-gold transition-all duration-300 flex items-center justify-center shadow-md hover:scale-105"
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
