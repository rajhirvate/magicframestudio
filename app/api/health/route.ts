import { NextResponse } from "next/server";

/** Quick check that the dev/production server process is answering HTTP. */
export function GET() {
  return NextResponse.json({ ok: true, service: "magicframestudio" }, { status: 200 });
}
