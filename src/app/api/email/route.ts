import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'https://olavorw.com',
    'https://www.olavorw.com',
    'http://localhost:3000',
  ];
  const corsHeaders = {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin || '')
      ? origin || ''
      : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName, lastName, company, message } =
      await request.json();
    const mailgunDomain = process.env.MAILGUN_DOMAIN || '';
    const mailgunApiKey = process.env.MAILGUN_API_KEY || '';
    const recipientEmails = process.env.RECIPIENT_EMAILS || '';
    const mailgunSender = process.env.MAILGUN_SENDER_EMAIL || '';

    const from = `Contact Olav "Olavorw" <${mailgunSender}>`;
    const subject = `${firstName} ${lastName} at ${company}, ${email} - Olav "Olavorw" Contact Form Submission`;
    const bodyText = `${message}\n\nThis message was sent from the contact form on olavorw.com in accordance with the privacy policy (https://olavorw.com/legal/policies/privacy).`;

    const formData = new FormData();
    formData.append('from', from);
    formData.append('to', recipientEmails);
    formData.append('cc', email);
    formData.append('subject', subject);
    formData.append('text', bodyText);
    formData.append('h:Reply-To', email);

    const response = await fetch(
      `https://api.mailgun.net/v3/${mailgunDomain}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(`api:${mailgunApiKey}`)}`,
        },
        body: formData,
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Mailgun Error:', errorText);
      return NextResponse.json(
        { error: `Mailgun API returned status ${response.status}` },
        { status: 500, headers: corsHeaders }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { headers: corsHeaders }
    );
  } catch (error: unknown) {
    console.error('Detailed error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500, headers: corsHeaders }
    );
  }
}
