"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Editorial layout — `/hero3` flanking portraits + strip gallery (no center copy column). */
const IMG_LEFT =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80&fit=crop&auto=format";
const IMG_RIGHT =
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80&fit=crop&auto=format";

/** Filmstrip under portraits — diverse genres, flush tiles, horizontal scroll. */
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

export default function MagicFrameDifferenceSection() {
  return (
    <section
      id="magic-frame-difference"
      className="relative scroll-mt-24 bg-[#0a0a0a]"
      aria-label="Editorial portraits and scrolling portfolio gallery"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-stretch">
        <div className="relative min-h-[280px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(85vh,720px)] lg:h-full lg:w-full">
          <Image
            src={IMG_LEFT}
            alt="Editorial portrait in black and white"
            fill
            className="object-cover grayscale contrast-[1.05]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="relative min-h-[280px] aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:min-h-[min(85vh,720px)] lg:h-full lg:w-full">
          <Image
            src={IMG_RIGHT}
            alt="Fashion editorial portrait by the coast at golden hour"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      <EditorialGalleryStrip />
    </section>
  );
}
