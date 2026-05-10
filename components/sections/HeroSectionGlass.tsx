"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { MegaMenu, MobileServiceList } from "@/components/layout/ServiceMegaMenu";

const HERO_BACKGROUNDS = [
  {
    src: "https://zerogravity.photography/wp-content/uploads/2025/03/dssdwebp-1000x603.webp",
    alt: "Indian wedding — bride and groom with family, traditional ceremony moment",
  },
  {
    src: "https://www.focuzstudios.in/wp-content/uploads/2023/02/south-indian-wedding-photography-55.jpg",
    alt: "South Indian wedding couple in banquet hall with chandelier",
  },
] as const;

const TAGS = [
  { label: "Wedding", href: "/photography/wedding-photography" },
  { label: "Events", href: "/photography/event-photography" },
  { label: "Portrait", href: "/photography/portrait-photography" },
  { label: "Corporate", href: "/photography/corporate-photography" },
  { label: "Product", href: "/photography/product-photography" },
] as const;

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    title: "Wedding photography",
    subtitle: "Ceremonies, couples & candid stories",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd9212e?q=80&w=800&auto=format&fit=crop",
    title: "Event photography",
    subtitle: "Galas, launches & celebrations",
  },
  {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    title: "Videography",
    subtitle: "Cinematic films & highlight reels",
  },
] as const;

function GlassNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 text-[11px] font-medium tracking-wide transition-colors",
        pathname === href ? "text-[#c9a84c]" : "text-white/90 hover:text-white",
      )}
    >
      {label}
    </Link>
  );
}

function LogoMark() {
  return (
    <div
      className="grid grid-cols-2 gap-0.5 w-7 h-7 sm:w-8 sm:h-8 shrink-0"
      aria-hidden
    >
      <span className="rounded-sm bg-white/95" />
      <span className="rounded-sm bg-white/75" />
      <span className="rounded-sm bg-white/75" />
      <span className="rounded-sm bg-white/95" />
    </div>
  );
}

export default function HeroSectionGlass() {
  const pathname = usePathname();
  return <HeroSectionGlassInner key={pathname} />;
}

