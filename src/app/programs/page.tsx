import React from 'react';
import { Metadata } from 'next';
import ProgramsClient from './ProgramsClient';

export const metadata: Metadata = {
  title: 'Transformation Programs | Heels & Glam Academy',
  description: 'Explore our boutique training modules including Personal Grooming, Confidence Building, Runway Walk Prep, and Personal Branding.',
  alternates: {
    canonical: 'https://heelsandglam.com/programs',
  }
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
