"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Camera, Video } from "lucide-react";
import { photographyServices, videographyServices } from "@/data/services";
import { photographyPhotos, videographyPhotos } from "@/data/servicePhotos";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isHero4Path } from "@/lib/routeFlags";
import { cn } from "@/lib/utils";

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
        className="group block rounded-2xl overflow-hidden border border-stone-100 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c9a84c]/40 hover:shadow-2xl hover:shadow-stone-300/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c]"
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
        </div>
        {/* Card body */}
        <div className="px-4 py-3.5">
          <h3
            className="mfs-home-title text-[15px] text-stone-800 transition-colors duration-200 group-hover:text-[#c9a84c] mb-0.5"
          >
            {title}
          </h3>
          <p
            className="flex items-center gap-1 text-xs text-[#c9a84c]/80 group-hover:gap-2 transition-all duration-200"
            style={{ fontFamily: "var(--font-sans), sans-serif" }}
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
  const pathname = usePathname();
  const isHero4 = isHero4Path(pathname);

  return (
    <section
      id="homepage-services"
      className={cn(
        "bg-white",
        isHero4
          ? "pt-11 pb-14 lg:pt-14 lg:pb-20"
          : "py-14 lg:py-20",
      )}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <SectionHeading
            align="center"
            eyebrow="What we do"
            title="Our services"
          />
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
              <SectionHeading as="h3" title="Photography services" />
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
              <SectionHeading as="h3" title="Videography services" />
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
          </div>

        </div>
      </div>
    </section>
  );
}
