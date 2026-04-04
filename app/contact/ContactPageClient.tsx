"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

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
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ContactPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] to-[#0a0a0a]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/20 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs tracking-widest text-[#c9a84c] uppercase mb-4" style={{ fontFamily: poppins }}>
              Let&apos;s Talk
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-[#f5f0eb] leading-tight mb-5">
              Book a Shoot
            </h1>
            <p className="text-base text-[#f5f0eb]/50 leading-relaxed" style={{ fontFamily: inter }}>
              Tell us about your project and we&apos;ll get back to you within 24 hours with a custom quote.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 lg:py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left — Contact Info */}
            <AnimatedSection className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-[#f5f0eb] mb-6" style={{ fontFamily: poppins }}>
                    Contact Information
                  </h2>
                  <ul className="space-y-5">
                    {[
                      { icon: MapPin, label: "Address", content: "Magic Frame Studio\nMumbai, Maharashtra, India" },
                      { icon: Phone, label: "Phone", content: "+91 99999 99999", href: "tel:+919999999999" },
                      { icon: Mail, label: "Email", content: "hello@magicframestudio.com", href: "mailto:hello@magicframestudio.com" },
                      { icon: Clock, label: "Working Hours", content: "Monday – Sunday\n9:00 AM – 7:00 PM IST" },
                    ].map(({ icon: Icon, label, content, href }) => (
                      <li key={label} className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-full bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon size={15} className="text-[#c9a84c]" />
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold tracking-[0.15em] text-[#f5f0eb]/30 uppercase mb-1" style={{ fontFamily: poppins }}>
                            {label}
                          </p>
                          {href ? (
                            <a href={href} className="text-sm text-[#f5f0eb]/60 hover:text-[#c9a84c] transition-colors" style={{ fontFamily: inter }}>
                              {content}
                            </a>
                          ) : (
                            <p className="text-sm text-[#f5f0eb]/60 whitespace-pre-line" style={{ fontFamily: inter }}>
                              {content}
                            </p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Why Book */}
                <div className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-[#f5f0eb] mb-4" style={{ fontFamily: poppins }}>
                    Why Book With Us?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Response within 24 hours",
                      "Free consultation call",
                      "Transparent pricing",
                      "Serving 10+ cities across India",
                      "100% satisfaction guarantee",
                    ].map((fact) => (
                      <li key={fact} className="flex items-center gap-2.5 text-sm text-[#f5f0eb]/50" style={{ fontFamily: inter }}>
                        <CheckCircle2 size={13} className="text-[#c9a84c] flex-shrink-0" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — Form */}
            <AnimatedSection delay={0.15} className="lg:col-span-3">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
