"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ReadyToConnectSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="ready-to-connect"
      className="bg-[#0d0b09] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-5"
        >
          <h2 className="font-heading text-2xl font-normal uppercase tracking-[0.14em] text-white sm:text-3xl md:text-[2.125rem] md:tracking-[0.16em]">
            Ready to connect?
          </h2>
          <p className="font-heading text-xs uppercase tracking-[0.22em] text-white sm:text-sm sm:tracking-[0.26em]">
            Request availability
          </p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#C5A55D] px-10 py-3.5 text-sm font-bold tracking-wide text-[#0a0a0a] shadow-[0_4px_24px_-4px_rgba(197,165,93,0.65)] transition-[background-color,box-shadow,transform] duration-200 hover:bg-[#d4b56e] hover:shadow-[0_6px_28px_-4px_rgba(197,165,93,0.75)] active:scale-[0.99] sm:px-12 sm:py-4 sm:text-base"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
