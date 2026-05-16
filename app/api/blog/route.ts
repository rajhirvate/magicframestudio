import { NextResponse } from "next/server";
import { readBlogPosts } from "@/lib/blog/store";

/** Public JSON list for integrations; UI reads from filesystem in Server Components. */
export async function GET() {
  try {
    const posts = await readBlogPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json(
      { error: "Blog source unavailable." },
      { status: 500 },
    );
  }
}
