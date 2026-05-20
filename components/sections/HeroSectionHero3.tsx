"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";
import HeroLeadForm from "@/components/sections/HeroLeadForm";

const HERO_HEADING_FONT =
  'var(--font-montserrat), ui-sans-serif, system-ui, sans-serif';

type HeroSlide = {
  src: string;
  alt: string;
  objectClass: string;
  eyebrow: string;
  title: ReactNode;
  /** Two-line lead under the headline (one visual line each). */
  lead: readonly [string, string];
};

function TitleAccent() {
  return (
    <span
      aria-hidden="true"
      className="mfs-hero-title-accent inline-block align-middle h-[0.06em] w-[0.42em] rounded-[1px] bg-current translate-y-[-0.06em] mx-[0.06em]"
    />
  );
}

/** Static editorial hero — single image + headline (no carousel). */
const HERO_SLIDE: HeroSlide = {
  src:
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=75&w=1600&auto=format&fit=crop",
  alt: "Close-up of wedding rings and hands with flowers",
  objectClass: "object-cover object-[28%_center] sm:object-[32%_center]",
  eyebrow: "Magic Frame Studio · Since 2020",
  title: (
    <>
      We Don&apos;t Just Capture Moments <TitleAccent /> We Craft Stories.
    </>
  ),
  lead: [
    "We work across India with couples, families, and brands,",
    "from weddings through campaigns — photos and films you will revisit for years.",
  ],
};

export default function HeroSectionHero3() {
  const pathname = usePathname();
  const isHero4 = pathname === "/hero4";
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotionOk(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const copyMotion = motionOk
    ? { duration: 0.55, ease: "easeOut" as const }
    : { duration: 0 };

  return (
    <section
      className={cn(
        "mfs-hero-editorial relative flex min-h-[100svh] w-full flex-col overflow-hidden pt-16 lg:pt-20 text-white",
      )}
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
      aria-label="Featured work and studio introduction"
    >
      <div className="absolute inset-0 mfs-hero-slideshow-stack" aria-hidden>
        <div className="mfs-hero-slideshow-layers absolute inset-0 z-0">
          <div className="mfs-hero-slide-layer mfs-hero-slide-layer--active absolute inset-0">
            <Image
              src={HERO_SLIDE.src}
              alt=""
              fill
              role="presentation"
              priority
              loading="eager"
              quality={80}
              className={cn(HERO_SLIDE.objectClass)}
              sizes="100vw"
            />
          </div>
        </div>
        <div
          className={cn(
            "mfs-hero-slideshow-gradient-y pointer-events-none absolute inset-0 z-[1]",
            "bg-gradient-to-b from-black/55 via-black/25 to-black/45",
          )}
          aria-hidden
        />
        {!isHero4 && (
          <div
            className="mfs-hero-slideshow-gradient-read pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-black/72 via-black/38 to-transparent sm:max-w-[62%]"
            aria-hidden
          />
        )}
      </div>

      <span className="sr-only">{HERO_SLIDE.alt}</span>

      <div
        className={cn(
          "relative z-10 flex flex-1 flex-col justify-center pb-16 pt-8 sm:pb-20 sm:pt-10",
          isHero4
            ? "px-8 sm:px-12 lg:px-16 lg:pb-24 xl:px-24"
            : "px-4 sm:px-8 lg:px-12 lg:pb-24",
        )}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,400px)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-12 lg:gap-y-10 xl:gap-x-16">
            <div className="min-w-0 max-w-2xl lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <div className="mfs-hero-slideshow-copy lg:pt-10 xl:pt-12">
                <motion.div
                  initial={motionOk ? { opacity: 0, y: 18 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  transition={copyMotion}
                >
                  <p
                    className={cn(
                      "mb-2 font-semibold uppercase text-[var(--gold)] sm:mb-2.5",
                      isHero4
                        ? "text-xs tracking-[0.1em] sm:tracking-[0.12em]"
                        : "text-sm tracking-[0.12em] sm:tracking-[0.14em]",
                    )}
                    style={{ fontFamily: HERO_HEADING_FONT }}
                  >
                    {HERO_SLIDE.eyebrow}
                  </p>

                  <div
                    className={cn(
                      isHero4
                        ? "text-white text-[clamp(2.45rem,4.65vw+0.85rem,5.65rem)] font-semibold uppercase leading-[1.06] tracking-[0.02em]"
                        : "text-white font-semibold uppercase leading-[1.14] text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] tracking-[0.02em]",
                    )}
                    style={{ fontFamily: HERO_HEADING_FONT }}
                  >
                    <h1 className="inline-block font-semibold">
                      <span aria-live="polite">{HERO_SLIDE.title}</span>
                    </h1>
                  </div>

                  <p
                    className={cn(
                      "mt-6 w-full max-w-none text-left text-[0.9375rem] font-light leading-snug tracking-normal sm:mt-7 sm:text-lg sm:leading-snug [&>span]:text-pretty",
                      isHero4 ? "text-white/75" : "text-white/88",
                    )}
                  >
                    <span className="block">{HERO_SLIDE.lead[0]}</span>
                    <span className="block">{HERO_SLIDE.lead[1]}</span>
                  </p>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={motionOk ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: motionOk ? 0.22 : 0,
                ease: "easeOut",
              }}
              className="w-full max-w-md justify-self-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:justify-self-end lg:self-start"
            >
              <HeroLeadForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: motionOk ? 0.34 : 0,
                ease: "easeOut",
              }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:col-start-1 lg:row-start-2"
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
      </div>
    </section>
  );
}
