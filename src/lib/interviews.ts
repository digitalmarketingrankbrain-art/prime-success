import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";
import { Interview } from "@/types";
import { interviewsData as seedInterviews } from "@/data/mock/interviews";

// Same pattern as careerApplications.ts: a JSON file under data/ (outside
// public/) acts as the store. Seeded once from the original mock dataset so
// existing interviews aren't lost when the admin panel takes over.
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "interviews.json");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readAll(): Promise<Interview[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Interview[];
  } catch {
    await writeAll(seedInterviews);
    return seedInterviews;
  }
}

async function writeAll(interviews: Interview[]) {
  await ensureDir();
  await fs.writeFile(DATA_FILE, JSON.stringify(interviews, null, 2), "utf-8");
}

export async function listInterviews(): Promise<Interview[]> {
  return readAll();
}

export async function getInterview(id: string): Promise<Interview | null> {
  const interviews = await readAll();
  return interviews.find((i) => i.id === id) ?? null;
}

export type InterviewInput = Omit<Interview, "id">;

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function addInterview(input: InterviewInput): Promise<Interview> {
  const interviews = await readAll();
  const record: Interview = {
    id: randomUUID(),
    ...input,
    slug: input.slug?.trim() || slugify(`${input.guestName}-${randomUUID().slice(0, 8)}`),
  };
  interviews.unshift(record);
  await writeAll(interviews);
  return record;
}

export async function updateInterview(id: string, input: InterviewInput): Promise<Interview | null> {
  const interviews = await readAll();
  const idx = interviews.findIndex((i) => i.id === id);
  if (idx === -1) return null;

  const record: Interview = { id, ...input };
  interviews[idx] = record;
  await writeAll(interviews);
  return record;
}

export async function deleteInterview(id: string): Promise<boolean> {
  const interviews = await readAll();
  const next = interviews.filter((i) => i.id !== id);
  if (next.length === interviews.length) return false;
  await writeAll(next);
  return true;
}
