'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Award, ArrowLeftRight, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

const STUDENT_CASE_STUDIES = [
  {
    name: "Aparna Sharma",
    role: "Pageant Finalist & Alumna",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    before: "Experienced chronic cervical spine slumping (tech-neck), walked with bent knees in high heels, and lacked confidence-driven presence during social gatherings.",
    challenges: "Struggling to balance head positioning, stabilizer muscle fatigue after 10 minutes in heels, and self-conscious positional boundaries.",
    journey: "Mentored directly by Aakanksha Anand. Focused on musculoskeletal decompression, center of gravity checks, and linear step mechanics. Coached in evening gown carriage.",
    transformation: "Successfully realigned posture and walked with straight-knee catwalk precision. Placed in the Top 5 of national pageants and walks for prominent clothing labels.",
    confidence: "Commands runways and camera spotlights. Has a 98% posture symmetry rating."
  },
  {
    name: "Dr. Nikita Lal",
    role: "VP, Corporate Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    before: "Vocal shaking under boardroom pressure, rapid pace of speech, and dropping chin when entering corporate assemblies.",
    challenges: "Filler words (like 'um' and 'like') used to fill pauses, tension in shoulder muscles, and lack of visual authority in leadership roles.",
    journey: "Trained in diaphragmatic breathing projection, vocal pitch modulation, and executive styling. Coached in dining etiquette and boardroom posture.",
    transformation: "Speaks with lower pitch and steady pacing, commanding meetings with poise. Re-styled into clean-cut blazer capsule coordinates.",
    confidence: "Presents to international audiences with absolute vocal resonance and postural authority."
  },
  {
    name: "Rhea Sen",
    role: "Founder, Creators Atelier",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    before: "Felt extremely self-conscious in front of camera lenses, lacked a clear visual style statement, and had shallow posture alignment.",
    challenges: "Eye contact avoidance during recording sessions, lack of color mapping styling protocols, and camera posture lock-ups.",
    journey: "Trained in camera angles, color theory styling, on-camera script modulation, and posture symmetry alignment drills.",
    transformation: "Designed a cohesive styling capsule wardrobe. Commands camera lenses naturally, building her creative agency to scale.",
    confidence: "Grew her digital channels to 150k+ followers, coordinates modeling deals, and conducts video interviews with poise."
  }
];

export default function StoriesClient() {
  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24 relative overflow-hidden">
      {/* Ambience glows */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-gold/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[450px] h-[450px] bg-gold/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Page Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-28 animate-fade-in relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold mb-4">
          The Proof • Alumnae Portfolios
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Transformation<br />
          <span className="text-gold font-serif">Stories</span>
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          Real emotional and physical transformations of women who redefined their alignment, vocal resonance, styling, and presence.
        </p>
      </div>

      {/* Case Studies */}
      <section className="luxury-container space-y-24 md:space-y-36 relative z-10 mb-20">
        {STUDENT_CASE_STUDIES.map((story, idx) => (
          <div 
            key={story.name}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Column */}
            <div className={`lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl ${
              idx % 2 === 1 ? 'lg:order-last' : ''
            }`}>
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 to-transparent z-10" />
              <Image 
                src={story.image}
                alt={story.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-bold block mb-1">
                  {story.role}
                </span>
                <h3 className="text-2xl font-serif text-white">
                  {story.name}
                </h3>
              </div>
            </div>

            {/* Case Sheet Details Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6 font-sans">
              <span className="text-xs uppercase tracking-widest text-gold font-medium font-sans">Transformation Case Study</span>
              <div className="w-12 h-[1px] bg-gold/45" />

              {/* Before & After summary */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 border border-gold/10 bg-editorial-grey/5">
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-red-400 font-bold mb-1">Before Presence</span>
                  <p className="text-xs text-alabaster/60 leading-relaxed italic">&ldquo;{story.before}&ldquo;</p>
                </div>
                <div>
                  <span className="block text-[8px] uppercase tracking-widest text-green-400 font-bold mb-1">Current Confidence</span>
                  <p className="text-xs text-white font-medium leading-relaxed italic">&ldquo;{story.confidence}&ldquo;</p>
                </div>
              </div>

              {/* Training Journey metrics */}
              <div className="space-y-4 pt-2 text-xs">
                <div>
                  <h4 className="font-semibold text-gold uppercase tracking-wider text-[9px] mb-1">The Core Challenges</h4>
                  <p className="text-alabaster/50 leading-relaxed">{story.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold uppercase tracking-wider text-[9px] mb-1">Poise Calibration Journey</h4>
                  <p className="text-alabaster/60 leading-relaxed">{story.journey}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold uppercase tracking-wider text-[9px] mb-1">Transformation Outcome</h4>
                  <p className="text-alabaster/50 leading-relaxed">{story.transformation}</p>
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Button href="/apply" variant="solid">Begin Your Transformation</Button>
                <Button href="/programs" variant="outline">Browse Cohort Schedules</Button>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
