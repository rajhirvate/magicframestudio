"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronRight, MapPin } from "lucide-react";
import { photographyPhotos, videographyPhotos } from "@/data/servicePhotos";
import { locations, Location } from "@/data/locations";
import { photographyServices, videographyServices } from "@/data/services";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

const galleryPhotoPool = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80&fit=crop&auto=format",
];

interface ServiceCityPageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  subServices: string[];
  category: "photography" | "videography";
  slug: string;
  location: Location;
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

export default function ServiceCityPageLayout({
  title,
  subtitle,
  description,
  subServices,
  category,
  slug,
  location,
}: ServiceCityPageLayoutProps) {
  const paragraphs = description.split("\n\n").filter(Boolean);
  const photoMap = category === "photography" ? photographyPhotos : videographyPhotos;
  const heroPhoto = photoMap[slug];
  const restPool = galleryPhotoPool.filter((p) => p !== heroPhoto);
  const storyPhoto = restPool[0] ?? heroPhoto;
  const gallery = [heroPhoto, ...restPool].filter(Boolean).slice(0, 6) as string[];

  const allServices =
    category === "photography" ? photographyServices : videographyServices;
  const otherServices = allServices.filter((s) => s.slug !== slug).slice(0, 6);
  const otherCities = locations.filter((l) => l.slug !== location.slug);

  const cityTitle = `${title} in ${location.label}`;
  const citySubtitle = `Professional ${title.toLowerCase()} services in ${location.label}, ${location.state}`;

  return (
    <>
      {/* Hero */}
      <section className="relative z-0 overflow-hidden">
        <div
          className="relative flex min-h-[min(78vh,620px)] flex-col pt-24 sm:pt-28 pb-24 sm:pb-28 lg:pb-32"
          style={{
            background: [
              "radial-gradient(ellipse 75% 65% at 18% 72%, rgba(201,168,76,0.18) 0%, transparent 68%)",
              "radial-gradient(ellipse 55% 45% at 78% 18%, rgba(201,168,76,0.09) 0%, transparent 60%)",
              "radial-gradient(ellipse 40% 35% at 85% 65%, rgba(180,120,60,0.07) 0%, transparent 55%)",
              "linear-gradient(150deg, #131008 0%, #0d0a06 45%, #0a0a0a 100%)",
            ].join(", "),
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.032]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
              backgroundRepeat: "repeat",
              backgroundSize: "200px 200px",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-52 sm:h-60"
            style={{
              background:
                "linear-gradient(to top, #f5f0eb 0%, rgba(245,240,235,0.7) 40%, transparent 100%)",
            }}
            aria-hidden
          />

          <div className="relative z-10 flex flex-1 flex-col max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="pt-2 sm:pt-3 shrink-0">
              <nav
                className="inline-flex flex-wrap items-center gap-1.5 rounded-none border border-white/10 bg-white/5 px-3.5 py-2"
                style={{ fontFamily: inter }}
              >
                <Link href="/" className="text-[11px] sm:text-xs text-[#f5f0eb]/55 hover:text-[#f5f0eb]/90 transition-colors">
                  Home
                </Link>
                <ChevronRight size={10} className="text-[#f5f0eb]/25 shrink-0" />
                <Link href={`/${category}`} className="text-[11px] sm:text-xs text-[#f5f0eb]/55 hover:text-[#f5f0eb]/90 transition-colors capitalize">
                  {category}
                </Link>
                <ChevronRight size={10} className="text-[#f5f0eb]/25 shrink-0" />
                <Link href={`/${category}/${slug}`} className="text-[11px] sm:text-xs text-[#f5f0eb]/55 hover:text-[#f5f0eb]/90 transition-colors">
                  {title}
                </Link>
                <ChevronRight size={10} className="text-[#f5f0eb]/25 shrink-0" />
                <span className="text-[11px] sm:text-xs font-semibold text-[#c9a84c]">
                  {location.label}
                </span>
              </nav>
            </div>

            <div className="flex-1 flex flex-col justify-end pb-2 sm:pb-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
                <motion.div
                  className="lg:col-span-7"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                >
                  <div className="inline-flex items-center gap-1.5 rounded-none bg-[#c9a84c]/15 border border-[#c9a84c]/30 px-3 py-1 mb-4">
                    <MapPin size={11} className="text-[#c9a84c]" />
                    <span
                      className="text-[11px] font-semibold tracking-wider text-[#c9a84c] uppercase"
                      style={{ fontFamily: poppins }}
                    >
                      {location.label}, {location.state}
                    </span>
                  </div>
                  <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-light text-[#f5f0eb] leading-[1.06] max-w-[22ch] sm:max-w-xl lg:max-w-none">
                    {cityTitle}
                  </h1>
                  <p
                    className="text-sm sm:text-base md:text-lg text-[#f5f0eb]/65 mt-4 max-w-xl leading-relaxed lg:hidden"
                    style={{ fontFamily: inter }}
                  >
                    {citySubtitle}
                  </p>
                </motion.div>

                <motion.div
                  className="lg:col-span-5 lg:flex lg:justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.12 }}
                >
                  <div className="w-full max-w-md rounded-2xl border border-[#c9a84c]/20 bg-white/[0.05] px-6 py-6 sm:px-7 sm:py-7 ring-1 ring-inset ring-white/5 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)]">
                    <p
                      className="text-[15px] sm:text-base text-[#f5f0eb]/75 leading-relaxed mb-6 hidden lg:block"
                      style={{ fontFamily: inter }}
                    >
                      {citySubtitle}
                    </p>
                    <div
                      className="hidden lg:block h-px w-full bg-gradient-to-r from-[#c9a84c]/40 via-[#c9a84c]/15 to-transparent mb-6"
                      aria-hidden
                    />
                    <p
                      className="text-xs text-[#f5f0eb]/40 mb-5 lg:mb-6 uppercase tracking-wider"
                      style={{ fontFamily: inter }}
                    >
                      Trusted across India · Since 2020
                    </p>
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                      <Link
                        href="/contact"
                        className={cn(BTN_PRIMARY, "px-6")}
                        style={{ fontFamily: poppins }}
                      >
                        Book in {location.label} <ArrowRight size={14} className="shrink-0" />
                      </Link>
                      <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#f5f0eb]/80 border border-[#f5f0eb]/20 hover:border-[#c9a84c]/50 hover:text-[#f5f0eb] rounded-none transition-all"
                        style={{ fontFamily: poppins }}
                      >
                        View our work
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Description */}
      <section className="relative z-20 -mt-12 sm:-mt-14 md:-mt-16 rounded-t-[1.75rem] sm:rounded-t-[2rem] bg-[#f5f0eb] shadow-[0_-8px_40px_-10px_rgba(0,0,0,0.12)] py-14 lg:py-24 border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            <AnimatedSection>
              <p
                className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
                style={{ fontFamily: poppins }}
              >
                {title} · {location.label}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-light text-stone-900 mb-6 leading-snug">
                Crafted with intention, delivered with care
              </h2>
              <div className="space-y-4">
                {paragraphs.map((para, i) => (
                  <p
                    key={i}
                    className="text-[15px] text-stone-600 leading-relaxed"
                    style={{ fontFamily: inter }}
                  >
                    {para}
                  </p>
                ))}
                <p
                  className="text-[15px] text-stone-600 leading-relaxed"
                  style={{ fontFamily: inter }}
                >
                  Based in {location.label}, {location.state}, our local team understands
                  the culture, venues, and unique character of the city — ensuring your
                  shoot feels authentic and deeply personal.
                </p>
              </div>
              <div className="pt-8">
                <Link
                  href="/contact"
                  className={cn(BTN_PRIMARY)}
                  style={{ fontFamily: poppins }}
                >
                  Book in {location.label} <ArrowRight size={14} className="shrink-0" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.12}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 shadow-xl shadow-stone-400/20 ring-1 ring-stone-200/80">
                {storyPhoto && (
                  <Image
                    src={storyPhoto}
                    alt={`${cityTitle} — sample`}
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
          <AnimatedSection className="mb-12 text-center lg:text-left">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              What&apos;s included
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-stone-900">
              Our {title} offerings in {location.label}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {subServices.map((service, i) => (
              <AnimatedSection key={service} delay={i * 0.04}>
                <div className="flex items-start gap-3.5 rounded-2xl border border-stone-100 bg-[#fafaf9] px-5 py-4 hover:border-[#c9a84c]/35 hover:bg-white hover:shadow-lg hover:shadow-stone-200/60 transition-all duration-300">
                  <CheckCircle2 size={18} className="text-[#c9a84c] flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-sm text-stone-700 leading-snug" style={{ fontFamily: inter }}>
                    {service}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-[#f5f0eb] border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-12 text-center">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              Sample work
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-light text-stone-900">
              Gallery preview
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
            {gallery.map((photo, i) => (
              <AnimatedSection key={`${photo}-${i}`} delay={i * 0.06}>
                <div className="aspect-[3/2] rounded-2xl overflow-hidden bg-stone-200 relative group cursor-default ring-1 ring-stone-200/90 shadow-sm">
                  <Image
                    src={photo}
                    alt={`${cityTitle} gallery ${i + 1}`}
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
              className={cn(BTN_PRIMARY)}
              style={{ fontFamily: poppins }}
            >
              View our portfolio
              <ArrowRight size={14} className="shrink-0" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Other cities for this service */}
      <section className="py-14 lg:py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              Also available in
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-light text-stone-900">
              {title} across India
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {otherCities.map((city) => (
              <Link
                key={city.slug}
                href={`/${category}/${slug}/${city.slug}`}
                className="inline-flex items-center gap-2 rounded-none border border-stone-200 bg-[#fafaf9] px-5 py-2.5 text-sm text-stone-700 hover:border-[#c9a84c]/50 hover:text-[#c9a84c] hover:bg-white transition-all duration-200"
                style={{ fontFamily: inter }}
              >
                <MapPin size={12} className="text-[#c9a84c]/70" />
                {title} in {city.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More services in this city */}
      <section className="py-14 lg:py-20 bg-[#f5f0eb] border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              More in {location.label}
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-light text-stone-900">
              Other {category} services in {location.label}
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/${category}/${s.slug}/${location.slug}`}
                className="inline-flex items-center gap-2 rounded-none border border-stone-200 bg-white px-5 py-2.5 text-sm text-stone-700 hover:border-[#c9a84c]/50 hover:text-[#c9a84c] hover:bg-white transition-all duration-200 shadow-sm"
                style={{ fontFamily: inter }}
              >
                {s.title} <ArrowRight size={11} className="text-[#c9a84c]/70" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-[#0f0c0a] border-t border-stone-800/80">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0c0a] via-[#1a1408]/45 to-[#0f0c0a]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/35 to-transparent" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p
              className="mb-4 text-xs font-semibold tracking-normal text-[#c9a84c]"
              style={{ fontFamily: poppins }}
            >
              Next step
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light text-[#f5f0eb] mb-4 leading-tight">
              Book{" "}
              <span className="italic text-[#e0c068]">{title}</span> in{" "}
              {location.label}
            </h2>
            <p
              className="text-sm sm:text-[15px] text-[#f5f0eb]/55 mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: inter }}
            >
              Tell us about your dates and vision — our {location.label} team will
              respond with a clear plan and quote.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className={cn(BTN_PRIMARY)}
                style={{ fontFamily: poppins }}
              >
                Get in touch
              </Link>
              <Link
                href={`/${category}/${slug}`}
                className="inline-flex items-center gap-2 text-sm text-[#f5f0eb]/55 hover:text-[#f5f0eb] transition-colors"
                style={{ fontFamily: inter }}
              >
                ← Back to {title}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
