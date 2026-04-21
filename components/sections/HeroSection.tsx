"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    type WindowWithOptionalIdle = Window & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const w = window as WindowWithOptionalIdle;
    if (w.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    // ~5.7MB MP4: only load on large viewports so phones/tablets stay fast.
    if (!w.matchMedia?.("(min-width: 1024px)").matches) {
      return;
    }

    const enable = () => setShowVideo(true);
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    if (typeof w.requestIdleCallback === "function") {
      idleId = w.requestIdleCallback(enable, { timeout: 8000 });
    } else {
      timeoutId = w.setTimeout(enable, 4000);
    }

    return () => {
      if (idleId !== undefined && typeof w.cancelIdleCallback === "function") {
        w.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) {
        w.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Solid base while video loads — avoids blocking LCP on ~6MB MP4 */}
      <div className="absolute inset-0 bg-[#141210]" aria-hidden />

      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay layers */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-transparent to-transparent" />

      {/* Vignette edges */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]/50" />

      {/* Gold corner accents */}
      <div className="absolute top-24 left-8 w-14 h-px bg-[#c9a84c]/50 hidden sm:block" />
      <div className="absolute top-24 left-8 w-px h-14 bg-[#c9a84c]/50 hidden sm:block" />
      <div className="absolute top-24 right-8 w-14 h-px bg-[#c9a84c]/50 hidden sm:block" />
      <div className="absolute top-24 right-8 w-px h-14 bg-[#c9a84c]/50 hidden sm:block" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl w-full mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-xs font-medium tracking-[0.4em] text-[#c9a84c] uppercase mb-6"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Magic Frame Studio · Since 2020
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.12, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#f5f0eb] leading-[1.15] mb-6 text-center w-full"
        >
          We Don&apos;t Just Capture Moments{" "}
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "0.45em",
              height: "0.06em",
              backgroundColor: "currentColor",
              verticalAlign: "middle",
              borderRadius: "2px",
              margin: "0 0.05em",
              transform: "translateY(-0.05em)",
            }}
          />{" "}
          We Craft Stories
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28, ease: "easeOut" }}
          className="text-xs sm:text-sm text-[#f5f0eb]/60 tracking-[0.25em] uppercase mb-10"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Wedding · Events · Portraits · Corporate · Product Shoots
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-medium text-[#f5f0eb] border border-[#f5f0eb]/25 hover:border-[#f5f0eb]/60 rounded-full transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Explore Our Work
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-full transition-colors duration-200 shadow-lg shadow-[#c9a84c]/20"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>

    </section>
  );
}
