import { Suspense } from "react";
import Loading from "../loading";
import PostLists from "./PostLists";

export default function PostsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-12 p-24">
      <h1 className="text-3xl font-bold text-white">All Posts</h1>

      <Suspense fallback={<Loading />}>
        <PostLists />
      </Suspense>
    </main>
  );
}
