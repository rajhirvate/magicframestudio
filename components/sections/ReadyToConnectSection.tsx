"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ReadyToConnectSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="bg-black py-20 lg:py-28">
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
            className="mt-2 inline-flex items-center justify-center rounded-full border border-white bg-transparent px-10 py-3.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white transition-colors duration-200 hover:bg-white/10 sm:text-[11px] sm:tracking-[0.26em]"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Connect now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
