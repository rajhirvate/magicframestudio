import { readFile, writeFile } from "fs/promises";
import path from "path";
import { cache } from "react";
import type { BlogPost } from "./types";

const POSTS_REL = ["content", "blog", "posts.json"] as const;

function postsFilePath(): string {
  return path.join(process.cwd(), ...POSTS_REL);
}

async function parsePosts(raw: string): Promise<BlogPost[]> {
  const data = JSON.parse(raw) as unknown;
  if (!Array.isArray(data)) {
    throw new Error("posts.json must contain an array");
  }
  return data as BlogPost[];
}

/** Always reads fresh from disk (use before writes and in admin). */
export async function readBlogPostsUncached(): Promise<BlogPost[]> {
  try {
    const raw = await readFile(postsFilePath(), "utf-8");
    const posts = await parsePosts(raw);
    return [...posts].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
  } catch (err) {
    const code =
      typeof err === "object" && err !== null && "code" in err
        ? String((err as NodeJS.ErrnoException).code)
        : "";
    if (code !== "ENOENT") {
      console.error("[blog] readBlogPostsUncached:", err);
    }
    return [];
  }
}

/** Dedupes reads within one render. `unstable_cache` caused dev servers (Next 16.2) to hang with no HTTP response. */
export const readBlogPosts = cache(readBlogPostsUncached);

export async function writeBlogPosts(posts: BlogPost[]): Promise<void> {
  await writeFile(
    postsFilePath(),
    `${JSON.stringify(posts, null, 2)}\n`,
    "utf-8",
  );
}

export function assertValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}
