"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { BTN_PRIMARY } from "@/lib/btn";

const sans = "var(--font-sans), sans-serif";

/** Placeholder — swap for branded shoot imagery when ready (`/hero3` split layout only). */
const HERO3_INTRO_IMAGE =
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200&q=80&fit=crop&auto=format";

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const pathname = usePathname();
  const isHero3 = pathname === "/hero3";

  if (isHero3) {
    return (
      <section
        ref={ref}
        className="border-t border-stone-200 bg-white py-16 lg:py-24"
        aria-labelledby="intro-services-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut" }}
              className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg lg:mx-0 lg:max-w-none"
            >
              <Image
                src={HERO3_INTRO_IMAGE}
                alt="Photographer shooting on location — placeholder image"
                fill
                className="object-cover grayscale contrast-[1.02]"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.06, ease: "easeOut" }}
              className="text-left"
            >
              <h2
                id="intro-services-heading"
                className="font-heading mb-6 text-3xl font-normal leading-[1.18] text-stone-900 sm:text-4xl lg:text-[2.35rem]"
              >
                Photography &amp; Videography Services
              </h2>
              <p
                className="text-[15px] font-normal leading-relaxed text-stone-600 sm:text-base lg:leading-[1.85]"
                style={{ fontFamily: sans }}
              >
                We provide a complete range of photography and videography
                services across India, crafted to suit both individuals and
                businesses. From personal milestones such as maternity portraits
                and family photoshoots to commercial productions including
                corporate headshots, food and product photography, and large-scale
                events, our verified creatives cover every aspect of visual
                storytelling. We also offer cinematic videography, brand
                campaigns, and aerial drone coverage when your brief calls for it —
                helping you capture unforgettable memories and impactful visuals.
                Whether in-studio or on location nationwide, our network combines
                artistry, technology, and passion to deliver photographs and films
                that feel timeless and powerful.
              </p>
              <div className="mt-9">
                <Link
                  href="/contact"
                  className={BTN_PRIMARY}
                  style={{ fontFamily: sans }}
                >
                  Request for packages
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="bg-white py-14 lg:py-20"
      aria-labelledby="intro-services-heading"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:max-w-5xl lg:px-8">
        <motion.h2
          id="intro-services-heading"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-xl font-bold uppercase tracking-[0.14em] text-stone-900 sm:text-2xl md:text-[1.65rem] lg:text-[1.85rem] xl:text-[2rem]"
          style={{ fontFamily: sans }}
        >
          Photography &amp; Videography Services
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0.6 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.06 }}
          className="mx-auto mb-10 mt-6 h-px w-16 origin-center bg-stone-300"
          aria-hidden
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.16 }}
          className="mx-auto max-w-4xl text-[15px] leading-[1.85] text-stone-500 lg:text-base lg:leading-[1.9]"
          style={{ fontFamily: sans }}
        >
          We provide a complete range of photography and videography services
          across India, crafted to suit both individuals and businesses. From
          personal milestones such as maternity portraits and family photoshoots
          to commercial productions including corporate headshots, food and
          product photography, and large-scale events, our verified creatives cover
          every aspect of visual storytelling. We also offer cinematic
          videography, brand campaigns, and aerial drone coverage when your brief
          calls for it — helping you capture unforgettable memories and impactful
          visuals. Whether in-studio or on location nationwide, our network
          combines artistry, technology, and passion to deliver photographs and
          films that feel timeless and powerful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="/contact"
            className={BTN_PRIMARY}
            style={{ fontFamily: sans }}
          >
            Request for packages
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
