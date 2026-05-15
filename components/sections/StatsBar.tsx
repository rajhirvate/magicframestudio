"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
  { number: "42,540+", label: "Happy Customers" },
  { number: "5+", label: "Years Experience" },
  { number: "500+", label: "Weddings Shot" },
  { number: "1,200+", label: "Events Covered" },
];

export default function StatsBar() {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setVisible(true);
      },
      { rootMargin: "-80px", threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#111111] border-y border-[#1e1e1e] py-5 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-6 lg:gap-0 lg:divide-x lg:divide-[#2a2a2a]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                "flex flex-col items-center text-center lg:px-6 py-0.5 transition-all duration-500 ease-out",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
              )}
              style={{ transitionDelay: visible ? `${i * 100}ms` : "0ms" }}
            >
              <span className="font-heading text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#c9a84c] mb-0.5 leading-tight">
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm text-[#f5f0eb]/40 tracking-wide uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
