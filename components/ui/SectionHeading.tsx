"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const POPPINS =
  'var(--font-poppins), ui-sans-serif, system-ui, sans-serif';

/** Main `/` section titles — same stack as `.mfs-home-title` (Plus Jakarta from `:root`). */
const MAIN_HOME_HEADING_FONT =
  "var(--font-sans), ui-sans-serif, system-ui, sans-serif";

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
 * Section title: gold eyebrow + stone title. Main `/` uses Plus Jakarta, normal weight,
 * and uppercase to match `.mfs-home-title`; other routes use compact Poppins + extrabold.
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
      style={{
        fontFamily: useCompactScale ? POPPINS : MAIN_HOME_HEADING_FONT,
      }}
    >
      {eyebrow ? (
        <p
          className={
            useCompactScale
              ? "text-[0.6875rem] font-semibold uppercase tracking-[0.09em] text-[var(--gold)] sm:text-[0.75rem] sm:tracking-[0.1em]"
              : "text-xs font-semibold uppercase tracking-[0.1em] text-[var(--gold)] sm:tracking-[0.12em]"
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
                useCompactScale
                  ? "text-base sm:text-lg lg:text-xl leading-[1.15]"
                  : "text-sm sm:text-base lg:text-lg leading-[1.15]",
                !useCompactScale && "uppercase tracking-[0.02em] sm:tracking-[0.025em]",
              )
            : cn(
                useCompactScale
                  ? "text-[1.25rem] sm:text-[1.75rem] leading-[1.06]"
                  : "text-[1.375rem] sm:text-[1.875rem] leading-[1.08]",
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
