"use client";

import { useState, useEffect, useRef, startTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";
import { isEditorialHeroHome } from "@/lib/routeFlags";
import { MegaMenu, MobileServiceList } from "@/components/layout/ServiceMegaMenu";

/* ─── Main Navbar ─────────────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<"photography" | "videography" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePhotoOpen, setMobilePhotoOpen] = useState(false);
  const [mobileVideoOpen, setMobileVideoOpen] = useState(false);
  const pathname = usePathname();
  /** Editorial home: light bar while idle; dark chrome while mega menu open. */
  const hero3Editorial = isEditorialHeroHome(pathname);
  const lightNavChrome = hero3Editorial && !openMega;
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setOpenMega(null);
      setMobileOpen(false);
    });
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
          lightNavChrome
            ? "bg-[#f4f1ea]/92 backdrop-blur-md border-b border-[#d3d3d3]/90 shadow-sm"
            : scrolled || openMega
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
                priority
                fetchPriority="high"
                className="h-9 lg:h-10 w-auto"
                style={
                  lightNavChrome
                    ? undefined
                    : { filter: "invert(1)", mixBlendMode: "screen" }
                }
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
                    "flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 py-2",
                    openMega === "photography" || pathname.startsWith("/photography")
                      ? "text-[#c9a84c]"
                      : lightNavChrome
                        ? "text-[#1a1a1a]/75 hover:text-[#1a1a1a]"
                        : "text-[#f5f0eb]/75 hover:text-[#f5f0eb]"
                  )}
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
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
                    "flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 py-2",
                    openMega === "videography" || pathname.startsWith("/videography")
                      ? "text-[#c9a84c]"
                      : lightNavChrome
                        ? "text-[#1a1a1a]/75 hover:text-[#1a1a1a]"
                        : "text-[#f5f0eb]/75 hover:text-[#f5f0eb]"
                  )}
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
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

              <NavLink href="/portfolio" label="Portfolio" lightNavChrome={lightNavChrome} />
              <NavLink href="/blog" label="Blog" lightNavChrome={lightNavChrome} matchPrefix />
              <NavLink href="/about" label="About" lightNavChrome={lightNavChrome} />
              <NavLink href="/contact" label="Contact" lightNavChrome={lightNavChrome} />
            </div>

            {/* Book CTA + mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className={cn(BTN_PRIMARY, "px-5 py-2 text-[11px]")}
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
              >
                Book a shoot
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={cn(
                  "lg:hidden p-2 transition-colors",
                  lightNavChrome
                    ? "text-[#1a1a1a]/70 hover:text-[#1a1a1a]"
                    : "text-[#f5f0eb]/70 hover:text-[#f5f0eb]",
                )}
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
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-[#f5f0eb]"
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
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
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-[#f5f0eb]"
                  style={{ fontFamily: "var(--font-sans), sans-serif" }}
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
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map(({ label, href }) => (
                <div key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm font-medium text-[#f5f0eb]"
                    style={{ fontFamily: "var(--font-sans), sans-serif" }}
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
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
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

function NavLink({
  href,
  label,
  lightNavChrome,
  matchPrefix,
}: {
  href: string;
  label: string;
  lightNavChrome?: boolean;
  /** Active when pathname is `href` or starts with `${href}/` (e.g. blog posts). */
  matchPrefix?: boolean;
}) {
  const pathname = usePathname();
  const active = matchPrefix
    ? pathname === href || pathname.startsWith(`${href}/`)
    : pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium tracking-wide transition-colors duration-200",
        active
          ? "text-[#c9a84c]"
          : lightNavChrome
            ? "text-[#1a1a1a]/75 hover:text-[#1a1a1a]"
            : "text-[#f5f0eb]/75 hover:text-[#f5f0eb]"
      )}
      style={{ fontFamily: "var(--font-sans), sans-serif" }}
    >
      {label}
    </Link>
  );
}
