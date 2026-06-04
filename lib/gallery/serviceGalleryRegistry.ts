import type { MasonryImageItem } from "@/components/sections/WeddingMasonryPortfolios";
import { getCorporatePhotographyGalleryPreview, getCorporatePhotographyMasonryGallery } from "@/lib/gallery/corporatePhotographyGallery";
import { getDronePhotographyGalleryPreview, getDronePhotographyMasonryGallery } from "@/lib/gallery/dronePhotographyGallery";
import { getEventPhotographyGalleryPreview, getEventPhotographyMasonryGallery } from "@/lib/gallery/eventPhotographyGallery";
import { getFashionModelPhotographyGalleryPreview, getFashionModelPhotographyMasonryGallery } from "@/lib/gallery/fashionModelPhotographyGallery";
import { getPortraitPhotographyGalleryPreview, getPortraitPhotographyMasonryGallery } from "@/lib/gallery/portraitPhotographyGallery";
import { getProductPhotographyGalleryPreview, getProductPhotographyMasonryGallery } from "@/lib/gallery/productPhotographyGallery";
import { getRealEstatePhotographyGalleryPreview, getRealEstatePhotographyMasonryGallery } from "@/lib/gallery/realEstatePhotographyGallery";
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
    case "portrait-photography":
      return getPortraitPhotographyGalleryPreview();
    case "fashion-model-photography":
      return getFashionModelPhotographyGalleryPreview();
    case "product-photography":
      return getProductPhotographyGalleryPreview();
    case "real-estate-photography":
      return getRealEstatePhotographyGalleryPreview();
    case "drone-photography":
      return getDronePhotographyGalleryPreview();
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
    case "portrait-photography":
      return getPortraitPhotographyMasonryGallery();
    case "fashion-model-photography":
      return getFashionModelPhotographyMasonryGallery();
    case "product-photography":
      return getProductPhotographyMasonryGallery();
    case "real-estate-photography":
      return getRealEstatePhotographyMasonryGallery();
    case "drone-photography":
      return getDronePhotographyMasonryGallery();
    default:
      return undefined;
  }
}
