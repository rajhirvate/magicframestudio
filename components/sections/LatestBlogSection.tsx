import Image from "next/image";
import Link from "next/link";
import { readBlogPosts } from "@/lib/blog/store";

const sans = "var(--font-sans), sans-serif";

/** Primary “read all” CTA — warmer brown from reference layout (distinct from gold CTAs). */
const READ_POSTS_BTN =
  "inline-flex items-center justify-center rounded-md bg-[#6d563f] px-11 py-3.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-white shadow-md shadow-stone-900/10 transition hover:bg-[#5f4a34] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6d563f]";

/** Homepage strip — latest three posts, links to `/blog` and individual stories. */
export default async function LatestBlogSection() {
  const posts = await readBlogPosts();
  const featured = posts.slice(0, 3);

  if (featured.length === 0) {
    return null;
  }

  return (
    <section
      className="border-t border-stone-200 bg-white py-14 lg:py-[4.5rem]"
      aria-labelledby="latest-blog-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="latest-blog-heading"
          className="font-heading mb-12 text-center text-3xl font-normal text-stone-900 sm:text-4xl lg:mb-14 lg:text-[2.35rem]"
        >
          Our Latest Blog Post
        </h2>

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
                <h3 className="font-heading text-center text-[1.0625rem] font-normal leading-snug text-stone-500 transition group-hover:text-stone-600 sm:text-lg lg:text-[1.125rem]">
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-14">
          <Link
            href="/blog"
            className={READ_POSTS_BTN}
            style={{ fontFamily: sans }}
          >
            Read our posts
          </Link>
        </div>
      </div>
    </section>
  );
}
