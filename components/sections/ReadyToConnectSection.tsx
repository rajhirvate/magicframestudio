"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ReadyToConnectSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-[#0f0c0a] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="font-heading text-3xl font-light leading-tight text-[#f5f0eb] sm:text-4xl lg:text-5xl">
            Ready to{" "}
            <span className="italic text-[#e0c068]">connect?</span>
          </h2>
          <p
            className="max-w-md text-sm font-normal leading-relaxed text-[#f5f0eb]/55 sm:text-[15px]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Request availability
          </p>
          <Link
            href="/contact"
            className="mt-1 inline-flex items-center justify-center rounded-xl bg-[#c9a84c] px-9 py-3.5 text-sm font-semibold text-[#0a0a0a] shadow-lg shadow-[#c9a84c]/25 transition-colors duration-200 hover:bg-[#e0c068]"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Connect now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
