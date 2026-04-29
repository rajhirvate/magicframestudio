"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const inter = "var(--font-inter), sans-serif";
const poppins = "var(--font-poppins), sans-serif";

const portraitFaqs = [
  {
    q: "What types of portrait sessions do you offer?",
    a: "We offer individual portraits, professional headshots, couple sessions, family portraits, maternity shoots, and kids photography. Sessions can be customized based on your style and purpose.",
  },
  {
    q: "Do you shoot portraits in studio and outdoor locations?",
    a: "Yes. You can choose a studio setup for a polished look, an outdoor location for natural light portraits, or a lifestyle setup at your preferred venue.",
  },
  {
    q: "I’m not comfortable in front of the camera. Can you help?",
    a: "Absolutely. We guide you through poses, expressions, and posture throughout the session so you feel relaxed and look natural in every frame.",
  },
  {
    q: "How many edited photos will I receive and when?",
    a: "Deliverables depend on your package and session duration. We typically share a curated, fully edited gallery within the timeline discussed during booking.",
  },
  {
    q: "Can I use these portraits for LinkedIn, portfolio, or personal branding?",
    a: "Yes. We can plan your portrait session specifically for professional profiles, personal branding, modeling portfolios, or social media use.",
  },
];

function AccordionRow({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof portraitFaqs)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const rowRef = useRef(null);
  const inView = useInView(rowRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="rounded-2xl border border-stone-200/90 bg-white px-6 py-5 sm:px-7 sm:py-6 shadow-sm shadow-stone-200/40"
    >
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={`text-[15px] sm:text-base leading-snug ${
            isOpen ? "font-bold text-stone-900" : "font-semibold text-stone-900"
          }`}
          style={{ fontFamily: poppins }}
        >
          {faq.q}
        </span>
        <span
          className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-[#fafaf9] text-stone-800 transition-colors group-hover:border-[#c9a84c]/35"
          aria-hidden
        >
          {isOpen ? (
            <Minus className="h-4 w-4 text-[#c9a84c]" strokeWidth={2} />
          ) : (
            <Plus className="h-4 w-4 text-stone-500 group-hover:text-[#c9a84c]" strokeWidth={2} />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pt-4 text-sm sm:text-[15px] leading-relaxed text-stone-600 pr-2 sm:pr-10"
              style={{ fontFamily: inter }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function PortraitPhotographyFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      className="relative overflow-hidden border-t border-stone-200/80 py-16 lg:py-24"
      style={{ backgroundColor: "#f5f0eb" }}
    >
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <h2 className="font-heading mb-3 text-3xl font-light text-stone-900 sm:text-4xl md:text-[2.35rem] md:leading-tight">
            Portrait Photography FAQs
          </h2>
          <p
            className="text-sm text-stone-500 sm:text-[15px]"
            style={{ fontFamily: inter }}
          >
            Common questions before booking your portrait session.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {portraitFaqs.map((faq, i) => (
            <AccordionRow
              key={faq.q}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => handleToggle(i)}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-10 text-center text-sm text-stone-600"
          style={{ fontFamily: inter }}
        >
          Need help choosing the right portrait package?{" "}
          <Link
            href="/contact"
            className="font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-[#c9a84c] hover:decoration-[#c9a84c]/50"
          >
            Contact us
          </Link>
          .
        </motion.p>
      </div>
    </section>
  );
}
