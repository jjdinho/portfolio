import { getAllPoems } from "@/lib/content";
import { EntryList } from "@/components/entry-list";

export default function Poems() {
  const poems = getAllPoems();

  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Poems</h1>
      <EntryList entries={poems} />
    </section>
  );
}
