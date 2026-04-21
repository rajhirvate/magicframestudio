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
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#c9a84c] px-10 py-3.5 text-sm font-semibold text-[#0a0a0a] shadow-md shadow-[#c9a84c]/25 transition-colors duration-200 hover:bg-[#e0c068] sm:px-11"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Connect now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
