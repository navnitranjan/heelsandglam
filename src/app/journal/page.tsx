import React from 'react';
import { Metadata } from 'next';
import JournalClient from './JournalClient';

export const metadata: Metadata = {
  title: 'The Poise Journal & Essays | Heels & Glam Academy',
  description: 'Read curated essays, tutorials, and posture correction guides covering heels walking kinetics, personal styling, and executive communication coaching.',
  alternates: {
    canonical: 'https://heelsandglam.com/journal',
  }
};

export default function JournalPage() {
  return <JournalClient />;
}
