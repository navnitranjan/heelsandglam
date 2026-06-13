'use client';

import React from 'react';
import { trackEvent } from '@/lib/gtag';

export default function FloatingWhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919880012345?text=Hi%20Aakanksha!%20I%20am%20visiting%20the%20Heels%20%26%20Glam%20website%20and%20would%20like%20to%20consult%20about%20your%20grooming%20%26%20confidence%20programs." 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-40 p-4 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110 border border-white/10"
      aria-label="Direct WhatsApp Inquiries Desk"
      onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Global Floating WhatsApp Button' })}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-6 h-6 fill-white text-white"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    </a>
  );
}
