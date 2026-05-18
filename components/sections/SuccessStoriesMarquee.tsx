"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { SuccessStory } from "@/data/successStoriesMarquee";
import {
  SUCCESS_STORIES_MARQUEE_ROW_A,
  SUCCESS_STORIES_MARQUEE_ROW_B,
} from "@/data/successStoriesMarquee";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const sans = "var(--font-sans), sans-serif";

function StoryCard({ story, index }: { story: SuccessStory; index: number }) {
  const portraitAlt =
    story.imageAlt?.trim() || `Portrait of ${story.name}`;
  const isBlobOrData =
    story.image.startsWith("blob:") || story.image.startsWith("data:");
  const isRemotePattern =
    typeof story.image === "string" && story.image.startsWith("http");

  return (
    <article
      className="flex h-full w-[min(22rem,calc(100vw-4rem))] shrink-0 flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#121826]/90 px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-sm sm:w-80 sm:py-6"
      aria-label={`Review from ${story.name}`}
    >
      <p
        className="text-[13px] leading-relaxed text-white/92 sm:text-sm"
        style={{ fontFamily: sans }}
      >
        {story.review}
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-4">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#c9a84c]/25">
          {/* Local `/public/*` URLs + remote optimized; avoid next/image blob/data quirks */}
          {isBlobOrData ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={story.image}
              alt={portraitAlt}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <Image
              src={story.image}
              alt={portraitAlt}
              fill
              className="object-cover"
              sizes="40px"
              priority={index < 4 && isRemotePattern}
              unoptimized={
                typeof story.image === "string" && story.image.startsWith("/") && story.image.endsWith(".gif")
              }
            />
          )}
        </div>
        <div className="min-w-0 text-left">
          <p
            className="truncate text-sm font-semibold text-white"
            style={{ fontFamily: sans }}
          >
            {story.name}
          </p>
          <p
            className="truncate text-xs text-white/50"
            style={{ fontFamily: sans }}
          >
            {story.subtitle}
          </p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  reverse,
  items,
  prefersReducedMotion,
}: {
  reverse?: boolean;
  items: SuccessStory[];
  prefersReducedMotion: boolean;
}) {
  if (prefersReducedMotion) {
    return (
      <div className="mx-auto grid max-w-7xl justify-center gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:px-8">
        {items.map((story, index) => (
          <StoryCard
            key={`static-${reverse ? "b" : "a"}-${story.name}`}
            story={story}
            index={index}
          />
        ))}
      </div>
    );
  }

  const loop = [...items, ...items];
  return (
    <div
      className="relative w-screen max-w-none py-1"
      style={{ marginInline: "calc(50% - 50vw)" }}
    >
      <div className="overflow-hidden">
        <div
          className={cn(
            "flex w-max gap-5 pr-5",
            reverse ? "mfs-marquee-row-right" : "mfs-marquee-row-left",
          )}
        >
          {loop.map((story, index) => (
            <StoryCard
              key={`${story.name}-${index}`}
              story={story}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SuccessStoriesMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const isHero4 = pathname === "/hero4";

  return (
    <section
      className="relative overflow-hidden border-t border-stone-200 bg-white py-[4.25rem] lg:py-[5.25rem]"
      aria-labelledby="success-stories-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(201,168,76,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {isHero4 ? (
          <SectionHeading
            id="success-stories-heading"
            eyebrow="Success stories"
            title={
              <>
                Powered by{" "}
                <span className="text-[#9a7b2e]">Magic Frame Studio</span>
              </>
            }
          />
        ) : (
          <>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c]"
              style={{ fontFamily: sans }}
            >
              Success stories
            </p>
            <h2
              id="success-stories-heading"
              className="mfs-home-title mt-3 text-[1.9375rem] text-stone-900"
            >
              Powered by{" "}
              <span className="text-[#9a7b2e]">Magic Frame Studio</span>
            </h2>
          </>
        )}
        <p
          className="mt-4 max-w-xl text-sm text-stone-600"
          style={{ fontFamily: sans }}
        >
          Real timelines, real crews — marquee proof from couples, brands, and
          organisers who reran our deliverables instead of reinventing briefs.
        </p>
      </div>

      <div className="relative z-[1] mt-10 space-y-2 lg:mt-12 lg:space-y-3">
        <MarqueeRow
          items={SUCCESS_STORIES_MARQUEE_ROW_A}
          prefersReducedMotion={!!prefersReducedMotion}
        />
        <MarqueeRow
          reverse
          items={SUCCESS_STORIES_MARQUEE_ROW_B}
          prefersReducedMotion={!!prefersReducedMotion}
        />
      </div>
    </section>
  );
}
