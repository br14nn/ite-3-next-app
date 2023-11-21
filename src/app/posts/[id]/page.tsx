export default function PostsIdPage({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen w-full flex-row justify-center">
      post id of {params.id}
    </main>
  );
}
