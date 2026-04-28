"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Camera, Video } from "lucide-react";
import { photographyServices, videographyServices } from "@/data/services";
import { photographyPhotos, videographyPhotos } from "@/data/servicePhotos";

function ServiceCard({
  title,
  slug,
  prefix,
  photo,
  index,
}: {
  title: string;
  slug: string;
  prefix: string;
  photo: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <Link
        href={`/${prefix}/${slug}`}
        className="group block bg-white rounded-2xl overflow-hidden border border-stone-100 hover:border-[#c9a84c]/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-stone-300/40"
      >
        {/* Photo */}
        <div className="aspect-[3/2] relative overflow-hidden bg-stone-100">
          <Image
            src={photo}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Dark gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Arrow pill */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-sm">
            <span className="text-[11px] font-medium text-stone-700" style={{ fontFamily: "var(--font-poppins), sans-serif" }}>View</span>
            <ArrowRight size={10} className="text-[#c9a84c]" />
          </div>
        </div>
        {/* Card body */}
        <div className="px-4 py-3.5">
          <h3
            className="text-[15px] font-semibold text-stone-800 group-hover:text-[#c9a84c] transition-colors duration-200 mb-0.5"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            {title}
          </h3>
          <p
            className="flex items-center gap-1 text-xs text-[#c9a84c]/80 group-hover:gap-2 transition-all duration-200"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Learn More <ArrowRight size={9} />
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesOverview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-14 lg:py-20 bg-[#f5f0eb]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p
            className="text-xs tracking-widest text-[#c9a84c] uppercase mb-3"
            style={{ fontFamily: "var(--font-poppins), sans-serif" }}
          >
            What We Do
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

          {/* Photography Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-7 pb-4 border-b border-stone-200"
            >
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                <Camera size={15} className="text-[#c9a84c]" />
              </div>
              <h3
                className="text-xl font-semibold text-stone-800"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Photography Services
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {photographyServices.map((service, i) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  slug={service.slug}
                  prefix="photography"
                  photo={photographyPhotos[service.slug]}
                  index={i}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-6"
            >
              <Link
                href="/photography"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#c9a84c] hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                View All Photography Services <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          {/* Videography Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-7 pb-4 border-b border-stone-200"
            >
              <div className="w-8 h-8 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                <Video size={15} className="text-[#c9a84c]" />
              </div>
              <h3
                className="text-xl font-semibold text-stone-800"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                Videography Services
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {videographyServices.map((service, i) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  slug={service.slug}
                  prefix="videography"
                  photo={videographyPhotos[service.slug]}
                  index={i}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-6"
            >
              <Link
                href="/videography"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#c9a84c] hover:gap-3 transition-all duration-200"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                View All Videography Services <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
