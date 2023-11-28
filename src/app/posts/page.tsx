import Post from "@/components/Post";
import getPosts from "@/utils/fetch/getPosts";

export default async function PostsPage() {
  const data: IPost[] = await getPosts();

  return (
    <main className="flex min-h-screen w-full justify-center">
      <div className="grid h-fit w-full grid-cols-1 justify-items-center">
        {data.map((post) => (
          <Post key={post.id} title={post.title} author={post.author}>
            {post.body}
          </Post>
        ))}
      </div>
    </main>
  );
}
