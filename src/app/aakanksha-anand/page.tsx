import React from 'react';
import { Metadata } from 'next';
import FounderClient from './FounderClient';

export const metadata: Metadata = {
  title: 'Meet Head Coach Aakanksha Anand | Heels & Glam Academy',
  description: 'Meet founder Aakanksha Anand. Read about her journey, the Somatic Poise Method, and how she coaches women to command spatial authority.',
  alternates: {
    canonical: 'https://heelsandglam.com/aakanksha-anand',
  }
};

export default function FounderExperiencePage() {
  return <FounderClient />;
}
