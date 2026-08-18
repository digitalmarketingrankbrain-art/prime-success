// Free, key-less news sourcing via Google News RSS. Results are cached in
// memory per server process and refreshed once per calendar day — lazily on
// the next request after midnight, and proactively via a self-rearming
// setTimeout so the cache is warm even if no request lands right at 00:00.

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

export interface NewsPayload {
  world: NewsItem[];
  india: NewsItem[];
  breaking: NewsItem[];
  fetchedAt: string;
}

const WORLD_FEED = "https://news.google.com/rss/headlines/section/topic/WORLD?hl=en-US&gl=US&ceid=US:en";
const INDIA_FEED = "https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en";

function decodeEntities(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function parseRss(xml: string, limit: number): NewsItem[] {
  const items: NewsItem[] = [];
  const blocks = xml.split("<item>").slice(1);

  for (const block of blocks) {
    if (items.length >= limit) break;

    const titleMatch = block.match(/<title>([\s\S]*?)<\/title>/);
    const linkMatch = block.match(/<link>([\s\S]*?)<\/link>/);
    const pubDateMatch = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    const sourceMatch = block.match(/<source[^>]*>([\s\S]*?)<\/source>/);
    if (!titleMatch || !linkMatch) continue;

    const source = sourceMatch ? decodeEntities(sourceMatch[1]) : "";
    let title = decodeEntities(titleMatch[1]);
    if (source && title.endsWith(` - ${source}`)) {
      title = title.slice(0, -(source.length + 3));
    }

    items.push({
      title,
      link: linkMatch[1].trim(),
      pubDate: pubDateMatch ? pubDateMatch[1].trim() : "",
      source,
    });
  }

  return items;
}

async function fetchFeed(url: string, limit: number): Promise<NewsItem[]> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; PrimeSuccessBot/1.0)" },
      cache: "no-store",
    });
    if (!res.ok) return [];
    return parseRss(await res.text(), limit);
  } catch {
    return [];
  }
}

async function buildPayload(): Promise<NewsPayload> {
  const [world, india] = await Promise.all([fetchFeed(WORLD_FEED, 3), fetchFeed(INDIA_FEED, 8)]);
  return {
    world: world.slice(0, 3),
    india: india.slice(0, 3),
    breaking: india.slice(0, 8),
    fetchedAt: new Date().toISOString(),
  };
}

function localDateKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
}

let cache: { dateKey: string; payload: NewsPayload } | null = null;
let pending: Promise<NewsPayload> | null = null;
let midnightTimer: ReturnType<typeof setTimeout> | null = null;

function scheduleMidnightRefresh() {
  if (midnightTimer) return;

  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 0, 0);
  const msUntilMidnight = nextMidnight.getTime() - now.getTime();

  midnightTimer = setTimeout(async () => {
    midnightTimer = null;
    cache = { dateKey: localDateKey(), payload: await buildPayload() };
    scheduleMidnightRefresh();
  }, msUntilMidnight);

  // Don't let this timer keep a serverless/CLI process alive.
  midnightTimer.unref?.();
}

export async function getNewsPayload(): Promise<NewsPayload> {
  scheduleMidnightRefresh();

  const key = localDateKey();
  if (cache && cache.dateKey === key) return cache.payload;

  // Coalesce concurrent requests that land while the cache is cold.
  if (!pending) {
    pending = buildPayload().finally(() => {
      pending = null;
    });
  }

  const payload = await pending;
  cache = { dateKey: key, payload };
  return payload;
}
