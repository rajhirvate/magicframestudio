"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const items = [
  {
    photo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop&auto=format",
    label: "Wedding",
    cols: "",
  },
  {
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop&auto=format",
    label: "Portraits",
    cols: "",
  },
  {
    photo: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&fit=crop&auto=format",
    label: "Drone",
    cols: "",
  },
  {
    photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80&fit=crop&auto=format",
    label: "Wedding Film",
    cols: "md:col-span-2",
  },
  {
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fit=crop&auto=format",
    label: "Products",
    cols: "",
  },
  {
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop&auto=format",
    label: "Events",
    cols: "",
  },
  {
    photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fit=crop&auto=format",
    label: "Real Estate",
    cols: "",
  },
  {
    photo: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop&auto=format",
    label: "Fashion",
    cols: "",
  },
];

export default function PortfolioPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8"
        >
          <div>
            <p
              className="text-xs tracking-widest text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Our Work
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-[#f5f0eb]">
              Portfolio
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-sm text-[#f5f0eb]/60 hover:text-[#c9a84c] transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            View Full Portfolio
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`group relative overflow-hidden rounded-xl aspect-[3/2] bg-zinc-900 cursor-pointer ${item.cols}`}
            >
              <Image
                src={item.photo}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span
                  className="text-xs font-medium text-[#f5f0eb] bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-[#f5f0eb] border border-[#2a2a2a] hover:border-[#c9a84c]/50 rounded-full transition-all duration-300 hover:bg-[#c9a84c]/5"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            View Full Portfolio <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
