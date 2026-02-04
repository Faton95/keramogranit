import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { fullName, email, phoneNumber, city, message } =
      await request.json();

    if (!fullName || !email || !phoneNumber || !city || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "support@limitai.eu",
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Email</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Phone</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${phoneNumber}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">City</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${city}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; border: 1px solid #ddd; font-weight: bold;">Message</td>
            <td style="padding: 8px 12px; border: 1px solid #ddd;">${message}</td>
          </tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
