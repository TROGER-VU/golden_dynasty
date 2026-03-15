import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, whatsapp, email, message } = await req.json();

    if (!firstName || !lastName || !whatsapp || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Golden Dynasty Website" <${process.env.EMAIL_USER}>`,
      to: "hr@thegoldendynasty.com",
      replyTo: email,
      subject: `New Contact Form Message — ${firstName} ${lastName}`,
      html: `
      <div style="font-family: Arial, sans-serif; padding:20px">
        <h2>New Contact Request</h2>
        
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>

        <h3>Message</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>

        <hr/>

        <p style="font-size:12px;color:gray">
        Sent from Golden Dynasty website contact form
        </p>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}