import connectDB from '@/lib/db';
import { sendEmail } from '@/lib/sendEmail';
import modelContact from '@/models/model.contact';

export async function POST(req) {
    try {
        await connectDB();

        const body = await req.json();
        const { name, phone, city, concern, whatsappOptIn } = body;

        if (!name || !phone || !city || !concern) {
            return new Response(JSON.stringify({ message: 'All required fields must be filled' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const contactEntry = await modelContact.create({
            name,
            phone,
            city,
            concern,
            whatsappOptIn,
        });

        await sendEmail({ name, phone, city, concern, whatsappOptIn });

        return new Response(JSON.stringify({ message: 'Form submitted successfully', data: contactEntry }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error submitting form:', error);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
