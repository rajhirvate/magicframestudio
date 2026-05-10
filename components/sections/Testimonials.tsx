"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul Sharma",
    role: "Wedding Clients · Delhi",
    quote:
      "Magic Frame Studio absolutely nailed our wedding. Every candid moment, every ritual, every tear of joy — all captured so beautifully. Our wedding album feels like a cinema. We couldn't be happier.",
    rating: 5,
  },
  {
    name: "Nisha Patel",
    role: "Product Photography · Ahmedabad",
    quote:
      "We hired Magic Frame for our jewelry catalog and the results were stunning. Sales went up 40% after we updated our e-commerce listings with their photos. Truly professional work.",
    rating: 5,
  },
  {
    name: "Aakash Mehta",
    role: "Corporate Client · Mumbai",
    quote:
      "From the team photoshoot to the company profile video, everything was handled with incredible professionalism. They understood our brand perfectly and delivered beyond expectations.",
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-14 lg:py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-3">
            Client Stories
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light text-[#f5f0eb]">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={13} className="fill-[#c9a84c] text-[#c9a84c]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-heading text-lg font-light text-[#f5f0eb]/80 leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Client */}
              <div className="border-t border-[#2a2a2a] pt-5">
                <p className="text-sm font-medium text-[#f5f0eb]">{t.name}</p>
                <p className="text-xs text-[#f5f0eb]/40 mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
