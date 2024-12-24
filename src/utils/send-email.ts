import { FormData } from '@/features/ContactForm/components';

export async function sendEmail(data: FormData): Promise<boolean> {
  const apiEndpoint = '/api/email';

  try {
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let result;
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      result = await response.json();
    } else {
      // If the response is not JSON, treat it as text
      const text = await response.text();
      result = { error: text };
    }

    if (response.ok) {
      console.log('Email sent successfully:', result.message);
      return true;
    } else {
      console.error('Failed to send email:', result.error, result.details);
      return false;
    }
  } catch (err) {
    console.error('Error in sendEmail:', err);
    return false;
  }
}
