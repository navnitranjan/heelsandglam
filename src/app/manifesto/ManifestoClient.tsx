'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  Heart, 
  TrendingUp, 
  ArrowRight,
  Fingerprint,
  Mic,
  Maximize2
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/lib/gtag';

export default function ManifestoClient() {
  const pillars = [
    {
      num: "I",
      title: "Presence",
      subtitle: "The spatial Stature",
      desc: "Presence is the quiet authority that enters a room before you do. It is not an assertion, but an alignment—the ability to occupy space with absolute ease, level gazes, and an unhurried, commanding stillness.",
      phrase: "We do not fit into spaces; we define them.",
      image: "/images/founder-portrait-red-full.jpg"
    },
    {
      num: "II",
      title: "Confidence",
      subtitle: "The Inner Resonance",
      desc: "Confidence is structural symmetry. When the chest is open and the cervical slumps are released, internal belief stabilizes. True self-possession is the physical manifestation of musculoskeletal alignment.",
      phrase: "Your posture is the architecture of your belief.",
      image: "/images/founder-portrait-red-half.jpg"
    },
    {
      num: "III",
      title: "Elegance",
      subtitle: "The Kinetic Geometry",
      desc: "Elegance is clean biomechanics. It is the straight-knee gait strike, the fluid arm swing pacing, the balanced posture in high heels, and the subtle, deliberate pauses that establish a high-status presence.",
      phrase: "Elegance is silence in motion.",
      image: "/images/runway-saree-lotus.jpg"
    },
    {
      num: "IV",
      title: "Self Respect",
      subtitle: "The Spatial Right",
      desc: "Lifting your crown and pulling your shoulders back is an act of identity. We refuse to collapse our frames for the comfort of others. A tall stance is a physical declaration of belonging.",
      phrase: "Set your frame tall. Claim your spatial boundaries.",
      image: "/images/traditional-saree-styling.jpg"
    },
    {
      num: "V",
      title: "Growth",
      subtitle: "The Refinement Protocol",
      desc: "Transformation is not an accident; it is a discipline. Through deliberate practice of walk kinetics, vocal modulation, styling palettes, and social protocols, we shape our presence step-by-step.",
      phrase: "Refinement is the ultimate form of self-mastery.",
      image: "/images/fashion-week-runway-jeans.jpg"
    },
    {
      num: "VI",
      title: "Modern Femininity",
      subtitle: "The Sovereign Authority",
      desc: "We integrate visual style, vocal projection, body kinetics, and personal branding into a singular, undeniable force. Modern femininity is sovereign, strategic, and unconditionally visible.",
      phrase: "Femininity is absolute power.",
      image: "/images/founder-portrait-red-full.jpg"
    }
  ];

  const confidenceCode = [
    { icon: Compass, title: "Presence", desc: "Command spatial authority through open postures, level scanning, and unhurried entries." },
    { icon: Maximize2, title: "Poise", desc: "Master the biomechanics of carriage—spine verticality, shoulder release, and heels walk comfort." },
    { icon: Mic, title: "Communication", desc: "Speak from the diaphragm, modulate vocal pitch, and control rate of speech using strategic pauses." },
    { icon: Fingerprint, title: "Style", desc: "Map your unique body geometry and personal color palettes to design a signature visual profile." },
    { icon: ShieldCheck, title: "Confidence", desc: "Conquer impostor dynamics and somatic blocks by habituating posture verticality metrics." },
    { icon: Award, title: "Personal Brand", desc: "Format online and offline assets into a cohesive profile expressing executive authority." }
  ];

  return (
    <div className="min-h-screen bg-obsidian text-pearl relative overflow-hidden font-sans">
      {/* Decorative Brand Ambience */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-burgundy/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-rosegold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. CINEMATIC HERO SLIDE */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 border-b border-rosegold/10">
        <div className="space-y-6 max-w-4xl relative z-10">
          <motion.span 
            className="text-[10px] uppercase tracking-[0.45em] text-rosegold font-bold block"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            THE DECLARED CODE OF ATELIER
          </motion.span>
          
          <motion.h1 
            className="text-5xl md:text-9xl font-serif text-white tracking-luxury leading-none uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            The Heels & Glam<br />
            <span className="text-champagne">Manifesto</span>
          </motion.h1>
          
          <motion.div 
            className="w-20 h-[1px] bg-rosegold/30 mx-auto my-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-xs md:text-sm uppercase tracking-[0.25em] text-champagne max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Confidence is not inherited — it is built. Stature is not a trait — it is kinematics. Discover the sovereign code of presence.
          </motion.p>
        </div>

        {/* Brand memory tagline overlay */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.35em] text-pearl/40 font-mono">
          The Art of Presence. The Science of Elegance.
        </div>
      </section>

      {/* 2. THE CINEMATIC PILLARS SECTION */}
      <section className="py-24 border-b border-rosegold/10 relative z-10">
        <div className="luxury-container mb-16 text-center space-y-4 max-w-3xl">
          <span className="text-[9px] uppercase tracking-widest text-rosegold font-bold block">01 / DECALOGUE OF ALIGNMENT</span>
          <h2 className="text-3xl md:text-6xl font-serif text-white uppercase tracking-wider">The Six Principles</h2>
          <div className="w-12 h-[1px] bg-rosegold/20 mx-auto" />
        </div>

        <div className="space-y-36">
          {pillars.map((pillar, idx) => (
            <div 
              key={pillar.num}
              className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            >
              {/* Image side */}
              <motion.div 
                className={`lg:col-span-6 relative aspect-[4/5] border border-rosegold/15 overflow-hidden group shadow-2xl ${
                  idx % 2 === 1 ? 'lg:order-last' : ''
                }`}
                initial={{ opacity: 0, scale: 0.98, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent z-10" />
                <Image 
                  src={pillar.image}
                  alt={`${pillar.title} - ${pillar.subtitle}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute left-6 top-6 z-20 text-white/10 font-serif text-8xl md:text-9xl leading-none font-bold">
                  {pillar.num}
                </div>
              </motion.div>

              {/* Copy side */}
              <motion.div 
                className="lg:col-span-6 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-[10px] uppercase tracking-[0.25em] text-rosegold font-bold block">
                  Principle {pillar.num} • {pillar.subtitle}
                </span>
                
                <h3 className="text-4xl md:text-6xl font-serif text-white uppercase leading-none">
                  {pillar.title}
                </h3>
                
                <div className="w-16 h-[1px] bg-rosegold/30" />
                
                <p className="text-sm md:text-base text-pearl/75 leading-relaxed font-light font-sans">
                  {pillar.desc}
                </p>

                <div className="p-4 border-l border-rosegold/30 bg-burgundy/5 text-xs text-champagne leading-relaxed italic uppercase tracking-wider font-sans">
                  &ldquo;{pillar.phrase}&rdquo;
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROPRIETARY FRAMEWORK: THE CONFIDENCE CODE */}
      <section className="py-24 bg-burgundy/5 border-b border-rosegold/10 relative z-10">
        <div className="luxury-container max-w-5xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-rosegold font-bold block">
              THE PROPRIETARY FRAMEWORK
            </span>
            <h2 className="text-3xl md:text-6xl font-serif text-white uppercase tracking-wider">
              The Confidence Code
            </h2>
            <div className="w-12 h-[1px] bg-rosegold/20 mx-auto" />
            <p className="text-xs md:text-sm text-pearl/50 uppercase tracking-widest max-w-xl mx-auto leading-relaxed font-sans font-light">
              Our structured diagnostic blueprint mapping musculoskeletal stature, style geometry, and vocal authority across six core dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {confidenceCode.map((code, idx) => (
              <motion.div 
                key={idx}
                className="p-8 border border-rosegold/15 bg-obsidian/45 flex flex-col space-y-4 relative group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="p-3 bg-burgundy/5 border border-rosegold/15 text-rosegold w-fit rounded-full group-hover:bg-rosegold group-hover:text-obsidian transition-colors duration-300">
                  <code.icon className="w-5 h-5" />
                </div>
                
                <span className="text-[10px] text-rosegold tracking-widest uppercase font-bold">
                  Pillar 0{idx + 1}
                </span>
                
                <h3 className="text-lg font-serif text-white uppercase tracking-wider">
                  {code.title}
                </h3>
                
                <p className="text-xs text-pearl/60 leading-relaxed font-light">
                  {code.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE INVITATION / ADMISSIONS ROW */}
      <section className="py-24 text-center relative z-10">
        <div className="luxury-container max-w-3xl space-y-8">
          <span className="text-[10px] uppercase tracking-[0.4em] text-rosegold font-bold block">
            SELECTIVE ADMISSIONS
          </span>
          
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase tracking-luxury">
            Begin Your Transformation
          </h2>
          
          <div className="w-16 h-[1px] bg-rosegold/30 mx-auto" />
          
          <p className="text-xs md:text-sm text-pearl/50 font-sans max-w-lg mx-auto leading-relaxed">
            Admissions to Heels & Glam programs are restricted to batch cohorts of 12. We audit candidates for skeletal biomechanics and commitment. Direct pre-screenings apply.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              href="/apply" 
              variant="solid"
              onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Manifesto Apply CTA' })}
            >
              Request Your Invitation
            </Button>
            <Button 
              href="/programs" 
              variant="outline"
              onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Manifesto Programs CTA' })}
            >
              Browse Transformation Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
