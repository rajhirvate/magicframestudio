"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const inter = "var(--font-inter), sans-serif";

const testimonials = [
  {
    quote:
      "This was probably the best choice that we made for our wedding photography! They were so friendly and easy going during the shoot, it made the whole thing even more special.. they are really open to your suggestions and the outcome is beautiful in the form of photography and cinematography.. over all, this was a great experience... great great experience... thanks a lot guys!!",
    name: "Shruti Mehta",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "You are truly beautiful and extremely talented and this comes out through your work. You made us feel so relaxed and captured every emotion so THANK YOU. This was the best choice we had made for candid wedding photographers. We are so privileged to have had you capture our wedding!!! I will remember you all forever as you all made our day the best day of our lives!",
    name: "Harshita Parwal",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "Every ritual, every laugh, and even the chaos of our baraat looks cinematic in the album. The team blended into our family for three days and delivered memories we still tear up watching.",
    name: "Priya & Rahul Sharma",
    avatar:
      "https://images.unsplash.com/photo-1529634597503-139d8466a6df?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "Crystal-clear communication from booking to final delivery. We knew exactly what to expect, and on the wedding day they were punctual, polite, and never intrusive — exactly what we hoped for.",
    name: "Neha Kapoor",
    avatar:
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "Our families still talk about how comfortable everyone felt in front of the camera. The candids look effortless and the traditional portraits are timeless — worth every rupee we invested.",
    name: "Ananya Desai",
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "Two cities, four events, one chaotic calendar — Magic Frame kept pace beautifully. Editing turnaround was faster than promised and the highlight reel made our parents emotional within seconds.",
    name: "Vikram & Sneha Reddy",
    avatar:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "I usually freeze in photos; their direction was gentle and natural. The bridal portraits look editorial yet warm — I have prints framed all over our new home.",
    name: "Meera Iyer",
    avatar:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "Professional gear, backup plans for rain, and calm energy when timelines slipped — as a groom who worries about details, I could finally relax and trust the crew.",
    name: "Karan Malhotra",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "Colour grading and skin tones look consistent across hundreds of photos — something other studios we shortlisted struggled with. Our Instagram announcements looked magazine-ready.",
    name: "Riya Saxena",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
  {
    quote:
      "From pre-wedding in the hills to the reception in Mumbai, one creative vision tied everything together. Guests assumed we’d flown in an international team — huge compliment to Magic Frame.",
    name: "Aditya Chopra",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&fit=crop&auto=format",
    rating: 5,
  },
];

const PER_VIEW = 2;

function chunkPairs<T>(items: T[]): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += PER_VIEW) {
    pages.push(items.slice(i, i + PER_VIEW));
  }
  return pages;
}

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <article className="text-left">
      <blockquote
        className="text-[15px] leading-relaxed text-[#4a4a4a] sm:text-base sm:leading-relaxed"
        style={{ fontFamily: inter }}
      >
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      <div className="mt-8 flex gap-4">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-stone-200">
          <Image
            src={item.avatar}
            alt={`${item.name}`}
            fill
            className="object-cover grayscale"
            sizes="56px"
          />
        </div>
        <div className="min-w-0 pt-0.5">
          <p className="font-heading text-base font-semibold text-stone-900">
            {item.name}
          </p>
          <div
            className="mt-2 flex gap-0.5"
            aria-label={`${item.rating} out of 5 stars`}
          >
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="fill-[#c9a84c] text-[#c9a84c]"
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

const navBtnClass =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-700 shadow-sm transition-colors hover:border-[#c9a84c]/60 hover:text-[#9a7b32] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a84c] disabled:pointer-events-none disabled:opacity-35";

export default function WeddingCustomerTestimonials() {
  const pages = chunkPairs(testimonials);
  const pageCount = pages.length;

  const [pageIndex, setPageIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

  const goPrev = useCallback(() => {
    setPageIndex((p) => Math.max(0, p - 1));
  }, []);

  const goNext = useCallback(() => {
    setPageIndex((p) => Math.min(pageCount - 1, p + 1));
  }, [pageCount]);

  const pctPerPage = 100 / pageCount;

  return (
    <section className="border-t border-stone-200/80 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 14 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12"
        >
          <h2 className="font-heading text-3xl font-light tracking-tight text-[#6b5d52] sm:text-4xl md:text-[2.35rem] md:leading-tight">
            What our customers say about us
          </h2>
        </motion.div>

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Customer testimonials"
        >
          <div className="mb-8 flex items-center justify-end gap-2 sm:absolute sm:right-0 sm:top-0 sm:mb-0">
            <button
              type="button"
              className={navBtnClass}
              aria-label="Previous testimonials"
              onClick={goPrev}
              disabled={pageIndex <= 0}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <button
              type="button"
              className={navBtnClass}
              aria-label="Next testimonials"
              onClick={goNext}
              disabled={pageIndex >= pageCount - 1}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div
            className="overflow-hidden pb-2 outline-none sm:pt-14 focus-visible:ring-2 focus-visible:ring-[#c9a84c]/40 focus-visible:ring-offset-2 rounded-sm"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                goPrev();
              } else if (e.key === "ArrowRight") {
                e.preventDefault();
                goNext();
              }
            }}
            onTouchStart={(e) => {
              touchStartX.current = e.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              const start = touchStartX.current;
              touchStartX.current = null;
              if (start == null) return;
              const end = e.changedTouches[0]?.clientX ?? start;
              const dx = end - start;
              if (dx > 56) goPrev();
              else if (dx < -56) goNext();
            }}
          >
            <motion.div
              className="flex"
              style={{ width: `${pageCount * 100}%` }}
              animate={{ x: `${-(pageIndex * pctPerPage)}%` }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
            >
              {pages.map((pair, slideIdx) => (
                <div
                  key={slideIdx}
                  className="grid shrink-0 grid-cols-1 gap-14 md:grid-cols-2 md:gap-16 lg:gap-20 px-0.5"
                  style={{
                    width: `${pctPerPage}%`,
                  }}
                  aria-hidden={pageIndex !== slideIdx}
                >
                  {pair.map((item) => (
                    <TestimonialCard key={item.name} item={item} />
                  ))}
                </div>
              ))}
            </motion.div>
          </div>

          <div
            className="mt-10 flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="Testimonial pages"
          >
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={pageIndex === i}
                aria-label={`Show testimonials ${i * PER_VIEW + 1} to ${Math.min((i + 1) * PER_VIEW, testimonials.length)}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  pageIndex === i
                    ? "w-8 bg-[#c9a84c]"
                    : "w-2 bg-stone-300 hover:bg-stone-400"
                }`}
                onClick={() => setPageIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
