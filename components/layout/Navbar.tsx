"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";
import { photographyServices, videographyServices } from "@/data/services";

/* ─── Mega menu data ──────────────────────────────────────────── */
const photoCategories = [
  {
    group: "Ceremonies",
    items: [
      { label: "Wedding Photography", slug: "wedding-photography", desc: "Candid & traditional coverage" },
      { label: "Event Photography", slug: "event-photography", desc: "Birthdays, conferences & more" },
    ],
  },
  {
    group: "People",
    items: [
      { label: "Portrait Photography", slug: "portrait-photography", desc: "Individuals, couples & families" },
      { label: "Fashion & Model", slug: "fashion-model-photography", desc: "Editorial & campaign shoots" },
      { label: "Corporate Photography", slug: "corporate-photography", desc: "Headshots & brand imagery" },
    ],
  },
  {
    group: "Commercial",
    items: [
      { label: "Product Photography", slug: "product-photography", desc: "E-commerce & catalog" },
      { label: "Real Estate Photography", slug: "real-estate-photography", desc: "Interiors & architecture" },
      { label: "Drone Photography", slug: "drone-photography", desc: "Breathtaking aerial shots" },
    ],
  },
];

const videoCategories = [
  {
    group: "Ceremonies",
    items: [
      { label: "Wedding Videography", slug: "wedding-videography", desc: "Cinematic films that last forever" },
      { label: "Event Videography", slug: "event-videography", desc: "Full event video coverage" },
    ],
  },
  {
    group: "Brand & Business",
    items: [
      { label: "Corporate Videography", slug: "corporate-videography", desc: "Profile & executive videos" },
      { label: "Brand Promotional Videos", slug: "brand-promotional-videos", desc: "Videos that sell your brand" },
      { label: "Social Media Content", slug: "social-media-video-content", desc: "Reels, Shorts & viral content" },
    ],
  },
  {
    group: "Property & Aerial",
    items: [
      { label: "Real Estate Videography", slug: "real-estate-videography", desc: "Walkthroughs & tours" },
      { label: "Drone Videography", slug: "drone-videography", desc: "Cinematic aerial footage" },
    ],
  },
];

