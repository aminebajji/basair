import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import generateEmailContent from "../../../components/email-template"







export async function POST(req: NextRequest) {
  try {
   
    const { to, subject, firstName,gender } = await req.json();
    const message = gender==="male" 
    ? ` السلام عليكم ورحمة الله وبركاته مرحبا بك اخي ${firstName} شكرًا لك  على اهتمامك بالانضمام إلى نادينا. نحن سعداء بانضمامك ونتطلع إلى التواصل معك قريبًا`
    :` السلام عليكم ورحمة الله وبركاته مرحبا بك اختي ${firstName} شكرًا لك  على اهتمامك بالانضمام إلى نادينا. نحن سعداء بانضمامك ونتطلع إلى التواصل معك قريبًا`;
    
    const mailOptions = {
      from: gender === "male" ? process.env.EMAIL_BOY_USER : process.env.EMAIL_GIRL_USER,
      to,
      subject,
      message,
      alternatives: [{
        contentType: "text/html",
        content: generateEmailContent(firstName,message),
      }]
    };

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: gender === "male" ? process.env.EMAIL_BOY_USER : process.env.EMAIL_GIRL_USER,
        pass: gender === "male" ? process.env.EMAIL_BOY_PASS : process.env.EMAIL_GIRL_PASS,
      },
    });

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
