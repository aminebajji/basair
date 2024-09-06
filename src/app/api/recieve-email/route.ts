import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import generateEmailContent from "../../../components/email-template"


export async function POST(req: NextRequest) {
  try {
    const {name, email, subject, message ,gender} = await req.json();
    const  isSender=false;// overide default value of button, just for show or not show the button (visite our site) in the message
    const Message= `${message} ${gender==="male" ? 'male':'femle'}`
    const mailOptions = {
      to: gender === "male" ? process.env.EMAIL_BOY_USER : process.env.EMAIL_GIRL_USER,
      from: email,
      subject,
      message:Message,
      alternatives: [{
        contentType: "text/html",
        content: generateEmailContent(name,Message,isSender),
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
