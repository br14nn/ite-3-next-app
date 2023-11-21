import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post Page",
  description: "Generated by create next app",
};

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
