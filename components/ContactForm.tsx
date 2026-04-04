"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
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

function Field({
  label, name, type, placeholder, value, onChange, required,
}: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
  return (
    <div>
      <label
        className="block text-[9px] font-semibold tracking-[0.15em] text-[#f5f0eb]/30 uppercase mb-1.5"
        style={{ fontFamily: poppins }}
      >
        {label}
      </label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        placeholder={placeholder} required={required}
        className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg px-3.5 py-2 text-sm text-[#f5f0eb] placeholder-[#f5f0eb]/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors"
        style={{ fontFamily: inter }}
      />
    </div>
  );
}

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [form, setForm] = useState<FormState>({
    name: "", phone: "", email: "", location: "",
    service: defaultService,
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

  if (submitted) {
    return (
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
            setForm({ name: "", phone: "", email: "", location: "", service: defaultService, message: "" });
          }}
          className="text-sm text-[#c9a84c] hover:underline"
          style={{ fontFamily: poppins }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#141414] border border-[#2a2a2a] rounded-2xl p-5 sm:p-6 space-y-3">
      <div className="mb-1">
        <h2 className="text-base font-semibold text-[#f5f0eb]" style={{ fontFamily: poppins }}>
          Send Us a Message
        </h2>
        <p className="text-xs text-[#f5f0eb]/30 mt-0.5" style={{ fontFamily: inter }}>
          We&apos;ll get back with a custom quote within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Name *" name="name" type="text" placeholder="Raj Sharma" value={form.name} onChange={handleChange} required />
        <Field label="Phone *" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} required />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Field label="Email *" name="email" type="email" placeholder="raj@example.com" value={form.email} onChange={handleChange} required />
        <Field label="City *" name="location" type="text" placeholder="Delhi, Mumbai…" value={form.location} onChange={handleChange} required />
      </div>

      <div>
        <label className="block text-[9px] font-semibold tracking-[0.15em] text-[#f5f0eb]/30 uppercase mb-1.5" style={{ fontFamily: poppins }}>
          Service *
        </label>
        <select
          name="service"
          value={form.service}
          onChange={handleChange}
          required
          className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg px-3.5 py-2 text-sm text-[#f5f0eb] focus:outline-none focus:border-[#c9a84c]/50 transition-colors appearance-none cursor-pointer"
          style={{ fontFamily: inter }}
        >
          <option value="" disabled>Select a service…</option>
          {allServiceOptions.map((opt, i) =>
            opt.disabled ? (
              <option key={i} disabled>{opt.label}</option>
            ) : (
              <option key={i} value={opt.value}>{opt.label}</option>
            )
          )}
        </select>
      </div>

      <div>
        <label className="block text-[9px] font-semibold tracking-[0.15em] text-[#f5f0eb]/30 uppercase mb-1.5" style={{ fontFamily: poppins }}>
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Event date, location, special requirements…"
          className="w-full bg-[#0d0d0d] border border-[#2a2a2a] rounded-lg px-3.5 py-2 text-sm text-[#f5f0eb] placeholder-[#f5f0eb]/20 focus:outline-none focus:border-[#c9a84c]/50 transition-colors resize-none"
          style={{ fontFamily: inter }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 text-sm font-semibold text-[#0a0a0a] bg-[#c9a84c] hover:bg-[#e0c068] disabled:opacity-60 rounded-lg transition-colors duration-200"
        style={{ fontFamily: poppins }}
      >
        {loading ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
