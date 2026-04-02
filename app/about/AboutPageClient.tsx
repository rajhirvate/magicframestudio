"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Camera, Film, Award, Users } from "lucide-react";

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

export default function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-[#f5f0eb] leading-tight mb-6">
              About Magic Frame Studio
            </h1>
            <p className="text-base sm:text-lg text-[#f5f0eb]/50 leading-relaxed max-w-2xl mx-auto">
              Born from a passion for visual storytelling, Magic Frame Studio has grown from a one-person operation into India&apos;s most trusted photography and videography company — without ever losing that founding passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="space-y-5">
                <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-4">
                  Who We Are
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl font-light text-[#f5f0eb] leading-tight">
                  Crafting Visual Stories Since 2020
                </h2>
                <p className="text-base text-[#f5f0eb]/60 leading-relaxed">
                  Magic Frame Studio was founded in 2020 with one clear vision: to create visual content that genuinely moves people. Not just technically perfect photographs and videos, but stories — images and films that capture the truth of a moment and preserve it for a lifetime.
                </p>
                <p className="text-base text-[#f5f0eb]/60 leading-relaxed">
                  Starting with weddings and portraits, we quickly expanded our scope to serve corporate clients, e-commerce brands, real estate agencies, and content creators across India. Today, with a team of 20+ creative professionals and a fleet of professional equipment, we operate across more than 10 Indian cities.
                </p>
                <p className="text-base text-[#f5f0eb]/60 leading-relaxed">
                  But through all the growth, one thing hasn&apos;t changed: the care and attention we bring to every single assignment, no matter how large or small. Every client deserves the best we can offer — and that&apos;s exactly what they get.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-900/30 via-zinc-800 to-zinc-900" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-3">
              What We Stand For
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-[#f5f0eb]">
              Our Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-7 hover:border-[#c9a84c]/20 transition-colors duration-300">
                  <div className="w-11 h-11 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center mb-5">
                    <value.icon size={20} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="font-heading text-xl font-medium text-[#f5f0eb] mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#f5f0eb]/50 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-14 text-center">
            <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-3">
              Our Journey
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-[#f5f0eb]">
              How We Got Here
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-[#2a2a2a] hidden sm:block" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.year} delay={i * 0.08}>
                  <div className="flex items-start gap-6 sm:gap-10">
                    <div className="flex-shrink-0 w-14 text-right">
                      <span className="font-heading text-lg font-medium text-[#c9a84c]">
                        {m.year}
                      </span>
                    </div>
                    <div className="relative hidden sm:block">
                      <div className="w-3 h-3 rounded-full bg-[#c9a84c] border-2 border-[#0a0a0a] absolute top-1.5 -left-1.5 z-10" />
                    </div>
                    <div className="flex-1 pb-2">
                      <p className="text-sm text-[#f5f0eb]/60 leading-relaxed sm:pl-4">
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
      <section className="py-20 bg-[#0d0d0d] border-t border-[#1e1e1e]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="font-heading text-4xl sm:text-5xl font-light text-[#f5f0eb] mb-4">
              Let&apos;s Create Together
            </h2>
            <p className="text-sm text-[#f5f0eb]/40 mb-8 leading-relaxed">
              Whether you&apos;re planning a wedding, launching a brand, or building your portfolio — we&apos;d love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] rounded-full transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
