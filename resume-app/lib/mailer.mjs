'use server'
import nodemailer from 'nodemailer';

export async function sendMail(message) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: 'New Resume',
    text: `Presigned URL of the resume: ${message}`,
  };

  try {
    await transporter.sendMail(mailData);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error sending email' };
  }
}
