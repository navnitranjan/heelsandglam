'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Compass, 
  Award, 
  Heart, 
  ArrowRight, 
  MapPin, 
  Check, 
  Eye, 
  Layers, 
  ChevronRight, 
  Quote
} from 'lucide-react';
import Button from '@/components/ui/Button';

export default function FounderExperiencePage() {
  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-20 relative overflow-hidden">
      {/* Background Decorative Gold Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-0 w-[500px] h-[500px] bg-gold/2 rounded-full blur-[140px] pointer-events-none" />

      {/* CHAPTER I: EDITORIAL SPLIT HERO CANVAS */}
      <section className="luxury-container min-h-[85vh] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 md:mb-36 pt-4">
        {/* Typographic Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold block">
              Chapter I • The Architect of Poise
            </span>
            <h1 className="text-5xl md:text-8xl font-serif tracking-luxury text-white uppercase leading-none">
              Aakanksha <br />
              <span className="text-gold font-serif">Anand</span>
            </h1>
            <div className="w-20 h-[1px] bg-gold/40 my-6" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base md:text-lg text-champagne/90 leading-relaxed font-sans max-w-xl font-light"
          >
            &ldquo;Confidence is not a trait we are born with. It is an active geometry, a somatic alignment, and a daily decision to command the space you enter.&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button href="#beginning" variant="outline" className="border-gold/30 text-gold hover:border-gold">
              Read Her Story
            </Button>
            <Button href="/apply" variant="solid">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>

        {/* Cinematic Portrait Image Overlay */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full aspect-[3/4] md:aspect-[4/5] border border-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            <Image 
              src="/images/founder-portrait-red-half.jpg"
              alt="Aakanksha Anand - Founder and head coach of Heels & Glam in an elegant red dress"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-700 hover:scale-103"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-bold block mb-1">
                Founder Portrait
              </span>
              <p className="text-xs text-white/50 font-sans tracking-wide">
                Directing from Heels & Glam Flagship, Lavelle Road
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHAPTER II: THE BEGINNING (ASYMMETRICAL MAGAZINE GRID) */}
      <section id="beginning" className="luxury-container py-20 border-t border-gold/10 relative z-10 mb-24 md:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column Image Placement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl">
              <div className="absolute inset-4 border border-gold/10 -translate-x-3 translate-y-3 pointer-events-none z-10" />
              <Image 
                src="/images/traditional-saree-styling.jpg"
                alt="Aakanksha Anand conducting styling workshop in traditional red and gold saree"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
            <p className="text-[10px] text-alabaster/40 font-sans tracking-wide text-center italic">
              Aakanksha Anand showcasing heritage styling and drape alignments.
            </p>
          </div>

          {/* Right Column Text Placement */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Chapter II
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white uppercase mt-2">
                The Beginning
              </h2>
              <div className="w-12 h-[1px] bg-gold/30 mt-4" />
            </div>

            <div className="space-y-6 text-sm text-alabaster/70 font-sans leading-relaxed">
              <p>
                Heels & Glam did not start as a business; it was born from a personal journey of discovery. Aakanksha Anand realized early in her modeling career that the industry often focused solely on outer aesthetics while leaving the internal foundation of self-belief unguided.
              </p>
              <p>
                She saw that true elegance was not inherited—it was structured. It lay in the physics of how a woman aligned her spine, the breath mechanics that stabilized her vocal resonance, and the stylistic details that allowed her personality to command attention.
              </p>
              <p>
                Firsthand experiencing the transformational power of grooming and postural corrections, she set out to create a structured coaching platform. It would be a space where women could master kinetics, style capsule wardrobe profiles, and release the physical anxieties that compress presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER III: THE VISION (VOGUE-STYLE FULL WIDTH QUOTE PANEL) */}
      <section className="relative py-28 bg-editorial-grey/10 border-y border-gold/10 mb-24 md:mb-36">
        <div className="luxury-container max-w-4xl text-center flex flex-col items-center space-y-8">
          <Quote className="w-12 h-12 text-gold/30 mx-auto" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-semibold font-sans block">
            Chapter III • The Core Vision
          </span>
          <h3 className="text-3xl md:text-5xl font-serif text-white tracking-wide italic leading-snug max-w-3xl">
            &ldquo;My vision is to build India&apos;s most trusted transformation academy, helping women step out of the shadows, align their physical stance, and enter every room without hesitation.&rdquo;
          </h3>
          <div className="w-16 h-[1px] bg-gold/45" />
          <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">
            — Aakanksha Anand
          </span>
        </div>
      </section>

      {/* CHAPTER IV: THE TRANSFORMATION PHILOSOPHY (IMMERSIVE KINETICS DETAIL) */}
      <section className="luxury-container py-20 mb-24 md:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Editorial Text Column */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Chapter IV
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white uppercase mt-2">
                Somatic Transformation Philosophy
              </h2>
              <div className="w-12 h-[1px] bg-gold/30 mt-4" />
            </div>

            <p className="text-base text-champagne/90 font-serif italic pl-4 border-l border-gold/25">
              We teach posture not as a rigid rule, but as a dynamic release of skeletal tension.
            </p>

            <div className="space-y-6 text-sm text-alabaster/70 font-sans leading-relaxed">
              <p>
                Aakanksha Anand&apos;s curriculum centers around the **Somatic Poise Method**. This approach bypasses standard posing tricks, focusing instead on structural joints, spine decompression, and weight distribution.
              </p>
              <p>
                Many women suffer from chronic cervical slumping (tech-neck) and hip-tilt instability caused by walking incorrectly in high heels. Her programs re-pattern these kinetics, training the core to support weight while allowing the shoulders to settle down and back, projecting authority.
              </p>
              <p>
                By connecting structural alignment with voice projection and wardrobe styling, the transformation is complete—creating a polished, unified presence.
              </p>
            </div>

            {/* Kinetic Markers grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 font-sans text-xs">
              {[
                { title: "Spine Verticality", desc: "Decompress cervical vertebrae to align the crown of the head." },
                { title: "Gait Precision", desc: "Straight-knee landing mechanics and heel-to-toe rolls." },
                { title: "Vocal Gravitas", desc: "Speaking from the diaphragm to stabilize pitching under stress." },
                { title: "Styling Silhouette", desc: "Matching silhouettes with body geometry profiles." }
              ].map((marker, idx) => (
                <div key={idx} className="p-4 border border-gold/10 bg-editorial-grey/5 space-y-1">
                  <span className="block font-semibold text-gold text-[10px] uppercase tracking-wider">{marker.title}</span>
                  <p className="text-alabaster/50 leading-relaxed">{marker.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Full Body Stance Image */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] md:aspect-[4/5] border border-gold/15 overflow-hidden shadow-2xl">
              <Image 
                src="/images/founder-portrait-red-full.jpg"
                alt="Aakanksha Anand standing full length posing in a red dress"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* CHAPTER V: EMPOWERING WOMEN (KEY CLIENT PROFILES) */}
      <section className="relative py-24 bg-editorial-grey/10 border-t border-gold/10 mb-24 md:mb-36">
        <div className="luxury-container">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
              Chapter V • The Impact
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Empowering Modern Women
            </h2>
            <div className="w-12 h-[1px] bg-gold/40 mt-4 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
            {[
              { 
                cohort: "Corporate Leaders", 
                focus: "Executive Presence",
                desc: "Mentoring executives, VPs, and rising leaders to command boardrooms, eliminate verbal fillers, and carry themselves with stature during high-stakes pitches."
              },
              { 
                cohort: "Aspiring Models & Pageants", 
                focus: "Catwalk Mastery",
                desc: "Correcting gait curves, styling formal wear gowns, and coaching camera confidence for top pageants and modeling lookbook photo shoots."
              },
              { 
                cohort: "Creators & Entrepreneurs", 
                focus: "Personal Branding",
                desc: "Helping founders and content creators conquer lens anxiety, write engaging content formats, and present themselves with style."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-gold/10 bg-abyss flex flex-col space-y-4 shadow-xl">
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">{item.focus}</span>
                <h3 className="text-2xl font-serif text-white uppercase">{item.cohort}</h3>
                <p className="text-xs text-alabaster/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER VI: MENTORSHIP & ACADEMY JOURNEY (REAL PERFORMANCE STAGING) */}
      <section className="luxury-container py-20 mb-24 md:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side Catwalk Image */}
          <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl">
            <div className="absolute inset-4 border border-gold/15 -translate-x-3 translate-y-3 pointer-events-none z-10" />
            <Image 
              src="/images/fashion-week-runway-jeans.jpg"
              alt="Aakanksha Anand mentoring runway walk at Global Fashion Week"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* Right Side Timeline/Detail Column */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div>
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">
                Chapter VI
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white uppercase mt-2">
                Mentorship & Academy Journey
              </h2>
              <div className="w-12 h-[1px] bg-gold/30 mt-4" />
            </div>

            <p className="text-sm text-alabaster/70 font-sans leading-relaxed">
              Mentorship is not lecturing; it is hands-on adjustment. Aakanksha Anand conducts every masterclass program with personalized alignment checks. Under her pedigree, Heels & Glam has established a signature pipeline to India&apos;s prominent styling and fashion organizations.
            </p>

            {/* Curated Timeline milestones */}
            <div className="space-y-6 pt-4 font-sans text-xs">
              {[
                { year: "2024", milestone: "Flagship Atelier Launched", desc: "Opened premium coaching premises on Lavelle Road, Bangalore, featuring a dedicated runway corridor." },
                { year: "2025", milestone: "The Pageant Staging Pipeline", desc: "Partnered with national pageant organizations to choreograph final contestants in poise and gown carriage." },
                { year: "2026", milestone: "Somatic Poise Integration", desc: "Structured joint mechanics and diaphragm resonance checks into all signature student curriculum profiles." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <span className="text-gold font-serif font-semibold text-sm pt-0.5">{item.year}</span>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-white uppercase tracking-wider text-[10px]">{item.milestone}</h4>
                    <p className="text-alabaster/50 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CHAPTER VII: PERSONAL MESSAGE & CTA INVITATION */}
      <section className="relative py-24 bg-editorial-grey/10 border-t border-gold/10">
        <div className="luxury-container max-w-2xl text-center space-y-8">
          
          <div className="relative aspect-[3/4] max-w-xs mx-auto border border-gold/15 overflow-hidden shadow-xl mb-6">
            <Image 
              src="/images/runway-saree-lotus.jpg"
              alt="Aakanksha Anand catwalk walk in pink lotus painted saree"
              fill
              sizes="(max-width: 768px) 100vw, 30vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
          </div>

          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold block">
            Chapter VII • Invitation
          </span>
          <h2 className="text-4xl font-serif text-white uppercase">
            Begin Your Transformation
          </h2>
          <div className="w-12 h-[1px] bg-gold/45 mx-auto" />
          
          <blockquote className="text-base font-serif italic text-champagne/90 leading-relaxed pl-4 max-w-xl mx-auto">
            &ldquo;My mission is to help you discover the quiet authority that lies within you. Together, we will correct your posture, align your styling statements, and train you to own every room you enter.&rdquo;
          </blockquote>

          <div className="font-serif italic text-sm text-gold mt-6 select-none">
            Aakanksha Anand
          </div>

          <div className="pt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button href="/apply" variant="solid">
              Apply for Next Cohort
            </Button>
            <Button href="https://wa.me/919880012345" variant="outline" className="border-green-500/50 hover:bg-green-600">
              Consult with Aakanksha via WhatsApp
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
