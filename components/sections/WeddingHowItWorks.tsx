"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, UsersRound, CalendarCheck2, Camera } from "lucide-react";
import { ICON_RING_GRADIENT } from "@/lib/iconRingGradient";

const inter = "var(--font-inter), sans-serif";
const poppins = "var(--font-poppins), sans-serif";

const steps = [
  {
    icon: ClipboardList,
    subtitle: "Tell us your requirements",
    description:
      "Share your wedding dates, cities, events you want covered, and the style you love—candid, traditional, or a mix. The more we know about your vision and budget, the faster we can shape the right plan for you.",
  },
  {
    icon: UsersRound,
    subtitle: "Get matched with photographers",
    description:
      "We connect you with experienced wedding photographers from our team whose work and personality fit your celebration—whether it’s an intimate gathering or a multi-day affair across venues.",
  },
  {
    icon: CalendarCheck2,
    subtitle: "Choose & book",
    description:
      "Review coverage options, deliverables, and timelines in a clear proposal. Pick the package that feels right, confirm your dates, and complete booking with transparent pricing—no last-minute surprises.",
  },
  {
    icon: Camera,
    subtitle: "Capture your wedding beautifully",
    description:
      "On the day, we show up prepared, on time, and unobtrusive—documenting rituals, emotions, and details you’ll want to relive for years. Afterward you receive edited galleries and films aligned with what we agreed.",
  },
] as const;

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = step.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col items-center text-center"
    >
      <div
        className="mb-6 flex h-[5.5rem] w-[5.5rem] shrink-0 items-center justify-center rounded-full p-[2px] shadow-sm"
        style={{ background: ICON_RING_GRADIENT }}
      >
        <div
          className="flex h-full w-full items-center justify-center rounded-full"
          style={{ backgroundColor: "#f5f0eb" }}
        >
          <Icon className="h-8 w-8 text-stone-900" strokeWidth={1.35} aria-hidden />
        </div>
      </div>

      <h3
        className="mb-2.5 max-w-[280px] text-base font-bold leading-snug text-stone-900 sm:max-w-[260px] sm:text-lg"
        style={{ fontFamily: poppins }}
      >
        {step.subtitle}
      </h3>
      <p
        className="max-w-[280px] text-sm leading-relaxed text-stone-600 sm:max-w-[260px] sm:text-[15px]"
        style={{ fontFamily: inter }}
      >
        {step.description}
      </p>
    </motion.div>
  );
}

export default function WeddingHowItWorks() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  return (
    <section
      className="relative overflow-hidden border-t border-stone-200/80 py-16 lg:py-24"
      style={{ backgroundColor: "#f5f0eb" }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]"
            style={{ fontFamily: poppins }}
          >
            How we work
          </p>
          <h2
            className="font-heading text-3xl font-light text-stone-900 sm:text-4xl md:text-[2.35rem] md:leading-tight"
          >
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-14 lg:grid-cols-4 lg:gap-8 xl:gap-10">
          {steps.map((step, i) => (
            <StepCard key={step.subtitle} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
