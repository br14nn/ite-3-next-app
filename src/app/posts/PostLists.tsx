import Post from "@/components/Post";

export default async function PostLists() {
  const res = await fetch("http://localhost:3000/api/posts");
  const posts: IPost[] = await res.json();

  return (
    <div className="grid h-fit w-full grid-cols-1 justify-items-center gap-4">
      {posts.map((post) => (
        <Post key={post.id} title={post.title} author={post.author}>
          {post.body}
        </Post>
      ))}
    </div>
  );
}
