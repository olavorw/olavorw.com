import { FormData } from '@/components/ContactForm';

export async function sendEmail(data: FormData): Promise<boolean> {
    const apiEndpoint = '/api/email';

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const result = await response.json();
            console.log(result.message);
            return true;
        } else {
            console.log('Failed to send email');
            return false;
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

