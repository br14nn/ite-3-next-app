import { NextRequest, NextResponse } from "next/server";
import posts from "@/utils/posts";

export async function GET(req: NextRequest) {
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  return NextResponse.json({
    data: data,
    ok: true,
  });
}
