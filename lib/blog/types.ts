/** Blog post persisted in `content/blog/posts.json` (and maintained via `/api/admin/blog`). */

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  /** Cover image URL (`/…` under `public` or absolute `https://…`) */
  image: string;
  excerpt?: string;
  /** Body copy; paragraphs separated by `\n\n` — rendered as plain text in `<p>` tags */
  content: string;
  /** ISO timestamp — used for sort order */
  publishedAt: string;
};
