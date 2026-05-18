"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";

const HERO_SLIDE_MS = 4000;
const HERO_HEADING_FONT =
  'var(--font-poppins), ui-sans-serif, system-ui, sans-serif';

type HeroSlide = {
  id: string;
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

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "moments",
    src:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=75&w=1600&auto=format&fit=crop",
    alt: "Wedding celebration with confetti outdoors",
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
  },
  {
    id: "cinematic",
    src:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=75&w=1600&auto=format&fit=crop",
    alt: "Silhouetted couple embracing at dusk by the water",
    objectClass:
      "object-cover object-[45%_28%] sm:object-[50%_30%]",
    eyebrow: "Weddings · Ceremonies · Films",
    title: (
      <>
        Light, Rhythm, Feeling <TitleAccent /> Cinema You Can Almost Touch
      </>
    ),
    lead: [
      "We edit ceremony films, highlights, and save-the-dates with care,",
      "so your story reads clearly from the first frame to the last.",
    ],
  },
  {
    id: "brands",
    src:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=75&w=1600&auto=format&fit=crop",
    alt: "Large stage with theatrical lighting during an event",
    objectClass:
      "object-cover object-[55%_center] sm:object-[52%_42%]",
    eyebrow: "Brands · Portraits · Launches",
    title: (
      <>
        From Quiet Portraits To Bold Launches{" "}
        <TitleAccent /> One Cohesive Lens
      </>
    ),
    lead: [
      "We shoot portraits, products, and live events with one refined eye,",
      "from boardrooms and sets to opening night on stage.",
    ],
  },
];

export default function HeroSectionHero3() {
  const pathname = usePathname();
  const isHero4 = pathname === "/hero4";
  const [active, setActive] = useState(0);
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setMotionOk(!mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!motionOk || HERO_SLIDES.length < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % HERO_SLIDES.length);
    }, HERO_SLIDE_MS);
    return () => window.clearInterval(id);
  }, [motionOk]);

  const slide = useMemo(() => HERO_SLIDES[active]!, [active]);
  const copyMotion = motionOk
    ? { duration: 0.55, ease: "easeOut" as const }
    : { duration: 0 };

  return (
    <section
      className={cn(
        "mfs-hero-editorial relative flex min-h-[100svh] w-full flex-col overflow-hidden pt-16 lg:pt-20",
        isHero4 ? "text-white" : "text-stone-800",
      )}
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
      aria-roledescription="slideshow"
      aria-label="Featured work and studio introduction"
    >
      <div className="absolute inset-0 mfs-hero-slideshow-stack" aria-hidden>
        <div className="mfs-hero-slideshow-layers absolute inset-0 z-0">
          {HERO_SLIDES.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "mfs-hero-slide-layer absolute inset-0",
                index === active && "mfs-hero-slide-layer--active",
              )}
            >
              <Image
                src={item.src}
                alt=""
                fill
                role="presentation"
                priority={index === 0}
                loading={index === 0 ? "eager" : "lazy"}
                quality={80}
                className={cn(item.objectClass)}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div
          className={cn(
            "mfs-hero-slideshow-gradient-y pointer-events-none absolute inset-0 z-[1]",
            isHero4
              ? "bg-black/50"
              : "bg-gradient-to-b from-white/55 via-white/12 to-transparent sm:from-white/45",
          )}
          aria-hidden
        />
        {!isHero4 && (
          <div
            className="mfs-hero-slideshow-gradient-read pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#f4f1ea]/95 via-[#f4f1ea]/55 to-transparent sm:max-w-[62%]"
            aria-hidden
          />
        )}
      </div>

      <span className="sr-only">{HERO_SLIDES.map((s) => s.alt).join(". ")}.</span>

      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 pb-16 pt-8 sm:px-12 sm:pb-20 sm:pt-10 lg:px-16 lg:pb-24 xl:px-24">
        <div className="w-full max-w-2xl sm:max-w-3xl lg:max-w-[min(56rem,92vw)] xl:max-w-[60rem]">
          <div className="mfs-hero-slideshow-copy">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.id}
                initial={motionOk ? { opacity: 0, y: 18 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={motionOk ? { opacity: 0, y: -10 } : undefined}
                transition={copyMotion}
              >
                <p
                  className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--gold)] sm:mb-2.5 sm:tracking-[0.14em]"
                  style={{ fontFamily: HERO_HEADING_FONT }}
                >
                  {slide.eyebrow}
                </p>

                <div
                  className={cn(
                    isHero4
                      ? "text-white text-[clamp(2.45rem,4.65vw+0.85rem,5.65rem)] font-extrabold leading-[1.02] tracking-[-0.03em]"
                      : "text-stone-800 font-extrabold leading-[1.04] text-[2.35rem] sm:text-4xl md:text-5xl lg:text-[3.65rem] tracking-tight",
                  )}
                  style={{ fontFamily: HERO_HEADING_FONT }}
                >
                  <h1 className="inline-block font-extrabold">
                    <span aria-live="polite">{slide.title}</span>
                  </h1>
                </div>

                <p
                  className={cn(
                    "mt-6 w-full max-w-none text-left text-[0.9375rem] font-light leading-snug tracking-normal sm:mt-7 sm:text-lg sm:leading-snug [&>span]:text-pretty",
                    isHero4 ? "text-white/75" : "text-[#1a1a1a]/58",
                  )}
                >
                  <span className="block">{slide.lead[0]}</span>
                  <span className="block">{slide.lead[1]}</span>
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: motionOk ? 0.34 : 0,
              ease: "easeOut",
            }}
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
