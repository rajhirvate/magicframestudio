import type { ReactNode } from "react";
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
 * Standard section title: small uppercase brand-gold eyebrow + large extrabold stone title (Poppins).
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
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--gold)] sm:tracking-[0.14em]">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        id={id}
        className={cn(
          "max-w-[22rem] font-extrabold leading-[1.08] tracking-tight text-balance text-stone-800 sm:max-w-3xl md:max-w-4xl lg:max-w-5xl",
          Tag === "h3"
            ? "text-lg sm:text-xl lg:text-2xl"
            : "text-[1.75rem] sm:text-4xl lg:text-[2.65rem] xl:text-5xl",
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
