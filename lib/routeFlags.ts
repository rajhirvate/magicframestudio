/** Editorial homepage layout & light nav chrome — `/hero4` only. */
export const EDITORIAL_HOME_PATHS = new Set<string>(["/hero4"]);

export function isEditorialHeroHome(pathname: string | null): boolean {
  if (!pathname) return false;
  return EDITORIAL_HOME_PATHS.has(pathname);
}

export function isHero4Page(pathname: string | null): boolean {
  return pathname === "/hero4";
}
