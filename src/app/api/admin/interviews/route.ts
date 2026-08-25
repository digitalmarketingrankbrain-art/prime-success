import { NextRequest, NextResponse } from "next/server";
import { addInterview, listInterviews, type InterviewInput } from "@/lib/interviews";
import { parseYouTubeInput } from "@/lib/youtube";

// Protected by middleware.ts (requires a valid admin_session JWT cookie).
export async function GET() {
  const interviews = await listInterviews();
  return NextResponse.json({ interviews });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const title = String(body.title ?? "").trim();
  const guestName = String(body.guestName ?? "").trim();
  const guestRole = String(body.guestRole ?? "").trim();
  const organization = String(body.organization ?? "").trim();
  const duration = String(body.duration ?? "").trim();
  const publishedAt = String(body.publishedAt ?? "").trim();
  const category = String(body.category ?? "").trim();
  const summary = String(body.summary ?? "").trim();
  const videoInput = String(body.videoInput ?? "").trim();

  if (!title || !guestName || !guestRole || !organization || !duration || !publishedAt || !category || !summary || !videoInput) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const video = parseYouTubeInput(videoInput);
  if (!video) {
    return NextResponse.json({ error: "Could not parse that YouTube link — paste a full URL or the video ID." }, { status: 400 });
  }

  const titlePrefix = body.titlePrefix ? String(body.titlePrefix).trim() : undefined;
  const badgeTag = body.badgeTag?.trim()
    ? String(body.badgeTag).trim()
    : [titlePrefix, guestName, guestRole.toUpperCase(), organization].filter(Boolean).join(" ").toUpperCase();

  const input: InterviewInput = {
    slug: body.slug ? String(body.slug).trim() : "",
    title,
    guestName,
    titlePrefix,
    guestRole,
    organization,
    badgeTag,
    thumbnail: body.thumbnail?.trim() ? String(body.thumbnail).trim() : video.thumbnail,
    duration,
    publishedAt,
    category,
    videoUrl: video.embedUrl,
    summary,
    isFeatured: Boolean(body.isFeatured),
  };

  const record = await addInterview(input);
  return NextResponse.json({ interview: record }, { status: 201 });
}
