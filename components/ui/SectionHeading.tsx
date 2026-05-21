"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { isHero4Path } from "@/lib/routeFlags";

const BODY_SANS =
  "var(--font-sans), ui-sans-serif, system-ui, sans-serif";

/** Matches service pages — compact gold label above section titles. */
const SERVICE_EYEBROW_CLASS =
  "text-[0.6875rem] sm:text-[11px] font-semibold tracking-[0.14em] sm:tracking-[0.16em] text-[#c9a84c] uppercase mb-3";

const SERVICE_H2_CLASS =
  "font-heading text-3xl sm:text-4xl font-light text-stone-900 leading-snug";

const SERVICE_H3_CLASS =
  "font-heading text-xl sm:text-2xl font-light text-stone-900 leading-snug";

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
  /** @deprecated H2s use Montserrat globally; legacy prop only affects H3 compact stacks. */
  font?: "poppins";
};

/**
 * Section title: gold eyebrow + stone title.
 * Main `/` matches service-page headings (`ServicePageLayout`).
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
  const isMainHomeH3 = isMainHome && Tag === "h3";
  /** Only `/` uses the larger pre–hero-4 editorial scale; all other routes keep the compact scale. */
  const useCompactScale = pathname !== "/";
  const isHero4 = isHero4Path(pathname);
  const isDark = theme === "dark";
  const eyebrowFontFamily = BODY_SANS;

  return (
    <div
      className={cn(
        "flex flex-col gap-0",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            isMainHome
              ? SERVICE_EYEBROW_CLASS
              : useCompactScale
                ? isHero4
                  ? "text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em]"
                  : "text-[0.6875rem] font-semibold uppercase tracking-[0.09em] sm:text-[0.75rem] sm:tracking-[0.1em]"
                : "text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.12em]",
            !isMainHome && "text-[var(--gold)]",
          )}
          style={{ fontFamily: eyebrowFontFamily }}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          "font-heading",
          !isMainHomeH2 &&
            !isMainHomeH3 &&
            "max-w-[22rem] text-balance sm:max-w-3xl md:max-w-4xl",
          isMainHomeH2
            ? SERVICE_H2_CLASS
            : isMainHomeH3
              ? SERVICE_H3_CLASS
              : useCompactScale
                ? Tag === "h3"
                  ? cn(
                      isHero4
                        ? "text-lg sm:text-xl lg:text-2xl leading-[1.15]"
                        : "text-base sm:text-lg lg:text-xl leading-[1.15]",
                      "font-bold tracking-tight text-stone-800",
                    )
                  : "font-bold tracking-tight text-stone-800 lg:max-w-[min(40rem,92vw)]"
                : Tag === "h3"
                  ? "text-sm sm:text-base lg:text-lg leading-[1.15] font-medium text-stone-900"
                  : "font-medium leading-[1.08] text-stone-900 lg:max-w-5xl",
          Tag === "h2" && !isMainHomeH2 && "text-[1.9rem] leading-[1.06]",
          isDark && "text-white",
          !isMainHome &&
            eyebrow &&
            (Tag === "h3" ? "mt-1" : "mt-1.5 sm:mt-2"),
          align === "center" && "mx-auto",
          titleClassName,
        )}
      >
        {title}
      </Tag>
    </div>
  );
}
