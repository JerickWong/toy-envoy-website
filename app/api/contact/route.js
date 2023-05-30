import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function GET(req) {
  return NextResponse.json({ message: 'Email sent successfully' });
}

export async function POST(req) {
  const { name, email, message } = await req.json();
  const { EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: EMAIL_USERNAME,
    subject: 'Toy Envoy - Item Inquiry',
    text: message,
  };

  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log('Server is ready to take our messages');
    }
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return NextResponse.json({ error: 'Error sending email' }, { status: error.status });
    } else {
      console.log('Email sent: ' + info.response);
      return NextResponse.json({ message: 'Email sent successfully' });
    }
  });
}
