"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { photographyServices, videographyServices } from "@/data/services";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

const allServiceOptions = [
  { label: "— Photography Services —", value: "", disabled: true },
  ...photographyServices.map((s) => ({ label: s.title, value: s.title, disabled: false })),
  { label: "— Videography Services —", value: "", disabled: true },
  ...videographyServices.map((s) => ({ label: s.title, value: s.title, disabled: false })),
  { label: "Other / Not Sure", value: "Other", disabled: false },
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  message: string;
}

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
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    location: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

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
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[500px] text-center bg-[#141414] border border-[#2a2a2a] rounded-2xl p-10">
                  <div className="w-16 h-16 rounded-full bg-[#c9a84c]/10 flex items-center justify-center mb-6">
                    <CheckCircle2 size={30} className="text-[#c9a84c]" />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#f5f0eb] mb-3" style={{ fontFamily: poppins }}>
                    Message Sent!
                  </h3>
                  <p className="text-sm text-[#f5f0eb]/50 max-w-sm leading-relaxed mb-8" style={{ fontFamily: inter }}>
                    Thank you for reaching out. Our team will review your enquiry and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", phone: "", email: "", location: "", service: "", message: "" });
                    }}
                    className="text-sm text-[#c9a84c] hover:underline"
                    style={{ fontFamily: poppins }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-7 sm:p-8 space-y-5">
                  <h2 className="text-xl font-semibold text-[#f5f0eb] mb-1" style={{ fontFamily: poppins }}>
                    Send Us a Message
                  </h2>
                  <p className="text-sm text-[#f5f0eb]/35 mb-4" style={{ fontFamily: inter }}>
                    Fill in the details below and we&apos;ll craft a custom quote for you.
                  </p>

                  {/* Row 1: Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Your Name *" name="name" type="text" placeholder="Raj Sharma" value={form.name} onChange={handleChange} required />
                    <Field label="Phone Number *" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
                  </div>

                  {/* Row 2: Email + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Email Address *" name="email" type="email" placeholder="raj@example.com" value={form.email} onChange={handleChange} required />
                    <Field label="Your City / Location *" name="location" type="text" placeholder="e.g. Delhi, Mumbai, Bangalore" value={form.location} onChange={handleChange} required />
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.15em] text-[#f5f0eb]/35 uppercase mb-2" style={{ fontFamily: poppins }}>
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#f5f0eb] focus:outline-none focus:border-[#c9a84c]/50 transition-colors appearance-none cursor-pointer"
                      style={{ fontFamily: inter }}
                    >
                      <option value="" disabled>Select a service...</option>
                      {allServiceOptions.map((opt, i) =>
                        opt.disabled ? (
                          <option key={i} disabled>{opt.label}</option>
                        ) : (
                          <option key={i} value={opt.value}>{opt.label}</option>
                        )
                      )}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.15em] text-[#f5f0eb]/35 uppercase mb-2" style={{ fontFamily: poppins }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your project, event date, and any special requirements..."
                      className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#f5f0eb] placeholder-[#f5f0eb]/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
                      style={{ fontFamily: inter }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 text-sm font-semibold text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] disabled:opacity-60 rounded-xl transition-colors duration-200"
                    style={{ fontFamily: poppins }}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs text-[#f5f0eb]/20 text-center" style={{ fontFamily: inter }}>
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label, name, type, placeholder, value, onChange, required,
}: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label
        className="block text-[10px] font-semibold tracking-[0.15em] text-[#f5f0eb]/35 uppercase mb-2"
        style={{ fontFamily: "var(--font-poppins), sans-serif" }}
      >
        {label}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-xl px-4 py-3 text-sm text-[#f5f0eb] placeholder-[#f5f0eb]/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      />
    </div>
  );
}
