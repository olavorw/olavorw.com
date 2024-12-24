import { FormData } from '@/features/ContactForm/components';

export async function sendEmail(
  data: FormData
): Promise<{ success: boolean; message: string }> {
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
      const text = await response.text();
      result = { error: text };
    }

    if (response.ok) {
      console.log('Email sent successfully:', result.message);
      return { success: true, message: result.message };
    } else {
      console.error('Failed to send email:', result.error, result.details);
      return {
        success: false,
        message: `Error: ${result.error}. Details: ${result.details || 'No additional details'}`,
      };
    }
  } catch (err) {
    console.error('Error in sendEmail:', err);
    return {
      success: false,
      message: `Unexpected error: ${err instanceof Error ? err.message : String(err)}`,
    };
  }
}
