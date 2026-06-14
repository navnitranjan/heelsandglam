import React from 'react';
import { Metadata } from 'next';
import TransformationStoriesClient from './TransformationStoriesClient';

export const metadata: Metadata = {
  title: 'Musculoskeletal Transformation Portfolios | Heels & Glam Academy',
  description: 'Chronological somatic files documentation before & after presence, heels walk comfort, vocal resonance and styling transformation outcomes.',
  alternates: {
    canonical: 'https://heelsandglam.com/transformation-stories',
  }
};

export default function TransformationStoriesPage() {
  return <TransformationStoriesClient />;
}
