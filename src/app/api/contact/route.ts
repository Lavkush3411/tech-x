"use server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // Use any service you want
  auth: {
    user: process.env.EMAIL_USER, // your email address
    pass: process.env.APP_PASS, // your email password or app password
  },
});

export async function contact(data) {
  const { name, email, message } = JSON.parse(data);

  // Validate fields
  if (!name || !email || !message) {
    return {
      message: "All fields are required.",
      status: 400,
    };
  }

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO, // your email where the contact form will be sent
      subject: `New Contact Form Submission from ${name}`,
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    });

    return {
      status: 200,
      message: "Email sent successfully!",
    };
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Something went wrong. Please try again later.",
    };
  }
}
