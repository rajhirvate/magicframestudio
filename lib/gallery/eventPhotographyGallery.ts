import { cache } from "react";
import { readGalleryImageFolder } from "@/lib/gallery/readImageFolder";

/** Top-level files only — latest 6 appear in the Gallery preview section. */
export const EVENT_PHOTOGRAPHY_GALLERY_DIR =
  "public/images/gallery/event-photography";

export const EVENT_PHOTOGRAPHY_GALLERY_PUBLIC_PATH =
  "/images/gallery/event-photography";

export const EVENT_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT = 6;

/** Masonry grid — all images here appear in the large gallery (Load more). */
export const EVENT_PHOTOGRAPHY_MASONRY_DIR =
  "public/images/gallery/event-photography/masonry";

export const EVENT_PHOTOGRAPHY_MASONRY_PUBLIC_PATH =
  "/images/gallery/event-photography/masonry";

export type EventGalleryImage = {
  src: string;
  alt: string;
};

async function readEventPhotographyGalleryPreviewUncached(): Promise<string[]> {
  const images = await readGalleryImageFolder({
    relativeDir: EVENT_PHOTOGRAPHY_GALLERY_DIR,
    publicPath: EVENT_PHOTOGRAPHY_GALLERY_PUBLIC_PATH,
    limit: EVENT_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT,
    altPrefix: "Event photography",
  });

  return images.map((image) => image.src);
}

async function readEventPhotographyMasonryGalleryUncached(): Promise<
  EventGalleryImage[]
> {
  const folderImages = await readGalleryImageFolder({
    relativeDir: EVENT_PHOTOGRAPHY_MASONRY_DIR,
    publicPath: EVENT_PHOTOGRAPHY_MASONRY_PUBLIC_PATH,
    altPrefix: "Event photography",
  });

  return folderImages.map(({ src, alt }) => ({ src, alt }));
}

/** Latest event gallery images for the service-page preview grid (server-only). */
export const getEventPhotographyGalleryPreview = cache(
  readEventPhotographyGalleryPreviewUncached,
);

/** Masonry folder images only — no stock photo padding (server-only). */
export const getEventPhotographyMasonryGallery = cache(
  readEventPhotographyMasonryGalleryUncached,
);
