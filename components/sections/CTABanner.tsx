"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-14 lg:py-20 overflow-hidden bg-[#0f0c0a]">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c0a] via-[#1a1408]/50 to-[#0f0c0a]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="mb-4 text-xs font-semibold tracking-normal text-[#c9a84c]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Let&apos;s create together
          </p>
          <h2 className="font-heading mb-4 text-3xl font-light leading-tight text-[#f5f0eb] sm:text-4xl lg:text-5xl">
            Ready to book{" "}
            <span className="italic text-[#e0c068]">your shoot?</span>
          </h2>
          <p
            className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-[#f5f0eb]/55 sm:text-[15px]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Let&apos;s discuss your vision. Whether it&apos;s a wedding, a product launch, or a brand film — we&apos;re here to craft something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-[#c9a84c] px-9 py-3.5 text-sm font-semibold text-[#0a0a0a] shadow-lg shadow-[#c9a84c]/25 transition-colors duration-200 hover:bg-[#e0c068]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Contact us today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
