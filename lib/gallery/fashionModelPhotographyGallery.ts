import { cache } from "react";
import { readGalleryImageFolder } from "@/lib/gallery/readImageFolder";

/** Top-level files only — latest 6 appear in the Gallery preview section. */
export const FASHION_MODEL_PHOTOGRAPHY_GALLERY_DIR =
  "public/images/gallery/fashion-model-photography";

export const FASHION_MODEL_PHOTOGRAPHY_GALLERY_PUBLIC_PATH =
  "/images/gallery/fashion-model-photography";

export const FASHION_MODEL_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT = 6;

/** Masonry grid — all images here appear in the large gallery (Load more). */
export const FASHION_MODEL_PHOTOGRAPHY_MASONRY_DIR =
  "public/images/gallery/fashion-model-photography/masonry";

export const FASHION_MODEL_PHOTOGRAPHY_MASONRY_PUBLIC_PATH =
  "/images/gallery/fashion-model-photography/masonry";

export type FashionModelGalleryImage = {
  src: string;
  alt: string;
};

async function readFashionModelPhotographyGalleryPreviewUncached(): Promise<
  string[]
> {
  const images = await readGalleryImageFolder({
    relativeDir: FASHION_MODEL_PHOTOGRAPHY_GALLERY_DIR,
    publicPath: FASHION_MODEL_PHOTOGRAPHY_GALLERY_PUBLIC_PATH,
    limit: FASHION_MODEL_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT,
    altPrefix: "Fashion photography",
  });

  return images.map((image) => image.src);
}

async function readFashionModelPhotographyMasonryGalleryUncached(): Promise<
  FashionModelGalleryImage[]
> {
  const folderImages = await readGalleryImageFolder({
    relativeDir: FASHION_MODEL_PHOTOGRAPHY_MASONRY_DIR,
    publicPath: FASHION_MODEL_PHOTOGRAPHY_MASONRY_PUBLIC_PATH,
    altPrefix: "Fashion photography",
  });

  return folderImages.map(({ src, alt }) => ({ src, alt }));
}

/** Latest fashion gallery images for the service-page preview grid (server-only). */
export const getFashionModelPhotographyGalleryPreview = cache(
  readFashionModelPhotographyGalleryPreviewUncached,
);

/** Masonry folder images only — no stock photo padding (server-only). */
export const getFashionModelPhotographyMasonryGallery = cache(
  readFashionModelPhotographyMasonryGalleryUncached,
);
