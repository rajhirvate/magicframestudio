import { cache } from "react";
import { readGalleryImageFolder } from "@/lib/gallery/readImageFolder";

/** Top-level files only — latest 6 appear in the Gallery preview section. */
export const PRODUCT_PHOTOGRAPHY_GALLERY_DIR =
  "public/images/gallery/product-photography";

export const PRODUCT_PHOTOGRAPHY_GALLERY_PUBLIC_PATH =
  "/images/gallery/product-photography";

export const PRODUCT_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT = 6;

/** Masonry grid — all images here appear in the large gallery (Load more). */
export const PRODUCT_PHOTOGRAPHY_MASONRY_DIR =
  "public/images/gallery/product-photography/masonry";

export const PRODUCT_PHOTOGRAPHY_MASONRY_PUBLIC_PATH =
  "/images/gallery/product-photography/masonry";

export type ProductGalleryImage = {
  src: string;
  alt: string;
};

async function readProductPhotographyGalleryPreviewUncached(): Promise<
  string[]
> {
  const images = await readGalleryImageFolder({
    relativeDir: PRODUCT_PHOTOGRAPHY_GALLERY_DIR,
    publicPath: PRODUCT_PHOTOGRAPHY_GALLERY_PUBLIC_PATH,
    limit: PRODUCT_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT,
    altPrefix: "Product photography",
  });

  return images.map((image) => image.src);
}

async function readProductPhotographyMasonryGalleryUncached(): Promise<
  ProductGalleryImage[]
> {
  const folderImages = await readGalleryImageFolder({
    relativeDir: PRODUCT_PHOTOGRAPHY_MASONRY_DIR,
    publicPath: PRODUCT_PHOTOGRAPHY_MASONRY_PUBLIC_PATH,
    altPrefix: "Product photography",
  });

  return folderImages.map(({ src, alt }) => ({ src, alt }));
}

/** Latest product gallery images for the service-page preview grid (server-only). */
export const getProductPhotographyGalleryPreview = cache(
  readProductPhotographyGalleryPreviewUncached,
);

/** Masonry folder images only — no stock photo padding (server-only). */
export const getProductPhotographyMasonryGallery = cache(
  readProductPhotographyMasonryGalleryUncached,
);
