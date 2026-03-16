import { getAllPosts } from "@/lib/content";
import { EntryList } from "@/components/entry-list";

export default function Posts() {
  const posts = getAllPosts();

  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tight mb-8">Posts</h1>
      <EntryList entries={posts} />
    </section>
  );
}
