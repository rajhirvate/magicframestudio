"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const inter = "var(--font-inter), sans-serif";

export type MasonryImageItem = {
  src: string;
  alt: string;
};

const WEDDING_GALLERY_SECTION_1: MasonryImageItem[] = [
  {
    src: "/images/services/wedding-photography-about.png",
    alt: "Wedding photography — celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=640&q=75&fit=crop&auto=format",
    alt: "Bridal portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding film still",
  },
  {
    src: "/images/wedding-about-service.png",
    alt: "Wedding story",
  },
  {
    src: "https://images.unsplash.com/photo-1464366400606-116158a48e7f?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding venue",
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding rings detail",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607260-14d1d9341941?w=800&q=80&fit=crop&auto=format",
    alt: "Couple portrait",
  },
];

const WEDDING_GALLERY_SECTION_2: MasonryImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=640&q=75&fit=crop&auto=format",
    alt: "Event celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=640&q=75&fit=crop&auto=format",
    alt: "Portrait session",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding celebration moments",
  },
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=640&q=75&fit=crop&auto=format",
    alt: "Fashion wedding look",
  },
  {
    src: "https://images.unsplash.com/photo-1619470342094-17fc66c779ee?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding couple — candid portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=640&q=75&fit=crop&auto=format",
    alt: "Drone wedding view",
  },
  {
    src: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding couple outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding details and styling",
  },
  {
    src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=640&q=75&fit=crop&auto=format",
    alt: "Celebration atmosphere",
  },
];

const WEDDING_GALLERY_SECTION_3: MasonryImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08c714e61e9?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding ceremony aisle",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop&auto=format",
    alt: "Bride and groom portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding reception lights",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-73062142fd40?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding mandap detail",
  },
  {
    src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80&fit=crop&auto=format",
    alt: "Couple walking together",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding guests celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221050-0f4caff4492c?w=800&q=80&fit=crop&auto=format",
    alt: "Bridal bouquet close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80&fit=crop&auto=format",
    alt: "Outdoor wedding venue",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop&auto=format",
    alt: "Evening wedding decor",
  },
  {
    src: "https://images.unsplash.com/photo-1609560827847-e9927da40b7b?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding celebration candid",
  },
  {
    src: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding flowers and rings",
  },
  {
    src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding couple portrait",
  },
];

/** Extra pool for “Load more” (+8 per click) — URLs verified HTTP 200 on Unsplash CDN. */
const WEDDING_GALLERY_LOAD_MORE: MasonryImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding celebration portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&fit=crop&auto=format",
    alt: "Bridal getting ready",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding fashion portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding day portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=800&q=80&fit=crop&auto=format",
    alt: "Couple — wedding portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding reception moment",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80&fit=crop&auto=format",
    alt: "Bridal beauty portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding candid portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80&fit=crop&auto=format",
    alt: "Bridal styling detail",
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80&fit=crop&auto=format",
    alt: "Outdoor wedding portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop&auto=format",
    alt: "Couple laughing together",
  },
  {
    src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding party group",
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80&fit=crop&auto=format",
    alt: "Soft light bridal portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80&fit=crop&auto=format",
    alt: "Editorial wedding portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80&fit=crop&auto=format",
    alt: "Creative couple portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=800&q=80&fit=crop&auto=format",
    alt: "Couple outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&fit=crop&auto=format",
    alt: "Groom portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&fit=crop&auto=format",
    alt: "Groom candid portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80&fit=crop&auto=format",
    alt: "Bridal portrait — natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding day moment",
  },
  {
    src: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding detail — hands",
  },
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding guest portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&fit=crop&auto=format",
    alt: "Formal wedding portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop&auto=format",
    alt: "Professional wedding portrait",
  },
];

const ALL_GALLERY_ITEMS: MasonryImageItem[] = [
  ...WEDDING_GALLERY_SECTION_1,
  ...WEDDING_GALLERY_SECTION_2,
  ...WEDDING_GALLERY_SECTION_3,
  ...WEDDING_GALLERY_LOAD_MORE,
];

const TOTAL_GALLERY_IMAGES = ALL_GALLERY_ITEMS.length;

const INITIAL_VISIBLE_COUNT = 28;
const LOAD_MORE_BATCH = 8;

/** Stagger only the first screen of tiles so the grid feels sequential as you scroll. */
const SCROLL_REVEAL_STAGGER_CAP = 28;

function subscribePrefersReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getPrefersReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribePrefersReducedMotion,
    getPrefersReducedMotionSnapshot,
    () => false,
  );
}

function UniformGalleryGrid({
  items,
  eagerUpToIndex,
}: {
  items: MasonryImageItem[];
  /** Images at or above this index use lazy loading (after “Load more” batches). */
  eagerUpToIndex: number;
}) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <div
      className={cn("grid grid-cols-4 gap-1.5 sm:gap-2.5 lg:gap-3")}
      data-gallery-count={items.length}
    >
      {items.map((item, index) => (
        <motion.div
          key={`${item.src}-${index}`}
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -10% 0px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay:
              reduceMotion || index >= SCROLL_REVEAL_STAGGER_CAP
                ? 0
                : Math.min(index * 0.028, 0.42),
          }}
          className={cn(
            "group relative overflow-hidden rounded-xl bg-stone-100",
            "ring-1 ring-black/[0.04]",
            "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
            "transition-[box-shadow,transform] duration-300 ease-out",
            "hover:shadow-[0_6px_16px_-6px_rgba(0,0,0,0.12)]",
          )}
        >
          <div className="relative aspect-[3/4] w-full">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading={index < eagerUpToIndex ? "eager" : "lazy"}
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 25vw, 25vw"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default function WeddingMasonryPortfolios() {
  /** Derived count avoids stale `useState` after hot reload when INITIAL_VISIBLE_COUNT changes. */
  const [loadMoreBatches, setLoadMoreBatches] = useState(0);
  const visibleCount = Math.min(
    INITIAL_VISIBLE_COUNT + loadMoreBatches * LOAD_MORE_BATCH,
    TOTAL_GALLERY_IMAGES,
  );
  const visibleItems = useMemo(
    () => ALL_GALLERY_ITEMS.slice(0, visibleCount),
    [visibleCount],
  );
  const hasMore = visibleCount < TOTAL_GALLERY_IMAGES;

  return (
    <section className="border-t border-stone-200/90 bg-[#f8f7f5] py-14 lg:py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="sr-only" aria-live="polite">
          Gallery showing {visibleItems.length} of {TOTAL_GALLERY_IMAGES} photos
        </p>
        <UniformGalleryGrid
          items={visibleItems}
          eagerUpToIndex={INITIAL_VISIBLE_COUNT}
        />

        {hasMore && (
          <p
            className="mt-10 text-center text-sm sm:text-[15px] leading-relaxed"
            style={{ fontFamily: inter }}
          >
            <span className="font-normal text-stone-500">
              Want to see more?{" "}
            </span>
            <button
              type="button"
              onClick={() => setLoadMoreBatches((b) => b + 1)}
              className="inline cursor-pointer border-0 bg-transparent p-0 font-bold text-stone-900 underline decoration-stone-300 underline-offset-[3px] transition-colors hover:text-[#c9a84c] hover:decoration-[#c9a84c]/50"
              style={{ fontFamily: inter }}
            >
              Load more.
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
