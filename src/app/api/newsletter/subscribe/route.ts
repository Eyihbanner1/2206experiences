import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, source, tags } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address required' },
        { status: 400 }
      );
    }

    // In production, integrate with your newsletter service
    // Example integrations:

    // Mailchimp Integration
    const mailchimpResponse = await subscribeToMailchimp(email, source, tags);
    
    // ConvertKit Integration (alternative)
    // const convertKitResponse = await subscribeToConvertKit(email, source, tags);

    return NextResponse.json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter',
      subscriberId: mailchimpResponse.id
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Subscription failed' },
      { status: 500 }
    );
  }
}

async function subscribeToMailchimp(email: string, source: string, tags: string[]) {
  const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
  const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // e.g., 'us1'

  if (!MAILCHIMP_API_KEY || !MAILCHIMP_AUDIENCE_ID || !MAILCHIMP_SERVER_PREFIX) {
    // Fallback for development - simulate successful subscription
    console.log('Development mode: Newsletter subscription simulated for', email);
    return { 
      id: 'dev_' + Date.now(), 
      email, 
      status: 'subscribed',
      source,
      tags 
    };
  }

  const url = `https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`;
  
  const data = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      SOURCE: source,
      SIGNUP_DATE: new Date().toISOString()
    },
    tags: tags
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    
    // Handle already subscribed case
    if (error.title === 'Member Exists') {
      return { 
        id: error.detail?.split(' ')?.[0] || 'existing',
        email, 
        status: 'already_subscribed' 
      };
    }
    
    throw new Error(`Mailchimp API error: ${error.title}`);
  }

  return await response.json();
}