/* ─── Mega menu panel ─────────────────────────────────────────── */
function MegaMenu({
  type,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  type: "photography" | "videography";
  onClose: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const isPhoto = type === "photography";
  const categories = isPhoto ? photoCategories : videoCategories;
  const hubHref = isPhoto ? "/photography" : "/videography";
  const hubLabel = isPhoto ? "All Photography Services" : "All Videography Services";
  const allServices = isPhoto ? photographyServices : videographyServices;
  const accentColor = "#c9a84c";

  return (
    <div
      className="absolute top-full left-0 right-0 z-50 pt-1"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Backdrop hit-area to close */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
      />
      <div className="mx-4 lg:mx-8 xl:mx-auto xl:max-w-6xl bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-7 py-4 border-b border-[#1e1e1e]">
          <Link
            href={hubHref}
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.05em] text-[#c9a84c] hover:text-[#e0c068] transition-colors"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ backgroundColor: accentColor }}
            />
            {hubLabel}
            <ArrowRight size={13} />
          </Link>
          <span
            className="text-xs text-[#f5f0eb]/25 uppercase tracking-widest"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {allServices.length} Services
          </span>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-3 divide-x divide-[#1e1e1e] px-0">
          {categories.map((cat) => (
            <div key={cat.group} className="px-7 py-6">
              <p
                className="text-[10px] font-semibold tracking-[0.2em] text-[#f5f0eb]/25 uppercase mb-4"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {cat.group}
              </p>
              <ul className="space-y-1">
                {cat.items.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/${type}/${item.slug}`}
                      onClick={onClose}
                      className="group flex flex-col gap-0.5 rounded-lg px-3 py-2.5 hover:bg-[#1a1a1a] transition-colors duration-150"
                    >
                      <span
                        className="text-sm font-medium uppercase tracking-[0.04em] text-[#f5f0eb]/85 group-hover:text-[#c9a84c] transition-colors"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-xs text-[#f5f0eb]/30"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {item.desc}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="flex items-center justify-between px-7 py-4 border-t border-[#1e1e1e] bg-[#0a0a0a]">
          <p
            className="text-xs text-[#f5f0eb]/30"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            onClick={onClose}
            className={cn(BTN_PRIMARY, "px-4 py-2 text-[10px] tracking-[0.16em]")}
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Get a free quote
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ─── Mobile accordion ────────────────────────────────────────── */
function MobileServiceList({
  type,
  onClose,
}: {
  type: "photography" | "videography";
  onClose: () => void;
}) {
  const services = type === "photography" ? photographyServices : videographyServices;
  return (
    <div className="pl-4 pb-3 space-y-0.5">
      <Link
        href={`/${type}`}
        onClick={onClose}
        className="block py-2 text-sm font-medium uppercase tracking-[0.05em] text-[#c9a84c]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        View All {type === "photography" ? "Photography" : "Videography"} Services →
      </Link>
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/${type}/${s.slug}`}
          onClick={onClose}
          className="block py-2 text-sm font-medium uppercase tracking-[0.04em] text-[#f5f0eb]/55 hover:text-[#f5f0eb] transition-colors"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          {s.title}
        </Link>
      ))}
    </div>
  );
}

/* ─── Main Navbar ─────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<"photography" | "videography" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePhotoOpen, setMobilePhotoOpen] = useState(false);
  const [mobileVideoOpen, setMobileVideoOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpenMega(null);
    setMobileOpen(false);
  }, [pathname]);

  // Small delay before closing so the cursor can move into the panel
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

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || openMega
            ? "bg-[#0a0a0a] border-b border-[#1e1e1e] shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={() => setOpenMega(null)}>
              <Image
                src="/logo.png"
                alt="Magic Frame Studio"
                width={200}
                height={52}
                className="h-9 lg:h-10 w-auto"
                style={{ filter: "invert(1)", mixBlendMode: "screen" }}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {/* Photography trigger */}
              <div
                onMouseEnter={() => handleMouseEnter("photography")}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <button
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.08em] transition-colors duration-200 py-2",
                    openMega === "photography" || pathname.startsWith("/photography")
                      ? "text-[#c9a84c]"
                      : "text-[#f5f0eb]/75 hover:text-[#f5f0eb]"
                  )}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Photography
                  <ChevronDown
                    size={13}
                    className={cn(
                      "transition-transform duration-200",
                      openMega === "photography" && "rotate-180"
                    )}
                  />
                </button>
              </div>

              {/* Videography trigger */}
              <div
                onMouseEnter={() => handleMouseEnter("videography")}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <button
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.08em] transition-colors duration-200 py-2",
                    openMega === "videography" || pathname.startsWith("/videography")
                      ? "text-[#c9a84c]"
                      : "text-[#f5f0eb]/75 hover:text-[#f5f0eb]"
                  )}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Videography
                  <ChevronDown
                    size={13}
                    className={cn(
                      "transition-transform duration-200",
                      openMega === "videography" && "rotate-180"
                    )}
                  />
                </button>
              </div>

              <NavLink href="/portfolio" label="Portfolio" />
              <NavLink href="/about" label="About" />
              <NavLink href="/contact" label="Contact" />
            </div>

            {/* Book CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={cn(BTN_PRIMARY, "px-5 py-2 text-[11px]")}
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Book a shoot
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-[#f5f0eb]/70 hover:text-[#f5f0eb] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu */}
        {openMega && (
          <MegaMenu
            type={openMega}
            onClose={() => setOpenMega(null)}
            onMouseEnter={cancelClose}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute top-0 right-0 w-[300px] h-full bg-[#0d0d0d] border-l border-[#2a2a2a] overflow-y-auto pt-20 pb-8 px-5">

            {/* Logo in drawer */}
            <div className="mb-6 pb-5 border-b border-[#2a2a2a]">
              <Image
                src="/logo.png"
                alt="Magic Frame Studio"
                width={160}
                height={42}
                className="h-8 w-auto"
                style={{ filter: "invert(1)", mixBlendMode: "screen" }}
              />
            </div>

            <div className="space-y-0.5">
              {/* Photography accordion */}
              <div>
                <button
                  onClick={() => setMobilePhotoOpen(!mobilePhotoOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#f5f0eb]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Photography
                  <ChevronDown
                    size={15}
                    className={cn("transition-transform", mobilePhotoOpen && "rotate-180")}
                  />
                </button>
                {mobilePhotoOpen && (
                  <MobileServiceList type="photography" onClose={() => setMobileOpen(false)} />
                )}
              </div>

              <div className="border-t border-[#1e1e1e]" />

              {/* Videography accordion */}
              <div>
                <button
                  onClick={() => setMobileVideoOpen(!mobileVideoOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#f5f0eb]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Videography
                  <ChevronDown
                    size={15}
                    className={cn("transition-transform", mobileVideoOpen && "rotate-180")}
                  />
                </button>
                {mobileVideoOpen && (
                  <MobileServiceList type="videography" onClose={() => setMobileOpen(false)} />
                )}
              </div>

              <div className="border-t border-[#1e1e1e]" />

              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <div key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#f5f0eb]"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {label}
                  </Link>
                  <div className="border-t border-[#1e1e1e]" />
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className={cn(BTN_PRIMARY, "w-full py-3 text-[11px]")}
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Book a shoot
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium uppercase tracking-[0.08em] transition-colors duration-200",
        pathname === href
          ? "text-[#c9a84c]"
          : "text-[#f5f0eb]/75 hover:text-[#f5f0eb]"
      )}
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {label}
    </Link>
  );
}
