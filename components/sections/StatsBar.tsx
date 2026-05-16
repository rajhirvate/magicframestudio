const stats = [
  { number: "42,540+", label: "Happy Customers" },
  { number: "5+", label: "Years Experience" },
  { number: "500+", label: "Weddings Shot" },
  { number: "1,200+", label: "Events Covered" },
];

/** Server component — no IO wait; stats use CSS stagger (globals `.mfs-stat-item`). */
export default function StatsBar() {
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
