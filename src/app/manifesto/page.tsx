import React from 'react';
import { Metadata } from 'next';
import ManifestoClient from './ManifestoClient';

export const metadata: Metadata = {
  title: 'The Heels & Glam Manifesto | The Somatic Poise Code',
  description: 'Read the Heels & Glam Manifesto. Explore our six principles of stature, posture verticality, kinetic poise, and Modern Femininity sovereign authority.',
  alternates: {
    canonical: 'https://heelsandglam.com/manifesto',
  }
};

export default function ManifestoPage() {
  return <ManifestoClient />;
}
