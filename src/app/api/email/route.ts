import { NextRequest } from 'next/server';

export const runtime = 'edge';

// Define proper types for our response structure
type SuccessResponse = {
  message: string;
};

type ErrorResponse = {
  error: string;
  details?: string;
};

// Helper function to create JSON responses with proper headers
function createResponse(
  body: SuccessResponse | ErrorResponse,
  status: number,
  origin: string | null
) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Content-Type': 'application/json',
  };

  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders,
  });
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');

  try {
    // Validate request content type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return createResponse(
        { error: 'Content-Type must be application/json' },
        400,
        origin
      );
    }

    // Parse request body
    const body = await request.json();
    const { email, firstName, lastName, company, message } = body;

    // Validate required fields
    const requiredFields = { email, firstName, lastName, message };
    const missingFields = Object.entries(requiredFields)
      .filter(([, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return createResponse(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        400,
        origin
      );
    }

    console.log('Received form data:', {
      email,
      firstName,
      lastName,
      company,
      message,
    });

    // Get and validate environment variables
    const mailgunDomain = process.env.MAILGUN_DOMAIN;
    const mailgunApiKey = process.env.MAILGUN_API_KEY;
    const recipientEmails = process.env.RECIPIENT_EMAILS;
    const mailgunSender = process.env.MAILGUN_SENDER_EMAIL;

    // Log environment variable status (without exposing values)
    console.log('Environment variables:', {
      mailgunDomain: mailgunDomain ? 'set' : 'not set',
      mailgunApiKey: mailgunApiKey ? 'set' : 'not set',
      recipientEmails: recipientEmails ? 'set' : 'not set',
      mailgunSender: mailgunSender ? 'set' : 'not set',
    });

    // Validate environment variables
    const missingEnvVars = [];
    if (!mailgunDomain) missingEnvVars.push('MAILGUN_DOMAIN');
    if (!mailgunApiKey) missingEnvVars.push('MAILGUN_API_KEY');
    if (!recipientEmails) missingEnvVars.push('RECIPIENT_EMAILS');
    if (!mailgunSender) missingEnvVars.push('MAILGUN_SENDER_EMAIL');

    if (missingEnvVars.length > 0) {
      console.error(
        `Missing environment variables: ${missingEnvVars.join(', ')}`
      );
      return createResponse(
        {
          error: `Server configuration error: Missing ${missingEnvVars.join(', ')}`,
        },
        500,
        origin
      );
    }

    // Prepare email data
    const from = `Contact olavorw.com <${mailgunSender}>`;
    const subject = `${firstName} ${lastName} at ${company || 'N/A'}, ${email} - Olav "Olavorw" Contact Form Submission`;
    const bodyText = `${message}\n\nThis message was sent from the contact form on olavorw.com in accordance with the privacy policy (https://olavorw.com/legal/policies/privacy).`;

    // Create FormData for Mailgun API
    const formData = new FormData();
    formData.append('from', from);
    formData.append('to', recipientEmails || '');
    formData.append('cc', email || '');
    formData.append('subject', subject);
    formData.append('text', bodyText);
    formData.append('h:Reply-To', email || '');

    // Log request details (without sensitive info)
    console.log('Preparing Mailgun request:', {
      to: recipientEmails,
      cc: email,
      subject,
      textLength: bodyText.length,
    });

    // Send request to Mailgun
    console.log('Sending request to Mailgun');
    const mailgunResponse = await fetch(
      `https://api.mailgun.net/v3/${mailgunDomain}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(`api:${mailgunApiKey}`)}`,
        },
        body: formData,
      }
    );

    // Handle Mailgun response
    if (!mailgunResponse.ok) {
      const errorText = await mailgunResponse.text();
      console.error('Mailgun Error:', {
        status: mailgunResponse.status,
        statusText: mailgunResponse.statusText,
        error: errorText,
      });

      return createResponse(
        {
          error: 'Failed to send email',
          details: `Mailgun API returned status ${mailgunResponse.status}: ${errorText}`,
        },
        500,
        origin
      );
    }

    // Log success and return response
    console.log('Email sent successfully');
    return createResponse({ message: 'Email sent successfully' }, 200, origin);
  } catch (error) {
    // Handle unexpected errors
    console.error('Unexpected error:', error);
    return createResponse(
      {
        error: 'An unexpected error occurred',
        details: error instanceof Error ? error.message : String(error),
      },
      500,
      origin
    );
  }
}
