"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

const PORTFOLIO_CTA_HREF =
  "/portfolio#:~:text=All-,Wedding,-Events" as const;

export type MasonryImageItem = {
  src: string;
  alt: string;
  aspect: string;
};

const WEDDING_MASONRY_SECTION_1: MasonryImageItem[] = [
  {
    src: "/images/services/wedding-photography-about.png",
    alt: "Wedding photography — celebration",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding ceremony couple",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=640&q=75&fit=crop&auto=format",
    alt: "Bridal portrait",
    aspect: "aspect-[2/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding film still",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/images/wedding-about-service.png",
    alt: "Wedding story",
    aspect: "aspect-[3/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c2?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding venue",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221050-0f9c9aafeac5?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding rings detail",
    aspect: "aspect-[1/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c145e?w=640&q=75&fit=crop&auto=format",
    alt: "Couple portrait",
    aspect: "aspect-[4/5]",
  },
];

const WEDDING_MASONRY_SECTION_2: MasonryImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&q=75&fit=crop&auto=format",
    alt: "Event celebration",
    aspect: "aspect-[5/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=640&q=75&fit=crop&auto=format",
    alt: "Portrait session",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/gallery/wedding-row-3-placeholder.png",
    alt: "Wedding gallery",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=640&q=75&fit=crop&auto=format",
    alt: "Fashion wedding look",
    aspect: "aspect-[2/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=640&q=75&fit=crop&auto=format",
    alt: "Drone wedding view",
    aspect: "aspect-[16/9]",
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding couple outdoors",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding details and styling",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=640&q=75&fit=crop&auto=format",
    alt: "Celebration atmosphere",
    aspect: "aspect-[1/1]",
  },
];

function MasonryReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function MasonryGrid({ items }: { items: MasonryImageItem[] }) {
  return (
    <div className="columns-1 md:columns-2 [column-gap:0.75rem] sm:[column-gap:1rem] lg:[column-gap:1.125rem] [column-fill:balance]">
      {items.map((item, i) => (
        <div key={`${item.src}-${i}`} className="mb-3.5 sm:mb-[1.125rem] break-inside-avoid">
          <div className="group relative overflow-hidden rounded-2xl bg-stone-200 ring-1 ring-stone-200/80 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.1)] transition-[box-shadow,transform] duration-500 ease-out hover:shadow-[0_12px_40px_-8px_rgba(201,168,76,0.22)] hover:ring-[#c9a84c]/35">
            <div className={`relative w-full ${item.aspect}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-900/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-0 ring-0 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-1 group-hover:ring-white/10" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function WeddingMasonryPortfolios() {
  return (
    <section className="relative overflow-hidden border-t border-stone-200/80 bg-gradient-to-b from-[#faf8f5] via-[#f7f4ef] to-[#fafaf9] py-16 lg:py-24">
      {/* Top hairline + warm glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/35 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[min(100%,56rem)] -translate-x-1/2 rounded-full bg-[#c9a84c]/[0.07] blur-[80px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-300/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MasonryGrid
          items={[...WEDDING_MASONRY_SECTION_1, ...WEDDING_MASONRY_SECTION_2]}
        />

        {/* Footer CTA */}
        <MasonryReveal delay={0.08}>
          <div className="mt-14 flex flex-col items-center gap-4 border-t border-stone-200/70 pt-12 text-center sm:mt-16 sm:pt-14">
            <p
              className="max-w-md text-sm text-stone-500"
              style={{ fontFamily: inter }}
            >
              See the full wedding category, filters, and more work in our
              portfolio.
            </p>
            <Link
              href={PORTFOLIO_CTA_HREF}
              className="inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-[#c9a84c] px-8 py-3.5 text-sm font-medium text-[#0a0a0a] shadow-md shadow-[#c9a84c]/25 transition-all duration-200 hover:scale-[1.02] hover:bg-[#e0c068] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c] sm:w-auto"
              style={{ fontFamily: poppins }}
            >
              View Wedding Photography Portfolio
              <ArrowRight size={14} className="shrink-0" aria-hidden />
            </Link>
          </div>
        </MasonryReveal>
      </div>
    </section>
  );
}
