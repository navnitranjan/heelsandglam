import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { supabase } from '@/lib/supabase';

// Configure the SMTP transporter using environment variables or safe fallbacks for local dev
const getTransporter = () => {
  const host = process.env.SMTP_HOST;
  const port = parseInt(process.env.SMTP_PORT || '587');
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;

  if (host && user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for other ports
      auth: { user, pass },
    });
  }
  return null;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, data } = body;

    if (!formType || !data) {
      return NextResponse.json({ error: 'Missing formType or data' }, { status: 400 });
    }

    // 1. Format the email subject and body based on form type
    let subject = '';
    let htmlContent = '';
    let textContent = '';

    if (formType === 'contact') {
      subject = `[New Lead] Contact Form Submission from ${data.name}`;
      textContent = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`;
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #C5A059; max-width: 600px;">
          <h2 style="color: #C5A059; border-bottom: 1px solid #C5A059; padding-bottom: 10px; margin-top: 0;">Heels & Glam Lead</h2>
          <p><strong>Form Type:</strong> Contact Enquiry</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Message:</strong></p>
          <blockquote style="background: #fdfaf4; padding: 15px; border-left: 3px solid #C5A059; margin: 0;">${data.message}</blockquote>
        </div>
      `;
    } else if (formType === 'assessment') {
      subject = `[New Lead] Presence Assessment Score: ${data.score}% - ${data.name}`;
      textContent = `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nScore: ${data.score}%\nCategory: ${data.category}\nDescription: ${data.description}`;
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #C5A059; max-width: 600px;">
          <h2 style="color: #C5A059; border-bottom: 1px solid #C5A059; padding-bottom: 10px; margin-top: 0;">Heels & Glam Lead</h2>
          <p><strong>Form Type:</strong> Somatic Presence Score Assessment</p>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Presence Score:</strong> <span style="font-size: 18px; font-weight: bold; color: #C5A059;">${data.score}%</span> (${data.category})</p>
          <p><strong>Category Analysis:</strong> ${data.description}</p>
        </div>
      `;
    } else if (formType === 'admissions') {
      subject = `[Admission Request] ${data.fullName} - ${data.cohort}`;
      textContent = `Name: ${data.fullName}\nEmail: ${data.email}\nPhone: ${data.phone}\nCity: ${data.city}\nCohort: ${data.cohort}\nExperience: ${data.experience}\nTransformation Objectives: ${data.targets}\nPresence Potential Score: ${data.score}%`;
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #C5A059; max-width: 600px;">
          <h2 style="color: #C5A059; border-bottom: 1px solid #C5A059; padding-bottom: 10px; margin-top: 0;">Heels & Glam Admission Profile</h2>
          <p><strong>Candidate Name:</strong> ${data.fullName}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>City / Region:</strong> ${data.city}</p>
          <p><strong>Target Cohort:</strong> ${data.cohort}</p>
          <p><strong>Modelling Level:</strong> ${data.experience}</p>
          <p><strong>Presence Potential Score:</strong> <span style="font-size: 18px; font-weight: bold; color: #C5A059;">${data.score}%</span></p>
          <p><strong>Objectives:</strong></p>
          <blockquote style="background: #fdfaf4; padding: 15px; border-left: 3px solid #C5A059; margin: 0;">${data.targets}</blockquote>
        </div>
      `;
    } else if (formType === 'newsletter') {
      subject = `[Newsletter Join] New Subscriber: ${data.email}`;
      textContent = `Email: ${data.email} subscribed to The Glam Salon Newsletter.`;
      htmlContent = `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #C5A059; max-width: 600px;">
          <h2 style="color: #C5A059; border-bottom: 1px solid #C5A059; padding-bottom: 10px; margin-top: 0;">The Glam Salon Newsletter Subscription</h2>
          <p>A user has subscribed to the newsletter mailing list.</p>
          <p><strong>Email Address:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        </div>
      `;
    }

    // 2. Write to Supabase if config is available
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

    // 3. Send email using Nodemailer
    const transporter = getTransporter();
    const recipient = 'heelsandglam@gmail.com';

    if (transporter) {
      await transporter.sendMail({
        from: `"${data.name || data.fullName || 'Heels & Glam Desk'}" <${process.env.SMTP_USER}>`,
        to: recipient,
        replyTo: data.email,
        subject: subject,
        text: textContent,
        html: htmlContent,
      });
      console.log(`[Email Dispatch] Successfully sent ${formType} email to ${recipient}`);
    } else {
      // Dev mode logger if SMTP is not configured
      console.warn('[SMTP Config Alert] SMTP_HOST, SMTP_USER, or SMTP_PASSWORD environment variables are missing.');
      console.log(`[Dev Log Only] Submission received successfully!
---------------------------------------------
SUBJECT: ${subject}
TO: ${recipient}
BODY:
${textContent}
---------------------------------------------`);
    }

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error: any) {
    console.error('[API Contact Error]:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
