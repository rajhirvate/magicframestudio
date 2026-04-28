"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-14 lg:py-20" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
          style={{ fontFamily: poppins }}
        >
          Photography &amp; Videography
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-snug mb-6"
          style={{ fontFamily: poppins }}
        >
          Professional Photography &amp; Videography Services in India
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="space-y-4 mb-10"
        >
          <p className="text-[15px] text-stone-500 leading-relaxed" style={{ fontFamily: inter }}>
            Magic Frame Studio is India&apos;s trusted destination for photography and videography services that go beyond the ordinary. We create cinematic, story-driven visuals for weddings, events, portraits, corporate brands, e-commerce products, real estate, and more — delivering work that is technically flawless and emotionally powerful.
          </p>
          <p className="text-[15px] text-stone-500 leading-relaxed" style={{ fontFamily: inter }}>
            Since 2020, our team of passionate creatives has served 42,540+ clients across India, building a reputation grounded in artistry, reliability, and a genuine love for the craft. We are more than photographers and videographers — we are storytellers, and your story is our greatest project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-[#c9a84c] hover:bg-[#b8942e] rounded-xl transition-colors duration-200 shadow-md shadow-[#c9a84c]/20"
            style={{ fontFamily: poppins }}
          >
            Learn More About Us <ArrowRight size={14} />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-stone-700 border border-stone-300 hover:border-[#c9a84c] hover:text-[#c9a84c] rounded-xl transition-all duration-200"
            style={{ fontFamily: poppins }}
          >
            View Our Work <ArrowRight size={14} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
