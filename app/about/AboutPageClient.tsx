"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Camera, Film, Award, Users, ArrowRight } from "lucide-react";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

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

const milestones = [
  { year: "2020", event: "Magic Frame Studio founded in Mumbai with a simple camera and a big dream." },
  { year: "2021", event: "Expanded to events and corporate photography. First 500 clients served." },
  { year: "2022", event: "Launched videography division. Drone photography & videography added to services." },
  { year: "2023", event: "Crossed 10,000 happy customers. Featured in leading wedding publications." },
  { year: "2024", event: "Expanded team to 20+ professionals. Now operating across 10+ Indian cities." },
  { year: "2025", event: "42,540+ happy customers and counting. India's most trusted studio." },
];

const values = [
  {
    icon: Camera,
    title: "Artistry First",
    description: "We treat every shoot as an art project. Composition, light, timing — nothing is left to chance.",
  },
  {
    icon: Film,
    title: "Cinematic Vision",
    description: "We're inspired by cinema and bring that storytelling sensibility to every frame we capture.",
  },
  {
    icon: Award,
    title: "Uncompromising Quality",
    description: "From equipment to editing, we hold every deliverable to the highest standard.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We don't just take instructions — we collaborate, listen, and bring your vision to life.",
  },
];

const stats = [
  { value: "42,540+", label: "Happy clients" },
  { value: "10+", label: "Cities across India" },
  { value: "20+", label: "Creative professionals" },
  { value: "5★", label: "Average rating" },
];

export default function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        {/* Square grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: [
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            ].join(", "),
            backgroundSize: "56px 56px",
          }}
          aria-hidden
        />
        {/* Amber glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: [
              "radial-gradient(ellipse 65% 55% at 50% 80%, rgba(201,168,76,0.12) 0%, transparent 65%)",
              "radial-gradient(ellipse 40% 30% at 80% 15%, rgba(201,168,76,0.06) 0%, transparent 60%)",
            ].join(", "),
          }}
          aria-hidden
        />
        {/* Vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, rgba(0,0,0,0.6) 100%)" }}
          aria-hidden
        />

        <div className="relative pt-36 pb-24 lg:pt-48 lg:pb-32">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p
                className="text-xs font-semibold tracking-[0.22em] text-[#c9a84c] uppercase mb-4"
                style={{ fontFamily: poppins }}
              >
                Our Story
              </p>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-[#f5f0eb] leading-[1.06] mb-6">
                About Magic Frame Studio
              </h1>
              <p
                className="text-sm sm:text-base text-[#f5f0eb]/50 leading-relaxed max-w-2xl mx-auto"
                style={{ fontFamily: inter }}
              >
                Born from a passion for visual storytelling, Magic Frame Studio has grown from a
                one-person operation into India&apos;s most trusted photography and videography
                company — without ever losing that founding passion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#0d0d0d] border-y border-[#1e1e1e]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#2a2a2a]">
            {stats.map(({ value, label }, i) => (
              <AnimatedSection key={label} delay={i * 0.07} className="text-center lg:px-8">
                <p
                  className="text-3xl sm:text-4xl font-light text-[#f5f0eb] leading-none mb-1.5"
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <AnimatedSection>
              <p
                className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-4"
                style={{ fontFamily: poppins }}
              >
                Who We Are
              </p>
              <h2 className="font-heading text-4xl sm:text-5xl font-light text-[#f5f0eb] leading-tight mb-6">
                Crafting Visual Stories Since 2020
              </h2>
              <div className="space-y-4">
                <p className="text-sm sm:text-[15px] text-[#f5f0eb]/60 leading-relaxed" style={{ fontFamily: inter }}>
                  Magic Frame Studio was founded in 2020 with one clear vision: to create visual
                  content that genuinely moves people. Not just technically perfect photographs and
                  videos, but stories — images and films that capture the truth of a moment and
                  preserve it for a lifetime.
                </p>
                <p className="text-sm sm:text-[15px] text-[#f5f0eb]/60 leading-relaxed" style={{ fontFamily: inter }}>
                  Starting with weddings and portraits, we quickly expanded to serve corporate
                  clients, e-commerce brands, real estate agencies, and content creators across India.
                  Today, with a team of 20+ creative professionals, we operate across more than 10
                  Indian cities.
                </p>
                <p className="text-sm sm:text-[15px] text-[#f5f0eb]/60 leading-relaxed" style={{ fontFamily: inter }}>
                  Through all the growth, one thing hasn&apos;t changed: the care we bring to every
                  single assignment. Every client deserves our best — and that&apos;s exactly what
                  they get.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-xl transition-colors duration-200 shadow-md shadow-[#c9a84c]/20"
                  style={{ fontFamily: poppins }}
                >
                  Work with us <ArrowRight size={14} />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-800 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                <Image
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&fit=crop&auto=format"
                  alt="Magic Frame Studio team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-[#0d0d0d] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              What We Stand For
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-[#f5f0eb]">
              Our Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="group bg-[#141414] border border-[#222] rounded-2xl p-7 hover:border-[#c9a84c]/25 hover:bg-[#181818] transition-all duration-300 h-full">
                  <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/15 flex items-center justify-center mb-5 transition-colors duration-300">
                    <value.icon size={20} className="text-[#c9a84c]" />
                  </div>
                  <h3
                    className="text-base font-semibold text-[#f5f0eb] mb-2"
                    style={{ fontFamily: poppins }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm text-[#f5f0eb]/45 leading-relaxed"
                    style={{ fontFamily: inter }}
                  >
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-3"
              style={{ fontFamily: poppins }}
            >
              Our Journey
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-[#f5f0eb]">
              How We Got Here
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[3.75rem] top-2 bottom-2 w-px bg-gradient-to-b from-[#c9a84c]/30 via-[#2a2a2a] to-transparent hidden sm:block" />

            <div className="space-y-7">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.07}>
                  <div className="flex items-start gap-6 sm:gap-10">
                    {/* Year */}
                    <div className="flex-shrink-0 w-14 text-right pt-0.5">
                      <span
                        className="text-sm font-semibold text-[#c9a84c]"
                        style={{ fontFamily: poppins }}
                      >
                        {m.year}
                      </span>
                    </div>
                    {/* Dot */}
                    <div className="relative hidden sm:flex items-start pt-2 flex-shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#c9a84c] ring-4 ring-[#0a0a0a] relative z-10" />
                    </div>
                    {/* Event */}
                    <div className="flex-1 pb-1">
                      <p
                        className="text-sm sm:text-[15px] text-[#f5f0eb]/55 leading-relaxed"
                        style={{ fontFamily: inter }}
                      >
                        {m.event}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-[#0a0a0a] border-t border-[#1e1e1e]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#1a1408]/40 to-[#0a0a0a]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p
              className="text-xs font-semibold tracking-[0.2em] text-[#c9a84c] uppercase mb-4"
              style={{ fontFamily: poppins }}
            >
              Next Step
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-[#f5f0eb] mb-4 leading-tight">
              Let&apos;s Create Together
            </h2>
            <p
              className="text-sm sm:text-[15px] text-[#f5f0eb]/45 mb-10 leading-relaxed"
              style={{ fontFamily: inter }}
            >
              Whether you&apos;re planning a wedding, launching a brand, or building your portfolio
              — we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-3.5 text-sm font-semibold text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-xl transition-colors duration-200 shadow-lg shadow-[#c9a84c]/20"
                style={{ fontFamily: poppins }}
              >
                Get in Touch
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm text-[#f5f0eb]/45 hover:text-[#f5f0eb] transition-colors"
                style={{ fontFamily: inter }}
              >
                View our work →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
