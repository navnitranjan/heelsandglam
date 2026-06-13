'use client';

import React from 'react';
import Link from 'next/link';
import { trackEvent } from '@/lib/gtag';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent({
      action: 'form_submit_newsletter',
      category: 'Lead Generation',
      label: 'Footer Newsletter Join'
    });
    // Newsletter integration callback
  };

  return (
    <footer className="bg-abyss border-t border-gold/10 pt-20 pb-10 mt-auto">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-serif tracking-luxury text-gold uppercase">
                Heels & Glam
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-champagne opacity-65 -mt-1 font-sans">
                By Aakanksha Anand
              </span>
            </Link>
            <p className="text-sm text-alabaster/60 font-sans leading-relaxed max-w-sm">
              An elite transformation guild bridging modeling pedigree and executive grooming. 
              We elevate personal poise, confidence, and visual styling for women worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-gold mb-6 font-sans">
              Navigation
            </h4>
            <ul className="space-y-4 font-sans text-xs">
              <li>
                <Link href="/academy" className="text-alabaster/60 hover:text-white transition-colors">
                  The Academy
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-alabaster/60 hover:text-white transition-colors">
                  Programs (Cohorts)
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-alabaster/60 hover:text-white transition-colors">
                  Lookbook Gallery
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-alabaster/60 hover:text-white transition-colors">
                  The Journal
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Input */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-gold mb-6 font-sans">
              The Glam Salon (Newsletter)
            </h4>
            <p className="text-xs text-alabaster/60 font-sans mb-4 leading-relaxed">
              Subscribe to receive curated styling tips and early invitations to physical camps.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                className="w-full bg-editorial-grey/40 border border-gold/20 px-4 py-3 text-xs text-alabaster tracking-widest focus:outline-none focus:border-gold transition-colors font-sans placeholder:opacity-50"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gold text-abyss hover:bg-white hover:text-abyss text-xs uppercase tracking-luxury transition-all font-sans font-medium"
              >
                Join the Salon
              </button>
            </form>
          </div>
        </div>

        {/* Muted Row */}
        <div className="border-t border-gold/5 pt-8 flex flex-col md:flex-row items-center justify-between font-sans text-[10px] uppercase tracking-widest text-alabaster/40">
          <p>© {currentYear} Heels & Glam Academy. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Admission</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
