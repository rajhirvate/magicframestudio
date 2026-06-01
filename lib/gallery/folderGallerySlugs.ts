/** Service slugs that use folder-backed gallery preview + masonry (safe for client components). */
export const FOLDER_GALLERY_SLUGS = [
  "wedding-photography",
  "event-photography",
  "corporate-photography",
] as const;

export type FolderGallerySlug = (typeof FOLDER_GALLERY_SLUGS)[number];

export function isFolderGallerySlug(slug: string): slug is FolderGallerySlug {
  return (FOLDER_GALLERY_SLUGS as readonly string[]).includes(slug);
}
