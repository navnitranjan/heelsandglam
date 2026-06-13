import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';

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
  title: 'Heels & Glam | Grooming, Confidence & Modelling Academy in India',
  description:
    'Heels & Glam by Aakanksha Anand is India\'s premium academy for grooming, confidence-building, ramp walk training, modelling courses, and personal branding for women.',
  keywords: [
    'modelling classes',
    'modelling academy',
    'ramp walk training',
    'grooming classes',
    'personality development for women',
    'fashion academy',
    'pageant training',
    'confidence coaching for women',
    'modelling course in India',
    'personal branding academy',
    'grooming and etiquette classes',
    'Aakanksha Anand'
  ],
  openGraph: {
    title: 'Heels & Glam | Luxury Grooming, Modelling & Personal Branding Academy',
    description:
      'Unlock your absolute presence. Learn ramp walk mechanics, poise, executive styling, and confidence mentored by Aakanksha Anand.',
    url: 'https://heelsandglam.com',
    siteName: 'Heels & Glam',
    images: [
      {
        url: '/images/runway-saree-lotus.jpg',
        width: 1200,
        height: 630,
        alt: 'Heels & Glam Academy by Aakanksha Anand - Runway Poise Showcase'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heels & Glam | Personal Grooming & Modelling Academy',
    description: 'Transform your confidence and own every room with India\'s elite poise and personal branding programs.',
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
      <body className="min-h-full flex flex-col bg-abyss text-alabaster antialiased">
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
                "description": "Premium personal grooming, confidence-building, modelling, and personal branding academy in India.",
                "founder": {
                  "@type": "Person",
                  "name": "Aakanksha Anand",
                  "jobTitle": "Founder & Head Coach"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Lavelle Road",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "addressCountry": "IN"
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
                "telephone": "+919880012345",
                "url": "https://heelsandglam.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Lavelle Road",
                  "addressLocality": "Bangalore",
                  "addressRegion": "Karnataka",
                  "postalCode": "560001",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 12.9716,
                  "longitude": 77.5946
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
                      "text": "Program formats vary by batch. We offer both offline flagship masterclasses in Lavelle Road, Bangalore, and hybrid cohort formats."
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
        <main className="flex-grow pt-24">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Global Floating WhatsApp CTA */}
        <a 
          href="https://wa.me/919880012345?text=Hi%20Aakanksha!%20I%20am%20visiting%20the%20Heels%20%26%20Glam%20website%20and%20would%20like%20to%20consult%20about%20your%20grooming%20%26%20confidence%20programs." 
          target="_blank" 
          rel="noopener noreferrer" 
          className="fixed bottom-6 right-6 z-40 p-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 border border-white/10"
          aria-label="Direct WhatsApp Inquiries Desk"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 fill-white text-white"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
