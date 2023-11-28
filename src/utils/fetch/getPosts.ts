export default async function () {
  const res = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
    cache: "no-cache",
  });

  return await res.json();
}
