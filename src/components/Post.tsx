"use client";

import CustomButton from "./CustomButton";

interface IPostProps {
  title?: string;
  author?: string;
  children?: React.ReactNode;
}

export default function Post({ author, title, children }: IPostProps) {
  return (
    <div className="flex h-fit w-full min-w-[300px] max-w-[400px] flex-col rounded-md border border-gray-100 p-4">
      <h1 className="text-5xl font-bold">{title}</h1>
      <span className="my-4 text-lg font-semibold">by {author}</span>
      <p>{children}</p>
      <CustomButton onClick={() => console.log("Read more button was clicked")}>
        Read More
      </CustomButton>
    </div>
  );
}
