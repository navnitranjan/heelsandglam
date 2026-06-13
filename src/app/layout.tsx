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
        url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
        width: 1200,
        height: 630,
        alt: 'Heels & Glam Academy by Aakanksha Anand'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Heels & Glam | Personal Grooming & Modelling Academy',
    description: 'Transform your confidence and own every room with India\'s elite poise and personal branding programs.',
    images: ['https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800'],
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
            __html: JSON.stringify({
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
            })
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
      </body>
    </html>
  );
}
