import { promises as fs } from "fs";
import path from "path";
import { randomUUID } from "crypto";

export interface CareerApplication {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  department: string;
  location: string;
  experience: string;
  noticePeriod: string;
  portfolioUrl: string;
  expectedCtc: string;
  message: string;
  resumeFileName: string;
  storedResumeName: string;
  submittedAt: string;
  emailSent: boolean;
}

// Kept outside `public/` so resumes are never directly web-accessible by
// guessing a URL — the only way out is the token-gated download route.
const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "career-applications.json");
const RESUME_DIR = path.join(DATA_DIR, "resumes");

async function ensureDirs() {
  await fs.mkdir(RESUME_DIR, { recursive: true });
}

async function readAll(): Promise<CareerApplication[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as CareerApplication[];
  } catch {
    return [];
  }
}

async function writeAll(applications: CareerApplication[]) {
  await ensureDirs();
  await fs.writeFile(DATA_FILE, JSON.stringify(applications, null, 2), "utf-8");
}

export async function listApplications(): Promise<CareerApplication[]> {
  const apps = await readAll();
  return apps.slice().reverse();
}

export async function saveResumeFile(file: File): Promise<string> {
  await ensureDirs();
  const ext = path.extname(file.name) || "";
  const storedName = `${randomUUID()}${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(RESUME_DIR, storedName), buffer);
  return storedName;
}

export function resolveResumePath(storedName: string): string {
  // storedName is always a UUID we generated ourselves (see saveResumeFile),
  // but resolve+verify the containing directory anyway before ever handing a
  // path to the filesystem from a request-supplied segment.
  const resolved = path.resolve(RESUME_DIR, storedName);
  if (!resolved.startsWith(path.resolve(RESUME_DIR) + path.sep)) {
    throw new Error("Invalid resume path");
  }
  return resolved;
}

export async function addApplication(input: {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  location: string;
  experience: string;
  noticePeriod: string;
  portfolioUrl: string;
  expectedCtc: string;
  message: string;
  resumeFileName: string;
  storedResumeName: string;
  emailSent: boolean;
}): Promise<CareerApplication> {
  const apps = await readAll();
  const record: CareerApplication = {
    id: randomUUID(),
    submittedAt: new Date().toISOString(),
    ...input,
  };
  apps.push(record);
  await writeAll(apps);
  return record;
}
