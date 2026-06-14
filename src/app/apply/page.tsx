import React from 'react';
import { Metadata } from 'next';
import ApplyClient from './ApplyClient';

export const metadata: Metadata = {
  title: 'Apply for Admissions | Heels & Glam Academy',
  description: 'Submit your Candidate Invitation Profile to enroll in Heels & Glam personal grooming, confidence-building, ramp walk, or branding cohorts.',
  alternates: {
    canonical: 'https://heelsandglam.com/apply',
  }
};

export default function ApplyPage() {
  return <ApplyClient />;
}
