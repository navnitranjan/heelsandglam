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
    <footer className="bg-abyss border-t border-gold/10 pt-20 pb-10 mt-auto" role="contentinfo">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col mb-6" aria-label="Heels & Glam — Go to homepage">
              <span className="text-2xl font-serif tracking-luxury text-gold uppercase">
                Heels &amp; Glam
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-champagne opacity-65 -mt-1 font-sans">
                By Aakanksha Anand
              </span>
            </Link>
            <p className="text-sm text-alabaster/60 font-sans leading-relaxed max-w-sm mb-4">
              An elite transformation guild bridging modeling pedigree and executive grooming. 
              We elevate personal poise, confidence, and visual styling for women worldwide.
            </p>
            <span className="block text-xs uppercase tracking-[0.25em] text-gold font-serif italic font-medium">
              The Art of Presence. The Science of Elegance.
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-gold mb-6 font-sans">
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-4 font-sans text-xs">
                <li>
                  <Link href="/academy" className="text-alabaster/60 hover:text-white transition-colors">
                    The Academy
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="text-alabaster/60 hover:text-white transition-colors">
                    Programs
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
                <li>
                  <Link href="/apply" className="text-alabaster/60 hover:text-white transition-colors">
                    Begin Your Transformation
                  </Link>
                </li>
              </ul>
            </nav>
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
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="EMAIL ADDRESS"
                required
                autoComplete="email"
                className="w-full bg-editorial-grey/40 border border-gold/20 px-4 py-3 text-xs text-alabaster tracking-widest focus:outline-none focus:border-gold transition-colors font-sans placeholder:opacity-50"
              />
              <button
                type="submit"
                className="w-full py-3 bg-gold text-abyss hover:bg-white hover:text-abyss text-xs uppercase tracking-luxury transition-all font-sans font-medium"
              >
                Join the Salon
              </button>
            </form>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://www.instagram.com/heelsandglam/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Heels & Glam on Instagram"
                className="text-alabaster/40 hover:text-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://wa.me/919880012345?text=Hi%20Aakanksha!%20I%20am%20visiting%20the%20Heels%20%26%20Glam%20website."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Heels & Glam on WhatsApp"
                className="text-alabaster/40 hover:text-gold transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="border-t border-gold/5 pt-8 flex flex-col md:flex-row items-center justify-between font-sans text-[10px] uppercase tracking-widest text-alabaster/40">
          <p>&copy; {currentYear} Heels &amp; Glam Academy. All rights reserved.</p>
          <nav aria-label="Legal links" className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-admission" className="hover:text-gold transition-colors">Terms of Admission</Link>
            <Link href="/cookie-policy" className="hover:text-gold transition-colors">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
