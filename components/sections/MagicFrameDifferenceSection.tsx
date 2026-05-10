"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const sans = "var(--font-sans), sans-serif";

/** Editorial trio layout — `/hero3` reference (cream rail + flanking portraits). */
const IMG_LEFT =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80&fit=crop&auto=format";
const IMG_RIGHT =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80&fit=crop&auto=format";

const BTN_EDITORIAL_RED =
  "inline-flex min-w-[12rem] items-center justify-center rounded-sm bg-[#b4232c] px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-sm transition-colors hover:bg-[#961f26] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4232c] sm:min-w-0 sm:px-8";

/** Filmstrip under editorial trio — diverse genres, flush tiles, horizontal scroll. */
const GALLERY_STRIP_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=640&q=80&fit=crop&auto=format",
    alt: "Wedding couple",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=640&q=80&fit=crop&auto=format",
    alt: "Food styling and plating",
  },
  {
    src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=640&q=80&fit=crop&auto=format",
    alt: "Newborn portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=640&q=80&fit=crop&auto=format",
    alt: "Fashion portrait by the ocean",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=640&q=80&fit=crop&auto=format",
    alt: "Professional headshot",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=640&q=80&fit=crop&auto=format",
    alt: "Modern interior living space",
  },
  {
    src: "https://images.unsplash.com/photo-1519225429388-bd98ffb52be8?w=640&q=80&fit=crop&auto=format",
    alt: "Bride and groom on staircase",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&q=80&fit=crop&auto=format",
    alt: "Corporate event venue",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=640&q=80&fit=crop&auto=format",
    alt: "Creative team collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=640&q=80&fit=crop&auto=format",
    alt: "Celebration and décor detail",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80&fit=crop&auto=format",
    alt: "Portrait photography session",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=640&q=80&fit=crop&auto=format",
    alt: "Commercial lifestyle photography",
  },
] as const;

const GALLERY_TILE_CLASS =
  "relative h-[min(48vw,220px)] w-[min(38vw,176px)] shrink-0 sm:h-[200px] sm:w-[160px] md:h-[240px] md:w-[192px] lg:h-[280px] lg:w-[224px]";

/** Thick white chevrons with shadow (reference slider controls). */
const STRIP_NAV_BTN =
  "pointer-events-auto rounded-full p-2 text-white transition hover:bg-white/12 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/90 active:scale-[0.96]";
const STRIP_CHEVRON =
  "drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] h-8 w-8 sm:h-9 sm:w-9";

/** px per animation frame — continuous slow drift (~0.55 matches prior marquee pace). */
const GALLERY_AUTO_SCROLL_PX = 0.55;

/** Scroll only — reduced motion (same arrows as main strip). */
function EditorialGalleryStripScroll() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByViewportFraction = useCallback((direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.max(260, Math.floor(el.clientWidth * 0.72));
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  return (
    <div className="relative w-full border-t border-black/15 bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-14 items-center bg-gradient-to-r from-black/55 via-black/30 to-transparent pl-2 sm:w-[4.5rem] sm:pl-3 md:w-24">
        <button
          type="button"
          onClick={() => scrollByViewportFraction(-1)}
          className={STRIP_NAV_BTN}
          aria-label="Slide gallery left"
        >
          <ChevronLeft className={STRIP_CHEVRON} strokeWidth={2.85} aria-hidden />
        </button>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-label="Portfolio strip — scroll for more photos"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") scrollByViewportFraction(1);
          if (e.key === "ArrowLeft") scrollByViewportFraction(-1);
        }}
        className="flex snap-x snap-mandatory gap-0 overflow-x-auto overflow-y-hidden scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {GALLERY_STRIP_IMAGES.map((item, index) => (
          <div key={index} className={`${GALLERY_TILE_CLASS} snap-start`}>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 52vw, 240px"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-14 items-center justify-end bg-gradient-to-l from-black/55 via-black/30 to-transparent pr-2 sm:w-[4.5rem] sm:pr-3 md:w-24">
        <button
          type="button"
          onClick={() => scrollByViewportFraction(1)}
          className={STRIP_NAV_BTN}
          aria-label="Slide gallery right"
        >
          <ChevronRight className={STRIP_CHEVRON} strokeWidth={2.85} aria-hidden />
        </button>
      </div>
    </div>
  );
}

