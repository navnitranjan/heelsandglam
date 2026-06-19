import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY 
  ? new Resend(process.env.RESEND_API_KEY) 
  : null;

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'heelsandglam@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

interface EmailPayload {
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Send an admin alert email via Resend.
 * Falls back to console logging in development when RESEND_API_KEY is not set.
 */
export async function sendAdminEmail({ subject, html, replyTo }: EmailPayload): Promise<boolean> {
  if (!resend) {
    console.warn('[Email] RESEND_API_KEY not configured. Logging email to console:');
    console.log(`[Email Dev Log]\n  TO: ${CONTACT_EMAIL}\n  SUBJECT: ${subject}\n  REPLY-TO: ${replyTo || 'N/A'}`);
    return true; // Don't fail the form submission in dev
  }

  try {
    const { error } = await resend.emails.send({
      from: `Heels & Glam <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      replyTo: replyTo || undefined,
      subject,
      html,
    });

    if (error) {
      console.error('[Email] Resend API error:', error);
      return false;
    }

    console.log(`[Email] Successfully sent: "${subject}" to ${CONTACT_EMAIL}`);
    return true;
  } catch (err) {
    console.error('[Email] Unexpected error:', err);
    return false;
  }
}

/**
 * Build a premium HTML email template with brand styling
 */
export function buildEmailTemplate({
  formLabel,
  heading,
  fields,
  messageField,
}: {
  formLabel: string;
  heading: string;
  fields: { label: string; value: string }[];
  messageField?: { label: string; value: string };
}): string {
  const timestamp = new Date().toLocaleString('en-IN', { 
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short'
  });

  const fieldRows = fields
    .map(f => `
      <tr>
        <td style="padding: 10px 16px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #999; border-bottom: 1px solid #f0ebe0; width: 140px; vertical-align: top;">${f.label}</td>
        <td style="padding: 10px 16px; font-size: 14px; color: #1a1a1a; border-bottom: 1px solid #f0ebe0;">${f.value}</td>
      </tr>
    `)
    .join('');

  const messageBlock = messageField
    ? `
      <div style="margin-top: 20px; padding: 16px; background: #fdfaf4; border-left: 3px solid #C5A059;">
        <p style="margin: 0 0 6px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #C5A059; font-weight: 600;">${messageField.label}</p>
        <p style="margin: 0; font-size: 14px; color: #333; line-height: 1.7;">${messageField.value}</p>
      </div>
    `
    : '';

  return `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
    <body style="margin: 0; padding: 0; background-color: #f7f5f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
        
        <!-- Header -->
        <div style="text-align: center; padding: 24px 0; border-bottom: 2px solid #C5A059;">
          <h1 style="margin: 0; font-size: 22px; font-weight: 300; letter-spacing: 0.15em; color: #C5A059; text-transform: uppercase;">HEELS &amp; GLAM</h1>
          <p style="margin: 4px 0 0; font-size: 10px; letter-spacing: 0.2em; color: #999; text-transform: uppercase;">Admin Alert System</p>
        </div>

        <!-- Body -->
        <div style="background: #ffffff; border: 1px solid #e8e2d6; padding: 32px 24px; margin-top: 20px;">
          
          <div style="margin-bottom: 20px;">
            <span style="display: inline-block; padding: 4px 12px; background: #C5A059; color: #fff; font-size: 10px; text-transform: uppercase; letter-spacing: 0.15em;">${formLabel}</span>
          </div>

          <h2 style="margin: 0 0 20px; font-size: 20px; font-weight: 400; color: #1a1a1a;">${heading}</h2>

          <table style="width: 100%; border-collapse: collapse;">
            ${fieldRows}
          </table>

          ${messageBlock}
        </div>

        <!-- Footer -->
        <div style="text-align: center; padding: 20px 0; margin-top: 20px;">
          <p style="margin: 0; font-size: 10px; color: #999; letter-spacing: 0.1em; text-transform: uppercase;">
            Submitted at ${timestamp} IST
          </p>
          <p style="margin: 8px 0 0; font-size: 10px; color: #bbb;">
            This email was sent automatically from heelsandglam.com
          </p>
        </div>

      </div>
    </body>
    </html>
  `;
}
