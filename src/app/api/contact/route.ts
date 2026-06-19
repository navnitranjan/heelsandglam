import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { sendAdminEmail, buildEmailTemplate } from '@/lib/email';

// In-memory rate limiter (resets on server restart — suitable for serverless edge)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max 5 submissions per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

// Server-side validation helpers
function sanitize(input: string | undefined | null): string {
  if (!input) return '';
  return String(input).trim().slice(0, 2000); // limit length
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  // Allow digits, spaces, dashes, plus, parens — 7-20 chars
  return /^[\d\s\-+()]{7,20}$/.test(phone);
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0]?.trim() || 'unknown';
    
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a moment.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { formType, data } = body;

    if (!formType || !data) {
      return NextResponse.json({ error: 'Missing formType or data' }, { status: 400 });
    }

    // Honeypot field check — if filled, it's a bot
    if (data._honey && String(data._honey).length > 0) {
      // Silently succeed to not alert the bot
      console.log('[Spam] Honeypot triggered, discarding submission');
      return NextResponse.json({ success: true, message: 'Form submitted successfully' });
    }

    // Build email based on form type
    let subject = '';
    let html = '';
    let replyTo = '';

    if (formType === 'contact') {
      // Server-side validation
      const name = sanitize(data.name);
      const email = sanitize(data.email);
      const phone = sanitize(data.phone);
      const cohort = sanitize(data.cohort);
      const message = sanitize(data.message);

      if (!name || name.length < 2) {
        return NextResponse.json({ error: 'Please provide a valid name' }, { status: 400 });
      }
      if (!isValidEmail(email)) {
        return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
      }
      if (phone && !isValidPhone(phone)) {
        return NextResponse.json({ error: 'Please provide a valid phone number' }, { status: 400 });
      }

      subject = `New Contact Request — ${name}`;
      replyTo = email;
      html = buildEmailTemplate({
        formLabel: 'Contact Enquiry',
        heading: `New consultation request from ${name}`,
        fields: [
          { label: 'Name', value: name },
          { label: 'Email', value: `<a href="mailto:${email}">${email}</a>` },
          { label: 'Phone', value: phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided' },
          { label: 'Cohort Interest', value: cohort || 'Not specified' },
        ],
        messageField: message ? { label: 'Message / Goals', value: message } : undefined,
      });

    } else if (formType === 'assessment') {
      const name = sanitize(data.name);
      const email = sanitize(data.email);
      const phone = sanitize(data.phone);
      const score = Number(data.score) || 0;
      const category = sanitize(data.category);
      const description = sanitize(data.description);

      if (!name || name.length < 2) {
        return NextResponse.json({ error: 'Please provide a valid name' }, { status: 400 });
      }
      if (!isValidEmail(email)) {
        return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
      }

      subject = `New Presence Assessment — ${name} (Score: ${score}%)`;
      replyTo = email;
      html = buildEmailTemplate({
        formLabel: 'Presence Assessment',
        heading: `Assessment completed by ${name}`,
        fields: [
          { label: 'Name', value: name },
          { label: 'Email', value: `<a href="mailto:${email}">${email}</a>` },
          { label: 'Phone', value: phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided' },
          { label: 'Score', value: `<strong style="font-size: 18px; color: #C5A059;">${score}%</strong>` },
          { label: 'Category', value: `${category} Presence` },
        ],
        messageField: description ? { label: 'Analysis', value: description } : undefined,
      });

    } else if (formType === 'admissions') {
      const fullName = sanitize(data.fullName);
      const email = sanitize(data.email);
      const phone = sanitize(data.phone);
      const city = sanitize(data.city);
      const cohort = sanitize(data.cohort);
      const experience = sanitize(data.experience);
      const targets = sanitize(data.targets);
      const score = Number(data.score) || 0;

      if (!fullName || fullName.length < 2) {
        return NextResponse.json({ error: 'Please provide a valid name' }, { status: 400 });
      }
      if (!isValidEmail(email)) {
        return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
      }

      subject = `New Admissions Inquiry — ${fullName}`;
      replyTo = email;
      html = buildEmailTemplate({
        formLabel: 'Admissions Application',
        heading: `New admission profile: ${fullName}`,
        fields: [
          { label: 'Candidate', value: fullName },
          { label: 'Email', value: `<a href="mailto:${email}">${email}</a>` },
          { label: 'Phone', value: phone ? `<a href="tel:${phone}">${phone}</a>` : 'Not provided' },
          { label: 'City', value: city || 'Not provided' },
          { label: 'Cohort', value: cohort || 'Not specified' },
          { label: 'Experience', value: experience || 'Not specified' },
          { label: 'Presence Score', value: score ? `${score}%` : 'Not assessed' },
        ],
        messageField: targets ? { label: 'Transformation Objectives', value: targets } : undefined,
      });

    } else if (formType === 'newsletter') {
      const email = sanitize(data.email);

      if (!isValidEmail(email)) {
        return NextResponse.json({ error: 'Please provide a valid email address' }, { status: 400 });
      }

      subject = `New Newsletter Signup — ${email}`;
      html = buildEmailTemplate({
        formLabel: 'Newsletter Subscription',
        heading: 'New subscriber joined The Glam Salon',
        fields: [
          { label: 'Email', value: `<a href="mailto:${email}">${email}</a>` },
        ],
      });

    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // Write to Supabase if configured
    try {
      const isConfigured = supabase && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';
      if (isConfigured) {
        await supabase.from('leads').insert([
          {
            form_type: formType,
            email: data.email || data.fullName || '',
            payload: data,
            created_at: new Date().toISOString(),
          }
        ]);
        console.log('[Supabase] Lead successfully written to database');
      }
    } catch (dbError) {
      console.error('[Supabase DB Error] Could not save lead:', dbError);
      // Proceed even if database fails
    }

    // Send admin alert email via Resend
    await sendAdminEmail({ subject, html, replyTo });

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error: any) {
    console.error('[API Contact Error]:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
