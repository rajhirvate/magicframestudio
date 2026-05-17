/** Routes that use the editorial Hero3 homepage layout & light nav chrome. */
export const EDITORIAL_HOME_PATHS = new Set(["/", "/hero3", "/hero4"]);

export function isEditorialHeroHome(pathname: string | null): boolean {
  if (!pathname) return false;
  return EDITORIAL_HOME_PATHS.has(pathname);
}
