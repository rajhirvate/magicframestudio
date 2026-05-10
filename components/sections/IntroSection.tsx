"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BTN_PRIMARY } from "@/lib/btn";

const sans = "var(--font-sans), sans-serif";

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-white py-14 lg:py-20"
      aria-labelledby="intro-services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <motion.h2
          id="intro-services-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-xl font-bold uppercase tracking-[0.14em] text-stone-900 sm:text-2xl md:text-[1.65rem] lg:text-[1.85rem] xl:text-[2rem]"
          style={{ fontFamily: sans }}
        >
          Photography &amp; Videography Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mx-auto mt-6 mb-7 h-px w-16 origin-center bg-stone-300"
          aria-hidden
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mb-10 max-w-5xl text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-[#5c6570] sm:text-[11px]"
          style={{ fontFamily: sans }}
        >
          Professional photography services for individuals &amp; businesses
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto mb-12 max-w-6xl text-[15px] leading-[1.85] text-stone-500 lg:text-base lg:leading-[1.9]"
          style={{ fontFamily: sans }}
        >
          We provide a complete range of photography and videography services across India,
          crafted to suit both individuals and businesses. From personal milestones such as
          maternity portraits and family photoshoots to commercial productions including
          corporate headshots, food and product photography, and large-scale events, our
          verified creatives cover every aspect of visual storytelling. We also offer
          cinematic videography, brand campaigns, and aerial drone coverage when your brief
          calls for it — helping you capture unforgettable memories and impactful visuals.
          Whether in-studio or on location nationwide, our network combines artistry,
          technology, and passion to deliver photographs and films that feel timeless and
          powerful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.26 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link href="/about" className={BTN_PRIMARY} style={{ fontFamily: sans }}>
            Learn more about us <ArrowRight size={14} className="shrink-0" aria-hidden />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-md border border-stone-300 px-8 py-3.5 text-sm font-semibold text-stone-700 transition-all duration-200 hover:border-[#c9a84c] hover:text-[#c9a84c]"
            style={{ fontFamily: sans }}
          >
            View our work <ArrowRight size={14} className="shrink-0" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
