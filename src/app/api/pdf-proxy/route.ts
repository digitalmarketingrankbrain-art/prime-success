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

  // Files too large to virus-scan return an HTML warning page with a
  // "Download anyway" form instead of the file. The confirmation is now
  // carried in that form's hidden inputs (confirm + a per-request uuid),
  // not as a bare "confirm=" token in the page text.
  const html = await first.text();
  const cookie = first.headers.get("set-cookie") ?? "";

  const confirmValue = html.match(/name="confirm"\s+value="([^"]*)"/)?.[1];
  const uuidValue = html.match(/name="uuid"\s+value="([^"]*)"/)?.[1];

  if (!confirmValue || !uuidValue) {
    throw new Error("Could not locate download confirmation token");
  }

  const confirmedUrl = `https://drive.usercontent.google.com/download?id=${id}&export=download&confirm=${confirmValue}&uuid=${uuidValue}`;
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