/** Continuous slow scroll + duplicated loop + manual arrows (requestAnimationFrame). */
function EditorialGalleryStripMarquee() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pauseRef = useRef(false);
  const rafRef = useRef(0);

  const scrollManual = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.max(260, Math.floor(el.clientWidth * 0.48));
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const tick = () => {
      const node = scrollerRef.current;
      if (node && !pauseRef.current) {
        if (typeof document !== "undefined" && !document.hidden) {
          const half = node.scrollWidth / 2;
          if (half > 8) {
            node.scrollLeft += GALLERY_AUTO_SCROLL_PX;
            if (node.scrollLeft >= half - 0.5) {
              node.scrollLeft -= half;
            }
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      className="relative w-full border-t border-black/15 bg-[#0a0a0a]"
      onMouseEnter={() => {
        pauseRef.current = true;
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-14 items-center bg-gradient-to-r from-black/55 via-black/30 to-transparent pl-2 sm:w-[4.5rem] sm:pl-3 md:w-24">
        <button
          type="button"
          onClick={() => scrollManual(-1)}
          className={STRIP_NAV_BTN}
          aria-label="Slide gallery left"
        >
          <ChevronLeft className={STRIP_CHEVRON} strokeWidth={2.85} aria-hidden />
        </button>
      </div>

      <div
        ref={scrollerRef}
        role="region"
        aria-label="Portfolio strip — slowly scrolling gallery; arrows move the strip"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") scrollManual(1);
          if (e.key === "ArrowLeft") scrollManual(-1);
        }}
        className="flex gap-0 overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {GALLERY_STRIP_IMAGES.map((item, index) => (
          <div key={`a-${index}`} className={GALLERY_TILE_CLASS}>
            <Image
              src={item.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 52vw, 240px"
              aria-hidden
            />
          </div>
        ))}
        {GALLERY_STRIP_IMAGES.map((item, index) => (
          <div key={`b-${index}`} className={GALLERY_TILE_CLASS}>
            <Image
              src={item.src}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 640px) 52vw, 240px"
              aria-hidden
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-14 items-center justify-end bg-gradient-to-l from-black/55 via-black/30 to-transparent pr-2 sm:w-[4.5rem] sm:pr-3 md:w-24">
        <button
          type="button"
          onClick={() => scrollManual(1)}
          className={STRIP_NAV_BTN}
          aria-label="Slide gallery right"
        >
          <ChevronRight className={STRIP_CHEVRON} strokeWidth={2.85} aria-hidden />
        </button>
      </div>
    </div>
  );
}
function EditorialGalleryStrip() {
  const prefersReducedMotion = useReducedMotion();
  if (prefersReducedMotion) {
    return <EditorialGalleryStripScroll />;
  }
  return <EditorialGalleryStripMarquee />;
}
/** Keep opacity at 1 so copy stays readable if viewport observers mis-fire; animate Y only. */
const viewport = { once: true, amount: 0.08 } as const;

export default function MagicFrameDifferenceSection() {
  return (
    <section
      id="magic-frame-difference"
      className="relative scroll-mt-24 bg-[#0a0a0a]"
      aria-labelledby="magic-frame-difference-heading"
    >
      {/*
        Three-column editorial layout (~1 : 1.5 : 1). Center rail uses site dark bg + light copy.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(min(100%,300px),1.5fr)_minmax(0,1fr)] lg:items-stretch">
        <div className="relative min-h-[280px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(85vh,720px)] lg:h-full lg:w-full">
          <Image
            src={IMG_LEFT}
            alt="Editorial portrait in black and white"
            fill
            className="object-cover grayscale contrast-[1.05]"
            sizes="(max-width: 1024px) 100vw, 30vw"
          />
        </div>

        <div className="flex flex-col justify-center bg-[#0a0a0a] px-8 py-14 text-center lg:px-12 lg:py-20 xl:px-16">
          <motion.h2
            id="magic-frame-difference-heading"
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-[min(100%,22rem)] text-lg font-bold tracking-tight text-[#f5f0eb] sm:max-w-[26rem] sm:text-xl md:text-2xl lg:text-[1.35rem] xl:max-w-[28rem] xl:text-[1.5rem]"
            style={{ fontFamily: sans }}
          >
            Award-winning photographers in India
          </motion.h2>

          <motion.div
            initial={{ opacity: 1, scaleX: 0.55 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={viewport}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mx-auto mt-5 mb-6 h-px w-14 origin-center bg-[#c9a84c]/45"
            aria-hidden
          />

          <motion.p
            initial={{ opacity: 1, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-10 max-w-md text-[10px] font-semibold leading-relaxed tracking-normal text-[#f5f0eb]/55 sm:text-[11px]"
            style={{ fontFamily: sans }}
          >
            Capturing timeless memories and brand stories
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="mx-auto mb-10 max-w-xl space-y-5 text-center text-[13px] leading-[1.85] text-stone-300 sm:text-sm lg:max-w-2xl xl:max-w-3xl lg:space-y-6 lg:text-[14px] lg:leading-[1.8]"
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
              className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide text-[#f5f0eb] underline-offset-4 transition-colors hover:text-[#c9a84c] hover:underline"
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

        <div className="relative min-h-[280px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(85vh,720px)] lg:h-full lg:w-full">
          <Image
            src={IMG_RIGHT}
            alt="Fashion editorial portrait by the coast at golden hour"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 30vw"
          />
        </div>
      </div>

      <EditorialGalleryStrip />
    </section>
  );
}
