import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/contact-schema";
import { contactContent } from "@/data/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const body = await request.json();

    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
        return NextResponse.json(
            { error: 'Invalid form data', issues: parsed.error.flatten().fieldErrors },
            { status: 400 },
        );
    }

    const { name, email, message } = parsed.data;
    
    try {
        const { data, error } = await resend.emails.send({
            from: 'Portofolio Contact <onboarding@resend.dev>',
            to: contactContent.email,
            replyTo: email,
            subject: `New message from ${name} via portofolio website`,
            text: `From: ${name} (${email})\n\n${message}`,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
        }

        return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
    } catch (error) {
        console.error('Resend error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}