"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Film, Sparkles, Camera, Heart } from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Cinematic Quality",
    description:
      "We shoot with cinema-grade cameras and premium lenses, delivering imagery that looks like it belongs in a feature film.",
  },
  {
    icon: Sparkles,
    title: "Creative Storytelling",
    description:
      "Every project is approached with a narrative mindset. We find the story in every moment and craft it with intention.",
  },
  {
    icon: Camera,
    title: "Modern Equipment",
    description:
      "From Sony FX series cameras to DJI drones and professional lighting, we invest in the best tools so your content shines.",
  },
  {
    icon: Heart,
    title: "100% Client Satisfaction",
    description:
      "With 42,540+ happy customers across India, our track record speaks for itself. Your satisfaction is our only metric.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Why Us
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900">
            The Magic Frame Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-[#f5f0eb] border border-stone-200 rounded-2xl p-7 hover:border-[#c9a84c]/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-stone-200/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center mb-5 group-hover:bg-[#c9a84c]/20 transition-colors">
                <feature.icon size={22} className="text-[#c9a84c]" />
              </div>
              <h3
                className="text-lg font-semibold text-stone-800 mb-3"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm text-stone-500 leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
