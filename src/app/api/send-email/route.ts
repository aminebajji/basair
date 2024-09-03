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
    const { to, subject, firstName } = await req.json();
    const message=`شكرًا لك ${firstName} على اهتمامك بالانضمام إلى نادينا. نحن سعداء بانضمامك ونتطلع إلى التواصل معك قريبًا`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      message,
      alternatives: [{
        contentType: "text/html",
        content: generateEmailContent(message),
      }]
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
