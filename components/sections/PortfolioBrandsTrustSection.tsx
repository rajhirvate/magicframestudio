"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { BTN_PRIMARY } from "@/lib/btn";

const sans = "var(--font-sans), sans-serif";

/** Placeholder “brand marks” inside circles until real logos ship. */
const brands = [
  { id: "1", initials: "ME", title: "Memorable Events Co." },
  { id: "2", initials: "LS", title: "Luxe Stays Hospitality" },
  { id: "3", initials: "AC", title: "Aurora Cosmetics" },
  { id: "4", initials: "VM", title: "Vastra Moderna" },
  { id: "5", initials: "PK", title: "Pinnacle Kitchens" },
  { id: "6", initials: "BH", title: "Blueprint Homes" },
  { id: "7", initials: "RS", title: "Rhythm Sounds" },
  { id: "8", initials: "FD", title: "Feast Delhi" },
] as const;

const reviews = [
  {
    name: "Priya & Rahul Sharma",
    subtitle: "Wedding · Delhi — Google Review",
    quote:
      "Every ritual and candid landed in the gallery like a scene from a film. Calm crew, cinematic colour, and an album our families still rewind to.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&auto=format",
    rating: 5,
  },
  {
    name: "Nisha Patel",
    subtitle: "Product shoot · Ahmedabad — Google Review",
    quote:
      "They understood our jewellery lighting better than we did. Retouching was restrained, listings looked premium, and our store team finally had assets they trust.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&auto=format",
    rating: 5,
  },
  {
    name: "Aakash Mehta",
    subtitle: "Corporate brand film · Mumbai — Google Review",
    quote:
      "From storyboard to final master, the process was transparent. They matched our brand film spec and still found human moments on the shoot floor.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format",
    rating: 5,
  },
  {
    name: "Sana Khurana",
    subtitle: "Editorial campaign · Bengaluru — Google Review",
    quote:
      "Fast pre-prod, thoughtful art direction, and delivery that needed almost no revision. Felt like an in-house creative pod with cinema-grade gear.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&auto=format",
    rating: 5,
  },
] as const;

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function PortfolioBrandsTrustSection() {
  const stripRef = useRef<HTMLDivElement>(null);
  const fade = "from-[#f5f0eb]";

  const scrollStrip = useCallback((dir: -1 | 1) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 220, behavior: "smooth" });
  }, []);

  return (
    <div
      id="hero3-brands-trust"
      className="relative mb-14 mt-16 w-full scroll-mt-28 lg:mb-20 lg:mt-24"
    >
      <div className="relative overflow-hidden rounded-t-[2.75rem] border border-stone-200/70 bg-[#f5f0eb] px-5 pb-16 pt-14 shadow-inner shadow-stone-200/60 sm:px-8 lg:rounded-t-[3.25rem] lg:px-12 lg:pb-20 lg:pt-20">
        <div
          className="pointer-events-none absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/35 to-transparent lg:left-14 lg:right-14"
          aria-hidden
        />

        <div className="relative z-[2] mx-auto max-w-4xl text-center">
          <p
            className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#c9a84c]"
            style={{ fontFamily: sans }}
          >
            Partners & proof
          </p>
          <h3 className="font-heading text-3xl font-light leading-tight tracking-tight text-stone-900 sm:text-[2.1rem]">
            Brands We Work With
          </h3>
          <div
            className="mx-auto my-6 h-px w-14 bg-[#c9a84c]/45"
            aria-hidden
          />
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-600 sm:text-xs"
            style={{ fontFamily: sans }}
          >
            See what our clients have to say about us
          </p>
          <p
            className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-stone-600 sm:text-base"
            style={{ fontFamily: sans }}
          >
            From hospitality groups and retail labels to independent creators, we
            embed with marketing and events teams to keep visual systems consistent
            across campaigns, launches, and seasonal refreshes — then lean on those
            same partners for candid feedback you can trust.
          </p>
        </div>

        <div className="relative z-[2] mx-auto mt-12 max-w-6xl">
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r ${fade} to-transparent sm:w-14`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l ${fade} to-transparent sm:w-14`}
          />
          <button
            type="button"
            onClick={() => scrollStrip(-1)}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-stone-200 bg-white p-2 text-stone-600 shadow-sm shadow-stone-300/40 transition hover:border-[#c9a84c]/50 hover:text-stone-900"
            aria-label="Scroll brands left"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={() => scrollStrip(1)}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-stone-200 bg-white p-2 text-stone-600 shadow-sm shadow-stone-300/40 transition hover:border-[#c9a84c]/50 hover:text-stone-900"
            aria-label="Scroll brands right"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>

          <div
            ref={stripRef}
            role="region"
            aria-label="Brand partners"
            tabIndex={0}
            className="flex gap-5 overflow-x-auto scroll-smooth px-10 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") scrollStrip(1);
              if (e.key === "ArrowLeft") scrollStrip(-1);
            }}
          >
            {brands.map((b) => (
              <div
                key={b.id}
                className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-full border border-stone-200/90 bg-white shadow-md shadow-stone-300/25 ring-1 ring-[#c9a84c]/10 transition-colors hover:border-[#c9a84c]/35 sm:h-28 sm:w-28"
                title={b.title}
              >
                <span
                  className="text-sm font-semibold tracking-tight text-stone-800"
                  style={{ fontFamily: sans }}
                >
                  {b.initials}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-[2] mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <article
              key={r.name}
              className="flex flex-col rounded-2xl border border-stone-100 bg-white p-6 shadow-lg shadow-[#c9a84c]/10 ring-1 ring-stone-200/70"
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-[#c9a84c]/20">
                    <Image
                      src={r.avatar}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div className="min-w-0 text-left">
                    <p
                      className="truncate text-sm font-semibold text-stone-900"
                      style={{ fontFamily: sans }}
                    >
                      {r.name}
                    </p>
                    <p
                      className="truncate text-[11px] text-stone-500"
                      style={{ fontFamily: sans }}
                    >
                      {r.subtitle}
                    </p>
                  </div>
                </div>
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-100 bg-stone-50"
                  title="Google review"
                >
                  <GoogleGlyph />
                </div>
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-[#c9a84c] text-[#c9a84c]"
                    aria-hidden
                  />
                ))}
              </div>
              <p
                className="text-left text-[13px] leading-relaxed text-stone-600 sm:text-[14px]"
                style={{ fontFamily: sans }}
              >
                {r.quote}
              </p>
            </article>
          ))}
        </div>

        <div className="relative z-[2] mx-auto mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact" className={BTN_PRIMARY} style={{ fontFamily: sans }}>
            Contact us
          </Link>
          <Link href="/contact" className={BTN_PRIMARY} style={{ fontFamily: sans }}>
            Free quote
          </Link>
        </div>
      </div>
    </div>
  );
}
