import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { GA_TRACKING_ID } from '@/lib/gtag';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import ExitIntentModal from '@/components/features/ExitIntentModal';
import FloatingWhatsAppButton from '@/components/layout/FloatingWhatsAppButton';
import { Analytics } from '@vercel/analytics/next';

// Version: 1.1.1 - Final Production Deployment

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://heelsandglam.com'),
  title: 'Heels & Glam | Grooming, Confidence & Modelling Academy in Bangalore',
  description:
    'Heels & Glam by Aakanksha Anand is India\'s premium academy for grooming, confidence-building, ramp walk training, modelling courses, and personal branding. Located in Electronic City, Bangalore, Karnataka.',
  keywords: [
    'modelling classes bangalore',
    'modelling academy electronic city',
    'ramp walk training bangalore',
    'grooming classes bangalore',
    'personality development for women karnataka',
    'fashion academy bangalore',
    'pageant training bangalore',
    'confidence coaching for women',
    'modelling course in India',
    'personal branding academy bangalore',
    'grooming and etiquette classes karnataka',
    'Aakanksha Anand'
  ],
  openGraph: {
    title: 'Heels & Glam | Luxury Grooming, Modelling & Personal Branding Academy Bangalore',
    description:
      'Unlock your absolute presence. Learn ramp walk mechanics, poise, executive styling, and confidence mentored by Aakanksha Anand in Electronic City, Bangalore.',
    url: 'https://heelsandglam.com',
    siteName: 'Heels & Glam',
    images: [
      {
        url: '/images/runway-saree-lotus.jpg',
        width: 1200,
        height: 630,
        alt: 'Heels & Glam Academy by Aakanksha Anand - Runway Poise Showcase in Bangalore'
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heels & Glam | Personal Grooming & Modelling Academy Bangalore',
    description: 'Transform your confidence and own every room with India\'s elite poise and personal branding programs in Electronic City, Bangalore.',
    images: ['/images/runway-saree-lotus.jpg'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="min-h-full flex flex-col bg-abyss text-alabaster antialiased">
        {/* Skip to Content — Accessibility */}
        <a href="#main-content" className="skip-to-content font-sans">
          Skip to main content
        </a>

        {/* GA4 Script Integration */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        {/* Global JSON-LD Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "EducationalOrganization",
                "name": "Heels & Glam Academy by Aakanksha Anand",
                "url": "https://heelsandglam.com",
                "logo": "https://heelsandglam.com/logo.png",
                "description": "Premium personal grooming, confidence-building, modelling, and personal branding academy in Electronic City, Bangalore, India.",
                "founder": {
                  "@type": "Person",
                  "name": "Aakanksha Anand",
                  "jobTitle": "Founder & Head Coach",
                  "sameAs": "https://www.instagram.com/that_tall_babez/"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "SNN RAJ GREENBAY, Phase II, Electronic City, Doddanagamangala Village",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560100",
                  "addressCountry": "IN"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91-97422-32322",
                  "contactType": "admissions desk",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi", "kn"]
                },
                "offers": {
                  "@type": "Offer",
                  "category": "Grooming & Modelling Coaching"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Heels & Glam Academy",
                "image": "https://heelsandglam.com/images/runway-saree-lotus.jpg",
                "telephone": "+919742232322",
                "email": "heelsandglam@gmail.com",
                "url": "https://heelsandglam.com",
                "sameAs": [
                  "https://www.instagram.com/_heelsandglam/",
                  "https://www.instagram.com/that_tall_babez/"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "SNN RAJ GREENBAY, Phase II, Electronic City, Doddanagamangala Village",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560100",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 12.8639,
                  "longitude": 77.6745
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "84"
                },
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://heelsandglam.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Academy",
                    "item": "https://heelsandglam.com/academy"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Programs",
                    "item": "https://heelsandglam.com/programs"
                  },
                  {
                    "@type": "ListItem",
                    "position": 4,
                    "name": "Founder",
                    "item": "https://heelsandglam.com/aakanksha-anand"
                  },
                  {
                    "@type": "ListItem",
                    "position": 5,
                    "name": "Journal",
                    "item": "https://heelsandglam.com/journal"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who can join Heels & Glam?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Any woman seeking confidence, grooming, communication or personal presence development."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need modelling experience to apply?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Beginners are welcome. Our programs are designed to teach foundational alignment, walk kinetics, and presentation from scratch."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Heels & Glam only for aspiring models?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Our programs benefit students, corporate professionals, entrepreneurs, content creators, and women seeking to strengthen their personal presence."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are classes online or offline?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Program formats vary by batch. We offer both offline flagship masterclasses in Electronic City, Bangalore, and hybrid cohort formats."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I apply for the academy programs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can fill out the admissions profile on our Apply page or book a free poise assessment callback through our admissions desk."
                    }
                  }
                ]
              }
            ])
          }}
        />

        {/* Custom Luxury Cursor Pointer */}
        <CustomCursor />

        {/* Preloader animation screen */}
        <Preloader />

        {/* Global Floating Header */}
        <Header />

        {/* Core page canvas */}
        <main id="main-content" className="flex-grow pt-24">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating WhatsApp CTA */}
        <FloatingWhatsAppButton />

        {/* Global Exit Intent Dialog */}
        <ExitIntentModal />

        {/* Vercel Web Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
