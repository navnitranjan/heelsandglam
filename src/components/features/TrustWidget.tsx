'use client';

import React from 'react';
import Image from 'next/image';
import { Star, MapPin, MessageSquare, Map, ExternalLink } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

export default function TrustWidget() {
  return (
    <section id="trust-verification" className="relative py-20 md:py-28 border-t border-gold/10 bg-editorial-grey/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/2 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="luxury-container max-w-5xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-bold block">
            Verified Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-wider">
            Trust &amp; Spatial Verification
          </h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          <p className="text-xs md:text-sm text-pearl/50 max-w-lg mx-auto font-sans leading-relaxed font-light">
            Scan QR codes or consult official business profiles to verify our Electronic City Flagship credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-xs">
          {/* Card 1: Google Reviews */}
          <div className="glass-panel p-8 border border-gold/15 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="relative w-28 h-28 shrink-0 bg-white p-1.5 border border-gold/25 rounded-xs">
              <Image 
                src="/images/google-qr-reviews.png" 
                alt="Scan to write a Google Review for Heels & Glam"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex-grow space-y-3">
              <span className="text-[9px] uppercase tracking-widest text-gold font-bold block">Candidate Portfolios</span>
              <h3 className="text-lg font-serif text-white uppercase tracking-wide">Write a Google Review</h3>
              
              <div className="flex items-center justify-center sm:justify-start space-x-1 text-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold" />
                ))}
                <span className="text-pearl/60 ml-2 font-medium">4.9 / 5.0 Rating</span>
              </div>
              
              <p className="text-pearl/50 leading-relaxed font-light text-[11px]">
                We have over 84+ verified candidate testimonials documenting posture checks and walk transformations.
              </p>
              
              <div className="pt-2">
                <a 
                  href="https://g.page/r/CQ-UR9T15uCeEBM/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gold hover:text-white font-semibold transition-all hover:underline"
                  onClick={() => trackEvent({ action: 'click_google_review_qr', category: 'Trust', label: 'Trust Widget Google Review Link' })}
                >
                  <span>Submit Rating Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Google Business Location */}
          <div className="glass-panel p-8 border border-gold/15 flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="relative w-28 h-28 shrink-0 bg-white p-1.5 border border-gold/25 rounded-xs">
              <Image 
                src="/images/google-qr-business.png" 
                alt="Scan to see Google Business location of Heels & Glam"
                width={100}
                height={100}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="flex-grow space-y-3">
              <span className="text-[9px] uppercase tracking-widest text-gold font-bold block">Flagship Location</span>
              <h3 className="text-lg font-serif text-white uppercase tracking-wide">Google Business Profile</h3>
              
              <div className="flex items-center justify-center sm:justify-start space-x-1.5 text-pearl/70">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span className="leading-tight text-[11px]">SNN RAJ GREENBAY, Electronic City, Doddanagamangala, Bangalore</span>
              </div>

              <p className="text-pearl/50 leading-relaxed font-light text-[11px]">
                Physical masterclasses are conducted at our Electronic City luxury atelier in Bangalore, Karnataka.
              </p>

              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-4">
                <a 
                  href="https://maps.google.com/?q=SNN+RAJ+GREENBAY+Phase+II+Electronic+City" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gold hover:text-white font-semibold transition-all hover:underline"
                  onClick={() => trackEvent({ action: 'click_maps_qr', category: 'Trust', label: 'Trust Widget Google Maps Directions' })}
                >
                  <span>Driving Directions</span>
                  <Map className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Social CTA Band */}
        <div className="mt-12 p-6 border border-gold/15 bg-black/40 flex flex-col md:flex-row items-center justify-between gap-6 font-sans text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span className="px-3 py-1 bg-gold/10 border border-gold/25 text-gold text-[9px] uppercase tracking-widest font-semibold font-sans">
              Immediate Contact
            </span>
            <p className="text-pearl/70 text-sm">
              Connect directly with our admissions desk via WhatsApp or consult styling grids on Instagram.
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://wa.me/919742232322?text=Hi%20Aakanksha!%20I%20am%20visiting%20the%20Heels%20%26%20Glam%20website%20and%20want%20to%20verify%20program%20cohorts."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 bg-green-600 hover:bg-green-700 text-white font-semibold uppercase tracking-widest transition-all flex items-center space-x-2"
              onClick={() => trackEvent({ action: 'click_whatsapp_trust', category: 'Lead Generation', label: 'Trust Widget WhatsApp CTA' })}
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
              <span>WhatsApp Chat</span>
            </a>
            <a 
              href="https://www.instagram.com/_heelsandglam/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-5 border border-gold/30 hover:border-gold text-gold hover:text-white font-semibold uppercase tracking-widest transition-all flex items-center space-x-2"
              onClick={() => trackEvent({ action: 'click_instagram_trust', category: 'Social Connection', label: 'Trust Widget Instagram CTA' })}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>Instagram Feed</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
