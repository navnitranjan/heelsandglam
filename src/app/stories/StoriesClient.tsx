'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Quote, Compass } from 'lucide-react';
import Button from '@/components/ui/Button';

const DOCUMENTARY_STORIES = [
  {
    name: "Aparna Sharma",
    role: "Pageant Finalist & Alumna",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    metrics: { posture: "98% Symmetry", heels: "100% Stability", vocal: "92% Resonance" },
    timeline: {
      before: {
        title: "01. The Stature Baseline",
        desc: "Experienced chronic cervical spine slumping (tech-neck), walked with bent knees in high heels, and lacked confidence-driven presence during social gatherings."
      },
      training: {
        title: "02. Posture Engineering",
        desc: "Mentored directly by Aakanksha Anand. Focused on musculoskeletal decompression, center of gravity checks, linear step mechanics, and fabric gown carriage."
      },
      breakthrough: {
        title: "03. Catwalk Precision",
        desc: "Realigned skeletal verticality. Successfully walked with straight-knee catwalk precision, correcting hip drop posture."
      },
      transformation: {
        title: "04. Stage Dominance",
        desc: "Placed in the Top 5 of national beauty pageants and began walking runway events for prominent designer clothing labels."
      },
      today: {
        title: "05. Stature Mentorship",
        desc: "Currently runs a boutique poise atelier, coaching upcoming models on catwalk kinetics and sharing her confidence path."
      }
    }
  },
  {
    name: "Dr. Nikita Lal",
    role: "VP, Corporate Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    metrics: { posture: "95% Symmetry", heels: "85% Stability", vocal: "98% Resonance" },
    timeline: {
      before: {
        title: "01. The Stature Baseline",
        desc: "Felt intense vocal shaking under high-stakes boardroom pressure, spoke at a rapid pace, and slumped her shoulders when entering corporate assemblies."
      },
      training: {
        title: "02. Posture Engineering",
        desc: "Trained in diaphragmatic breathing projection, vocal pitch modulation checks, formal table dining etiquette, and boardroom carriage stance."
      },
      breakthrough: {
        title: "03. Catwalk Precision",
        desc: "Mastered lower vocal pitch resonance and deliberate pause placement. Styled into structural blazer capsule wardrobe coordinates."
      },
      transformation: {
        title: "04. Stage Dominance",
        desc: "Began commanding global corporate meetings. Delivers keynote addresses with absolute vocal poise and posture authority."
      },
      today: {
        title: "05. Stature Mentorship",
        desc: "Senior Executive and board member, serving as a corporate mentor for upcoming female leaders in spatial confidence."
      }
    }
  },
  {
    name: "Rhea Sen",
    role: "Founder, Creators Atelier",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    metrics: { posture: "96% Symmetry", heels: "90% Stability", vocal: "95% Resonance" },
    timeline: {
      before: {
        title: "01. The Stature Baseline",
        desc: "Avoided camera lenses, lacked a clear visual style statement, suffered from rapid script delivery, and had shallow posture alignment."
      },
      training: {
        title: "02. Posture Engineering",
        desc: "Coached in personal color theory styling, on-camera eye delay scripts, musculoskeletal carriage alignment, and gesture controls."
      },
      breakthrough: {
        title: "03. Catwalk Precision",
        desc: "Acquired control over video presence. Coordinated camera lens focus delay and controlled hand gesture stabilization under studio lights."
      },
      transformation: {
        title: "04. Stage Dominance",
        desc: "Grew her creative brand atelier channel to 150k+ followers, coordinate premium brand styling deals, and host video interviews."
      },
      today: {
        title: "05. Stature Mentorship",
        desc: "Creative director and producer, hosting media workshops on digital positioning and video content confidence."
      }
    }
  }
];

