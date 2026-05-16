"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/** Full-bleed desert / dunes — cinematic backdrop for editorial CTA (home). */
const HERO3_READY_CONNECT_BG =
  "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=75&w=2400&auto=format&fit=crop";

const sans = "var(--font-sans), sans-serif";

export default function ReadyToConnectSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pathname = usePathname();
  const cinematicHero3 = pathname === "/" || pathname === "/hero3";

  if (cinematicHero3) {
    return (
      <section
        ref={ref}
        className="relative isolate w-full overflow-hidden"
        aria-labelledby="hero3-ready-connect-heading"
      >
        <Image
          src={HERO3_READY_CONNECT_BG}
          alt=""
          fill
          className="object-cover object-[center_42%]"
          sizes="100vw"
          priority={false}
        />
        {/* Readability overlays */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/82 via-black/48 to-black/25"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35"
          aria-hidden
        />

        <div className="relative z-10 w-full px-4 py-28 sm:px-6 sm:py-32 lg:px-10 lg:py-36 xl:px-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-none text-left"
          >
            <h2
              id="hero3-ready-connect-heading"
              className="font-heading text-[1.625rem] font-semibold leading-snug tracking-tight text-white drop-shadow-[0_1px_14px_rgba(0,0,0,0.45)] sm:text-[1.75rem] md:text-[1.875rem] lg:text-[2.25rem]"
            >
              Prewedding Shoot in Dubai
            </h2>
            <p
              className="mt-4 text-[13px] font-normal leading-relaxed text-white/90 sm:mt-5 sm:text-[14px] md:text-[15px]"
              style={{ fontFamily: sans }}
            >
              Before the &quot;I do&apos;s,&quot; let&apos;s capture the
              &quot;just us.&quot; For your{" "}
              <strong className="font-semibold text-white">
                prewedding shoot in Dubai
              </strong>
              , we sit down with you to talk themes, pick the best spots in Dubai
              or anywhere in the UAE, and plan it your way. You can go simple
              with photos only, or add video for a{" "}
              <strong className="font-semibold text-white">
                save-the-date edit
              </strong>{" "}
              that tells your story. It&apos;s a fun way to celebrate your love
              before the wedding day madness kicks in.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="bg-[#0f0c0a] py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <h2 className="font-heading text-3xl font-light leading-tight text-[#f5f0eb] sm:text-4xl lg:text-5xl">
            Ready to{" "}
            <span className="italic text-[#e0c068]">connect?</span>
          </h2>
          <Link
            href="/contact"
            className={cn("mt-1", BTN_PRIMARY)}
            style={{ fontFamily: sans }}
          >
            Connect now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
