import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { readBlogPosts } from "@/lib/blog/store";

export const metadata: Metadata = {
  title: "Blog | Magic Frame Studio",
  description:
    "Stories, lessons, and behind-the-scenes notes from Magic Frame Studio.",
};

const sans = "var(--font-sans), sans-serif";

export default async function BlogIndexPage() {
  const posts = await readBlogPosts();

  return (
    <main className="min-h-screen bg-[#fafaf9] text-stone-900">
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <h1
            className="font-heading text-center text-3xl font-normal text-stone-900 sm:text-4xl lg:text-[2.5rem]"
          >
            Our Blog
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-stone-600"
            style={{ fontFamily: sans }}
          >
            Field notes from weddings, brand films, and the quiet days between
            deliverables — everything we publish lives here first.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        {posts.length === 0 ? (
          <p className="text-center text-stone-500" style={{ fontFamily: sans }}>
            New stories are brewing — check back shortly.
          </p>
        ) : (
          <ul className="grid items-stretch gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <li key={post.id} className="h-full min-h-0">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid h-full min-h-[25rem] grid-rows-[1fr_auto] overflow-hidden rounded-lg bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] ring-1 ring-stone-200/70 transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-14px_rgba(0,0,0,0.16)] sm:min-h-[27rem]"
                >
                  <div className="relative min-h-0 bg-stone-200">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      quality={72}
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 300px"
                    />
                  </div>
                  <div className="bg-white px-6 py-12 text-center sm:px-8 sm:py-14">
                    <h2 className="font-heading text-[1.0625rem] font-normal leading-snug text-stone-500 transition group-hover:text-stone-600 sm:text-lg lg:text-[1.125rem]">
                      {post.title}
                    </h2>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
