import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { Resend } from 'resend';
import Contact from '@/models/Contact';

const resend = new Resend(process.env.RESEND_API_KEY);


async function connectToDatabase() {
    if (mongoose.connection.readyState >= 1) {
        return;
    }

    return mongoose.connect(process.env.MONGODB_URI);
}

export async function POST(req) {
    try {
        await connectToDatabase();
        const data = await req.json();
        console.log(data)

        const newContact = await Contact.create(data);
        console.log(newContact)
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'datendiva.mailer@gmail.com',
            subject: `New Bitlink Contact from ${data.name}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${data.name}</p>
                <p><strong>Email:</strong> ${data.email}</p>
              
                <p><strong>Message:</strong></p>
                <p>${data.message}</p>
            `,
        });

        return NextResponse.json({ success: true, message: 'Message sent successfully!', data: newContact }, { status: 201 });
    } catch (error) {
        if (error.name === 'ValidationError') {
            let errors = {};

            for (const field in error.errors) {
                errors[field] = error.errors[field].message;
            }

            return NextResponse.json({
                success: false,
                message: "Validation failed. Please check your input.",
                errors: errors
            }, { status: 400 });
        }

        console.error(error);
        return NextResponse.json({ success: false, message: 'An internal server error occurred.' }, { status: 500 });
    }
}