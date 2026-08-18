import { NextRequest, NextResponse } from "next/server";
import { verifySessionToken, ADMIN_SESSION_COOKIE } from "@/lib/adminSession";

export async function GET(request: NextRequest) {
  const token = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  const session = token ? await verifySessionToken(token) : null;

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({ username: session.username });
}
