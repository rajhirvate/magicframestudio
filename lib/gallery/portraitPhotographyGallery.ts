import { cache } from "react";
import { readGalleryImageFolder } from "@/lib/gallery/readImageFolder";

/** Top-level files only — latest 6 appear in the Gallery preview section. */
export const PORTRAIT_PHOTOGRAPHY_GALLERY_DIR =
  "public/images/gallery/portrait-photography";

export const PORTRAIT_PHOTOGRAPHY_GALLERY_PUBLIC_PATH =
  "/images/gallery/portrait-photography";

export const PORTRAIT_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT = 6;

/** Masonry grid — all images here appear in the large gallery (Load more). */
export const PORTRAIT_PHOTOGRAPHY_MASONRY_DIR =
  "public/images/gallery/portrait-photography/masonry";

export const PORTRAIT_PHOTOGRAPHY_MASONRY_PUBLIC_PATH =
  "/images/gallery/portrait-photography/masonry";

export type PortraitGalleryImage = {
  src: string;
  alt: string;
};

async function readPortraitPhotographyGalleryPreviewUncached(): Promise<
  string[]
> {
  const images = await readGalleryImageFolder({
    relativeDir: PORTRAIT_PHOTOGRAPHY_GALLERY_DIR,
    publicPath: PORTRAIT_PHOTOGRAPHY_GALLERY_PUBLIC_PATH,
    limit: PORTRAIT_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT,
    altPrefix: "Portrait photography",
  });

  return images.map((image) => image.src);
}

async function readPortraitPhotographyMasonryGalleryUncached(): Promise<
  PortraitGalleryImage[]
> {
  const folderImages = await readGalleryImageFolder({
    relativeDir: PORTRAIT_PHOTOGRAPHY_MASONRY_DIR,
    publicPath: PORTRAIT_PHOTOGRAPHY_MASONRY_PUBLIC_PATH,
    altPrefix: "Portrait photography",
  });

  return folderImages.map(({ src, alt }) => ({ src, alt }));
}

/** Latest portrait gallery images for the service-page preview grid (server-only). */
export const getPortraitPhotographyGalleryPreview = cache(
  readPortraitPhotographyGalleryPreviewUncached,
);

/** Masonry folder images only — no stock photo padding (server-only). */
export const getPortraitPhotographyMasonryGallery = cache(
  readPortraitPhotographyMasonryGalleryUncached,
);
