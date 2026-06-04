import { cache } from "react";
import { readGalleryImageFolder } from "@/lib/gallery/readImageFolder";

/** Top-level files only — latest 6 appear in the Gallery preview section. */
export const REAL_ESTATE_PHOTOGRAPHY_GALLERY_DIR =
  "public/images/gallery/real-estate-photography";

export const REAL_ESTATE_PHOTOGRAPHY_GALLERY_PUBLIC_PATH =
  "/images/gallery/real-estate-photography";

export const REAL_ESTATE_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT = 6;

/** Masonry grid — all images here appear in the large gallery (Load more). */
export const REAL_ESTATE_PHOTOGRAPHY_MASONRY_DIR =
  "public/images/gallery/real-estate-photography/masonry";

export const REAL_ESTATE_PHOTOGRAPHY_MASONRY_PUBLIC_PATH =
  "/images/gallery/real-estate-photography/masonry";

export type RealEstateGalleryImage = {
  src: string;
  alt: string;
};

async function readRealEstatePhotographyGalleryPreviewUncached(): Promise<
  string[]
> {
  const images = await readGalleryImageFolder({
    relativeDir: REAL_ESTATE_PHOTOGRAPHY_GALLERY_DIR,
    publicPath: REAL_ESTATE_PHOTOGRAPHY_GALLERY_PUBLIC_PATH,
    limit: REAL_ESTATE_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT,
    altPrefix: "Real estate photography",
  });

  return images.map((image) => image.src);
}

async function readRealEstatePhotographyMasonryGalleryUncached(): Promise<
  RealEstateGalleryImage[]
> {
  const folderImages = await readGalleryImageFolder({
    relativeDir: REAL_ESTATE_PHOTOGRAPHY_MASONRY_DIR,
    publicPath: REAL_ESTATE_PHOTOGRAPHY_MASONRY_PUBLIC_PATH,
    altPrefix: "Real estate photography",
  });

  return folderImages.map(({ src, alt }) => ({ src, alt }));
}

/** Latest real estate gallery images for the service-page preview grid (server-only). */
export const getRealEstatePhotographyGalleryPreview = cache(
  readRealEstatePhotographyGalleryPreviewUncached,
);

/** Masonry folder images only — no stock photo padding (server-only). */
export const getRealEstatePhotographyMasonryGallery = cache(
  readRealEstatePhotographyMasonryGalleryUncached,
);
