"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";

const portfolioItems = [
  {
    photo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80&fit=crop&auto=format",
    label: "Wedding Photography",
    category: "Love Stories",
    size: "large", // spans 2x2
  },
  {
    photo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop&auto=format",
    label: "Editorial Portraits",
    category: "Portraits",
    size: "tall", // spans 1x2
  },
  {
    photo: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&fit=crop&auto=format",
    label: "Aerial Perspectives",
    category: "Drone",
    size: "small",
  },
  {
    photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80&fit=crop&auto=format",
    label: "Cinematic Experiences",
    category: "Films",
    size: "wide", // spans 2x1
  },
  {
    photo: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop&auto=format",
    label: "Corporate Events",
    category: "Events",
    size: "small",
  },
  {
    photo: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop&auto=format",
    label: "High Fashion",
    category: "Fashion",
    size: "tall",
  },
  {
    photo: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&fit=crop&auto=format",
    label: "Luxury Estates",
    category: "Real Estate",
    size: "small",
  },
  {
    photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80&fit=crop&auto=format",
    label: "Product Showcase",
    category: "Commercial",
    size: "small",
  },
];

function PortfolioCard({ item, index }: { item: typeof portfolioItems[0], index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto",
    wide: "md:col-span-2 aspect-[16/9] md:aspect-auto",
    tall: "md:row-span-2 aspect-[2/3] md:aspect-auto",
    small: "aspect-square",
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`group relative overflow-hidden rounded-2xl bg-neutral-900 ${sizeClasses[item.size as keyof typeof sizeClasses]}`}
    >
      <Link href="/portfolio" className="block h-full w-full">
        <Image
          src={item.photo}
          alt={item.label}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

        <div className="absolute inset-0 flex translate-y-4 flex-col justify-end p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
            {item.category}
          </p>
          <h3 className="mb-4 text-xl font-light text-white md:text-2xl">
            {item.label}
          </h3>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition-colors duration-300 group-hover:border-[#c9a84c] group-hover:bg-[#c9a84c]">
              <Plus className="text-white" size={18} />
            </div>
            <span className="text-sm font-light text-white/80">View Project</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function PortfolioPreview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-[#0f0c0a] py-24 lg:py-32"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[#c9a84c]/10 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.5em" }}
            viewport={{ once: true }}
            className="text-[#c9a84c] text-[10px] md:text-xs font-bold uppercase mb-6 block"
          >
            Visual Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-tight font-heading"
          >
            Capturing the <span className="italic">Essence</span> <br /> 
            of Every Moment
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-neutral-400 max-w-2xl text-lg font-light leading-relaxed"
          >
            Explore our curated selection of visual stories, ranging from intimate celebrations to high-end commercial projects.
          </motion.p>
        </div>

        {/* Dynamic Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* Modern Footer CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <Link
            href="/portfolio"
            className={cn(BTN_PRIMARY, "group px-10 py-4")}
          >
            <span className="relative z-10">Full gallery</span>
            <ArrowRight
              size={18}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          
          <p className="mt-8 text-neutral-500 text-sm font-medium tracking-[0.2em] uppercase">
            Over 500+ projects completed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
