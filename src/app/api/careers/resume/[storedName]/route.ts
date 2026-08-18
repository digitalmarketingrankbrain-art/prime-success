import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { listApplications, resolveResumePath } from "@/lib/careerApplications";

interface RouteParams {
  params: Promise<{ storedName: string }>;
}

// Protected by middleware.ts (requires a valid admin_session JWT cookie).
export async function GET(_request: Request, { params }: RouteParams) {
  const { storedName } = await params;

  const applications = await listApplications();
  const match = applications.find((app) => app.storedResumeName === storedName);
  if (!match) {
    return NextResponse.json({ error: "Resume not found" }, { status: 404 });
  }

  try {
    const filePath = resolveResumePath(storedName);
    const buffer = await fs.readFile(filePath);
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": `attachment; filename="${match.resumeFileName.replace(/"/g, "")}"`,
      },
    });
  } catch {
    return NextResponse.json({ error: "Resume file missing" }, { status: 404 });
  }
}
