/** Routes that use the editorial Hero3 homepage layout & light nav chrome. */
export const EDITORIAL_HOME_PATHS = new Set(["/", "/hero3", "/hero4"]);

export function isEditorialHeroHome(pathname: string | null): boolean {
  if (!pathname) return false;
  return EDITORIAL_HOME_PATHS.has(pathname);
}

/** Typography/spacing experiments scoped to `/hero4` only; `/` keeps the main editorial look. */
export function isHero4Path(pathname: string | null): boolean {
  return pathname === "/hero4";
}
