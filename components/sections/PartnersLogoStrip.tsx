"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

/** Typography-only “logo” tiles — swap for real partner marks in `/public` when available. */
const BRAND_TILES = [
  "Sony Alpha",
  "Canon EOS",
  "DJI",
  "Profoto",
  "Adobe",
  "Blackmagic",
  "Sigma",
  "Godox",
] as const;

export default function PartnersLogoStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      aria-labelledby="partners-strip-heading"
      className="border-t border-stone-200 bg-white py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <SectionHeading
            id="partners-strip-heading"
            eyebrow="Professional-grade gear"
            title="Tools for every production."
            className="mb-8 lg:mb-10"
          />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="-mx-1 flex list-none snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:mx-0 sm:flex-wrap sm:gap-4 sm:overflow-visible sm:pb-0"
        >
          {BRAND_TILES.map((name) => (
            <li key={name} className="shrink-0 snap-start sm:shrink">
              <div className="flex h-[5.25rem] min-w-[8.75rem] items-center justify-center rounded-xl border border-stone-200 bg-white px-4 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:h-24 sm:min-w-[9.5rem] sm:max-w-[11rem]">
                <span className="text-center text-[13px] font-semibold leading-tight text-stone-700 sm:text-sm">
                  {name}
                </span>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
