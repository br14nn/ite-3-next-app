import { NextRequest, NextResponse } from "next/server";
import posts from "@/utils/posts";

export async function GET(req: NextRequest) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000)); //This line is just for testing the loading state. Remove this when using non-static data.

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ ok: false });
  }
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  return NextResponse.json({
    data: data,
    ok: true,
  });
}
