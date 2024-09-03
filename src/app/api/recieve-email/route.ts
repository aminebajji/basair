import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import generateEmailContent from "../../../components/email-template"
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});




export async function POST(req: NextRequest) {
  try {
    const {name, email, subject, message } = await req.json();

    const mailOptions = {
      to: process.env.EMAIL_USER,
      from:email,
      subject,
      message,
      alternatives: [{
        contentType: "text/html",
        content: generateEmailContent(name,message),
      }]
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
