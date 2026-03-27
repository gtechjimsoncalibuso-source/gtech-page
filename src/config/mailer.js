import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "your@email.com",
    pass: "your-app-password",
  },
});

await transporter.sendMail({
  from: '"Your Name" <your@email.com>',
  to: "recipient@email.com",
  subject: "Hello",
  text: "Test email",
});