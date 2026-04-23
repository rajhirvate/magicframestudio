"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const inter = "var(--font-inter), sans-serif";

export type MasonryImageItem = {
  src: string;
  alt: string;
  aspect: string;
  /** Applied to the image card; use to size a tile smaller than the column (e.g. `mx-auto w-[72%]`). */
  cardClassName?: string;
};

const WEDDING_MASONRY_SECTION_1: MasonryImageItem[] = [
  {
    src: "/images/services/wedding-photography-about.png",
    alt: "Wedding photography — celebration",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=640&q=75&fit=crop&auto=format",
    alt: "Bridal portrait",
    aspect: "aspect-[1/1]",
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
    src: "https://images.unsplash.com/photo-1464366400606-116158a48e7f?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding venue",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding rings detail",
    aspect: "aspect-[1/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607260-14d1d9341941?w=800&q=80&fit=crop&auto=format",
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
    src: "https://images.unsplash.com/photo-1619470342094-17fc66c779ee?w=640&q=75&fit=crop&auto=format",
    alt: "Wedding couple — candid portrait",
    aspect: "aspect-[3/4]",
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

/** Extra tiles so the first view can show 16+ and “Load more” still reveals more */
const WEDDING_MASONRY_SECTION_3: MasonryImageItem[] = [
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08c714e61e9?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding ceremony aisle",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop&auto=format",
    alt: "Bride and groom portrait",
    aspect: "aspect-[4/5]",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding reception lights",
    aspect: "aspect-[16/10]",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-73062142fd40?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding mandap detail",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80&fit=crop&auto=format",
    alt: "Couple walking together",
    aspect: "aspect-[2/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding guests celebration",
    aspect: "aspect-[5/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221050-0f4caff4492c?w=800&q=80&fit=crop&auto=format",
    alt: "Bridal bouquet close-up",
    aspect: "aspect-[1/1]",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80&fit=crop&auto=format",
    alt: "Outdoor wedding venue",
    aspect: "aspect-[16/9]",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&fit=crop&auto=format",
    alt: "Evening wedding decor",
    aspect: "aspect-[3/4]",
  },
  {
    src: "https://images.unsplash.com/photo-1609560827847-e9927da40b7b?w=800&q=80&fit=crop&auto=format",
    alt: "Wedding celebration candid",
    aspect: "aspect-[3/5]",
  },
];

const ALL_MASONRY_ITEMS: MasonryImageItem[] = [
  ...WEDDING_MASONRY_SECTION_1,
  ...WEDDING_MASONRY_SECTION_2,
  ...WEDDING_MASONRY_SECTION_3,
];

/** Total pool (7 + 9 + 10 = 26). First view uses INITIAL_MASONRY_COUNT. */
const TOTAL_MASONRY_IMAGES = ALL_MASONRY_ITEMS.length;

/** How many images show before the user clicks anything (not 5). */
const INITIAL_MASONRY_COUNT = 16;
/** How many images each “Load more.” click appends (always 5 per click until the list runs out). */
const LOAD_MORE_BATCH = 5;

/** Estimated vertical “weight” from Tailwind aspect class (taller tiles go to shorter columns). */
function aspectWeight(aspectClass: string): number {
  const m = aspectClass.match(/\[(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)\]/);
  if (!m) return 1;
  const w = parseFloat(m[1]);
  const h = parseFloat(m[2]);
  return h / w;
}

type IndexedMasonryItem = { item: MasonryImageItem; index: number };

/** Shortest-column packing — balances column heights vs CSS columns (which stacks unevenly at the bottom). */
function distributeIntoColumns(
  entries: IndexedMasonryItem[],
  columnCount: number,
): IndexedMasonryItem[][] {
  if (columnCount <= 1) return [entries];
  const cols: IndexedMasonryItem[][] = Array.from(
    { length: columnCount },
    () => [],
  );
  const heights = Array(columnCount).fill(0);
  for (const entry of entries) {
    const w = aspectWeight(entry.item.aspect);
    let shortest = 0;
    for (let c = 1; c < columnCount; c++) {
      if (heights[c] < heights[shortest]) shortest = c;
    }
    cols[shortest].push(entry);
    heights[shortest] += w;
  }
  return cols;
}

function getMasonryColumnCount(): 1 | 2 | 3 {
  if (typeof window === "undefined") return 1;
  if (window.matchMedia("(min-width: 768px)").matches) return 3;
  if (window.matchMedia("(min-width: 640px)").matches) return 2;
  return 1;
}

function subscribeMasonryColumnCount(cb: () => void) {
  const mqSm = window.matchMedia("(min-width: 640px)");
  const mqMd = window.matchMedia("(min-width: 768px)");
  mqSm.addEventListener("change", cb);
  mqMd.addEventListener("change", cb);
  return () => {
    mqSm.removeEventListener("change", cb);
    mqMd.removeEventListener("change", cb);
  };
}

function useMasonryColumnCount(): 1 | 2 | 3 {
  return useSyncExternalStore(
    subscribeMasonryColumnCount,
    getMasonryColumnCount,
    () => 1,
  );
}

function MasonryGrid({
  items,
  eagerUpToIndex,
}: {
  items: MasonryImageItem[];
  /** Load first N tiles eagerly so all initial slots paint (lazy-only can hide below-the-fold in columns). */
  eagerUpToIndex: number;
}) {
  const columnCount = useMasonryColumnCount();
  const indexed = useMemo(
    () => items.map((item, index) => ({ item, index })),
    [items],
  );
  const columns = useMemo(
    () => distributeIntoColumns(indexed, columnCount),
    [indexed, columnCount],
  );

  return (
    <div
      className={cn(
        "flex gap-3",
        columnCount === 1 ? "flex-col" : "flex-row",
      )}
    >
      {columns.map((col, colIdx) => (
        <div
          key={colIdx}
          className={cn(
            "flex min-w-0 flex-col gap-3",
            columnCount > 1 && "flex-1",
          )}
        >
          {col.map(({ item, index }) => (
            <div key={`masonry-${index}`}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-[10px] bg-neutral-200/90",
                  "ring-1 ring-black/[0.06]",
                  "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
                  "transition-[box-shadow,transform] duration-300 ease-out",
                  "hover:shadow-[0_4px_14px_-4px_rgba(0,0,0,0.08)]",
                  item.cardClassName,
                )}
              >
                <div className={`relative w-full ${item.aspect}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    loading={index < eagerUpToIndex ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function WeddingMasonryPortfolios() {
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(INITIAL_MASONRY_COUNT, TOTAL_MASONRY_IMAGES),
  );
  const visibleItems = useMemo(
    () => ALL_MASONRY_ITEMS.slice(0, visibleCount),
    [visibleCount],
  );
  const hasMore = visibleCount < TOTAL_MASONRY_IMAGES;
  /** Eager-load through the first full batch so column layout shows all initial images, not only above-the-fold lazies. */
  const eagerUpToIndex = Math.min(INITIAL_MASONRY_COUNT, visibleItems.length);

  return (
    <section className="border-t border-neutral-200/90 bg-[#f4f4f3] py-14 lg:py-20">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="sr-only" aria-live="polite">
          Gallery showing {visibleItems.length} of {TOTAL_MASONRY_IMAGES} photos
        </p>
        <MasonryGrid items={visibleItems} eagerUpToIndex={eagerUpToIndex} />

        {hasMore && (
          <p
            className="mt-10 text-center text-sm text-stone-600 sm:text-[15px]"
            style={{ fontFamily: inter }}
          >
            Want to see more?{" "}
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + LOAD_MORE_BATCH, TOTAL_MASONRY_IMAGES),
                )
              }
              className="inline cursor-pointer border-0 bg-transparent p-0 font-semibold text-stone-900 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-[#c9a84c] hover:decoration-[#c9a84c]/50"
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
