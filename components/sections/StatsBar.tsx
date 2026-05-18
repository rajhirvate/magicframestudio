"use client";

import { usePathname } from "next/navigation";

const stats = [
  { number: "42,540+", label: "Happy Customers" },
  { number: "5+", label: "Years Experience" },
  { number: "500+", label: "Weddings Shot" },
  { number: "1,200+", label: "Events Covered" },
] as const;

/** Split value so suffix (+, K+) can use muted color like reference layout. */
function splitStatDisplay(value: string): { core: string; suffix: string } {
  if (value.endsWith("K+")) {
    return { core: value.slice(0, -2), suffix: "K+" };
  }
  if (value.endsWith("+")) {
    return { core: value.slice(0, -1), suffix: "+" };
  }
  return { core: value, suffix: "" };
}

export default function StatsBar() {
  const pathname = usePathname();
  const isHero4 = pathname === "/hero4";

  if (isHero4) {
    return (
      <section className="border-y border-stone-200 bg-[#f4f1ea] py-5 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-stone-200/90">
            {stats.map((stat, i) => {
              const { core, suffix } = splitStatDisplay(stat.number);
              return (
                <div
                  key={stat.label}
                  className="mfs-stat-item flex flex-col items-center justify-center py-0.5 text-center lg:px-6"
                  style={{ animationDelay: `${i * 65}ms` }}
                >
                  <span className="mb-1 whitespace-nowrap text-2xl font-bold tabular-nums leading-none sm:text-3xl lg:text-[2.35rem]">
                    <span className="text-stone-800">{core}</span>
                    <span className="text-[var(--gold)]/55">{suffix}</span>
                  </span>
                  <span className="max-w-[11rem] text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-stone-600 sm:max-w-none sm:text-xs sm:tracking-wide">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-[#1e1e1e] bg-[#111111] py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-[#2a2a2a]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="mfs-stat-item flex flex-col items-center py-0.5 text-center lg:px-6"
              style={{ animationDelay: `${i * 65}ms` }}
            >
              <span className="font-heading mb-0.5 text-2xl font-semibold leading-tight text-[#c9a84c] sm:text-3xl lg:text-4xl">
                {stat.number}
              </span>
              <span className="text-xs uppercase tracking-wide text-[#f5f0eb]/40 sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
