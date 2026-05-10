"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BTN_PRIMARY } from "@/lib/btn";

const sans = "var(--font-sans), sans-serif";

const IMG_LEFT =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80&fit=crop&auto=format";
const IMG_RIGHT =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80&fit=crop&auto=format";

export default function StudioEditorialSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-[#0a0a0a]">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,520px)_minmax(0,1fr)]">
        {/* Left panel */}
        <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(90vh,720px)]">
          <Image
            src={IMG_LEFT}
            alt=""
            fill
            className="object-cover grayscale contrast-[1.05]"
            sizes="(max-width: 1024px) 100vw, 33vw"
            priority={false}
          />
        </div>

        {/* Editorial */}
        <div className="flex flex-col justify-center bg-[#f4f1ea] px-8 py-14 lg:px-10 lg:py-16 xl:px-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="text-[11px] font-bold tracking-[0.2em] text-[#1a1a1a] uppercase mb-4"
            style={{ fontFamily: sans }}
          >
            Magic Frame Studio
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-2xl sm:text-3xl lg:text-[1.65rem] xl:text-4xl font-bold text-[#1a1a1a] leading-tight tracking-tight mb-3"
            style={{ fontFamily: sans }}
          >
            Award-winning photographers &amp; filmmakers in India
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-[#1a1a1a]/55 mb-8"
            style={{ fontFamily: sans }}
          >
            Capturing timeless memories and brand stories
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="space-y-5 mb-10 text-[15px] text-[#3d3d3d]/90 leading-[1.75] text-justify"
            style={{ fontFamily: sans }}
          >
            <p>
              For over five years, Magic Frame Studio has partnered with couples,
              families, and brands who expect imagery that feels intentional —
              never generic. From on-location productions to controlled studio
              setups, we balance refined lighting with honest emotion.
            </p>
            <p>
              Whether you need wedding films, corporate storytelling, or
              campaign-ready stills, our directors and photographers work as one
              crew so photo and video stay visually cohesive from briefing to
              final delivery.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.26 }}
            className="mb-10 text-center lg:text-left"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] underline-offset-4 hover:text-[#c9a84c] hover:underline transition-colors"
              style={{ fontFamily: sans }}
            >
              Our story
              <ArrowRight size={14} className="shrink-0" aria-hidden />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
          >
            <Link href="/contact" className={BTN_PRIMARY} style={{ fontFamily: sans }}>
              Get a free quote
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-[#1a1a1a]/25 bg-transparent px-8 py-3.5 text-sm font-semibold text-[#1a1a1a] transition-colors hover:border-[#c9a84c] hover:text-[#c9a84c]"
              style={{ fontFamily: sans }}
            >
              Explore our services
              <ArrowRight size={14} className="shrink-0" aria-hidden />
            </Link>
          </motion.div>
        </div>

        {/* Right panel */}
        <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(90vh,720px)]">
          <Image
            src={IMG_RIGHT}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
