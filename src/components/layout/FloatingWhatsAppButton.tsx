'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';
import { WHATSAPP_NUMBER } from '@/data/conversionTrust';

export default function FloatingWhatsAppButton() {
  const pathname = usePathname();
  const sourcePage = pathname || '/';
  const message = encodeURIComponent(
    `Hi Aakanksha! I am visiting Heels & Glam from ${sourcePage} and would like admissions guidance for grooming, confidence, or modelling programs.`
  );

  return (
    <a 
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}&utm_source=website&utm_medium=floating_cta&utm_campaign=admissions`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-6 right-6 z-40 bg-abyss/95 hover:bg-gold text-gold hover:text-abyss shadow-2xl flex items-center gap-3 cursor-pointer transition-all duration-300 hover:scale-105 border border-gold/40 px-4 py-3 font-sans"
      aria-label="Direct WhatsApp admissions desk"
      onClick={() => {
        trackEvent({ action: 'click_whatsapp_floating', category: 'Lead Generation', label: `Floating WhatsApp from ${sourcePage}` });
        trackEvent({ action: 'conversion_whatsapp_admissions', category: 'Conversion', label: sourcePage });
      }}
    >
      <MessageCircle className="w-5 h-5" aria-hidden="true" />
      <span className="hidden sm:block text-[10px] uppercase tracking-widest font-semibold">Admissions WhatsApp</span>
    </a>
  );
}
