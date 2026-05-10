"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sans = "var(--font-sans), sans-serif";

/** Editorial trio layout — `/hero3` reference (cream rail + flanking portraits). */
const IMG_LEFT =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80&fit=crop&auto=format";
const IMG_RIGHT =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80&fit=crop&auto=format";

const BTN_EDITORIAL_RED =
  "inline-flex min-w-[12rem] items-center justify-center rounded-sm bg-[#b4232c] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition-colors hover:bg-[#961f26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4232c] sm:min-w-0 sm:px-8";

/** Keep opacity at 1 so copy stays readable if viewport observers mis-fire; animate Y only. */
const viewport = { once: true, amount: 0.08 } as const;

export default function MagicFrameDifferenceSection() {
  return (
    <section
      id="magic-frame-difference"
      className="relative scroll-mt-24 bg-[#0a0a0a]"
      aria-labelledby="magic-frame-difference-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(320px,600px)_minmax(0,1fr)]">
        <div className="relative min-h-[280px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(90vh,720px)]">
          <Image
            src={IMG_LEFT}
            alt="Editorial portrait in black and white"
            fill
            className="object-cover grayscale contrast-[1.05]"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#f4f1ea] px-8 py-14 text-center lg:px-12 lg:py-20 xl:px-16">
          <motion.h2
            id="magic-frame-difference-heading"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="text-lg font-bold uppercase tracking-[0.14em] text-[#1a1a1a] sm:text-xl md:text-2xl lg:text-[1.35rem] xl:text-[1.5rem]"
            style={{ fontFamily: sans }}
          >
            Award-winning photographers in India
          </motion.h2>

          <motion.div
            initial={{ opacity: 1, scaleX: 0.55 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mx-auto mt-5 mb-6 h-px w-14 origin-center bg-[#1a1a1a]/40"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-10 max-w-md text-[10px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-[#1a1a1a]/55 sm:text-[11px]"
            style={{ fontFamily: sans }}
          >
            Capturing timeless memories and brand stories
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mx-auto mb-10 max-w-xl space-y-5 text-center text-[13px] leading-[1.85] text-[#3d3d3d] sm:text-sm lg:max-w-2xl lg:space-y-6 lg:text-[14px] lg:leading-[1.8]"
            style={{ fontFamily: sans }}
          >
            <p>
              At Magic Frame Studio, we believe photography and videography are about preserving emotions, stories, and moments that can be cherished for a lifetime. Since 2020, our growing network of photographers and videographers across India has helped capture meaningful experiences for couples, families, businesses, creators, and brands.
            </p>
            <p>
              What sets us apart is our platform-driven approach that connects clients with talented and verified creative professionals across the country. As a trusted photography and videography platform in India, we offer access to wedding photography, cinematic videography, event coverage, brand shoots, corporate productions, and creative visual storytelling. Our photographers and videographers work closely with every client to understand their style, vision, and requirements—whether it’s a cinematic wedding film, a professional brand campaign, or a memorable family photoshoot. Over the years, this commitment to quality, creativity, and seamless service has helped us build trusted relationships with clients, businesses, creators, and event organizers throughout India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mb-10"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a] underline-offset-4 transition-colors hover:text-[#b4232c] hover:underline"
              style={{ fontFamily: sans }}
            >
              Our Story
              <ArrowRight size={13} className="shrink-0" aria-hidden />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center"
          >
            <Link href="/contact" className={BTN_EDITORIAL_RED} style={{ fontFamily: sans }}>
              Get a free quote
            </Link>
            <Link href="/portfolio" className={BTN_EDITORIAL_RED} style={{ fontFamily: sans }}>
              Explore our services
            </Link>
          </motion.div>
        </div>

        <div className="relative min-h-[280px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(90vh,720px)]">
          <Image
            src={IMG_RIGHT}
            alt="Fashion editorial portrait by the coast at golden hour"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        </div>
      </div>
    </section>
  );
}
