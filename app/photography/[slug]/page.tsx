import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { photographyServices } from "@/data/services";
import ServicePageLayout from "@/components/sections/ServicePageLayout";
import { getWeddingPhotographyGalleryPreview, getWeddingPhotographyMasonryGallery } from "@/lib/gallery/weddingPhotographyGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

/** Re-read wedding gallery folder periodically in production. */
export const revalidate = 60;

export async function generateStaticParams() {
  return photographyServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = photographyServices.find((s) => s.slug === slug);
  if (!service) return {};

  const title = `${service.title} in India | Magic Frame Studio`;
  const description = `${service.subtitle}. Contact Magic Frame Studio for professional ${service.title.toLowerCase()} services in India.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function PhotographyServicePage({ params }: Props) {
  const { slug } = await params;
  const service = photographyServices.find((s) => s.slug === slug);

  if (!service) notFound();

  const galleryPreviewPhotos =
    service.slug === "wedding-photography"
      ? await getWeddingPhotographyGalleryPreview()
      : undefined;

  const masonryGalleryPhotos =
    service.slug === "wedding-photography"
      ? await getWeddingPhotographyMasonryGallery()
      : undefined;

  return (
    <ServicePageLayout
      title={service.title}
      subtitle={service.subtitle}
      description={
        service.description ||
        `Magic Frame Studio delivers exceptional ${service.title.toLowerCase()} services across India. Our professional team combines technical mastery with creative storytelling to craft images that truly matter. With years of experience and thousands of satisfied clients, we are India's trusted choice for ${service.title.toLowerCase()}.`
      }
      subServices={service.subServices}
      category="photography"
      slug={service.slug}
      galleryPreviewPhotos={galleryPreviewPhotos}
      masonryGalleryPhotos={masonryGalleryPhotos}
    />
  );
}