export default function StoriesClient() {
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [activeStages, setActiveStages] = useState<{ [key: number]: keyof typeof DOCUMENTARY_STORIES[0]['timeline'] }>({
    0: 'before',
    1: 'before',
    2: 'before'
  });

  const handleStageSelect = (storyIdx: number, stageKey: keyof typeof DOCUMENTARY_STORIES[0]['timeline']) => {
    setActiveStages(prev => ({ ...prev, [storyIdx]: stageKey }));
  };

  const currentStory = DOCUMENTARY_STORIES[activeStoryIdx];
  const currentStage = activeStages[activeStoryIdx];

  const stages: { key: keyof typeof DOCUMENTARY_STORIES[0]['timeline']; label: string }[] = [
    { key: 'before', label: 'Before' },
    { key: 'training', label: 'Training' },
    { key: 'breakthrough', label: 'Breakthrough' },
    { key: 'transformation', label: 'Transformation' },
    { key: 'today', label: 'Today' }
  ];

  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-gold/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[450px] h-[450px] bg-gold/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Page Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold mb-4">
          Student Documentary Stories • Poise Chronicles
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Documentary<br />
          <span className="text-gold font-serif">Stories</span>
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          Explore the chronological somatic portfolios documenting before & after posture, vocal modulation, and styling transformations.
        </p>
      </div>

      {/* Student Selector Tabs */}
      <div className="luxury-container max-w-2xl flex justify-center space-x-6 mb-16 border-b border-gold/15 pb-4 relative z-10 font-sans text-xs">
        {DOCUMENTARY_STORIES.map((s, idx) => (
          <button
            key={s.name}
            onClick={() => setActiveStoryIdx(idx)}
            className={`pb-2 transition-all cursor-pointer font-medium uppercase tracking-widest ${
              activeStoryIdx === idx ? 'text-gold border-b-2 border-gold font-semibold' : 'text-alabaster/40 hover:text-white'
            }`}
          >
            {s.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Main Documentary Board */}
      <section className="luxury-container relative z-10 mb-20 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Profile Folder */}
          <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl bg-black">
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-transparent to-transparent z-10" />
            <Image 
              src={currentStory.image}
              alt={currentStory.name}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top transition-transform duration-700 hover:scale-103"
            />
            
            {/* Top diagnostic pills */}
            <div className="absolute top-6 left-6 z-20 flex flex-col space-y-2">
              {Object.entries(currentStory.metrics).map(([k, v]) => (
                <span 
                  key={k} 
                  className="px-2.5 py-1 bg-abyss/80 border border-gold/20 text-[9px] uppercase tracking-widest font-sans font-semibold text-gold"
                >
                  {k}: {v}
                </span>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-bold block mb-1">
                {currentStory.role}
              </span>
              <h3 className="text-3xl font-serif text-white">
                {currentStory.name}
              </h3>
            </div>
          </div>

          {/* Chronological Timeline Folder */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="flex items-center space-x-2 text-gold">
              <Compass className="w-5 h-5 animate-spin-slow" />
              <span className="text-xs uppercase tracking-widest font-sans font-bold">Documentary Timeline</span>
            </div>
            
            {/* Timeline Steps Indicator (Horizontal Track) */}
            <div className="relative font-sans text-xs flex justify-between items-center border-b border-gold/10 pb-6">
              {/* Horizontal Line Connector */}
              <div className="absolute top-[14px] left-[15px] right-[15px] h-[1px] bg-gold/15 z-0" />
              
              {stages.map((stage) => {
                const isActive = currentStage === stage.key;
                return (
                  <button
                    key={stage.key}
                    onClick={() => handleStageSelect(activeStoryIdx, stage.key)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-gold border-gold text-abyss scale-110 shadow-lg shadow-gold/20' 
                        : 'bg-abyss border-gold/30 text-gold group-hover:border-gold'
                    }`}>
                      <Star className={`w-3 h-3 ${isActive ? 'fill-abyss' : 'fill-none'}`} />
                    </div>
                    {/* Label */}
                    <span className={`text-[10px] mt-2 uppercase tracking-widest transition-colors ${
                      isActive ? 'text-gold font-semibold' : 'text-alabaster/40 group-hover:text-white'
                    }`}>
                      {stage.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Description Card */}
            <div className="min-h-[160px] p-6 border border-gold/15 bg-editorial-grey/5 relative overflow-hidden rounded-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/3 rounded-full blur-xl pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">
                    {stages.find(s => s.key === currentStage)?.label} Phase
                  </span>
                  <h4 className="text-xl font-serif text-white uppercase tracking-wider">
                    {currentStory.timeline[currentStage].title}
                  </h4>
                  <p className="text-sm text-pearl/70 leading-relaxed font-sans font-light">
                    {currentStory.timeline[currentStage].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a 
                href={`https://wa.me/919742232322?text=${encodeURIComponent(`Hi Aakanksha! I completed reading the documentary timeline of ${currentStory.name} on the website.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Consult on Similar Journey</span>
              </a>
              <Button href="/apply" variant="outline">
                Begin Pre-Screening Call
              </Button>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
