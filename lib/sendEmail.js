import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ name, phone, city, concern, whatsappOptIn }) {
    try {
        const data = await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: '📝 New Contact Form Submission',
            html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Concern:</strong> ${concern}</p>
        <p><strong>WhatsApp Opt-in:</strong> ${whatsappOptIn ? 'Yes' : 'No'}</p>
      `,
        });
        return data;
    } catch (error) {
        console.error('Email error:', error);
        throw new Error('Failed to send email');
    }
}
