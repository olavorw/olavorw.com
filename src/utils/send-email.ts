import { FormData } from '@/features/ContactForm/components';

export async function sendEmail(data: FormData): Promise<boolean> {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Email sent successfully:', result.message);
      return true;
    } else {
      console.error('Failed to send email:', result.error);
      return false;
    }
  } catch (err) {
    console.error('Error in sendEmail:', err);
    return false;
  }
}
