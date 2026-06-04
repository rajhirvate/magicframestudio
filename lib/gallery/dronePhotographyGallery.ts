import { cache } from "react";
import { readGalleryImageFolder } from "@/lib/gallery/readImageFolder";

/** Top-level files only — latest 6 appear in the Gallery preview section. */
export const DRONE_PHOTOGRAPHY_GALLERY_DIR =
  "public/images/gallery/drone-photography";

export const DRONE_PHOTOGRAPHY_GALLERY_PUBLIC_PATH =
  "/images/gallery/drone-photography";

export const DRONE_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT = 6;

/** Masonry grid — all images here appear in the large gallery (Load more). */
export const DRONE_PHOTOGRAPHY_MASONRY_DIR =
  "public/images/gallery/drone-photography/masonry";

export const DRONE_PHOTOGRAPHY_MASONRY_PUBLIC_PATH =
  "/images/gallery/drone-photography/masonry";

export type DroneGalleryImage = {
  src: string;
  alt: string;
};

async function readDronePhotographyGalleryPreviewUncached(): Promise<
  string[]
> {
  const images = await readGalleryImageFolder({
    relativeDir: DRONE_PHOTOGRAPHY_GALLERY_DIR,
    publicPath: DRONE_PHOTOGRAPHY_GALLERY_PUBLIC_PATH,
    limit: DRONE_PHOTOGRAPHY_GALLERY_PREVIEW_LIMIT,
    altPrefix: "Drone photography",
  });

  return images.map((image) => image.src);
}

async function readDronePhotographyMasonryGalleryUncached(): Promise<
  DroneGalleryImage[]
> {
  const folderImages = await readGalleryImageFolder({
    relativeDir: DRONE_PHOTOGRAPHY_MASONRY_DIR,
    publicPath: DRONE_PHOTOGRAPHY_MASONRY_PUBLIC_PATH,
    altPrefix: "Drone photography",
  });

  return folderImages.map(({ src, alt }) => ({ src, alt }));
}

/** Latest drone gallery images for the service-page preview grid (server-only). */
export const getDronePhotographyGalleryPreview = cache(
  readDronePhotographyGalleryPreviewUncached,
);

/** Masonry folder images only — no stock photo padding (server-only). */
export const getDronePhotographyMasonryGallery = cache(
  readDronePhotographyMasonryGalleryUncached,
);
