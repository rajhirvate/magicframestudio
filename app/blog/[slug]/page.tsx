import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { readBlogPosts } from "@/lib/blog/store";

type Props = { params: Promise<{ slug: string }> };

const sans = "var(--font-sans), sans-serif";

export async function generateStaticParams() {
  const posts = await readBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = await readBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post | Magic Frame Studio" };
  return {
    title: `${post.title} | Magic Frame Studio`,
    description: post.excerpt ?? post.title,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await readBlogPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = post.content.split(/\n\n/).map((p) => p.trim()).filter(Boolean);

  return (
    <main className="min-h-screen bg-[#fafaf9] pb-24 pt-28 text-stone-900 lg:pb-32 lg:pt-32">
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="text-sm font-semibold text-[#6d563f] hover:text-[#5a4835]"
          style={{ fontFamily: sans }}
        >
          ← All posts
        </Link>

        <header className="mt-8 text-center">
          <time
            className="text-xs uppercase tracking-[0.2em] text-stone-500"
            style={{ fontFamily: sans }}
            dateTime={post.publishedAt}
          >
            {new Date(post.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="font-heading mt-4 text-3xl font-normal leading-tight text-stone-900 sm:text-4xl">
            {post.title}
          </h1>
        </header>

        <div className="relative mx-auto mt-12 aspect-[16/10] overflow-hidden rounded-lg bg-stone-200 shadow-xl shadow-stone-300/60">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover"
            priority
            quality={78}
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </div>

        {post.excerpt ? (
          <p
            className="mx-auto mt-10 max-w-2xl text-center text-[17px] leading-relaxed text-stone-600"
            style={{ fontFamily: sans }}
          >
            {post.excerpt}
          </p>
        ) : null}

        <div className="prose-blog mx-auto mt-12 max-w-2xl space-y-5 text-[16px] leading-relaxed text-stone-700">
          {paragraphs.map((chunk, i) => (
            <p key={i} style={{ fontFamily: sans }}>
              {chunk}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
