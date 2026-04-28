"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";
import { photographyPhotos, videographyPhotos } from "@/data/servicePhotos";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

const hubHeroImage: Record<"photography" | "videography", string> = {
  photography:
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1920&q=85&fit=crop&auto=format",
  videography:
    "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=85&fit=crop&auto=format",
};

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
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/${category}/${service.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-[#c9a84c]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-stone-300/45"
      >
        <div className="aspect-[3/2] relative overflow-hidden bg-stone-100">
          {photo ? (
            <Image
              src={photo}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-amber-100/80 via-stone-100 to-stone-200" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
            <span
              className="text-[11px] font-semibold text-stone-700"
              style={{ fontFamily: poppins }}
            >
              View
            </span>
            <ArrowRight size={10} className="text-[#c9a84c]" />
          </div>
        </div>
        <div className="px-4 py-4">
          <h3
            className="text-[15px] font-semibold text-stone-800 group-hover:text-[#c9a84c] transition-colors duration-200 mb-1"
            style={{ fontFamily: poppins }}
          >
            {service.title}
          </h3>
          <p
            className="text-xs text-stone-500 mb-3 line-clamp-2 leading-relaxed"
            style={{ fontFamily: inter }}
          >
            {service.subtitle}
          </p>
          <p
            className="flex items-center gap-1.5 text-xs font-medium text-[#c9a84c] group-hover:gap-2.5 transition-all duration-200"
            style={{ fontFamily: inter }}
          >
            Learn more <ArrowRight size={11} />
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
  const heroImage = hubHeroImage[category];
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* Hero with imagery */}
      <section className="relative pt-24 sm:pt-28 min-h-[min(72vh,620px)] flex flex-col justify-end overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/65 to-[#0a0a0a]/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/55 via-transparent to-[#0a0a0a]/55" />
        </div>
        <div className="absolute top-0 left-0 right-0 z-10 pt-6 sm:pt-8">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav
              className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-white/70"
              style={{ fontFamily: inter }}
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-white/30">/</span>
              <span className="text-[#e0c068] font-medium capitalize">{category}</span>
            </nav>
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 sm:pb-16 lg:pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <p
              className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#e0c068] uppercase mb-4"
              style={{ fontFamily: poppins }}
            >
              {category === "photography" ? "Photography" : "Videography"} services
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#f5f0eb] leading-[1.1] mb-5 max-w-4xl mx-auto">
              {title}
            </h1>
            <p
              className="text-base sm:text-lg text-[#f5f0eb]/80 max-w-2xl mx-auto mb-6 leading-relaxed"
              style={{ fontFamily: inter }}
            >
              {subtitle}
            </p>
            <p
              className="text-sm text-[#f5f0eb]/60 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: inter }}
            >
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grid — same vocabulary as homepage services */}
      <section ref={gridRef} className="py-14 lg:py-20 bg-[#f5f0eb] border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              Explore
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900">
              Choose your service
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
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
      <section className="relative py-16 lg:py-20 bg-[#0a0a0a] overflow-hidden border-t border-stone-800/80">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1a1408]/4 to-[#0a0a0a]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/35 to-transparent" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#f5f0eb] mb-4">
            Not sure which service fits?
          </h2>
          <p
            className="text-[15px] text-[#f5f0eb]/55 mb-9 max-w-lg mx-auto leading-relaxed"
            style={{ fontFamily: inter }}
          >
            Tell us about your project — we&apos;ll recommend the right package and team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-9 py-3.5 text-sm font-semibold text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-xl transition-colors duration-200 shadow-lg shadow-[#c9a84c]/20"
            style={{ fontFamily: poppins }}
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </>
  );
}
