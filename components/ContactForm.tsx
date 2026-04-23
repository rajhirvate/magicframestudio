"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const poppins = "var(--font-poppins), sans-serif";
const inter = "var(--font-inter), sans-serif";

interface FormState {
  name: string;
  phone: string;
  location: string;
}

function Field({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  light = false,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  light?: boolean;
}) {
  return (
    <div>
      <label
        className={`block text-[9px] font-semibold tracking-[0.15em] uppercase mb-1.5 ${
          light ? "text-stone-500" : "text-[#f5f0eb]/30"
        }`}
        style={{ fontFamily: poppins }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full rounded-lg px-3.5 py-2 text-sm transition-colors focus:outline-none focus:border-[#c9a84c]/50 ${
          light
            ? "bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400"
            : "bg-[#0d0d0d] border border-[#2a2a2a] text-[#f5f0eb] placeholder-[#f5f0eb]/20"
        }`}
        style={{ fontFamily: inter }}
      />
    </div>
  );
}

export default function ContactForm({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  const light = variant === "light";
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className={`flex flex-col items-center justify-center h-full min-h-[500px] text-center rounded-2xl p-10 ${
          light ? "bg-white border border-stone-200" : "bg-[#141414] border border-[#2a2a2a]"
        }`}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
            light ? "bg-[#c9a84c]/15" : "bg-[#c9a84c]/10"
          }`}
        >
          <CheckCircle2 size={30} className="text-[#c9a84c]" />
        </div>
        <h3
          className={`text-2xl font-semibold mb-3 ${light ? "text-stone-900" : "text-[#f5f0eb]"}`}
          style={{ fontFamily: poppins }}
        >
          Message Sent!
        </h3>
        <p
          className={`text-sm max-w-sm leading-relaxed mb-8 ${light ? "text-stone-600" : "text-[#f5f0eb]/50"}`}
          style={{ fontFamily: inter }}
        >
          Thank you for reaching out. Our team will review your enquiry and get back to you within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", location: "" });
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
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl p-5 sm:p-6 space-y-3 ${
        light ? "bg-white border border-stone-200 shadow-md" : "bg-[#141414] border border-[#2a2a2a]"
      }`}
    >
      <div className="mb-1">
        <h2
          className={`text-base font-semibold ${light ? "text-stone-900" : "text-[#f5f0eb]"}`}
          style={{ fontFamily: poppins }}
        >
          Send Us a Message
        </h2>
        <p
          className={`text-xs mt-0.5 ${light ? "text-stone-500" : "text-[#f5f0eb]/30"}`}
          style={{ fontFamily: inter }}
        >
          We&apos;ll get back with a custom quote within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <Field
          label="Name *"
          name="name"
          type="text"
          placeholder="Raj Sharma"
          value={form.name}
          onChange={handleChange}
          required
          light={light}
        />
        <Field
          label="Phone *"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
          required
          light={light}
        />
      </div>

      <Field
        label="City *"
        name="location"
        type="text"
        placeholder="Delhi, Mumbai…"
        value={form.location}
        onChange={handleChange}
        required
        light={light}
      />

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
