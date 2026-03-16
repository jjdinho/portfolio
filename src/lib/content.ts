import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import breaks from "remark-breaks";
import html from "remark-html";

const contentDir = path.join(process.cwd(), "content");

export type EntryMeta = {
  slug: string;
  title: string;
  date: string;
  kind: "post" | "poem";
  excerpt?: string;
};

export type Entry = EntryMeta & {
  html: string;
};

function titleFromSlug(slug: string): string {
  const s = slug.replace(/_/g, " ");
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function getEntries(kind: "posts" | "poems"): EntryMeta[] {
  const dir = path.join(contentDir, kind);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title ?? titleFromSlug(slug),
        date: data.date ?? "",
        kind: kind === "posts" ? "post" : "poem",
        excerpt: data.excerpt,
      } satisfies EntryMeta;
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAllPosts(): EntryMeta[] {
  return getEntries("posts");
}

export function getAllPoems(): EntryMeta[] {
  return getEntries("poems");
}

export function getRecentEntries(n = 10): EntryMeta[] {
  return [...getEntries("posts"), ...getEntries("poems")]
    .sort((a, b) => (a.date > b.date ? -1 : 1))
    .slice(0, n);
}

export async function getEntry(
  kind: "posts" | "poems",
  slug: string
): Promise<Entry> {
  const raw = fs.readFileSync(
    path.join(contentDir, kind, `${slug}.md`),
    "utf-8"
  );
  const { data, content } = matter(raw);
  const processor = remark();
  if (kind === "poems") processor.use(breaks);
  const result = await processor.use(html).process(content);

  return {
    slug,
    title: data.title ?? titleFromSlug(slug),
    date: data.date ?? "",
    kind: kind === "posts" ? "post" : "poem",
    excerpt: data.excerpt,
    html: result.toString(),
  };
}

export function getAllSlugs(kind: "posts" | "poems"): string[] {
  const dir = path.join(contentDir, kind);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
