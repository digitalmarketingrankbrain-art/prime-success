import { NextRequest, NextResponse } from "next/server";

// Only allow proxying Google Drive file IDs we actually reference, so this
// route can't be used as an open fetch-anything proxy.
const ALLOWED_DRIVE_ID = /^[a-zA-Z0-9_-]{10,60}$/;

async function fetchDriveFile(id: string): Promise<Response> {
  const baseUrl = `https://drive.google.com/uc?export=download&id=${id}`;
  const first = await fetch(baseUrl, { redirect: "follow" });

  const contentType = first.headers.get("content-type") ?? "";
  if (contentType.includes("application/pdf") || contentType.includes("octet-stream")) {
    return first;
  }

  // Large files return an HTML "can't scan for viruses" confirmation page
  // instead of the file. Pull the confirm token out of it and retry.
  const html = await first.text();
  const confirmMatch = html.match(/confirm=([0-9A-Za-z_-]+)/);
  const cookie = first.headers.get("set-cookie") ?? "";

  if (!confirmMatch) {
    throw new Error("Could not locate download confirmation token");
  }

  const confirmedUrl = `https://drive.google.com/uc?export=download&confirm=${confirmMatch[1]}&id=${id}`;
  return fetch(confirmedUrl, {
    redirect: "follow",
    headers: cookie ? { cookie } : undefined,
  });
}

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id || !ALLOWED_DRIVE_ID.test(id)) {
    return NextResponse.json({ error: "Invalid or missing file id" }, { status: 400 });
  }

  try {
    const driveResponse = await fetchDriveFile(id);

    if (!driveResponse.ok || !driveResponse.body) {
      return NextResponse.json({ error: "Failed to fetch PDF from source" }, { status: 502 });
    }

    return new NextResponse(driveResponse.body, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch PDF" }, { status: 502 });
  }
}
