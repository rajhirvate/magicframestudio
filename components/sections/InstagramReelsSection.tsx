"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
import {
  INSTAGRAM_REEL_EMBED_URLS,
  INSTAGRAM_REELS_TAB_URL,
} from "@/data/instagramReelsConfig";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function processInstagramEmbeds() {
  if (typeof window !== "undefined" && window.instgrm?.Embeds) {
    window.instgrm.Embeds.process();
  }
}

const STRIP_NAV_BTN =
  "pointer-events-auto rounded-full p-2 text-white transition hover:bg-white/12 hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/90 active:scale-[0.96]";
const STRIP_CHEVRON =
  "drop-shadow-[0_3px_10px_rgba(0,0,0,0.45)] h-8 w-8 sm:h-9 sm:w-9";

function ReelsTabFallback() {
  const handle = (() => {
    try {
      const u = new URL(INSTAGRAM_REELS_TAB_URL);
      const seg = u.pathname.split("/").filter(Boolean)[0];
      return seg ? `@${seg}` : "Instagram";
    } catch {
      return "Instagram reels";
    }
  })();

  return (
    <div className="relative flex min-h-[min(52vw,280px)] w-full items-center justify-center overflow-hidden border-t border-white/10 bg-[#0a0a0a] px-6 py-14 sm:min-h-[260px] sm:py-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 20% 30%, rgb(131, 58, 180), transparent 55%), radial-gradient(ellipse 70% 70% at 80% 70%, rgb(253, 29, 29), transparent 50%), radial-gradient(ellipse 60% 60% at 50% 50%, rgb(245, 96, 64), transparent 55%)",
        }}
        aria-hidden
      />
      <Link
        href={INSTAGRAM_REELS_TAB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-[1] flex max-w-lg flex-col items-center gap-4 rounded-2xl border border-white/15 bg-black/55 px-8 py-10 text-center shadow-[0_24px_80px_-24px_rgba(0,0,0,0.85)] backdrop-blur-md transition hover:border-[#c9a84c]/45 hover:bg-black/65"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white">
          <Camera className="h-7 w-7" strokeWidth={1.75} aria-hidden />
        </span>
        <span className="font-semibold uppercase tracking-[0.22em] text-white/95">
          Reels on Instagram
        </span>
        <span className="text-sm text-white/75">
          {handle} — tap to open the full reels feed in Instagram.
        </span>
        <span className="mt-1 text-xs font-medium uppercase tracking-widest text-[#c9a84c]">
          Open reels
        </span>
      </Link>
      <p className="sr-only">
        Opens Instagram reels in a new tab. Add reel permalinks in
        data/instagramReelsConfig.ts for inline players.
      </p>
    </div>
  );
}

function ReelEmbedsStrip() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = useCallback((direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.max(280, Math.floor(el.clientWidth * 0.65));
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => processInstagramEmbeds(), 120);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          processInstagramEmbeds();
          window.setTimeout(processInstagramEmbeds, 250);
        }}
      />
      <div className="relative w-full border-t border-black/15 bg-[#0a0a0a]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-14 items-center bg-gradient-to-r from-black/70 via-black/35 to-transparent pl-2 sm:w-[4.5rem] sm:pl-3 md:w-24">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            className={STRIP_NAV_BTN}
            aria-label="Scroll reels left"
          >
            <ChevronLeft className={STRIP_CHEVRON} strokeWidth={2.85} aria-hidden />
          </button>
        </div>

        <div
          ref={scrollerRef}
          role="region"
          aria-label="Instagram reels"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") scrollBy(1);
            if (e.key === "ArrowLeft") scrollBy(-1);
          }}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden px-4 py-8 sm:gap-6 sm:px-10 sm:py-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {INSTAGRAM_REEL_EMBED_URLS.map((url) => (
            <div
              key={url}
              className="w-[min(100vw-3rem,326px)] shrink-0 snap-start [&_.instagram-media]:!min-w-0"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "12px",
                  margin: 0,
                  maxWidth: "540px",
                  minWidth: "280px",
                  padding: 0,
                  width: "100%",
                }}
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-14 items-center justify-end bg-gradient-to-l from-black/70 via-black/35 to-transparent pr-2 sm:w-[4.5rem] sm:pr-3 md:w-24">
          <button
            type="button"
            onClick={() => scrollBy(1)}
            className={STRIP_NAV_BTN}
            aria-label="Scroll reels right"
          >
            <ChevronRight className={STRIP_CHEVRON} strokeWidth={2.85} aria-hidden />
          </button>
        </div>

        <div className="border-t border-white/10 bg-black/40 px-4 py-3 text-center sm:px-6">
          <Link
            href={INSTAGRAM_REELS_TAB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#c9a84c] transition hover:text-[#e0c068]"
          >
            <Camera className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            All reels on Instagram
          </Link>
        </div>
      </div>
    </>
  );
}

export default function InstagramReelsSection() {
  if (INSTAGRAM_REEL_EMBED_URLS.length === 0) {
    return <ReelsTabFallback />;
  }
  return <ReelEmbedsStrip />;
}
