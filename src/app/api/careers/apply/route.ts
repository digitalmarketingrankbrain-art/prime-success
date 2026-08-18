import { NextRequest, NextResponse } from "next/server";
import { addApplication, saveResumeFile } from "@/lib/careerApplications";
import { sendApplicationEmails } from "@/lib/mailer";

const MAX_RESUME_BYTES = 5 * 1024 * 1024;
const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export async function POST(request: NextRequest) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form submission" }, { status: 400 });
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const department = String(formData.get("department") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const experience = String(formData.get("experience") ?? "").trim();
  const noticePeriod = String(formData.get("noticePeriod") ?? "").trim();
  const portfolioUrl = String(formData.get("portfolioUrl") ?? "").trim();
  const expectedCtc = String(formData.get("expectedCtc") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const resume = formData.get("resume");

  if (!fullName || !email || !phone || !department || !location || !experience || !noticePeriod) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!(resume instanceof File) || resume.size === 0) {
    return NextResponse.json({ error: "Resume file is required" }, { status: 400 });
  }
  if (resume.size > MAX_RESUME_BYTES) {
    return NextResponse.json({ error: "Resume exceeds the 5MB limit" }, { status: 400 });
  }
  if (resume.type && !ALLOWED_RESUME_TYPES.has(resume.type)) {
    return NextResponse.json({ error: "Resume must be a PDF or Word document" }, { status: 400 });
  }

  try {
    const storedResumeName = await saveResumeFile(resume);

    const emailResult = await sendApplicationEmails({
      fullName,
      email,
      phone,
      department,
      location,
      experience,
      noticePeriod,
      portfolioUrl,
      expectedCtc,
      message,
      resumeFileName: resume.name,
    });

    const record = await addApplication({
      fullName,
      email,
      phone,
      department,
      location,
      experience,
      noticePeriod,
      portfolioUrl,
      expectedCtc,
      message,
      resumeFileName: resume.name,
      storedResumeName,
      emailSent: emailResult.sent,
    });

    return NextResponse.json({
      success: true,
      id: record.id,
      emailSent: emailResult.sent,
      emailReason: emailResult.sent ? undefined : emailResult.reason,
    });
  } catch (err) {
    console.error("Career application submission failed:", err);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }
}
