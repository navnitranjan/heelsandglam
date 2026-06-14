import React from 'react';
import { Metadata } from 'next';
import StoriesClient from './StoriesClient';

export const metadata: Metadata = {
  title: 'Alumnae Portfolios & Stature Stories | Heels & Glam Academy',
  description: 'Read detailed case files of pageant contestants, VP operations leaders, and creators who corrected their posture and calibrated their vocal presence.',
  alternates: {
    canonical: 'https://heelsandglam.com/stories',
  }
};

export default function StudentStoriesPage() {
  return <StoriesClient />;
}
