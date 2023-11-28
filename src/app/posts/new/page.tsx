"use client";

import { useState } from "react";

export default function PostNewPage() {
  const [form, setForm] = useState<{
    title: string;
    author: string;
    body: string;
  }>({
    title: "",
    author: "",
    body: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.currentTarget;

    setForm((oldVal) => ({
      ...oldVal,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-12 p-24">
      <h1 className="text-3xl font-bold text-white">Create New Post</h1>

      <form
        className="flex w-full max-w-[500px] flex-col gap-4 text-black"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="title">
            Title
          </label>
          <input
            className="px-2 py-1"
            id="title"
            type="text"
            onChange={handleChange}
            value={form.title}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="author">
            Author
          </label>
          <input
            className="px-2 py-1"
            id="author"
            type="text"
            onChange={handleChange}
            value={form.author}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-white" htmlFor="body">
            Body
          </label>
          <textarea
            className="h-52 px-2 py-1"
            id="body"
            onChange={handleChange}
            value={form.body}
          />
        </div>
        <button className="rounded-md bg-green-800 p-2 text-white hover:bg-green-900">
          Submit
        </button>
      </form>
      {/* TITLE */}
      {/* AUTHOR */}
      {/* BODY */}
    </main>
  );
}
