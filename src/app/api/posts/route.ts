import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const prisma = new PrismaClient();
    const data = await prisma.post.findMany();

    return NextResponse.json(data);
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
