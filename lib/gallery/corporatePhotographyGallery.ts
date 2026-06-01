import { cache } from "react";
import { readGalleryImageFolder } from "@/lib/gallery/readImageFolder";

/** Top-level files only — latest 6 appear in the Gallery preview section. */
export const CORPORATE_PHOTOGRAPHY_GALLERY_DIR =
  "public/images/gallery/corporate-photography";

export const CORPORATE_PHOTOGRAPHY_GALLERY_PUBLIC_PATH =
  "/images/gallery/corporate-photography";

export const CORPORATE_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT = 6;

/** Masonry grid — all images here appear in the large gallery (Load more). */
export const CORPORATE_PHOTOGRAPHY_MASONRY_DIR =
  "public/images/gallery/corporate-photography/masonry";

export const CORPORATE_PHOTOGRAPHY_MASONRY_PUBLIC_PATH =
  "/images/gallery/corporate-photography/masonry";

export type CorporateGalleryImage = {
  src: string;
  alt: string;
};

async function readCorporatePhotographyGalleryPreviewUncached(): Promise<
  string[]
> {
  const images = await readGalleryImageFolder({
    relativeDir: CORPORATE_PHOTOGRAPHY_GALLERY_DIR,
    publicPath: CORPORATE_PHOTOGRAPHY_GALLERY_PUBLIC_PATH,
    limit: CORPORATE_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT,
    altPrefix: "Corporate photography",
  });

  return images.map((image) => image.src);
}

async function readCorporatePhotographyMasonryGalleryUncached(): Promise<
  CorporateGalleryImage[]
> {
  const folderImages = await readGalleryImageFolder({
    relativeDir: CORPORATE_PHOTOGRAPHY_MASONRY_DIR,
    publicPath: CORPORATE_PHOTOGRAPHY_MASONRY_PUBLIC_PATH,
    altPrefix: "Corporate photography",
  });

  return folderImages.map(({ src, alt }) => ({ src, alt }));
}

/** Latest corporate gallery images for the service-page preview grid (server-only). */
export const getCorporatePhotographyGalleryPreview = cache(
  readCorporatePhotographyGalleryPreviewUncached,
);

/** Masonry folder images only — no stock photo padding (server-only). */
export const getCorporatePhotographyMasonryGallery = cache(
  readCorporatePhotographyMasonryGalleryUncached,
);
