import nodemailer from 'nodemailer';
import { contactEmailTemplate, contactUserConfirmationTemplate } from './templates/contactEmailTemplate';

const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USERNAME,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
});

export async function sendContactEmail(data: {
    email: string;
    title: string;
    description: string;
}) {
    const { email, title, description } = data;

    return transporter.sendMail({
        from: `"FBI Mom" <${process.env.NEXT_PUBLIC_EMAIL_SENDER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        replyTo: email,
        subject: `[FBIMOM] ${title}`,
        html: contactEmailTemplate({ email, title, description }),
    });


}

export async function sendContactConfirmationEmail(data: {
    email: string;
    title: string;
}) {
    const { email, title } = data;

    return transporter.sendMail({
        from: `"FBI Mom" <${process.env.NEXT_PUBLIC_EMAIL_SENDER}>`,
        to: email,
        subject: `[FBIMOM] We received your message`,
        html: contactUserConfirmationTemplate({ email, title }),
    });


}
