"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const POPPINS =
  'var(--font-poppins), ui-sans-serif, system-ui, sans-serif';

export type SectionHeadingProps = {
  /** Uppercase label above the title (e.g. WHAT WE DO). Omit to hide. */
  eyebrow?: string;
  title: ReactNode;
  id?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
};

/**
 * Section title: gold eyebrow + stone title. Main `/` uses normal weight + uppercase
 * to match `.mfs-home-title`; other routes use compact extrabold scale.
 */
export function SectionHeading({
  eyebrow,
  title,
  id,
  theme = "light",
  align = "left",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const pathname = usePathname();
  /** Only `/` uses the larger pre–hero-4 editorial scale; all other routes keep the compact scale. */
  const useCompactScale = pathname !== "/";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-0",
        align === "center" && "items-center text-center",
        className,
      )}
      style={{ fontFamily: POPPINS }}
    >
      {eyebrow ? (
        <p
          className={
            useCompactScale
              ? "text-xs font-semibold uppercase tracking-[0.1em] text-[var(--gold)] sm:tracking-[0.12em]"
              : "text-sm font-semibold uppercase tracking-[0.12em] text-[var(--gold)] sm:tracking-[0.14em]"
          }
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          useCompactScale
            ? "max-w-[22rem] font-extrabold tracking-tight text-balance text-stone-800 sm:max-w-3xl md:max-w-4xl lg:max-w-[min(40rem,92vw)]"
            : "max-w-[22rem] font-normal leading-[1.08] text-balance text-stone-900 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl",
          Tag === "h3"
            ? cn(
                "text-lg sm:text-xl lg:text-2xl leading-[1.15]",
                !useCompactScale && "uppercase tracking-[0.02em] sm:tracking-[0.025em]",
              )
            : cn(
                useCompactScale
                  ? "text-[1.5rem] sm:text-[2.0625rem] leading-[1.06]"
                  : "text-[1.75rem] sm:text-4xl lg:text-[2.65rem] xl:text-5xl",
                !useCompactScale &&
                  "uppercase tracking-[0.02em] sm:tracking-[0.025em]",
              ),
          isDark && "text-white",
          eyebrow && (Tag === "h3" ? "mt-1" : "mt-1.5 sm:mt-2"),
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
