import { getRecentEntries } from "@/lib/content";
import { EntryList } from "@/components/entry-list";

export default function Home() {
  const entries = getRecentEntries();

  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Recent</h1>
      <EntryList entries={entries} />
    </section>
  );
}
