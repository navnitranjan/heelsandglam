import React from 'react';
import { Metadata } from 'next';
import MembershipClient from './MembershipClient';

export const metadata: Metadata = {
  title: 'The Private Circle Membership | Heels & Glam Academy Alumnae',
  description: 'An exclusive network for Heels & Glam graduates to maintain postural coordinates, styling updates, and participate in VIP networking assemblies.',
  alternates: {
    canonical: 'https://heelsandglam.com/membership',
  }
};

export default function MembershipPage() {
  return <MembershipClient />;
}