function HeroSectionGlassInner() {
  const pathname = usePathname();
  const [active, setActive] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMega, setOpenMega] = useState<"photography" | "videography" | null>(null);
  const [mobilePhotoOpen, setMobilePhotoOpen] = useState(false);
  const [mobileVideoOpen, setMobileVideoOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (type: "photography" | "videography") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(type);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  };

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  useEffect(() => {
    const t = window.setInterval(
      () => setActive((i) => (i + 1) % SLIDES.length),
      6500,
    );
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    const t = window.setInterval(
      () => setBgIndex((i) => (i + 1) % HERO_BACKGROUNDS.length),
      8000,
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
        {HERO_BACKGROUNDS.map((bg, i) => (
          <Image
            key={bg.src}
            src={bg.src}
            alt={bg.alt}
            fill
            priority={i === 0}
            className={cn(
              "pointer-events-none z-0 object-cover transition-opacity duration-[1400ms] ease-in-out",
              i === bgIndex ? "opacity-100" : "opacity-0",
            )}
            sizes="100vw"
            aria-hidden={i !== bgIndex}
          />
        ))}
        <div className="absolute inset-0 z-[1] bg-black/45" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#0a0a0a]/90 via-transparent to-[#0a0a0a]/55" />
      </div>

      <header className="relative z-20">
        <div className="relative w-full">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-3 px-4 pt-6 sm:px-6 sm:pt-8 lg:px-10">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
            >
              <LogoMark />
              <span className="text-xs font-bold tracking-[0.2em] uppercase sm:text-sm">
                Magic Frame
              </span>
            </Link>

            <nav
              className="hidden lg:flex items-center rounded-full border border-white/20 bg-white/10 px-1 py-1 backdrop-blur-xl"
              aria-label="Primary"
            >
              <div
                onMouseEnter={() => handleMouseEnter("photography")}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-[11px] font-medium tracking-wide transition-colors",
                    openMega === "photography" || pathname.startsWith("/photography")
                      ? "text-[#c9a84c]"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  Photography
                  <ChevronDown
                    size={13}
                    className={cn(
                      "transition-transform duration-200",
                      openMega === "photography" && "rotate-180",
                    )}
                  />
                </button>
              </div>
              <span className="mx-0.5 h-3 w-px shrink-0 bg-white/25" aria-hidden />
              <div
                onMouseEnter={() => handleMouseEnter("videography")}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 text-[11px] font-medium tracking-wide transition-colors",
                    openMega === "videography" || pathname.startsWith("/videography")
                      ? "text-[#c9a84c]"
                      : "text-white/90 hover:text-white",
                  )}
                >
                  Videography
                  <ChevronDown
                    size={13}
                    className={cn(
                      "transition-transform duration-200",
                      openMega === "videography" && "rotate-180",
                    )}
                  />
                </button>
              </div>
              <span className="mx-0.5 h-3 w-px shrink-0 bg-white/25" aria-hidden />
              <GlassNavLink href="/portfolio" label="Portfolio" />
              <span className="mx-0.5 h-3 w-px shrink-0 bg-white/25" aria-hidden />
              <GlassNavLink href="/about" label="About" />
              <span className="mx-0.5 h-3 w-px shrink-0 bg-white/25" aria-hidden />
              <GlassNavLink href="/contact" label="Contact" />
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/contact"
                className="hidden rounded-full bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-[#0a0a0a] shadow-lg shadow-black/20 transition-colors hover:bg-white/95 sm:inline-flex sm:px-5 sm:text-[11px]"
              >
                Book a call
              </Link>
              <Link
                href="/contact"
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-[#0a0a0a] transition-colors hover:bg-white/95 sm:flex"
                aria-label="Book a call"
              >
                <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
              </Link>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md lg:hidden"
                onClick={() => setMobileOpen((o) => !o)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {openMega ? (
            <MegaMenu
              type={openMega}
              onClose={() => setOpenMega(null)}
              onMouseEnter={cancelClose}
              onMouseLeave={handleMouseLeave}
            />
          ) : null}
        </div>

        {mobileOpen ? (
          <div className="mx-4 mt-4 max-h-[min(70vh,520px)] overflow-y-auto rounded-2xl border border-white/15 bg-white/10 px-4 py-4 backdrop-blur-xl sm:mx-6 lg:hidden">
            <div className="mx-auto max-w-[1400px] space-y-0.5">
              <div>
                <button
                  type="button"
                  onClick={() => setMobilePhotoOpen((o) => !o)}
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-white"
                >
                  Photography
                  <ChevronDown
                    size={15}
                    className={cn("transition-transform", mobilePhotoOpen && "rotate-180")}
                  />
                </button>
                {mobilePhotoOpen ? (
                  <MobileServiceList type="photography" onClose={() => setMobileOpen(false)} />
                ) : null}
              </div>
              <div className="border-t border-white/15" />
              <div>
                <button
                  type="button"
                  onClick={() => setMobileVideoOpen((o) => !o)}
                  className="flex w-full items-center justify-between py-3 text-sm font-medium text-white"
                >
                  Videography
                  <ChevronDown
                    size={15}
                    className={cn("transition-transform", mobileVideoOpen && "rotate-180")}
                  />
                </button>
                {mobileVideoOpen ? (
                  <MobileServiceList type="videography" onClose={() => setMobileOpen(false)} />
                ) : null}
              </div>
              <div className="border-t border-white/15" />
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <div key={href}>
                  <Link
                    href={href}
                    className="block py-3 text-sm font-medium text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </Link>
                  <div className="border-t border-white/15" />
                </div>
              ))}
              <div className="flex gap-2 pt-3">
                <Link
                  href="/contact"
                  className="flex flex-1 items-center justify-center rounded-full bg-white px-4 py-3 text-center text-[10px] font-bold uppercase tracking-wider text-[#0a0a0a] shadow-lg shadow-black/20 transition-colors hover:bg-white/95"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a call
                </Link>
                <Link
                  href="/contact"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-[#0a0a0a] transition-colors hover:bg-white/95"
                  aria-label="Book a call"
                  onClick={() => setMobileOpen(false)}
                >
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <div className="relative z-10 mx-auto flex max-w-[1400px] flex-1 flex-col px-4 pb-10 pt-10 sm:px-6 sm:pb-12 sm:pt-14 lg:min-h-[calc(100svh-8rem)] lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:px-10 lg:pb-14 lg:pt-6">
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
            <span>
              0{SLIDES.length}
            </span>
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
                    alt={slide.title}
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
