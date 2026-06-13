'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Star, Calendar, Users, Compass, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

// CUSTOM SVG WHATSAPP ICON
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

export default function RampWalkTrainingPage() {
  const waMessage = encodeURIComponent(
    "Hi Aakanksha! I am exploring the Ramp Walk Training page and want to check seat availability for the upcoming cohort."
  );

  return (
    <div className="min-h-screen bg-obsidian text-pearl py-12 md:py-24 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[400px] h-[400px] bg-rosegold/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Header */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-rosegold font-sans font-bold mb-4">
          Professional Ramp Walk Training • Somatic Pacing
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Ramp Walk<br />
          <span className="text-champagne font-serif">Training</span>
        </h1>
        <div className="w-16 h-[1px] bg-rosegold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          Master the kinetics of heels catwalk presentation under head coach Aakanksha Anand. Elevate your center of gravity and glide with stability.
        </p>
      </div>

      {/* Spacing & Content section */}
      <section className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-20 relative z-10">
        {/* Visual column */}
        <div className="lg:col-span-5 relative aspect-[3/4] border border-rosegold/15 overflow-hidden shadow-2xl">
          <Image 
            src="/images/runway-saree-lotus.jpg"
            alt="Ramp walk training student session in red saree"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent z-10" />
        </div>

        {/* Details column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-widest text-rosegold font-sans font-bold">Catwalk Mechanics</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight uppercase">Calibrate Your Stride</h2>
          <div className="w-12 h-[1px] bg-rosegold/40" />

          <p className="text-xs md:text-sm text-pearl/70 font-sans leading-relaxed">
            Ramp walk presentation is built on precise skeletal calibration. Many women slump or walk with bent knees in high heels. Our somatic ramp walk training resolves these joint compensations, ensuring you glide with absolute balance.
          </p>

          {/* Bullet syllabus details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans text-xs">
            {[
              "High-Heel Biomechanics & Weight Strikes",
              "Delayed Gaze Catwalk Pivot turns",
              "Saree & Evening Gown Stride Control",
              "Music Pacing & Walk Tempo Sync",
              "Skeletal Alignment & Spine wall reset",
              "Pageant Ramp Walk Spotlight Carriage"
            ].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-rosegold shrink-0" />
                <span className="text-pearl/65">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap gap-4 items-center">
            <a 
              href={`https://wa.me/919880012345?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Lock Ramp Walk Seat</span>
            </a>
            <Button href="/apply" variant="outline">
              Initiate Admissions Profile
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
