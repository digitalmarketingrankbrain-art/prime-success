import { NextResponse } from "next/server";
import { listInterviews } from "@/lib/interviews";

// Public read endpoint — the /interviews page and homepage broadcasts fetch
// from here so admin edits show up on the live site immediately.
export async function GET() {
  const interviews = await listInterviews();
  return NextResponse.json({ interviews });
}
