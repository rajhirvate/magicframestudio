"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { photographyPhotos, videographyPhotos } from "@/data/servicePhotos";

interface ServiceHubPageProps {
  category: "photography" | "videography";
  services: Service[];
  title: string;
  subtitle: string;
  description: string;
}

function ServiceCard({
  service,
  category,
  index,
}: {
  service: Service;
  category: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const photoMap = category === "photography" ? photographyPhotos : videographyPhotos;
  const photo = photoMap[service.slug];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        href={`/${category}/${service.slug}`}
        className="group block bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl overflow-hidden hover:border-[#c9a84c]/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50"
      >
        {/* Photo */}
        <div className="aspect-[3/2] relative overflow-hidden bg-zinc-900">
          {photo ? (
            <Image
              src={photo}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-amber-900/40 via-zinc-800 to-zinc-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <h3
            className="text-base font-semibold text-[#f5f0eb] group-hover:text-[#c9a84c] transition-colors duration-200 mb-1"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {service.title}
          </h3>
          <p
            className="text-xs text-[#f5f0eb]/40 mb-3 line-clamp-1"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            {service.subtitle}
          </p>
          <p
            className="flex items-center gap-1.5 text-xs font-medium text-[#c9a84c]/70 group-hover:gap-3 transition-all duration-200"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Learn More <ArrowRight size={11} />
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServiceHubPage({
  category,
  services,
  title,
  subtitle,
  description,
}: ServiceHubPageProps) {
  const heroRef = useRef(null);
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-4">
              {category === "photography" ? "Photography" : "Videography"} Services
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#f5f0eb] leading-tight mb-5">
              {title}
            </h1>
            <p className="text-base sm:text-lg text-[#f5f0eb]/50 max-w-2xl mx-auto mb-8">
              {subtitle}
            </p>
            <p className="text-sm text-[#f5f0eb]/40 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={gridRef} className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#f5f0eb]">
              Choose Your Service
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                category={category}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d0d0d] border-t border-[#1e1e1e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#f5f0eb] mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-sm text-[#f5f0eb]/40 mb-8">
            Get in touch and we&apos;ll help you find the perfect package for your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-full transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
