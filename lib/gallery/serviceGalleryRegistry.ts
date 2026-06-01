import type { MasonryImageItem } from "@/components/sections/WeddingMasonryPortfolios";
import { getCorporatePhotographyGalleryPreview, getCorporatePhotographyMasonryGallery } from "@/lib/gallery/corporatePhotographyGallery";
import { getEventPhotographyGalleryPreview, getEventPhotographyMasonryGallery } from "@/lib/gallery/eventPhotographyGallery";
import { getWeddingPhotographyGalleryPreview, getWeddingPhotographyMasonryGallery } from "@/lib/gallery/weddingPhotographyGallery";

export { FOLDER_GALLERY_SLUGS, isFolderGallerySlug } from "@/lib/gallery/folderGallerySlugs";
export type { FolderGallerySlug } from "@/lib/gallery/folderGallerySlugs";

export async function getServiceGalleryPreview(
  slug: string,
): Promise<string[] | undefined> {
  switch (slug) {
    case "wedding-photography":
      return getWeddingPhotographyGalleryPreview();
    case "event-photography":
      return getEventPhotographyGalleryPreview();
    case "corporate-photography":
      return getCorporatePhotographyGalleryPreview();
    default:
      return undefined;
  }
}

export async function getServiceMasonryGallery(
  slug: string,
): Promise<MasonryImageItem[] | undefined> {
  switch (slug) {
    case "wedding-photography":
      return getWeddingPhotographyMasonryGallery();
    case "event-photography":
      return getEventPhotographyMasonryGallery();
    case "corporate-photography":
      return getCorporatePhotographyMasonryGallery();
    default:
      return undefined;
  }
}
