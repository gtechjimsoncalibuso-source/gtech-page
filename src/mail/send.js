import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendMail({ name, email, subject, message }) {
  return transporter.sendMail({
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // you receive it
    subject: subject,
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  });
}