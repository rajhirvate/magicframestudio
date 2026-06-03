import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";
import HeroLeadForm from "@/components/sections/HeroLeadForm";

/** Service-page hero eyebrow — compact gold label. */
const HERO_EYEBROW_CLASS =
  "text-[0.6875rem] sm:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] uppercase mb-3 sm:mb-4 text-[#c9a84c]";

/** Service-page hero H1 — Montserrat, bold, sentence case. */
const HERO_H1_CLASS =
  "font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#f5f0eb] leading-[1.04]";

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
  src: "/images/hero-home.webp",
  alt: "Bride and groom at a wedding ceremony under floral décor",
  objectClass: "object-cover object-center",
  eyebrow: "Magic Frame Studio · Since 2020",
  title: (
    <>
      We don&apos;t just capture moments <TitleAccent /> we craft stories.
    </>
  ),
  lead: [
    "We work across India with couples, families, and brands,",
    "from weddings through campaigns — photos and films you will revisit for years.",
  ],
};

type HeroSectionHero3Props = {
  /** `/hero4` uses wider padding and omits the left readability gradient. */
  variant?: "default" | "hero4";
};

/** Server-rendered hero — CSS motion only; client JS limited to `HeroLeadForm`. */
export default function HeroSectionHero3({
  variant = "default",
}: HeroSectionHero3Props) {
  const isHero4 = variant === "hero4";

  return (
    <section
      className={cn(
        "mfs-hero-editorial relative flex min-h-[100svh] w-full flex-col overflow-hidden pt-16 lg:pt-20 text-white",
      )}
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
              quality={60}
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
                <div>
                  <p className={cn(HERO_EYEBROW_CLASS, "mfs-hero-line")}>
                    {HERO_SLIDE.eyebrow}
                  </p>

                  <h1 className={cn(HERO_H1_CLASS, "mfs-hero-title inline-block")}>
                    <span aria-live="polite">{HERO_SLIDE.title}</span>
                  </h1>

                  <p
                    className={cn(
                      "mfs-hero-sub mt-6 w-full max-w-none text-left text-[0.9375rem] font-light leading-snug tracking-normal sm:mt-7 sm:text-lg sm:leading-snug [&>span]:text-pretty",
                      isHero4 ? "text-white/75" : "text-white/88",
                    )}
                  >
                    <span className="block">{HERO_SLIDE.lead[0]}</span>
                    <span className="block">{HERO_SLIDE.lead[1]}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mfs-hero-form w-full max-w-md justify-self-center lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:justify-self-end lg:self-start">
              <HeroLeadForm />
            </div>

            <div className="mfs-hero-cta flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:col-start-1 lg:row-start-2">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
