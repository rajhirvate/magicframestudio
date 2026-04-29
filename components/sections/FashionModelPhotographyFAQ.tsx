"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const inter = "var(--font-inter), sans-serif";
const poppins = "var(--font-poppins), sans-serif";

const fashionFaqs = [
  {
    q: "Do you shoot model portfolios and agency test shoots?",
    a: "Yes. We create model portfolios, agency test shoots, and comp-card ready images tailored to your profile, target market, and casting requirements.",
  },
  {
    q: "Can you handle fashion brand campaigns and lookbooks?",
    a: "Absolutely. We shoot campaign visuals, lookbooks, and e-commerce/editorial hybrids for fashion labels, designers, and boutiques with consistent brand styling.",
  },
  {
    q: "Do you provide creative direction during the shoot?",
    a: "Yes. We guide posing, expressions, movement, and framing in real time to ensure each image matches your creative brief and intended audience.",
  },
  {
    q: "Can you work with stylists, makeup artists, and art directors?",
    a: "We regularly collaborate with full creative teams and can align shot lists, moodboards, and timelines to keep production smooth and efficient.",
  },
  {
    q: "How are final images delivered?",
    a: "Final edited images are delivered in high-resolution formats suitable for portfolio use, social media, and print, based on your project requirements.",
  },
];

function AccordionRow({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof fashionFaqs)[number];
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

export default function FashionModelPhotographyFAQ() {
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
            Fashion & Model Photography FAQs
          </h2>
          <p
            className="text-sm text-stone-500 sm:text-[15px]"
            style={{ fontFamily: inter }}
          >
            Common questions before booking a fashion or model shoot.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {fashionFaqs.map((faq, i) => (
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
          Need a custom fashion shoot plan?{" "}
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
