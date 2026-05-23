import { cache } from "react";
import { readGalleryImageFolder } from "@/lib/gallery/readImageFolder";

/** Top-level files only — latest 6 appear in the Gallery preview section. */
export const WEDDING_PHOTOGRAPHY_GALLERY_DIR =
  "public/images/gallery/wedding-photography";

export const WEDDING_PHOTOGRAPHY_GALLERY_PUBLIC_PATH =
  "/images/gallery/wedding-photography";

export const WEDDING_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT = 6;

/** Masonry grid — all images here appear in the large gallery (Load more). */
export const WEDDING_PHOTOGRAPHY_MASONRY_DIR =
  "public/images/gallery/wedding-photography/masonry";

export const WEDDING_PHOTOGRAPHY_MASONRY_PUBLIC_PATH =
  "/images/gallery/wedding-photography/masonry";

export type WeddingGalleryImage = {
  src: string;
  alt: string;
};

async function readWeddingPhotographyGalleryPreviewUncached(): Promise<string[]> {
  const images = await readGalleryImageFolder({
    relativeDir: WEDDING_PHOTOGRAPHY_GALLERY_DIR,
    publicPath: WEDDING_PHOTOGRAPHY_GALLERY_PUBLIC_PATH,
    limit: WEDDING_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT,
  });

  return images.map((image) => image.src);
}

async function readWeddingPhotographyMasonryGalleryUncached(): Promise<
  WeddingGalleryImage[]
> {
  const images = await readGalleryImageFolder({
    relativeDir: WEDDING_PHOTOGRAPHY_MASONRY_DIR,
    publicPath: WEDDING_PHOTOGRAPHY_MASONRY_PUBLIC_PATH,
  });

  return images.map(({ src, alt }) => ({ src, alt }));
}

/** Latest wedding gallery images for the service-page preview grid (server-only). */
export const getWeddingPhotographyGalleryPreview = cache(
  readWeddingPhotographyGalleryPreviewUncached,
);

/** All wedding masonry gallery images, newest first (server-only). */
export const getWeddingPhotographyMasonryGallery = cache(
  readWeddingPhotographyMasonryGalleryUncached,
);
