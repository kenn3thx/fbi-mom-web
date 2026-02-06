import { sendContactConfirmationEmail, sendContactEmail } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();
    const { email, title, description, captchaToken } = body;

    const secret = process.env.NEXT_PUBLIC_SECRET_KEY;

    const verifyRes = await fetch(
        'https://www.google.com/recaptcha/api/siteverify',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${secret}&response=${captchaToken}`,
        }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
        return NextResponse.json(
            { message: 'Invalid reCAPTCHA' },
            { status: 400 }
        );
    }

    // Send email
    await sendContactEmail({ email, title, description });

    await sendContactConfirmationEmail({ email, title });

    return NextResponse.json({ success: true });
}