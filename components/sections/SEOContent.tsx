"use client";

import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BTN_PRIMARY } from "@/lib/btn";
import { cn } from "@/lib/utils";

const poppins = "var(--font-sans), sans-serif";
const inter = "var(--font-sans), sans-serif";

/** Editorial B&W office — collaboration / creative briefing (Unsplash). */
const APPROACH_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&fit=crop&auto=format";

/** “Why India” split on editorial home — different from Intro + Approach portraits. */
const WHY_INDIA_SPLIT_IMAGE =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80&fit=crop&auto=format";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const pathname = usePathname();
  const isHero3 = pathname === "/" || pathname === "/hero3";

  return (
    <section
      ref={ref}
      className="border-t border-stone-200 bg-white py-16 lg:py-24"
      aria-labelledby="our-approach-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg lg:mx-0 lg:max-w-none"
          >
            <Image
              src={APPROACH_IMAGE}
              alt="Creative team collaborating around a laptop in the studio"
              fill
              className="object-cover grayscale contrast-[1.02]"
              sizes="(max-width: 1024px) 90vw, 45vw"
              priority={false}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06, ease: "easeOut" }}
            className="text-left"
          >
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b89e67]"
              style={{ fontFamily: poppins }}
            >
              Our approach
            </p>
            <h2
              id="our-approach-heading"
              className="font-heading mb-6 text-3xl font-normal leading-[1.18] text-stone-900 sm:text-4xl lg:text-[2.35rem]"
            >
              How Real Moments Rewrote the Way We Shoot
            </h2>
            <div
              className="space-y-4 text-[15px] font-normal leading-relaxed text-stone-600 sm:text-base"
              style={{ fontFamily: inter }}
            >
              <p>
                When we started out, we chased flawless lighting and
                picture-perfect poses. Deliverables looked polished — yet something
                felt incomplete. Where was the story? Where were the unguarded
                moments?
              </p>
              <p>
                That&apos;s when it clicked: great work isn&apos;t about repeating
                the same formula — it&apos;s about honesty, emotion, and the scenes
                nobody has to stage.
              </p>
              <p>
                So we built Magic Frame Studio around a simple promise —
                authentic, cinematic, real. Years and tens of thousands of clients
                later, we&apos;re still chasing frames that feel lived-in, not staged.
              </p>
            </div>
            {isHero3 ? (
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
                <Link
                  href="/about"
                  className={cn(BTN_PRIMARY, "group")}
                  style={{ fontFamily: poppins }}
                >
                  Learn more about us{" "}
                  <ArrowRight size={14} className="shrink-0" />
                </Link>
                <Link
                  href="/contact"
                  className={cn(BTN_PRIMARY, "group")}
                  style={{ fontFamily: poppins }}
                >
                  Book a shoot <ArrowRight size={14} className="shrink-0" />
                </Link>
              </div>
            ) : (
              <div className="mt-9">
                <Link
                  href="/contact"
                  className={BTN_PRIMARY}
                  style={{ fontFamily: poppins }}
                >
                  Request for packages
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function WhyIndiaHero3Editorial({ block }: { block: typeof whyIndiaBlock }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg lg:mx-0 lg:max-w-none"
      >
        <Image
          src={WHY_INDIA_SPLIT_IMAGE}
          alt="Creative professionals collaborating — placeholder for studio photography"
          fill
          className="object-cover grayscale contrast-[1.02]"
          sizes="(max-width: 1024px) 90vw, 45vw"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.65, delay: 0.06, ease: "easeOut" }}
        className="text-left"
      >
        <p
          className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b89e67]"
          style={{ fontFamily: poppins }}
        >
          {block.tag}
        </p>
        <h2
          id="why-india-trusts-heading"
          className="font-heading mb-6 text-3xl font-normal leading-[1.18] text-stone-900 sm:text-4xl lg:text-[2.35rem]"
        >
          {block.heading}
        </h2>
        <div
          className="space-y-4 text-[15px] font-normal leading-relaxed text-stone-600 sm:text-base"
          style={{ fontFamily: inter }}
        >
          {block.paragraphs.map((para, j) => (
            <p key={j}>{para}</p>
          ))}
        </div>
        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
          <Link
            href="/about"
            className={cn(BTN_PRIMARY, "group")}
            style={{ fontFamily: poppins }}
          >
            Learn more about us <ArrowRight size={14} className="shrink-0" />
          </Link>
          <Link
            href="/contact"
            className={cn(BTN_PRIMARY, "group")}
            style={{ fontFamily: poppins }}
          >
            Book a shoot <ArrowRight size={14} className="shrink-0" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function SEOContent() {
  const pathname = usePathname();
  const isHero3 = pathname === "/" || pathname === "/hero3";

  if (isHero3) {
    return (
      <section
        className="border-t border-stone-200 bg-white py-16 lg:py-24"
        aria-labelledby="why-india-trusts-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {mainSeoBlocks.map((block) => (
            <WhyIndiaHero3Editorial key={block.heading} block={block} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-stone-200 bg-[#f5f0eb] py-14 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-16 px-4 sm:px-6 lg:px-8">
        {mainSeoBlocks.map((block, i) => (
          <SEOBlock
            key={i}
            block={block}
            index={i}
            blockCount={mainSeoBlocks.length}
          />
        ))}

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Link
            href="/about"
            className={cn(BTN_PRIMARY, "group")}
            style={{ fontFamily: poppins }}
          >
            Learn more about us <ArrowRight size={14} className="shrink-0" />
          </Link>
          <Link
            href="/contact"
            className={cn(BTN_PRIMARY, "group")}
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
  block: typeof whyIndiaBlock;
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
