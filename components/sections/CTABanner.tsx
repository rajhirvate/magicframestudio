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
          <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-5">
            Let&apos;s Create Together
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#f5f0eb] leading-tight mb-6">
            Ready to Book{" "}
            <span className="italic text-[#c9a84c]">Your Shoot?</span>
          </h2>
          <p className="text-base text-[#f5f0eb]/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Let&apos;s discuss your vision. Whether it&apos;s a wedding, a product launch, or a brand film — we&apos;re here to craft something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-4 text-sm font-medium text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-full transition-colors duration-200 shadow-xl shadow-[#c9a84c]/20"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
