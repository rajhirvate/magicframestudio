"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";

const HERO_SLIDE_MS = 4000;

type HeroSlide = {
  id: string;
  src: string;
  alt: string;
  objectClass: string;
  eyebrow: string;
  title: ReactNode;
  subline: string;
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
        We Don&apos;t Just Capture Moments <TitleAccent /> We Craft Stories
      </>
    ),
    subline:
      "Wedding · Events · Portraits · Corporate · Product Shoots",
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
    subline:
      "Ceremony edits · Highlights · Save-the-date · Love stories",
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
    subline:
      "Executive portraiture · Product · Corporate events · Editorial",
  },
];

export default function HeroSectionHero3() {
  const pathname = usePathname();
  const isHero4 = pathname === "/hero4";
  const [active, setActive] = useState(0);
  const [motionOk, setMotionOk] = useState(true);
  const [advanceKey, setAdvanceKey] = useState(0);

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
  }, [motionOk, advanceKey]);

  const goTo = useCallback((index: number) => {
    setActive(index % HERO_SLIDES.length);
    setAdvanceKey((k) => k + 1);
  }, []);

  const slide = useMemo(() => HERO_SLIDES[active]!, [active]);
  const copyMotion = motionOk
    ? { duration: 0.55, ease: "easeOut" as const }
    : { duration: 0 };

  return (
    <section
      className={cn(
        "mfs-hero-editorial relative flex min-h-[100svh] w-full flex-col overflow-hidden pt-16 lg:pt-20",
        isHero4 ? "text-white" : "text-[#1a1a1a]",
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

      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10 lg:px-12 lg:pb-24">
        <div
          className={cn(
            isHero4
              ? "max-w-md sm:max-w-[min(90vw,64rem)]"
              : "max-w-xl lg:max-w-2xl",
          )}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-7 sm:mb-8"
          >
            <div className="mfs-hero-slideshow-progress-wrap mb-6 sm:mb-7">
              <div
                className="mfs-hero-slideshow-progress"
                style={{
                  "--mfs-hero-slide-ms": `${HERO_SLIDE_MS}ms`,
                } as CSSProperties}
                key={`${active}-${advanceKey}-${motionOk ? "anim" : "still"}`}
                aria-hidden
              >
                <div
                  className={cn(
                    "mfs-hero-slideshow-progress-fill",
                    !motionOk && "mfs-hero-slideshow-progress-fill--still",
                  )}
                />
              </div>
            </div>

            <div
              className="mfs-hero-slideshow-dots flex flex-wrap gap-3 sm:gap-3.5"
              role="tablist"
              aria-label="Choose hero slide"
            >
              {HERO_SLIDES.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-controls={`mfs-hero-panel-${item.id}`}
                  id={`mfs-hero-tab-${item.id}`}
                  onClick={() => goTo(index)}
                  className={cn(
                    "mfs-hero-slideshow-dot",
                    index === active && "mfs-hero-slideshow-dot--active",
                  )}
                >
                  <span className="sr-only">{item.eyebrow}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <div
            id={`mfs-hero-panel-${slide.id}`}
            role="tabpanel"
            aria-labelledby={`mfs-hero-tab-${slide.id}`}
            className="mfs-hero-slideshow-copy"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={slide.id}
                initial={motionOk ? { opacity: 0, y: 18 } : false}
                animate={{ opacity: 1, y: 0 }}
                exit={motionOk ? { opacity: 0, y: -10 } : undefined}
                transition={copyMotion}
              >
                <p className="mfs-hero-slideshow-eyebrow text-[10px] font-medium uppercase tracking-[0.4em] text-[#c9a84c] sm:text-xs mb-5 sm:mb-6">
                  {slide.eyebrow}
                </p>

                <div
                  className={cn(
                    "font-heading",
                    isHero4
                      ? "text-white text-[clamp(2.85rem,5.5vw+1rem,6.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em]"
                      : "text-[#1a1a1a] font-light leading-[1.08] text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.25rem]",
                  )}
                >
                  <h1
                    className={cn(
                      "inline-block",
                      isHero4 ? "font-extrabold" : "font-light",
                    )}
                  >
                    <span aria-live="polite">{slide.title}</span>
                  </h1>
                </div>

                <p className={cn("mfs-hero-slideshow-subline mt-6 text-[10px] font-normal uppercase tracking-[0.32em] sm:text-xs sm:tracking-[0.28em]", isHero4 ? "text-white/65" : "text-[#1a1a1a]/72")}>
                  {slide.subline}
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
