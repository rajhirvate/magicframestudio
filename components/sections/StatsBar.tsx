"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { number: "42,540+", label: "Happy Customers" },
  { number: "5+", label: "Years Experience" },
  { number: "500+", label: "Weddings Shot" },
  { number: "1,200+", label: "Events Covered" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#111111] border-y border-[#1e1e1e] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#2a2a2a]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-[#c9a84c] mb-1">
                {stat.number}
              </span>
              <span className="text-xs sm:text-sm text-[#f5f0eb]/40 tracking-wide uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
