import "server-only";
import { readdir, stat } from "fs/promises";
import path from "path";

export const GALLERY_IMAGE_EXTENSIONS = new Set([
  ".webp",
  ".jpg",
  ".jpeg",
  ".png",
  ".avif",
]);

export type GalleryImageRecord = {
  src: string;
  alt: string;
  mtimeMs: number;
};

function altFromFilename(name: string, prefix = "Gallery"): string {
  const base = path.basename(name, path.extname(name));
  const label = base
    .replace(/^[\d._-]+/, "")
    .replace(/[-_]+/g, " ")
    .trim();

  if (!label) return prefix;
  return `${prefix} — ${label.charAt(0).toUpperCase()}${label.slice(1)}`;
}

export async function readGalleryImageFolder(options: {
  relativeDir: string;
  publicPath: string;
  limit?: number;
  altPrefix?: string;
}): Promise<GalleryImageRecord[]> {
  const absoluteDir = path.join(process.cwd(), options.relativeDir);

  let entries: string[];
  try {
    entries = await readdir(absoluteDir);
  } catch {
    return [];
  }

  const files = await Promise.all(
    entries
      .filter(
        (name) =>
          !name.startsWith(".") &&
          GALLERY_IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()),
      )
      .map(async (name): Promise<GalleryImageRecord | null> => {
        const filePath = path.join(absoluteDir, name);
        const info = await stat(filePath);
        if (!info.isFile()) return null;

        return {
          src: `${options.publicPath}/${encodeURIComponent(name)}`,
          alt: altFromFilename(name, options.altPrefix ?? "Gallery"),
          mtimeMs: info.mtimeMs,
        };
      }),
  );

  const sorted = files
    .filter((item): item is GalleryImageRecord => item !== null)
    .sort((a, b) => b.mtimeMs - a.mtimeMs);

  if (options.limit !== undefined) {
    return sorted.slice(0, options.limit);
  }

  return sorted;
}
