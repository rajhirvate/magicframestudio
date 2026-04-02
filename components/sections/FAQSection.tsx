"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

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

function FAQItem({
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="border-b border-stone-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          className="text-[15px] font-semibold text-stone-800 group-hover:text-[#c9a84c] transition-colors duration-200 leading-snug"
          style={{ fontFamily: poppins }}
        >
          {faq.q}
        </span>
        <span className="flex-shrink-0 w-7 h-7 rounded-full border border-stone-200 group-hover:border-[#c9a84c]/50 group-hover:bg-[#c9a84c]/5 flex items-center justify-center transition-all duration-200">
          {isOpen
            ? <Minus size={13} className="text-[#c9a84c]" />
            : <Plus size={13} className="text-stone-400 group-hover:text-[#c9a84c]" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="text-sm text-stone-500 leading-relaxed pb-5 pr-8"
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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-14 lg:py-20 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
            style={{ fontFamily: poppins }}
          >
            Got Questions?
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-stone-900 mb-3"
            style={{ fontFamily: poppins }}
          >
            Frequently Asked Questions
          </h2>
          <p
            className="text-sm text-stone-400 max-w-xl mx-auto"
            style={{ fontFamily: inter }}
          >
            Everything you need to know before booking your shoot with Magic Frame Studio.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="bg-[#faf9f7] border border-stone-100 rounded-2xl px-6 sm:px-8 divide-y-0">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p
            className="text-sm text-stone-400 mb-3"
            style={{ fontFamily: inter }}
          >
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:text-[#b8942e] transition-colors"
            style={{ fontFamily: poppins }}
          >
            Ask us directly →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
