"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const BG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop";

const TAGS = [
  { label: "Wedding", href: "/photography/wedding-photography" },
  { label: "Events", href: "/photography/event-photography" },
  { label: "Portrait", href: "/photography/portrait-photography" },
  { label: "Corporate", href: "/photography/corporate-photography" },
  { label: "Product", href: "/photography/product-photography" },
] as const;

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
    title: "Glass Villa — Coorg",
    subtitle: "Shot on Sony α7 IV",
  },
  {
    src: "https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=800&auto=format&fit=crop",
    title: "Harbor Lights — Mumbai",
    subtitle: "Shot on Canon R6",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    title: "Garden Vows — Pune",
    subtitle: "Shot on Nikon Z8",
  },
] as const;

export default function HeroSectionGlass() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = window.setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      6500,
    );
    return () => window.clearInterval(t);
  }, []);

  const progress = ((active + 1) / SLIDES.length) * 100;

  return (
    <section
      className="relative min-h-[100svh] w-full overflow-hidden text-white"
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
    >
      <div className="absolute inset-0">
        <Image
          src={BG}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/55" />
      </div>

      {/* pt clears fixed global Navbar (h-16 / h-20) */}
      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-1 flex-col px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:min-h-[calc(100svh-5rem)] lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-10 lg:pb-14 lg:pt-20">
        <div className="max-w-xl lg:max-w-[540px] lg:pb-4">
          <h1 className="text-[2rem] font-bold leading-[1.12] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] sm:text-4xl md:text-5xl lg:text-6xl">
            Capturing beautiful moments through lens &amp; shutter speed
          </h1>

          <div className="mt-8 flex flex-wrap gap-2 lg:mt-12">
            {TAGS.map((tag) => (
              <Link
                key={tag.href}
                href={tag.href}
                className="rounded-full border border-white/35 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/95 backdrop-blur-sm hover:border-white/55 hover:bg-white/15 sm:text-[11px]"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-12 w-full max-w-md self-end lg:mt-0 lg:shrink-0",
            "rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-5",
          )}
        >
          <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold tracking-widest text-white/60">
            <span>01</span>
            <div className="h-0.5 flex-1 rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-[width] duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>0{SLIDES.length}</span>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "flex w-[min(200px,72vw)] shrink-0 flex-col overflow-hidden rounded-xl border text-left transition-all",
                  i === active
                    ? "border-white/50 bg-white/15 shadow-lg"
                    : "border-white/15 bg-white/5 opacity-80 hover:opacity-100",
                )}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={slide.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="200px"
                  />
                </div>
                <div className="p-3">
                  <p className="line-clamp-2 text-xs font-semibold leading-snug text-white">
                    {slide.title}
                  </p>
                  <p className="mt-1 text-[10px] text-white/55">{slide.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
