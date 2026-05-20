"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CORAL_BTN =
  "w-full rounded-lg bg-[#f06449] py-4 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-white shadow-[0_8px_24px_-10px_rgba(240,100,73,0.55)] transition hover:bg-[#e5583d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f06449] disabled:opacity-60";

const FIELD_BASE =
  "w-full rounded-lg border border-stone-200 bg-white text-sm text-stone-900 shadow-[0_4px_14px_-6px_rgba(0,0,0,0.12)] placeholder:text-stone-400 focus:border-[#f06449]/35 focus:outline-none focus:ring-2 focus:ring-[#f06449]/15";

const CITIES = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Other",
] as const;

export default function HeroLeadForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phoneLocal, setPhoneLocal] = useState("");
  const [city, setCity] = useState<string>("Bangalore");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phoneLocal.replace(/\D/g, "").slice(0, 15);
    const phoneParam = digits.length > 0 ? `+91${digits}` : "";
    const q = new URLSearchParams();
    if (name.trim()) q.set("name", name.trim());
    if (phoneParam) q.set("phone", phoneParam);
    if (city) q.set("location", city);
    router.push(`/contact?${q.toString()}#contact-form`);
  }

  return (
    <div
      className={cn(
        "rounded-2xl border border-white/65 bg-white/90 px-8 py-10 shadow-[0_22px_48px_-28px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-10 sm:py-12",
      )}
      style={{ fontFamily: "var(--font-sans), ui-sans-serif, system-ui, sans-serif" }}
    >
      <div className="mb-7 text-center sm:mb-8">
        <h2 className="text-[1.125rem] font-bold uppercase tracking-[0.06em] text-stone-900 sm:text-xl">
          Book your shoot
        </h2>
        <p className="mt-3 text-[13px] leading-relaxed text-stone-600 sm:text-sm">
          Get a tailored consultation and quote from our photography &amp; film team.
        </p>
      </div>

      <form className="flex flex-col gap-5 sm:gap-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="hero-lead-name" className="sr-only">
            Name
          </label>
          <input
            id="hero-lead-name"
            name="name"
            autoComplete="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={cn(FIELD_BASE, "px-4 py-3.5")}
          />
        </div>

        <div>
          <label htmlFor="hero-lead-phone" className="sr-only">
            Phone number
          </label>
          <div
            className={cn(
              "flex overflow-hidden rounded-lg border border-stone-200 bg-white shadow-[0_4px_14px_-6px_rgba(0,0,0,0.12)] focus-within:border-[#f06449]/35 focus-within:ring-2 focus-within:ring-[#f06449]/15",
            )}
          >
            <span className="flex shrink-0 items-center border-r border-stone-200 bg-stone-50 px-4 py-3.5 text-sm tabular-nums text-stone-600">
              +91
            </span>
            <input
              id="hero-lead-phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              placeholder="Phone number"
              value={phoneLocal}
              onChange={(e) => setPhoneLocal(e.target.value.replace(/[^\d\s-]/g, ""))}
              required
              className="min-w-0 flex-1 border-0 bg-transparent px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-0"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="hero-lead-city" className="sr-only">
            City
          </label>
          <select
            id="hero-lead-city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={cn(FIELD_BASE, "appearance-none py-3.5 pl-4 pr-10")}
          >
            {CITIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <ChevronDown
            aria-hidden
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-stone-500"
          />
        </div>

        <button type="submit" className={CORAL_BTN}>
          Book your shoot
        </button>
      </form>
    </div>
  );
}
