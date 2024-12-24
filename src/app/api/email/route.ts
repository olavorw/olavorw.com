import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName, company, message } =
      await request.json();
    const mailgunDomain = process.env.MAILGUN_DOMAIN || '';
    const mailgunApiKey = process.env.MAILGUN_API_KEY || '';
    const recipientEmails = process.env.RECIPIENT_EMAILS || '';
    const mailgunSender = process.env.MAILGUN_SENDER_EMAIL || '';

    const from = `Contact Olav \"Olavorw\" <${mailgunSender}>`;
    const subject = `${firstName} ${lastName} at ${company}, ${email} - olavorw.com Contact Form Submission`;
    const bodyText = `${message}\n\nThis message was sent from the contact form on olavorw.com in accordance with the privacy policy (https://olavorw.com/policies/privacy).`;

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
      // noinspection ExceptionCaughtLocallyJS
      throw new Error(`Mailgun API returned status ${response.status}`);
    }

    return NextResponse.json({ status: 200 });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
