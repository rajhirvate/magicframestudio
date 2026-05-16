import { NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { randomUUID } from "crypto";
import type { BlogPost } from "@/lib/blog/types";
import {
  assertValidSlug,
  readBlogPostsUncached,
  writeBlogPosts,
} from "@/lib/blog/store";

/**
 * Creates a published post (prepend = newest).
 *
 * Auth: header `Authorization: Bearer <ADMIN_BLOG_SECRET>`
 * Env: `ADMIN_BLOG_SECRET` — set in `.env.local` before calling.
 *
 * Body JSON: `{ slug, title, image, excerpt?, content }`
 *
 * Persistence: writes `content/blog/posts.json`. Fine for local / Node hosts
 * with a writable filesystem. Typical serverless (e.g. Vercel) cannot persist
 * repo files at runtime — deploy an edit to JSON, or swap this for a database/CMS.
 */

type CreateBody = {
  slug?: string;
  title?: string;
  image?: string;
  excerpt?: string;
  content?: string;
  publishedAt?: string;
};

function unauthorized() {
  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export async function POST(request: Request) {
  const secret = process.env.ADMIN_BLOG_SECRET;
  if (!secret?.trim()) {
    return NextResponse.json(
      {
        error:
          "ADMIN_BLOG_SECRET is not configured. Add it to the environment first.",
      },
      { status: 503 },
    );
  }

  const auth = request.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7).trim() : "";
  if (token !== secret) return unauthorized();

  let body: CreateBody;
  try {
    body = (await request.json()) as CreateBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const slug = typeof body.slug === "string" ? body.slug.trim() : "";
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const image = typeof body.image === "string" ? body.image.trim() : "";
  const content =
    typeof body.content === "string" ? body.content.trim() : "";

  if (!slug || !title || !image || !content) {
    return NextResponse.json(
      { error: "slug, title, image, and content are required" },
      { status: 400 },
    );
  }

  if (!assertValidSlug(slug)) {
    return NextResponse.json(
      {
        error:
          "slug must be lowercase letters, numbers, and hyphens only (e.g. my-new-story)",
      },
      { status: 400 },
    );
  }

  const excerpt =
    typeof body.excerpt === "string" ? body.excerpt.trim() : undefined;

  let publishedAt: string;
  if (typeof body.publishedAt === "string" && body.publishedAt.trim()) {
    const d = new Date(body.publishedAt);
    if (Number.isNaN(d.getTime())) {
      return NextResponse.json({ error: "publishedAt must be ISO date" }, { status: 400 });
    }
    publishedAt = d.toISOString();
  } else {
    publishedAt = new Date().toISOString();
  }

  const existing = await readBlogPostsUncached();
  if (existing.some((p) => p.slug === slug)) {
    return NextResponse.json(
      { error: `Slug already exists: ${slug}` },
      { status: 409 },
    );
  }

  const post: BlogPost = {
    id: randomUUID(),
    slug,
    title,
    image,
    ...(excerpt ? { excerpt } : {}),
    content,
    publishedAt,
  };

  const nextPosts = [post, ...existing];
  await writeBlogPosts(nextPosts);

  revalidatePath("/");
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidateTag("blog-posts");

  return NextResponse.json({ ok: true, post }, { status: 201 });
}
