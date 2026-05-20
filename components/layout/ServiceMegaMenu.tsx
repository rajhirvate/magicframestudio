"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";
import { photographyServices, videographyServices } from "@/data/services";

export const photoCategories = [
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
] as const;

export const videoCategories = [
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
] as const;

export function MegaMenu({
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
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden />
      <div className="mx-4 lg:mx-8 xl:mx-auto xl:max-w-6xl bg-[#0f0f0f] border border-[#2a2a2a] rounded-2xl shadow-2xl shadow-black/60 overflow-hidden">
        <div className="flex items-center justify-between px-7 py-4 border-b border-[#1e1e1e]">
          <Link
            href={hubHref}
            onClick={onClose}
            className="flex items-center gap-2 text-sm font-medium text-[#c9a84c] transition-colors hover:text-[var(--secondary)]"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
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
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            {allServices.length} Services
          </span>
        </div>

        <div className="grid grid-cols-3 divide-x divide-[#1e1e1e] px-0">
          {categories.map((cat) => (
            <div key={cat.group} className="px-7 py-6">
              <p
                className="text-[10px] font-semibold tracking-[0.2em] text-[#f5f0eb]/25 uppercase mb-4"
                style={{ fontFamily: "var(--font-sans), sans-serif" }}
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
                        className="text-sm font-medium text-[#f5f0eb]/85 group-hover:text-[#c9a84c] transition-colors"
                        style={{ fontFamily: "var(--font-sans), sans-serif" }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-xs text-[#f5f0eb]/30"
                        style={{ fontFamily: "var(--font-sans), sans-serif" }}
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

        <div className="flex items-center justify-between px-7 py-4 border-t border-[#1e1e1e] bg-[#0a0a0a]">
          <p
            className="text-xs text-[#f5f0eb]/30"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            onClick={onClose}
            className={cn(BTN_PRIMARY, "px-4 py-2 text-[10px] tracking-[0.16em]")}
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
          >
            Get a free quote
          </Link>
        </div>
      </div>
    </div>
  );
}

export function MobileServiceList({
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
        className="block py-2 text-sm text-[#c9a84c]"
        style={{ fontFamily: "var(--font-sans), sans-serif" }}
      >
        View All {type === "photography" ? "Photography" : "Videography"} Services →
      </Link>
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/${type}/${s.slug}`}
          onClick={onClose}
          className="block py-2 text-sm text-[#f5f0eb]/55 hover:text-[#f5f0eb] transition-colors"
          style={{ fontFamily: "var(--font-sans), sans-serif" }}
        >
          {s.title}
        </Link>
      ))}
    </div>
  );
}
