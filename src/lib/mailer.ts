import nodemailer from "nodemailer";

export interface CareerApplicationEmailInput {
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
}

// Returns null (rather than throwing) when SMTP env vars aren't configured,
// so the calling route can save the application either way and just report
// email delivery as skipped.
function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return null;

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
}

export async function sendApplicationEmails(
  application: CareerApplicationEmailInput
): Promise<{ sent: boolean; reason?: string }> {
  const transporter = getTransporter();
  if (!transporter) {
    return { sent: false, reason: "SMTP not configured (SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS)." };
  }

  const from = process.env.SMTP_FROM || process.env.SMTP_USER!;
  const hrEmail = process.env.HR_EMAIL || process.env.SMTP_USER!;

  try {
    await transporter.sendMail({
      from,
      to: hrEmail,
      replyTo: application.email,
      subject: `New Application — ${application.department} — ${application.fullName}`,
      text: [
        "New career application received.",
        "",
        `Name: ${application.fullName}`,
        `Email: ${application.email}`,
        `Phone: ${application.phone}`,
        `Department: ${application.department}`,
        `Location: ${application.location}`,
        `Experience: ${application.experience}`,
        `Notice Period: ${application.noticePeriod}`,
        `Expected CTC: ${application.expectedCtc || "(not specified)"}`,
        `LinkedIn/Portfolio: ${application.portfolioUrl || "(not provided)"}`,
        `Resume: ${application.resumeFileName}`,
        "",
        "Cover note:",
        application.message || "(none)",
      ].join("\n"),
    });

    await transporter.sendMail({
      from,
      to: application.email,
      subject: "We've received your application — Prime Success Media",
      text: [
        `Dear ${application.fullName},`,
        "",
        `Thank you for applying to the ${application.department} team at Prime Success Media.`,
        "Our HR team has received your application and will reach out if there's a fit.",
        "",
        "Warm regards,",
        "Prime Success Media HR",
      ].join("\n"),
    });

    return { sent: true };
  } catch (err) {
    console.error("sendApplicationEmails failed:", err);
    return { sent: false, reason: "Failed to send email via SMTP." };
  }
}
