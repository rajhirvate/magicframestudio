"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const inter = "var(--font-sans), sans-serif";
const poppins = "var(--font-sans), sans-serif";

const faqs = [
  {
    q: "What areas do you serve in India?",
    a: "Magic Frame Studio operates across 10+ major cities including Mumbai, Delhi, Bangalore, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, Jaipur, and Surat. We also travel for destination weddings and shoots anywhere in India — and internationally on request.",
  },
  {
    q: "How far in advance should I book?",
    a: "For weddings, we recommend booking at least 3–6 months in advance, especially during peak season (October–February). For events and commercial shoots, 2–4 weeks notice is usually sufficient. That said, reach out even for last-minute requirements — we'll do our best to accommodate you.",
  },
  {
    q: "Do you provide both photography and videography for the same event?",
    a: "Absolutely. We offer combined photography and videography packages for weddings, events, and corporate functions. Our photo and video teams work seamlessly together so there's no disruption on the day, and you get a cohesive set of deliverables.",
  },
  {
    q: "How long does it take to receive the final photos and videos?",
    a: "For photography, edited galleries are typically delivered within 7–14 working days. Wedding highlight films and brand videos take 3–5 weeks depending on complexity. We always provide a preview or teaser within 48–72 hours of the shoot.",
  },
  {
    q: "What equipment do you use?",
    a: "We shoot with Sony FX series and Alpha series cameras, paired with premium G-Master prime and zoom lenses. For videography, we use DJI Ronin gimbals, professional audio rigs, and cinema lighting. Aerial coverage uses DJI Mavic 3 Pro and Inspire series drones operated by DGCA-licensed pilots.",
  },
  {
    q: "Can I see a full portfolio before booking?",
    a: "Yes — we're happy to share extended portfolios specific to your service type (wedding, product, corporate, etc.) during our consultation call. You can also browse our online portfolio for a curated selection of recent work.",
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "We understand plans can change. Rescheduling is free if requested more than 30 days before the shoot. Cancellations within 30 days may be subject to a partial retention of the booking deposit. Full details are outlined in our service agreement.",
  },
  {
    q: "Do you offer raw files along with edited photos?",
    a: "We deliver professionally edited, high-resolution images in our standard packages. Raw files can be provided as an add-on for an additional fee — please mention this requirement when booking so we can include it in your quote.",
  },
];

function AccordionRow({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number];
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
      className="rounded-2xl border border-stone-100 bg-[#faf9f7] px-6 py-5 sm:px-7 sm:py-6"
    >
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-4 text-left"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-[15px] sm:text-base leading-snug",
            isOpen ? "font-bold text-stone-900" : "font-semibold text-stone-900",
          )}
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
            <Plus
              className="h-4 w-4 text-stone-500 group-hover:text-[#c9a84c]"
              strokeWidth={2}
            />
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

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white py-14 lg:py-20">
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 18 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <h2 className="font-heading mb-3 text-3xl font-light text-stone-900 sm:text-4xl md:text-[2.35rem] md:leading-tight">
            Frequently asked questions
          </h2>
          <p
            className="text-sm text-stone-500 sm:text-[15px]"
            style={{ fontFamily: inter }}
          >
            Everything you need to know!
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
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
          Still have questions?{" "}
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
