"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { photographyPhotos, videographyPhotos } from "@/data/servicePhotos";

// Pool of extra gallery photos (Unsplash)
const galleryPhotoPool = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&fit=crop&auto=format",
];

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  subServices: string[];
  category: "photography" | "videography";
  slug: string;
}

function AnimatedSection({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServicePageLayout({
  title,
  subtitle,
  description,
  subServices,
  category,
  slug,
}: ServicePageLayoutProps) {
  const paragraphs = description.split("\n\n");
  const photoMap = category === "photography" ? photographyPhotos : videographyPhotos;
  const heroPhoto = photoMap[slug];
  // Build a gallery of 6 by using hero photo + pool
  const gallery = [
    heroPhoto,
    ...galleryPhotoPool.filter((p) => p !== heroPhoto),
  ].slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        {/* Breadcrumb */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0">
          <nav className="flex items-center gap-1.5 text-xs text-[#f5f0eb]/30 mb-8">
            <Link href="/" className="hover:text-[#f5f0eb]/60 transition-colors">Home</Link>
            <ChevronRight size={10} />
            <Link href={`/${category}`} className="hover:text-[#f5f0eb]/60 transition-colors capitalize">
              {category}
            </Link>
            <ChevronRight size={10} />
            <span className="text-[#c9a84c]/70">{title}</span>
          </nav>
        </div>

        {/* Hero Banner */}
        <div className="relative aspect-[16/7] max-h-[550px] overflow-hidden bg-zinc-900">
          {heroPhoto && (
            <Image
              src={heroPhoto}
              alt={title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          )}
          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-[#0a0a0a]/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/40" />

          {/* Title overlay */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-10 lg:pb-14">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-3">
                  Magic Frame Studio
                </p>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#f5f0eb] leading-tight max-w-3xl">
                  {title}
                </h1>
                <p className="text-base sm:text-lg text-[#f5f0eb]/50 mt-3 max-w-2xl">
                  {subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + Side Image */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="space-y-5">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-base text-[#f5f0eb]/60 leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-medium text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-full transition-colors duration-200"
                  >
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-900 relative">
                {heroPhoto && (
                  <Image
                    src={heroPhoto}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Sub-services Grid */}
      <section className="py-16 lg:py-24 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-3">
              What&apos;s Included
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#f5f0eb]">
              Our {title} Services
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {subServices.map((service, i) => (
              <AnimatedSection key={service} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-4 hover:border-[#c9a84c]/20 transition-colors duration-200">
                  <CheckCircle2
                    size={16}
                    className="text-[#c9a84c] flex-shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-[#f5f0eb]/70">{service}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10">
            <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-3">
              Sample Work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-[#f5f0eb]">
              Gallery Preview
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((photo, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div className="aspect-[3/2] rounded-xl overflow-hidden bg-zinc-900 relative group cursor-pointer">
                  <Image
                    src={photo}
                    alt={`${title} gallery ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-[#0d0d0d] border-t border-[#1e1e1e]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#f5f0eb] mb-4">
              Book{" "}
              <span className="italic text-[#c9a84c]">{title}</span>{" "}
              in India
            </h2>
            <p className="text-sm text-[#f5f0eb]/40 mb-8 max-w-xl mx-auto leading-relaxed">
              Ready to create something extraordinary? Contact Magic Frame Studio today and let&apos;s bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-full transition-colors duration-200 shadow-lg shadow-[#c9a84c]/20"
              >
                Get in Touch
              </Link>
              <Link
                href={`/${category}`}
                className="inline-flex items-center gap-2 text-sm text-[#f5f0eb]/50 hover:text-[#f5f0eb] transition-colors"
              >
                ← Back to all {category} services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
