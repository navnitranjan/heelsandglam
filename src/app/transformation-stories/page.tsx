'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, ShieldCheck, Heart, Sparkles, Star } from 'lucide-react';
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

const DETAILED_STORIES = [
  {
    name: "Aparna Sharma",
    role: "Pageant Finalist & Alumna",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    before: "Chronic cervical neck slumping (tech-neck), bent knees catwalk gait, and lack of visual self-possession during interviews.",
    challenges: "Postural fatigue after 10 minutes in 4-inch heels, chest breathing, and nervous visual darting under studio lights.",
    journey: "12-week somatic calibration coached by Aakanksha Anand. Focused on core decompression, center of gravity checks, and delayed gaze turn mechanics.",
    breakthrough: "Acquired straight-knee walk verticality and shoulder plate stabilization. Conquered gown carriage weight balance.",
    confidence: "Top 5 national pageant placement. Walks catwalk events for prominent clothing labels.",
    metrics: { posture: "98% Symmetry", heels: "100% Stability", vocal: "92% Resonance" }
  },
  {
    name: "Dr. Nikita Lal",
    role: "VP, Corporate Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    before: "Rapid pace of speech under executive meeting stress, uptalk sentence endings, and dropped chin stance when entering assemblies.",
    challenges: "Using verbal filler words, chest tightening during presentation openings, and structured styling coordinates mismatch.",
    journey: "Private vocal pitch training and capsule wardrobe draping mapping. Coached in table dining etiquette and international boardroom stance mechanics.",
    breakthrough: "Mastery of diaphragmatic pitch resonance and deliberate pause placement. Styled into structural blazer capsule wardrobe.",
    confidence: "Commands global executive meetings. Delivers keynote addresses with vocal poise and posture authority.",
    metrics: { posture: "95% Symmetry", heels: "85% Stability", vocal: "98% Resonance" }
  },
  {
    name: "Rhea Sen",
    role: "Founder, Creators Atelier",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    before: "Camera lens avoidance, shallow visual profile, and lack of signature brand aesthetic statement on digital grid channels.",
    challenges: "Self-conscious posture freezes in front of video cameras, lack of skin tone styling analysis, and rapid script delivery.",
    journey: "Color theory styling profiling, on-camera eye delay scripts training, and musculoskeletal carriage alignment.",
    breakthrough: "Coordinated camera lens focus delay. Hand gesture controls and posture symmetry calibrated under intense studio lights.",
    confidence: "Scaled creative agency with 150k+ followers, coordinates premium brand deals, and presents digital videos naturally.",
    metrics: { posture: "96% Symmetry", heels: "90% Stability", vocal: "95% Resonance" }
  }
];

export default function TransformationStoriesPage() {
  return (
    <div className="min-h-screen bg-obsidian text-pearl py-12 md:py-24 relative overflow-hidden">
      {/* Background glow backdrops */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[500px] h-[500px] bg-rosegold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Welcome Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-28 animate-fade-in relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-rosegold font-sans font-bold mb-4">
          The Proof • Before & After Files
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Transformation<br />
          <span className="text-champagne font-serif">Stories</span>
        </h1>
        <div className="w-16 h-[1px] bg-rosegold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          Chronological somatic portfolios documenting the transformations of leaders, models, and creators who calibrated their presence under Aakanksha Anand.
        </p>
      </div>

      {/* Case studies list */}
      <section className="luxury-container space-y-32 md:space-y-44 relative z-10 mb-20">
        {DETAILED_STORIES.map((story, idx) => {
          const waStoryMessage = encodeURIComponent(
            `Hi Aakanksha! I read the transformation story of ${story.name} on the website.\n\n` +
            `I am experiencing similar challenges: ${story.before}\n\n` +
            `I want to schedule my postural check call to target similar outcomes.`
          );

          return (
            <div 
              key={story.name}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-5 relative aspect-[3/4] border border-rosegold/15 overflow-hidden shadow-2xl ${
                idx % 2 === 1 ? 'lg:order-last' : ''
              }`}>
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 to-transparent z-10" />
                <Image 
                  src={story.image}
                  alt={story.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-103"
                />
                
                {/* Diagnostics overlays */}
                <div className="absolute top-6 left-6 z-20 flex flex-col space-y-2">
                  {Object.entries(story.metrics).map(([key, val]) => (
                    <span 
                      key={key} 
                      className="px-2.5 py-1 bg-obsidian/80 border border-rosegold/20 text-[9px] uppercase tracking-widest font-sans font-semibold text-rosegold rounded-xs"
                    >
                      {key}: {val}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-bold block mb-1">
                    {story.role}
                  </span>
                  <h3 className="text-3xl font-serif text-white">
                    {story.name}
                  </h3>
                </div>
              </div>

              {/* Text Case Folder Column */}
              <div className="lg:col-span-7 flex flex-col space-y-6">
                <span className="text-xs uppercase tracking-widest text-rosegold font-sans font-bold">Admissions Case File #{idx + 1}</span>
                <div className="w-12 h-[1px] bg-rosegold/40" />

                {/* Grid of details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 border border-rosegold/15 bg-burgundy/5">
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-red-400 font-bold mb-1">Before Presence</span>
                    <p className="text-xs text-pearl/70 leading-relaxed italic font-sans">&ldquo;{story.before}&rdquo;</p>
                  </div>
                  <div>
                    <span className="block text-[8px] uppercase tracking-widest text-green-400 font-bold mb-1">Transformation Outcome</span>
                    <p className="text-xs text-white leading-relaxed italic font-sans font-semibold">&ldquo;{story.confidence}&rdquo;</p>
                  </div>
                </div>

                {/* Bullet steps */}
                <div className="space-y-4 text-xs font-sans">
                  <div>
                    <h4 className="font-semibold text-rosegold uppercase tracking-wider text-[9px] mb-1">The Core Challenges</h4>
                    <p className="text-pearl/60 leading-relaxed">{story.challenges}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rosegold uppercase tracking-wider text-[9px] mb-1">Somatic Alignment Journey</h4>
                    <p className="text-pearl/70 leading-relaxed">{story.journey}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-rosegold uppercase tracking-wider text-[9px] mb-1">Transformation Breakthrough</h4>
                    <p className="text-pearl/60 leading-relaxed">{story.breakthrough}</p>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap gap-4 items-center">
                  <a 
                    href={`https://wa.me/919880012345?text=${waStoryMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                    <span>Inquire About Similar Outcome</span>
                  </a>
                  <Button href="/apply" variant="outline">
                    Initiate Admissions Pre-Screening
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </section>

    </div>
  );
}
