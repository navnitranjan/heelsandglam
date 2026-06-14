import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | Heels & Glam Academy',
  description:
    'Understand how Heels & Glam Academy uses cookies, analytics, and tracking technologies on our website.',
  openGraph: {
    title: 'Cookie Policy | Heels & Glam Academy',
    description:
      'Understand how Heels & Glam Academy uses cookies and tracking technologies on our website.',
    url: 'https://heelsandglam.com/cookie-policy',
    siteName: 'Heels & Glam',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Cookie Policy | Heels & Glam Academy',
    description:
      'Understand how Heels & Glam Academy uses cookies and tracking technologies.',
  },
  alternates: {
    canonical: 'https://heelsandglam.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  const sections = [
    {
      title: '1. What Are Cookies',
      content: [
        'Cookies are small text files stored on your device (computer, tablet, or smartphone) when you visit a website. They are widely used to make websites work more efficiently, to remember your preferences, and to provide information to website operators.',
        'Cookies do not contain personal information that can directly identify you, but they can be linked to your browsing session to understand how you interact with the website.',
      ],
    },
    {
      title: '2. Types of Cookies We Use',
      content: [
        'Heels & Glam Academy uses the following categories of cookies:',
        '**Essential Cookies**: These cookies are necessary for the website to function properly. They enable core features such as page navigation, secure area access, and session management. Without these cookies, the website cannot operate correctly. These cookies do not collect personal data and cannot be disabled.',
        '**Analytics Cookies (Google Analytics 4)**: We use Google Analytics 4 (GA4) with Measurement ID G-EBDYJ8KNC2 to collect anonymous data about how visitors use our website. These cookies help us understand which pages are most popular, how visitors navigate through the site, and whether users experience any errors. All data collected through GA4 is aggregated and anonymous.',
        '**Functional Cookies**: These cookies remember choices you make on the website (such as whether you have seen the preloader animation or the exit-intent modal) to provide a more personalised and seamless experience on subsequent visits. They use session storage and do not persist beyond your browsing session.',
      ],
    },
    {
      title: '3. Google Analytics Cookies',
      content: [
        'Google Analytics 4 sets the following cookies on your device:',
        '**_ga**: Used to distinguish unique users. Expires after 2 years.',
        '**_ga_[container-id]**: Used to persist session state. Expires after 2 years.',
        'These cookies collect information including:',
        '• Number of visitors to the website.',
        '• Pages visited and the order in which they were viewed.',
        '• Approximate geographic location (city/country level based on IP address).',
        '• Device type, browser, and operating system.',
        '• Referral source (how you arrived at our website).',
        '• Events triggered on the site (button clicks, form submissions, scroll depth).',
        'We have enabled IP anonymisation in our Google Analytics configuration where supported by the platform. Data collected by Google Analytics is processed by Google LLC under their privacy policy.',
      ],
    },
    {
      title: '4. Session Storage',
      content: [
        'In addition to traditional cookies, our website uses browser Session Storage to manage certain user interface states. Session storage data is:',
        '• Stored locally on your device only.',
        '• Automatically deleted when you close your browser tab or window.',
        '• Never transmitted to our servers or third parties.',
        'We use session storage for:',
        '**hg_preloader_visited**: Prevents the preloader animation from displaying repeatedly during the same session.',
        '**heels_exit_intent_triggered**: Prevents the exit-intent modal from appearing more than once per session.',
      ],
    },
    {
      title: '5. Third-Party Cookies',
      content: [
        'Some cookies on our website are set by third-party services that appear on our pages. We do not control the cookies set by third parties. The third-party services used on our website include:',
        '**Google Analytics (Google LLC)**: Analytics and website performance monitoring. Google\'s privacy policy: policies.google.com/privacy.',
        '**Google Fonts (Google LLC)**: Typography delivery. Google Fonts does not set tracking cookies but may log standard server access data. Details: developers.google.com/fonts/faq.',
        'We do not use advertising cookies, remarketing cookies, or social media tracking pixels on our website.',
      ],
    },
    {
      title: '6. Managing Your Cookie Preferences',
      content: [
        'You have full control over cookies on your device. You can manage cookies in the following ways:',
        '**Browser Settings**: Most browsers allow you to view, manage, and delete cookies through their settings. You can typically find cookie controls under "Privacy" or "Security" settings in your browser.',
        '**Opting Out of Google Analytics**: You can prevent Google Analytics from collecting your data by installing the Google Analytics Opt-out Browser Add-on, available at tools.google.com/dlpage/gaoptout.',
        '**Disabling All Cookies**: You can configure your browser to reject all cookies. Please note that disabling cookies may impact the functionality of some features on our website.',
        'Here are links to cookie management instructions for popular browsers:',
        '• Google Chrome: support.google.com/chrome/answer/95647',
        '• Mozilla Firefox: support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer',
        '• Safari: support.apple.com/guide/safari/manage-cookies-sfri11471',
        '• Microsoft Edge: support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge',
      ],
    },
    {
      title: '7. Do Not Track',
      content: [
        'Some browsers offer a "Do Not Track" (DNT) feature that sends a signal to websites requesting that your browsing activity not be tracked. Our website does not currently respond to DNT signals, as there is no universal standard for how websites should handle such requests.',
        'However, you can use the methods described in Section 6 above to manage your cookie and tracking preferences.',
      ],
    },
    {
      title: '8. Changes to This Cookie Policy',
      content: [
        'We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. Any updates will be posted on this page with a revised effective date.',
        'We encourage you to review this policy periodically.',
      ],
    },
    {
      title: '9. Contact Us',
      content: [
        'If you have questions about our use of cookies, please contact us at:',
        '**Heels & Glam Academy**',
        'Founder: Aakanksha Anand',
        'Location: Lavelle Road, Bangalore, Karnataka 560001, India',
        'WhatsApp: +91 9742232322',
        'Email: heelsandglam@gmail.com',
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
          Cookie<br />
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
