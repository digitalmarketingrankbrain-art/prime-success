"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

const BASE_VISITORS = 1200000;
const STORAGE_COUNT_KEY = "ps_live_visitors_count_v2";
const STORAGE_DATE_KEY = "ps_live_visitors_date_v2";

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

export default function LiveVisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const today = getTodayKey();
    const storedDate = localStorage.getItem(STORAGE_DATE_KEY);
    const storedCount = localStorage.getItem(STORAGE_COUNT_KEY);

    let initial: number;
    const parsedCount = storedCount ? parseInt(storedCount, 10) : null;
    if (storedDate === today && parsedCount && parsedCount >= BASE_VISITORS) {
      initial = parsedCount;
    } else {
      initial = BASE_VISITORS + Math.floor(Math.random() * 5000);
      localStorage.setItem(STORAGE_DATE_KEY, today);
      localStorage.setItem(STORAGE_COUNT_KEY, String(initial));
    }

    setCount(initial);

    let timeoutId: ReturnType<typeof setTimeout>;
    const scheduleNext = () => {
      const delay = 30000 + Math.random() * 20000; // 30-50s
      timeoutId = setTimeout(() => {
        setCount((prev) => {
          const next = (prev ?? initial) + Math.floor(Math.random() * 25) + 5; // +5 to +29
          localStorage.setItem(STORAGE_COUNT_KEY, String(next));
          return next;
        });
        scheduleNext();
      }, delay);
    };
    scheduleNext();

    return () => clearTimeout(timeoutId);
  }, []);

  if (count === null) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2.5 bg-[#120E09]/90 backdrop-blur-md border border-[#E5C158]/40 rounded-full pl-3 pr-4 py-2 lg:py-1.5 shadow-xl shadow-black/40">
      <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <Eye className="w-3.5 h-3.5 text-[#E5C158] flex-shrink-0" />
      <span className="text-xs font-sans font-semibold text-[#F9F5EC] tabular-nums whitespace-nowrap">
        {count.toLocaleString("en-IN")} visited
      </span>
    </div>
  );
}
