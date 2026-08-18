import { NextResponse } from "next/server";
import { listApplications } from "@/lib/careerApplications";

// Protected by middleware.ts (requires a valid admin_session JWT cookie).
export async function GET() {
  const applications = await listApplications();
  return NextResponse.json({ applications });
}
