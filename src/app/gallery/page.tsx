import React from 'react';
import { Metadata } from 'next';
import GalleryClient from './GalleryClient';

export const metadata: Metadata = {
  title: 'The Runway Lookbook & Gallery | Heels & Glam Academy',
  description: 'View classroom shoots, catwalk sessions, styling transformations, and professional lookbooks directed by head coach Aakanksha Anand.',
  alternates: {
    canonical: 'https://heelsandglam.com/gallery',
  }
};

export default function GalleryPage() {
  return <GalleryClient />;
}
