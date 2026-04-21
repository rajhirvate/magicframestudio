"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Gauge,
  Handshake,
  MapPin,
  Wallet,
} from "lucide-react";
import { photographyPhotos, videographyPhotos } from "@/data/servicePhotos";
import { locations } from "@/data/locations";
import ContactForm from "@/components/ContactForm";
import WeddingMasonryPortfolios from "@/components/sections/WeddingMasonryPortfolios";
import ReadyToConnectSection from "@/components/sections/ReadyToConnectSection";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";


// Pool of extra gallery photos (Unsplash)
const galleryPhotoPool = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&fit=crop&auto=format",
];

const serviceStoryPhotos: Record<string, string> = {
  "wedding-photography": "/images/services/wedding-photography-about.png",
};

const whyChooseHighlights = [
  {
    icon: Wallet,
    title: "Competitive wedding packages",
    description:
      "Get premium wedding photography coverage with clear pricing and no hidden costs.",
  },
  {
    icon: Handshake,
    title: "Long-term partnership",
    description:
      "From pre-wedding planning to album delivery, we stay with you through every step.",
  },
  {
    icon: Gauge,
    title: "Performance-driven execution",
    description:
      "Our team captures key rituals, emotions, and candid moments with speed and precision.",
  },
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
  const paragraphs = description.split("\n\n").filter(Boolean);
  const photoMap = category === "photography" ? photographyPhotos : videographyPhotos;
  const heroPhoto = photoMap[slug];
  const restPool = galleryPhotoPool.filter((p) => p !== heroPhoto);
  const storyPhoto = serviceStoryPhotos[slug] ?? restPool[0] ?? heroPhoto;
  const gallery = [heroPhoto, ...restPool].filter(Boolean).slice(0, 6) as string[];

  return (
    <>
      {/* Hero — full black with square grid */}
      <section className="relative z-0 overflow-hidden bg-black">
        {/* Square grid pattern */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(255,255,255,0.055) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "56px 56px",
          }}
          aria-hidden
        />
        {/* Amber glow accent */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 60% 55% at 15% 80%, rgba(201,168,76,0.14) 0%, transparent 65%)",
              "radial-gradient(ellipse 40% 35% at 75% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            ].join(", "),
          }}
          aria-hidden
        />
        {/* Vignette edges */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
          }}
          aria-hidden
        />

        <div
          className="relative flex min-h-screen flex-col pt-24 sm:pt-28 pb-16 sm:pb-20"
        >
          <div className="relative z-10 flex flex-1 flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="flex-1 flex flex-col justify-start pt-8 sm:pt-10 pb-16 sm:pb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
                <motion.div
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                >
                  <p
                    className="text-xs font-semibold tracking-[0.22em] uppercase mb-3 sm:mb-4 text-[#c9a84c]"
                    style={{ fontFamily: poppins }}
                  >
                    Magic Frame Studio
                  </p>
                  <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-light text-[#f5f0eb] leading-[1.04]">
                    {title}
                  </h1>
                  <p
                    className="text-sm sm:text-base text-[#f5f0eb]/55 mt-5 max-w-md leading-relaxed"
                    style={{ fontFamily: inter }}
                  >
                    {subtitle}
                  </p>

                  {/* Divider */}
                  <div className="mt-8 mb-7 h-px w-16 bg-[#c9a84c]/40" />

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {[
                      { value: "500+", label: "Events covered" },
                      { value: "10+", label: "Cities across India" },
                      { value: "5★", label: "Average client rating" },
                      { value: "48h", label: "Preview turnaround" },
                    ].map(({ value, label }) => (
                      <div key={label}>
                        <p
                          className="text-2xl sm:text-3xl font-light text-[#f5f0eb] leading-none mb-1"
                          style={{ fontFamily: poppins }}
                        >
                          {value}
                        </p>
                        <p
                          className="text-xs text-[#f5f0eb]/35 uppercase tracking-wider"
                          style={{ fontFamily: inter }}
                        >
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p
                    className="text-xs text-[#f5f0eb]/25 mt-8 uppercase tracking-wider"
                    style={{ fontFamily: inter }}
                  >
                    Trusted across India · Since 2020
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.15 }}
                >
                  <ContactForm
                    defaultService={title}
                    variant={slug === "wedding-photography" ? "light" : "dark"}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story — overlaps hero for smoother transition */}
      <section className="relative z-20 -mt-12 sm:-mt-14 md:-mt-16 rounded-t-[1.75rem] sm:rounded-t-[2rem] bg-[#f5f0eb] shadow-[0_-8px_40px_-10px_rgba(0,0,0,0.12)] py-14 lg:py-24 border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            <AnimatedSection>
              <p
                className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
                style={{ fontFamily: poppins }}
              >
                About this service
              </p>
              <h2
                className="font-heading text-3xl sm:text-4xl font-light text-stone-900 mb-6 leading-snug"
              >
                Crafted with intention, delivered with care
              </h2>
              <div className="space-y-4">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-[15px] text-stone-600 leading-relaxed"
                    style={{ fontFamily: inter }}
                  >
                    {para}
                  </p>
                ))}
              </div>
              <div className="pt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#b8942e] rounded-full transition-colors duration-200 shadow-md shadow-[#c9a84c]/25"
                  style={{ fontFamily: poppins }}
                >
                  Book this service <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 shadow-xl shadow-stone-400/20 ring-1 ring-stone-200/80">
                {storyPhoto && (
                  <Image
                    src={storyPhoto}
                    alt={`${title} — sample`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                )}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 lg:py-24 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center lg:text-left max-w-2xl lg:max-w-none">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              What&apos;s included
            </p>
            <h2
              className="font-heading text-3xl sm:text-4xl font-light text-stone-900"
            >
              Our {title} offerings
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subServices.map((service, i) => (
              <AnimatedSection key={service} delay={i * 0.04}>
                <div className="flex items-start gap-3.5 rounded-2xl border border-stone-100 bg-[#fafaf9] px-5 py-4 hover:border-[#c9a84c]/35 hover:bg-white hover:shadow-lg hover:shadow-stone-200/60 transition-all duration-300">
                  <CheckCircle2
                    size={18}
                    className="text-[#c9a84c] flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <span
                    className="text-sm text-stone-700 leading-snug"
                    style={{ fontFamily: inter }}
                  >
                    {service}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview — same 6-image grid as other service pages */}
      <section className="py-16 lg:py-24 bg-[#f5f0eb] border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              Sample work
            </p>
            <h2
              className="font-heading text-3xl sm:text-4xl font-light text-stone-900"
            >
              Gallery preview
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {gallery.map((photo, i) => (
              <AnimatedSection key={`${photo}-${i}`} delay={i * 0.06}>
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-stone-200 relative group cursor-default ring-1 ring-stone-200/90 shadow-sm">
                  <Image
                    src={photo}
                    alt={`${title} gallery ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 33vw, 28vw"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-300" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10 flex justify-center" delay={0.24}>
            <a
              href="https://magicframestudio.com/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#b8942e] rounded-full transition-colors duration-200 shadow-md shadow-[#c9a84c]/25"
              style={{ fontFamily: poppins }}
            >
              View Our Portfolio
              <ArrowRight size={14} />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {slug === "wedding-photography" && (
        <>
          <section className="py-16 lg:py-24 bg-white border-t border-stone-200/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <AnimatedSection className="text-center mb-10">
                <p
                  className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
                  style={{ fontFamily: poppins }}
                >
                  Why choose us
                </p>
                <h2 className="font-heading text-3xl sm:text-4xl font-light text-stone-900 mb-3">
                  Why Choose Magic Frame Studio?
                </h2>
                <p
                  className="text-sm sm:text-[15px] text-stone-500 max-w-2xl mx-auto"
                  style={{ fontFamily: inter }}
                >
                  We blend storytelling, planning, and reliable execution so your
                  wedding memories are captured beautifully.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                {whyChooseHighlights.map((item, index) => (
                  <AnimatedSection key={item.title} delay={0.04 * index}>
                    <div className="relative text-center px-3 py-2">
                      <div className="mb-5 flex justify-center">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-stone-200/70">
                          <item.icon size={24} className="text-[#c9a84c]" />
                        </div>
                      </div>

                      <h3
                        className="font-heading text-2xl font-bold text-stone-900 mb-3 leading-tight"
                      >
                        {item.title}
                      </h3>

                      <p
                        className="text-sm sm:text-[15px] text-stone-500 leading-relaxed max-w-sm mx-auto"
                        style={{ fontFamily: inter }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          <ReadyToConnectSection />

          <WeddingMasonryPortfolios />
        </>
      )}

      {/* Serving cities */}
      <section className="py-14 lg:py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              Serving across India
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-light text-stone-900">
              {title} — available in your city
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/${category}/${slug}/${loc.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-[#fafaf9] px-5 py-2.5 text-sm text-stone-700 hover:border-[#c9a84c]/50 hover:text-[#c9a84c] hover:bg-white transition-all duration-200 shadow-sm"
                style={{ fontFamily: inter }}
              >
                <MapPin size={12} className="text-[#c9a84c]/70" />
                {title} in {loc.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — match CTABanner */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-[#0a0a0a] border-t border-stone-800/80">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1a1408]/45 to-[#0a0a0a]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/35 to-transparent" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-4"
              style={{ fontFamily: poppins }}
            >
              Next step
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#f5f0eb] mb-4 leading-tight">
              Book{" "}
              <span className="italic text-[#e0c068]">{title}</span> in India
            </h2>
            <p
              className="text-sm sm:text-[15px] text-[#f5f0eb]/55 mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: inter }}
            >
              Tell us about your dates, location, and vision — we&apos;ll respond with a clear plan and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-3.5 text-sm font-semibold text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-full transition-colors duration-200 shadow-lg shadow-[#c9a84c]/25"
                style={{ fontFamily: poppins }}
              >
                Get in touch
              </Link>
              <Link
                href={`/${category}`}
                className="inline-flex items-center gap-2 text-sm text-[#f5f0eb]/55 hover:text-[#f5f0eb] transition-colors"
                style={{ fontFamily: inter }}
              >
                ← All {category} services
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
