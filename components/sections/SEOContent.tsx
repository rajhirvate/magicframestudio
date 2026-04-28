"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

export const approachBlock = {
  tag: "Our Approach",
  heading: "We Are Story-First Photographers & Filmmakers",
  paragraphs: [
    "At Magic Frame Studio, we believe great photography is never just about the gear — it's about the eye behind the lens and the heart behind the edit. Every shoot we undertake begins with a deep understanding of your vision, your story, and your audience. We don't apply cookie-cutter templates; we craft bespoke visual experiences.",
    "Our photographers and videographers are trained in both technical excellence and creative storytelling. Using cinema-grade equipment — from Sony FX series cameras to DJI Ronin gimbals and professional drone rigs — we ensure that every frame we deliver is cinematic, sharp, and emotionally resonant. The result is content that doesn't just look good — it moves people.",
  ],
} as const;

const whyIndiaBlock = {
  tag: "Why India Trusts Us",
  heading: "India's Most Reliable Photography & Videography Studio Since 2020",
  paragraphs: [
    "When you book with Magic Frame Studio, you're not just hiring a photographer — you're partnering with a dedicated creative team that treats your project with the same care and commitment we would give our own. Our transparent pricing, prompt communication, and 100% satisfaction guarantee mean there are never any unpleasant surprises.",
    "We cover the full spectrum of photography and videography services — weddings, events, portraits, fashion, products, corporate, real estate, drone, brand films, social media content, and more. Whatever your visual needs, Magic Frame Studio has the expertise, the equipment, and the passion to bring your vision to life.",
  ],
} as const;

const mainSeoBlocks = [whyIndiaBlock];

export function OurApproachSection() {
  return (
    <section className="bg-[#f5f0eb] py-14 lg:py-20 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SEOBlock block={approachBlock} index={0} blockCount={1} />
      </div>
    </section>
  );
}

export default function SEOContent() {
  return (
    <section className="bg-[#f5f0eb] py-14 lg:py-20 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {mainSeoBlocks.map((block, i) => (
          <SEOBlock
            key={i}
            block={block}
            index={i}
            blockCount={mainSeoBlocks.length}
          />
        ))}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/about"
            className={cn(BTN_PRIMARY)}
            style={{ fontFamily: poppins }}
          >
            Learn more about us <ArrowRight size={14} className="shrink-0" />
          </Link>
          <Link
            href="/contact"
            className={cn(BTN_PRIMARY)}
            style={{ fontFamily: poppins }}
          >
            Book a shoot <ArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SEOBlock({
  block,
  index,
  blockCount,
}: {
  block: typeof approachBlock | typeof whyIndiaBlock;
  index: number;
  blockCount: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="text-center max-w-4xl mx-auto"
    >
      <p
        className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
        style={{ fontFamily: poppins }}
      >
        {block.tag}
      </p>
      <h2
        className="text-2xl sm:text-3xl font-bold text-stone-900 mb-5 leading-snug"
        style={{ fontFamily: poppins }}
      >
        {block.heading}
      </h2>
      <div className="space-y-4">
        {block.paragraphs.map((para, j) => (
          <p
            key={j}
            className="text-[15px] text-stone-500 leading-relaxed"
            style={{ fontFamily: inter }}
          >
            {para}
          </p>
        ))}
      </div>
      {index < blockCount - 1 && (
        <div className="mt-10 h-px bg-stone-200 max-w-xs mx-auto" />
      )}
    </motion.div>
  );
}
