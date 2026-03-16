import Link from "next/link";
import type { EntryMeta } from "@/lib/content";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function EntryList({ entries }: { entries: EntryMeta[] }) {
  if (entries.length === 0) {
    return <p className="text-muted text-sm">Nothing here yet.</p>;
  }

  return (
    <ul className="space-y-4">
      {entries.map((entry) => (
        <li key={`${entry.kind}-${entry.slug}`}>
          <Link
            href={`/${entry.kind === "post" ? "posts" : "poems"}/${entry.slug}`}
            className="group block"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-fg group-hover:text-teal transition-colors">
                {entry.title}
              </span>
              <span className="text-muted text-sm shrink-0">
                {formatDate(entry.date)}
              </span>
            </div>
            {entry.excerpt && (
              <p className="text-muted text-sm mt-1">{entry.excerpt}</p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
