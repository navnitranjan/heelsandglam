import React from 'react';
import { Metadata } from 'next';
import ConfidenceAssessmentClient from './ConfidenceAssessmentClient';

export const metadata: Metadata = {
  title: 'Free Grooming & Confidence Assessment | Heels & Glam Academy',
  description: 'Evaluate your physical presence, posture symmetry, and vocal resonance metrics. Complete our diagnostic checks to mapping your somatic index.',
  alternates: {
    canonical: 'https://heelsandglam.com/confidence-assessment',
  }
};

export default function ConfidenceAssessmentPage() {
  return <ConfidenceAssessmentClient />;
}
