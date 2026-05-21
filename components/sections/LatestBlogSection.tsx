import Image from "next/image";
import Link from "next/link";
import { readBlogPosts } from "@/lib/blog/store";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import { BTN_PRIMARY } from "@/lib/btn";

/** Homepage strip — latest three posts, links to `/blog` and individual stories. */
export default async function LatestBlogSection({
  hero4Variant = false,
}: {
/** `/hero4` experiments: tighter vertical padding. */
  hero4Variant?: boolean;
} = {}) {
  const posts = await readBlogPosts();
  const featured = posts.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section
      className={cn(
        "bg-white",
        hero4Variant
          ? "pt-14 pb-10 lg:pt-[4.5rem] lg:pb-12"
          : "py-14 lg:py-[4.5rem]",
      )}
      aria-labelledby="latest-blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="latest-blog-heading"
          align="center"
          title="Our latest blog post"
          className="mb-12 lg:mb-14"
        />

        <div className="mx-auto grid max-w-6xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {featured.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group grid h-full min-h-[25rem] grid-rows-[1fr_auto] overflow-hidden rounded-lg bg-white shadow-[0_10px_38px_-14px_rgba(0,0,0,0.14)] ring-1 ring-stone-200/70 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_44px_-18px_rgba(0,0,0,0.18)] sm:min-h-[27rem]"
            >
              <div className="relative min-h-0 bg-stone-100">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  quality={72}
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 42vw, 300px"
                />
              </div>
              <div className="bg-white px-6 py-12 sm:px-8 sm:py-14">
                <h3 className="mfs-home-title text-center text-[1.0625rem] font-normal leading-snug text-stone-500 transition group-hover:text-stone-600 sm:text-lg lg:text-[1.125rem]">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-14">
          <Link href="/blog" className={cn(BTN_PRIMARY, "group w-fit")}>
            Read our posts
          </Link>
        </div>
      </div>
    </section>
  );
}
