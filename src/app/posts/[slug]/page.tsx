import { getEntry, getAllSlugs } from "@/lib/content";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs("posts").map((slug) => ({ slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = await getEntry("posts", slug);

  return (
    <article>
      <header className="mb-8">
        <Link
          href="/posts"
          className="text-muted text-sm hover:text-fg transition-colors"
        >
          &larr; Posts
        </Link>
        <h1 className="text-2xl font-bold tracking-tight mt-4">
          {entry.title}
        </h1>
        {entry.date && (
          <time className="text-muted text-sm mt-1 block">
            {new Date(entry.date + "T00:00:00").toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>
      <div
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: entry.html }}
      />
    </article>
  );
}
