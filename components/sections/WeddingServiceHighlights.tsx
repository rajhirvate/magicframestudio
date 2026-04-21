"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Wallet, Handshake, Gauge } from "lucide-react";

const columns = [
  {
    icon: Wallet,
    title: "Competitive wedding packages",
    description:
      "Get premium wedding photography coverage with clear pricing and no hidden costs.",
  },
  {
    icon: Handshake,
    title: "Long-term partnership",
    description:
      "From pre-wedding planning to album delivery, we stay with you through every step.",
  },
  {
    icon: Gauge,
    title: "Performance-driven execution",
    description:
      "Our team captures key rituals, emotions, and candid moments with speed and precision.",
  },
] as const;

export default function WeddingServiceHighlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="border-t border-[#E8E8E8] bg-white py-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-10 lg:gap-16">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="mb-8 flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-full border border-[#E0E0E0] bg-white"
                aria-hidden
              >
                <col.icon
                  className="text-[#B59449]"
                  size={26}
                  strokeWidth={1.35}
                  aria-hidden
                />
              </div>
              <h3 className="font-heading max-w-[16rem] text-lg font-semibold leading-snug text-[#1A1A1A] sm:text-xl sm:leading-snug">
                {col.title}
              </h3>
              <p
                className="mt-5 max-w-[22rem] text-sm leading-relaxed text-[#666666] sm:text-[15px]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {col.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
