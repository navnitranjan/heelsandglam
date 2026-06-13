'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote, Compass, Sparkles, Award, Layers } from 'lucide-react';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/lib/gtag';

export default function FounderExperiencePage() {
  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-20 relative overflow-hidden">
      {/* Decorative Gold Ambient Gradients */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-[500px] h-[500px] bg-gold/2 rounded-full blur-[140px] pointer-events-none" />

      {/* Cinematic Hero Frame */}
      <section className="luxury-container pt-4 mb-24 md:mb-36 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold block">
            Founder Biography
          </span>
          <h1 className="text-5xl md:text-8xl font-serif tracking-luxury text-white uppercase leading-none">
            Aakanksha Anand
          </h1>
          <div className="w-20 h-[1px] bg-gold/30 mx-auto my-6" />
          <p className="text-xs uppercase tracking-widest text-alabaster/40 font-sans max-w-md mx-auto">
            A Vogue-Inspired Story of Poise, Somatic Alignment, and Personal Presence
          </p>
        </motion.div>
      </section>

      {/* CHAPTER 1: THE BEGINNING */}
      <section className="luxury-container py-16 border-t border-gold/10 relative z-10 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Chapter 1
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">
              The Beginning
            </h2>
            <div className="w-12 h-[1px] bg-gold/30" />
            <div className="space-y-4 text-sm text-alabaster/70 font-sans leading-relaxed">
              <p>
                Heels & Glam did not begin as an institution; it started as an observation. Aakanksha Anand realized early in her modeling career that the fashion industry often focused strictly on outer appearances, neglecting the internal, somatic foundation of self-belief.
              </p>
              <p>
                She saw that true elegance was not inherited—it was structured. It lay in the physics of how a woman aligned her spine, the breath mechanics that projected her vocal resonance, and the stylistic details that allowed her personality to command attention.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl">
            <Image 
              src="/images/founder-portrait-red-half.jpg"
              alt="Aakanksha Anand - Elegant headshot"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CHAPTER 2: THE JOURNEY */}
      <section className="luxury-container py-16 border-t border-gold/10 relative z-10 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image 
              src="/images/traditional-saree-styling.jpg"
              alt="Aakanksha Anand conducting styling workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Chapter 2
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">
              The Journey
            </h2>
            <div className="w-12 h-[1px] bg-gold/30" />
            <div className="space-y-4 text-sm text-alabaster/70 font-sans leading-relaxed">
              <p>
                Her journey took her through modeling campaigns, styling ateliers, and fashion runways. Experiencing the transformational power of styling and postural corrections firsthand, she began coaching aspiring pageant contestants and corporate leaders.
              </p>
              <p>
                She developed the Somatic Poise Method, combining joint decompression, heel balance, vocal projection, and wardrobe strategy into a structured roadmap. The goal was to build a comprehensive platform where women could learn to present their authentic selves with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 3: THE VISION */}
      <section className="relative py-24 bg-editorial-grey/10 border-y border-gold/10 mb-24 md:mb-32">
        <div className="luxury-container max-w-4xl text-center flex flex-col items-center space-y-6">
          <Quote className="w-10 h-10 text-gold/30 mx-auto" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-semibold font-sans block">
            Chapter 3 • The Vision
          </span>
          <h3 className="text-2xl md:text-4xl font-serif text-white tracking-wide italic leading-snug max-w-3xl">
            &ldquo;My vision is to build India&apos;s most trusted transformation academy, helping women discover their presence, realign their physical stance, and enter every room with confidence and purpose.&rdquo;
          </h3>
          <div className="w-12 h-[1px] bg-gold/45" />
          <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">
            — Aakanksha Anand
          </span>
        </div>
      </section>

      {/* CHAPTER 4: EMPOWERING WOMEN */}
      <section className="luxury-container py-16 border-t border-gold/10 relative z-10 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Chapter 4
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">
              Empowering Women
            </h2>
            <div className="w-12 h-[1px] bg-gold/30" />
            <div className="space-y-4 text-sm text-alabaster/70 font-sans leading-relaxed">
              <p>
                Empowerment is not a concept; it is a physical reality. When a woman stands tall, opens her chest, and modulates her voice, the room shifts. Aakanksha Anand has mentored corporate leaders, VPs, and creative entrepreneurs to step into their authority.
              </p>
              <p>
                By helping women release positional sub-consciousness, conquer screen anxiety, and styling capsule profiles, she prepares them to claim their spaces unconditionally.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl">
            <Image 
              src="/images/founder-portrait-red-full.jpg"
              alt="Aakanksha Anand - Pose showcase"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CHAPTER 5: TRANSFORMATION PHILOSOPHY */}
      <section className="luxury-container py-16 border-t border-gold/10 relative z-10 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl order-2 lg:order-1">
            <Image 
              src="/images/runway-saree-lotus.jpg"
              alt="Aakanksha Anand catwalk pose"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-7 flex flex-col space-y-6 order-1 lg:order-2">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Chapter 5
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">
              Transformation Philosophy
            </h2>
            <div className="w-12 h-[1px] bg-gold/30" />
            <div className="space-y-4 text-sm text-alabaster/70 font-sans leading-relaxed">
              <p>
                We teach posture not as a rigid rule, but as a release of skeletal tension. Under the Somatic Poise Method, we re-pattern tech-neck slumping and heels walk discomfort.
              </p>
              <p>
                By focusing on spine verticality, straight-knee strikes, and weight distribution, the posture is corrected from the core out. This biomechanical foundation is matched with diaphragmatic speech projection and style alignment to establish executive presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 6: BUILDING HEELS & GLAM */}
      <section className="luxury-container py-16 border-t border-gold/10 relative z-10 mb-24 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
              Chapter 6
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">
              Building Heels & Glam
            </h2>
            <div className="w-12 h-[1px] bg-gold/30" />
            <div className="space-y-4 text-sm text-alabaster/70 font-sans leading-relaxed">
              <p>
                Building Heels & Glam was about establishing a flagship atelier on Lavelle Road, Bangalore, to offer personalized cohort mentorship. Under her guidance, the academy has integrated portfolio lookbook photoshoots and formal dining etiquette modules into all signature programs.
              </p>
              <p>
                The institution has successfully built a pipeline to pageant organizations and modeling agencies, bridging the gap between training and casting opportunities.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl">
            <Image 
              src="/images/fashion-week-runway-jeans.jpg"
              alt="Aakanksha Anand walking the Global Fashion Week runway"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CHAPTER 7: THE FUTURE */}
      <section className="luxury-container py-16 border-t border-gold/10 relative z-10 mb-24 md:mb-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
            Chapter 7
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">
            The Future
          </h2>
          <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          <div className="space-y-4 text-sm text-alabaster/70 font-sans leading-relaxed max-w-xl mx-auto">
            <p>
              Looking forward, Heels & Glam is set to expand its Lavelle Road Flagship, integrate advanced biometric movement metrics, and introduce exclusive corporate wellness retreats across India.
            </p>
            <p>
              Our goal remains: to build a supportive community of ambitious women who walk, speak, and lead with absolute poise.
            </p>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button 
              href="/apply" 
              variant="solid"
              onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Founder Page Apply CTA' })}
            >
              Apply for Next Cohort
            </Button>
            <Button 
              href="https://wa.me/919880012345" 
              variant="outline" 
              className="border-green-500/50 hover:bg-green-600"
              onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Founder Page WhatsApp Consult' })}
            >
              Consult with Aakanksha via WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
