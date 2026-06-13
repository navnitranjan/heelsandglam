import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Heels & Glam Academy',
  description:
    'Learn how Heels & Glam Academy collects, uses, and protects your personal information. Read our complete privacy policy.',
  openGraph: {
    title: 'Privacy Policy | Heels & Glam Academy',
    description:
      'Learn how Heels & Glam Academy collects, uses, and protects your personal information.',
    url: 'https://heelsandglam.com/privacy-policy',
    siteName: 'Heels & Glam',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Heels & Glam Academy',
    description:
      'Learn how Heels & Glam Academy collects, uses, and protects your personal information.',
  },
  alternates: {
    canonical: 'https://heelsandglam.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'When you interact with Heels & Glam Academy, we may collect the following categories of personal information:',
        '**Personal Identification Data**: Full name, email address, phone number, city/region of residence, and age (where provided).',
        '**Application Data**: Transformation objectives, modelling experience level, preferred program cohort, and confidence self-assessment scores submitted through our admissions profile forms.',
        '**Communication Data**: Messages exchanged via WhatsApp, email, or contact forms on the website.',
        '**Technical Data**: IP address, browser type, device information, operating system, and browsing patterns collected automatically through cookies and analytics tools.',
        '**Usage Data**: Pages visited, time spent on pages, click patterns, scroll depth, and interaction with specific features such as the Transformation Calculator or Confidence Assessment.',
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'We use the information collected for the following purposes:',
        '• Processing and evaluating admissions applications for our transformation programs.',
        '• Communicating with you regarding your application status, program details, and scheduling.',
        '• Providing personalised consultation through WhatsApp and email.',
        '• Analysing website performance and user behaviour to improve the browsing experience.',
        '• Sending curated newsletters, styling tips, and early invitations to programs (only with your consent).',
        '• Generating anonymised, aggregated analytics to understand audience demographics and interests.',
        '• Ensuring the security and integrity of our digital platforms.',
      ],
    },
    {
      title: '3. Contact Forms & Application Data',
      content: [
        'When you submit the Candidate Invitation Profile on our Apply page, the information you provide (name, email, phone, city, cohort preference, experience level, and transformation objectives) is transmitted securely and stored for the purpose of admissions review.',
        'This data is reviewed exclusively by the Heels & Glam admissions team and the founder, Aakanksha Anand. It is never sold, rented, or shared with third-party marketing companies.',
        'Application data is retained for a maximum period of 24 months from the date of submission, after which it is securely deleted unless the applicant has been enrolled in a program.',
      ],
    },
    {
      title: '4. WhatsApp Communication',
      content: [
        'We use WhatsApp Business as a primary communication channel for consultations and enquiries. When you initiate a WhatsApp conversation through our website:',
        '• Your phone number, display name, and message content are processed by WhatsApp (a Meta product) under its own privacy policy.',
        '• Heels & Glam uses the information shared via WhatsApp solely for the purpose of responding to your enquiries and providing consultation.',
        '• We do not store WhatsApp conversation data on separate servers. All communication remains within the WhatsApp platform.',
        'For more information on how WhatsApp handles your data, please refer to the WhatsApp Privacy Policy at whatsapp.com/legal/privacy-policy.',
      ],
    },
    {
      title: '5. Analytics & Tracking',
      content: [
        'We use Google Analytics 4 (GA4) with Measurement ID G-EBDYJ8KNC2 to understand how visitors interact with our website. GA4 collects:',
        '• Page view data (which pages you visit and in what order).',
        '• Event data (clicks on call-to-action buttons, WhatsApp links, application form submissions, and assessment completions).',
        '• Demographic and interest data (age range, gender, and affinity categories — provided in aggregate by Google).',
        '• Session data (session duration, bounce rate, and traffic source/medium).',
        'Google Analytics uses cookies to distinguish unique users. The data collected is transmitted to and processed by Google LLC. We have enabled IP anonymisation where supported. For details, refer to Google\'s Privacy Policy at policies.google.com/privacy.',
      ],
    },
    {
      title: '6. Cookies',
      content: [
        'Heels & Glam uses cookies and similar technologies to enhance your browsing experience. Please refer to our Cookie Policy at /cookie-policy for a detailed explanation of the types of cookies we use, their purposes, and how you can manage them.',
        'By continuing to use our website, you acknowledge and consent to the use of cookies as described in our Cookie Policy.',
      ],
    },
    {
      title: '7. Your Rights',
      content: [
        'Depending on your jurisdiction, you may have the following rights regarding your personal data:',
        '**Right of Access**: You may request a copy of the personal data we hold about you.',
        '**Right to Rectification**: You may request correction of inaccurate or incomplete personal data.',
        '**Right to Erasure**: You may request deletion of your personal data, subject to legal retention obligations.',
        '**Right to Restrict Processing**: You may request that we limit the processing of your personal data under certain circumstances.',
        '**Right to Data Portability**: You may request a machine-readable copy of the personal data you have provided to us.',
        '**Right to Withdraw Consent**: Where processing is based on consent, you may withdraw that consent at any time by contacting us.',
        'To exercise any of these rights, please contact us using the details provided in Section 10 below.',
      ],
    },
    {
      title: '8. Data Protection & Security',
      content: [
        'We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include:',
        '• Secure HTTPS encryption for all data transmitted between your browser and our servers.',
        '• Hosting on Vercel\'s infrastructure, which complies with SOC 2 Type II security standards.',
        '• Restricted access to personal data, limited to authorised personnel only.',
        '• Regular review of data handling practices and security protocols.',
        'While we take all reasonable precautions, no method of data transmission over the internet is guaranteed to be 100% secure. We encourage you to use strong passwords and exercise caution when sharing personal information online.',
      ],
    },
    {
      title: '9. Third-Party Services',
      content: [
        'Our website integrates with the following third-party services:',
        '**Google Analytics 4 (GA4)**: For website analytics and performance monitoring. Operated by Google LLC.',
        '**WhatsApp Business (Meta)**: For direct messaging and consultation. Operated by Meta Platforms, Inc.',
        '**Vercel**: For website hosting and deployment. Operated by Vercel Inc.',
        '**Google Fonts**: For typography rendering (Cormorant Garamond and Inter). Operated by Google LLC.',
        'Each of these services has its own privacy policy governing the handling of data. We encourage you to review their respective policies.',
      ],
    },
    {
      title: '10. Contact Information',
      content: [
        'For any privacy-related enquiries, data requests, or concerns, please contact us at:',
        '**Heels & Glam Academy**',
        'Founder: Aakanksha Anand',
        'Location: Lavelle Road, Bangalore, Karnataka 560001, India',
        'WhatsApp: +91 9880012345',
        'Email: hello@heelsandglam.com',
        'We aim to respond to all privacy-related enquiries within 30 business days.',
      ],
    },
    {
      title: '11. Changes to This Policy',
      content: [
        'Heels & Glam reserves the right to update this Privacy Policy at any time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.',
        'Continued use of our website following any changes constitutes your acceptance of the updated policy.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-abyss relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <section className="luxury-container pt-16 pb-12 text-center relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl md:text-6xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Privacy<br />
          <span className="text-champagne font-serif">Policy</span>
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-6" />
        <p className="text-xs text-alabaster/50 font-sans max-w-lg mx-auto leading-relaxed">
          Effective Date: June 1, 2026 — Last Updated: June 14, 2026
        </p>
      </section>

      {/* Content */}
      <section className="luxury-container max-w-3xl pb-24 relative z-10">
        <div className="space-y-12">
          {sections.map((section, index) => (
            <article key={index} className="border-l border-gold/15 pl-6 md:pl-8">
              <h2 className="text-lg md:text-xl font-serif text-white uppercase tracking-wider mb-4">
                {section.title}
              </h2>
              <div className="space-y-3">
                {section.content.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-xs md:text-sm text-alabaster/60 font-sans leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-alabaster/80 font-medium">$1</strong>')
                    }}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
