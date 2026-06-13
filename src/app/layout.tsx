import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
  title: 'Heels & Glam | Luxury Grooming, Modelling & Fashion Academy',
  description:
    'An elite personal transformation academy for women and aspiring models. Elevate posture, camera confidence, and presence under founder Aakanksha Anand.',
  keywords: [
    'modeling academy',
    'grooming school',
    'confidence building classes',
    'pageant training',
    'Aakanksha Anand',
    'luxury grooming classes',
  ],
  openGraph: {
    title: 'Heels & Glam | Luxury Grooming & Modelling Academy',
    description:
      'Unlock your absolute self. Personalized posture, elegance, and fashion direction coached by industry expert Aakanksha Anand.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-abyss text-alabaster antialiased">
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
