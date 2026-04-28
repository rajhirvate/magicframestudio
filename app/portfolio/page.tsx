"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const categories = ["All", "Wedding", "Events", "Portraits", "Corporate", "Products", "Real Estate", "Drone"];

/** Uniform 3:2 grid — masonry aspects kept for data but grid uses aspect-[3/2] for alignment */
const portfolioItems = [
  {
    id: "p1",
    category: "Wedding",
    photo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Wedding Ceremony",
  },
  {
    id: "p2",
    category: "Portraits",
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/4]",
    title: "Portrait Session",
  },
  {
    id: "p3",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Corporate Event",
  },
  {
    id: "p4",
    category: "Wedding",
    photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[16/9]",
    title: "Wedding Film",
  },
  {
    id: "p5",
    category: "Drone",
    photo: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Aerial Photography",
  },
  {
    id: "p6",
    category: "Products",
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/4]",
    title: "Product Shoot",
  },
  {
    id: "p7",
    category: "Real Estate",
    photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[16/9]",
    title: "Interior Photography",
  },
  {
    id: "p8",
    category: "Corporate",
    photo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Corporate Branding",
  },
  {
    id: "p9",
    category: "Wedding",
    photo: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/4]",
    title: "Wedding Candid",
  },
  {
    id: "p10",
    category: "Portraits",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Professional Headshot",
  },
  {
    id: "p11",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Event Coverage",
  },
  {
    id: "p12",
    category: "Products",
    photo: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/4]",
    title: "Lifestyle Product",
  },
  {
    id: "p13",
    category: "Drone",
    photo: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[16/9]",
    title: "Drone Videography",
  },
  {
    id: "p14",
    category: "Real Estate",
    photo: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Property Tour",
  },
  {
    id: "p15",
    category: "Corporate",
    photo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/4]",
    title: "Office Culture",
  },
  {
    id: "p16",
    category: "Wedding",
    photo: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Wedding Details",
  },
  {
    id: "p17",
    category: "Portraits",
    photo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/4]",
    title: "Fashion Portrait",
  },
  {
    id: "p18",
    category: "Products",
    photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Jewelry Photography",
  },
  {
    id: "p19",
    category: "Wedding",
    photo: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Beach Wedding",
  },
  {
    id: "p20",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1501281661387-352f7c0e6c0b?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Festival Gathering",
  },
  {
    id: "p21",
    category: "Portraits",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Editorial Portrait",
  },
  {
    id: "p22",
    category: "Corporate",
    photo: "https://images.unsplash.com/photo-1542744173-8e7e5348bb0d?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Team Session",
  },
  {
    id: "p23",
    category: "Wedding",
    photo: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Ceremony Aisle",
  },
  {
    id: "p24",
    category: "Real Estate",
    photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Modern Home",
  },
  {
    id: "p25",
    category: "Drone",
    photo: "https://images.unsplash.com/photo-1477959858617-67f85cf4f290?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Coastal Aerial",
  },
  {
    id: "p26",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1429962714451-bb934ecdc916?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Concert Night",
  },
  {
    id: "p27",
    category: "Products",
    photo: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Cosmetics",
  },
  {
    id: "p28",
    category: "Portraits",
    photo: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Fashion Editorial",
  },
  {
    id: "p29",
    category: "Wedding",
    photo: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Reception Glow",
  },
  {
    id: "p30",
    category: "Corporate",
    photo: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Conference Keynote",
  },
  {
    id: "p31",
    category: "Events",
    photo: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Gala Evening",
  },
  {
    id: "p32",
    category: "Real Estate",
    photo: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Luxury Interior",
  },
  {
    id: "p33",
    category: "Wedding",
    photo: "https://images.unsplash.com/photo-1522673606160-de5d0ccda4df?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "First Dance",
  },
  {
    id: "p34",
    category: "Products",
    photo: "https://images.unsplash.com/photo-1560343090-f040f0e0a6b3?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Watch Campaign",
  },
  {
    id: "p35",
    category: "Drone",
    photo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85&fit=crop&auto=format",
    aspect: "aspect-[3/2]",
    title: "Mountain Vista",
  },
];

const INITIAL_VISIBLE = 6;
const LOAD_BATCH = 9;
const MAX_LOAD_MORE_CLICKS = 3;
const MAX_TOTAL_VISIBLE = INITIAL_VISIBLE + MAX_LOAD_MORE_CLICKS * LOAD_BATCH;

type PortfolioItem = (typeof portfolioItems)[number];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);
  const [loadMoreClicks, setLoadMoreClicks] = useState(0);

  const filtered = useMemo(
    () =>
      active === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === active),
    [active]
  );

  useEffect(() => {
    setLoadMoreClicks(0);
  }, [active]);

  const displayCount = Math.min(
    INITIAL_VISIBLE + loadMoreClicks * LOAD_BATCH,
    filtered.length,
    MAX_TOTAL_VISIBLE
  );

  const visibleItems = filtered.slice(0, displayCount);

  const canLoadMore =
    loadMoreClicks < MAX_LOAD_MORE_CLICKS &&
    displayCount < filtered.length &&
    displayCount < MAX_TOTAL_VISIBLE;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p
              className="text-xs tracking-widest text-[#c9a84c] uppercase mb-4"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Our Work
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-[#f5f0eb] leading-tight mb-5">
              Portfolio
            </h1>
            <p
              className="text-base text-[#f5f0eb]/50 leading-relaxed"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              A glimpse into five years of crafting cinematic stories across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-10 lg:py-16 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={`px-4 py-2 text-xs rounded-xl border transition-all duration-200 ${
                  active === cat
                    ? "bg-[#c9a84c] border-[#c9a84c] text-[#0a0a0a] font-medium"
                    : "border-[#2a2a2a] text-[#f5f0eb]/50 hover:border-[#c9a84c]/30 hover:text-[#f5f0eb]"
                }`}
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Uniform responsive grid — fixed aspect prevents layout shift */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {visibleItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.42,
                    delay: (i % LOAD_BATCH) * 0.045,
                  }}
                  className="min-h-0"
                  onClick={() => setLightbox(item)}
                >
                  <div
                    className="group relative w-full cursor-pointer overflow-hidden rounded-xl bg-zinc-900 aspect-[3/2]"
                  >
                    <Image
                      src={item.photo}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p
                        className="text-xs font-medium text-[#f5f0eb]/90"
                        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                      >
                        {item.title}
                      </p>
                      <span
                        className="inline-block mt-1 text-[10px] text-[#c9a84c] border border-[#c9a84c]/40 rounded-xl px-2 py-0.5"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {canLoadMore && (
            <motion.div
              initial={false}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-10 sm:mt-12"
            >
              <button
                type="button"
                onClick={() => setLoadMoreClicks((c) => Math.min(c + 1, MAX_LOAD_MORE_CLICKS))}
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-xl transition-colors duration-200"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Load More
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={18} className="text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox.photo}
                alt={lightbox.title}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/80 to-transparent">
                <p
                  className="text-sm font-medium text-white"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {lightbox.title}
                </p>
                <span
                  className="text-xs text-[#c9a84c]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {lightbox.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d] border-t border-[#1e1e1e]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#f5f0eb] mb-4">
            Like What You See?
          </h2>
          <p
            className="text-sm text-[#f5f0eb]/40 mb-8"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Let&apos;s create something extraordinary together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-xl transition-colors"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            Book a Shoot
          </Link>
        </div>
      </section>
    </>
  );
}
