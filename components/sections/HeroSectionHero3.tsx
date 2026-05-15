"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";

/** Rural wedding / field scene — bright sky on the left for charcoal type (editorial hero). */
/** Lighter decode cost than w=2400; Next still serves responsive widths via `sizes`. */
const HERO_BG =
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=75&w=1600&auto=format&fit=crop";

export default function HeroSectionHero3() {
  return (
    <section
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden pt-16 text-[#1a1a1a] lg:pt-20"
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
    >
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          quality={80}
          className="object-cover object-[28%_center] sm:object-[32%_center]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/12 to-transparent sm:from-white/45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#f4f1ea]/95 via-[#f4f1ea]/55 to-transparent sm:max-w-[62%]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12 lg:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="text-[10px] font-medium uppercase tracking-[0.4em] text-[#c9a84c] sm:text-xs mb-5 sm:mb-6"
          >
            Magic Frame Studio · Since 2020
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: "easeOut" }}
            className={cn(
              "font-heading font-light text-[#1a1a1a] leading-[1.08]",
              "text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.25rem]",
            )}
          >
            <h1 className="inline font-light">
              We Don&apos;t Just Capture Moments{" "}
              <span
                aria-hidden="true"
                className="inline-block align-middle h-[0.06em] w-[0.42em] rounded-[1px] bg-current translate-y-[-0.06em] mx-[0.06em]"
              />{" "}
              We Craft Stories
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: "easeOut" }}
            className="mt-6 text-[10px] font-normal uppercase tracking-[0.32em] text-[#1a1a1a]/72 sm:text-xs sm:tracking-[0.28em]"
          >
            Wedding · Events · Portraits · Corporate · Product Shoots
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="/portfolio"
              className={cn(
                "group mfs-btn-primary inline-flex w-fit items-center gap-2.5 px-9 py-3.5 text-sm font-medium transition-colors duration-200",
              )}
            >
              Explore our work
              <ArrowRight
                size={14}
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link href="/contact" className={cn(BTN_PRIMARY, "group w-fit")}>
              Get a quote
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
