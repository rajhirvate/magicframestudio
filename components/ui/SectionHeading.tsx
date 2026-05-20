"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { isHero4Path } from "@/lib/routeFlags";

const POPPINS =
  'var(--font-poppins), ui-sans-serif, system-ui, sans-serif';

/** Main `/` section titles — same stack as `.mfs-home-title` (Plus Jakarta from `:root`). */
const MAIN_HOME_HEADING_FONT =
  "var(--font-sans), ui-sans-serif, system-ui, sans-serif";

/** Main homepage (`/`) H2 — Poppins, 2.4rem, normal weight, uppercase. */
const MAIN_HOME_H2_TITLE_CLASS =
  "font-normal uppercase tracking-[0.02em] sm:tracking-[0.025em] text-[2.4rem] leading-[1.12]";

/** Matches `--secondary` / editorial CTA on the main homepage. */
const MAIN_HOME_EYEBROW_COLOR = "text-[var(--secondary)]";

export type SectionHeadingProps = {
  /** Uppercase label above the title (e.g. WHAT WE DO). Omit to hide. */
  eyebrow?: string;
  title: ReactNode;
  id?: string;
  theme?: "light" | "dark";
  align?: "left" | "center";
  as?: "h2" | "h3";
  className?: string;
  /** Extra classes on the title element (homepage-only overrides, etc.). */
  titleClassName?: string;
  /** @deprecated Main `/` H2s use Poppins automatically; only needed for one-off overrides. */
  font?: "poppins";
};

/**
 * Section title: gold eyebrow + stone title. Main `/` H2s use Poppins at 2.4rem,
 * normal weight, uppercase. Main `/` H3s use Plus Jakarta. `/hero4` uses compact
 * Poppins; other routes use the smaller compact scale.
 */
export function SectionHeading({
  eyebrow,
  title,
  id,
  theme = "light",
  align = "left",
  as: Tag = "h2",
  className,
  titleClassName,
  font: fontOverride,
}: SectionHeadingProps) {
  const pathname = usePathname();
  const isMainHome = pathname === "/";
  const isMainHomeH2 = isMainHome && Tag === "h2";
  /** Only `/` uses the larger pre–hero-4 editorial scale; all other routes keep the compact scale. */
  const useCompactScale = pathname !== "/";
  const isHero4 = isHero4Path(pathname);
  const isDark = theme === "dark";
  const headingFont =
    isMainHomeH2 || fontOverride === "poppins"
      ? POPPINS
      : useCompactScale
        ? POPPINS
        : MAIN_HOME_HEADING_FONT;

  return (
    <div
      className={cn(
        "flex flex-col gap-0",
        align === "center" && "items-center text-center",
        className,
      )}
      style={{
        fontFamily: headingFont,
      }}
    >
      {eyebrow ? (
        <p
          className={cn(
            useCompactScale
              ? isHero4
                ? "text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em]"
                : "text-[0.6875rem] font-semibold uppercase tracking-[0.09em] sm:text-[0.75rem] sm:tracking-[0.1em]"
              : "text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em]",
            isMainHome ? MAIN_HOME_EYEBROW_COLOR : "text-[var(--gold)]",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          "max-w-[22rem] text-balance sm:max-w-3xl md:max-w-4xl",
          isMainHomeH2
            ? "max-w-5xl text-stone-900"
            : useCompactScale
              ? "font-extrabold tracking-tight text-stone-800 lg:max-w-[min(40rem,92vw)]"
              : "font-medium leading-[1.08] text-stone-900 lg:max-w-5xl",
          Tag === "h3"
            ? cn(
                useCompactScale
                  ? isHero4
                    ? "text-lg sm:text-xl lg:text-2xl leading-[1.15]"
                    : "text-base sm:text-lg lg:text-xl leading-[1.15]"
                  : "text-sm sm:text-base lg:text-lg leading-[1.15]",
                isMainHome &&
                  "uppercase tracking-[0.02em] sm:tracking-[0.025em]",
              )
            : isMainHomeH2
              ? MAIN_HOME_H2_TITLE_CLASS
              : cn(
                  useCompactScale
                    ? isHero4
                      ? "text-[1.5rem] sm:text-[2.0625rem] leading-[1.06]"
                      : "text-[1.25rem] sm:text-[1.75rem] leading-[1.06]"
                    : "text-[1.375rem] sm:text-[1.875rem] leading-[1.08]",
                  !useCompactScale &&
                    "uppercase tracking-[0.02em] sm:tracking-[0.025em]",
                ),
          isDark && "text-white",
          eyebrow && (Tag === "h3" ? "mt-1" : "mt-1.5 sm:mt-2"),
          align === "center" && "mx-auto",
          titleClassName,
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
