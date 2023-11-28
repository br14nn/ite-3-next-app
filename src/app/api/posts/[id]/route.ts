import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } },
) {
  console.log(params.id);

  return NextResponse.json({ ok: true });
}
