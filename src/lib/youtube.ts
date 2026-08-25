// Accepts a pasted YouTube watch/share/embed URL or a bare video ID and
// normalizes it to an embeddable URL + thumbnail, so admins can paste
// whatever link YouTube gives them without knowing the embed format.
export function parseYouTubeInput(input: string): { videoId: string; embedUrl: string; thumbnail: string } | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  let videoId: string | null = null;

  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    videoId = trimmed;
  } else {
    try {
      const url = new URL(trimmed);
      if (url.hostname.includes("youtu.be")) {
        videoId = url.pathname.slice(1).split("/")[0] || null;
      } else if (url.hostname.includes("youtube.com")) {
        if (url.pathname === "/watch") {
          videoId = url.searchParams.get("v");
        } else if (url.pathname.startsWith("/embed/")) {
          videoId = url.pathname.replace("/embed/", "").split("/")[0];
        } else if (url.pathname.startsWith("/shorts/")) {
          videoId = url.pathname.replace("/shorts/", "").split("/")[0];
        }
      }
    } catch {
      return null;
    }
  }

  if (!videoId) return null;

  return {
    videoId,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
  };
}
