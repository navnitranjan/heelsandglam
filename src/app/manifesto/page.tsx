'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, Heart, TrendingUp, Award, Compass } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24 relative overflow-hidden">
      {/* Ambience glow backdrop */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gold/3 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-[450px] h-[450px] bg-gold/2 rounded-full blur-[130px] pointer-events-none" />

      {/* Editorial Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-28 animate-fade-in relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-semibold mb-4">
          The Declaration
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          The Heels & Glam<br />
          <span className="text-gold font-serif">Manifesto</span>
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          We believe confidence is not inherited—it is cultivated. This is our code of poise, posture, and presence for the modern woman.
        </p>
      </div>

      {/* Manifesto 6 Pillars Section */}
      <section className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10 mb-28">
        
        {/* Left Side: Large Column of Principles */}
        <div className="lg:col-span-8 space-y-16">
          {[
            {
              id: "01",
              title: "Confidence",
              icon: ShieldCheck,
              desc: "True confidence is not a performance or an assertion—it is preparation and alignment. When your spine is decompressed, your weight is centered, and your mind is present, you possess the self-possession to face any spotlight. We build confidence by restructuring kinetics and correcting somatic blocks."
            },
            {
              id: "02",
              title: "Presence",
              icon: Compass,
              desc: "Presence is the quiet authority that enters a room before you speak. It is the ability to cross thresholds calmly, hold deliberate eye contact delay, and modulate your vocal tone to command space. Presence ensures you are never just occupying a space; you are defining it."
            },
            {
              id: "03",
              title: "Elegance",
              icon: Sparkles,
              desc: "Elegance is not merely lookbook styling or expensive silks; it is kinetics. It is the straight-knee gait strike while pacing in high heels, the aligned seated carriage during corporate forums, and the non-verbal poise that leaves a lasting statement. Elegance is clean geometry in motion."
            },
            {
              id: "04",
              title: "Self Respect",
              icon: Heart,
              desc: "Self respect is the foundation of posture. Slouching is often a physical response to feeling small. By pulling your shoulders down and back, opening your chest, and lifting your crown, you declare your right to belong. Musculoskeletal alignment is a physical act of self-belief."
            },
            {
              id: "05",
              title: "Growth",
              icon: TrendingUp,
              desc: "Transformation requires discipline and continual improvement. Grooming habits, speech modulation exercises, and wardrobe planning are structured routines that require practice. We celebrate the step-by-step evolution of our alumnae from base metrics to spotlight-ready poise."
            },
            {
              id: "06",
              title: "Modern Femininity",
              icon: Award,
              desc: "Femininity is authority. It is the integration of styling details, vocal clarity, somatic presence, and personal branding into a unified power. We empower women to embrace their unique body geometry profiles, write their own narratives, and lead in any field."
            }
          ].map((pillar, idx) => (
            <motion.div 
              key={pillar.id}
              className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8 border-b border-gold/10 pb-12 last:border-b-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 sm:flex-col sm:space-x-0 sm:space-y-2 shrink-0">
                <span className="text-gold font-serif font-semibold text-lg sm:text-2xl leading-none">
                  {pillar.id}
                </span>
                <div className="p-3 bg-editorial-grey/5 border border-gold/15 text-gold rounded-full">
                  <pillar.icon className="w-5 h-5" />
                </div>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-serif text-white uppercase tracking-wider">{pillar.title}</h3>
                <p className="text-xs md:text-sm text-alabaster/70 font-sans leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side Sticky Lookbook Image */}
        <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-8">
          <div className="relative aspect-[3/4] border border-gold/20 overflow-hidden shadow-2xl">
            <Image 
              src="/images/runway-saree-lotus.jpg"
              alt="Aakanksha Anand runway catwalk showing poise and posture elegance"
              fill
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
          </div>
          
          <div className="p-6 border border-gold/15 bg-editorial-grey/5 space-y-4 text-center font-sans text-xs">
            <span className="text-[9px] uppercase tracking-widest text-gold font-bold block">The Poise Pledge</span>
            <p className="text-alabaster/60 leading-relaxed">
              &ldquo; poises changes how the world sees you. More importantly, it shifts how you look at yourself. Set your stance tall, align your center of gravity, and claim your presence.&rdquo;
            </p>
            <span className="text-[10px] text-white font-serif italic block font-semibold">— Aakanksha Anand</span>
          </div>
        </div>

      </section>

      {/* Invitation Section */}
      <div className="luxury-container text-center pt-12">
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">Will You Claim Your Presence?</h3>
        <p className="text-xs md:text-sm text-alabaster/50 font-sans max-w-lg mx-auto mb-8 leading-relaxed">
          Our cohorts are limited to small groups to ensure personalized posture screening and joint calibrations. Pre-prescreenings apply.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button href="/apply" variant="solid">Book Poise Assessment</Button>
          <Button href="/programs" variant="outline">Browse Cohort Syllabus</Button>
        </div>
      </div>

    </div>
  );
}
