import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateContactForm, escapeHtml } from "@/lib/validation";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "alishafaqat4473@gmail.com";

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please try again later." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    const { valid, errors } = validateContactForm({ name, email, message });
    if (!valid) {
      return NextResponse.json(
        { error: "Validation failed", errors },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Portfolio Contact <onboarding@resend.dev>";

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #111; border-bottom: 2px solid #e5e5e5; padding-bottom: 12px; margin-bottom: 24px;">
            New Portfolio Message
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 80px;"><strong>Name</strong></td>
              <td style="padding: 8px 0; color: #111;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;"><strong>Email</strong></td>
              <td style="padding: 8px 0; color: #111;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
          </table>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0 0 8px; color: #666; font-size: 14px;"><strong>Message</strong></p>
            <p style="margin: 0; color: #111; line-height: 1.6;">${safeMessage}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
