'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Award, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24">
      
      {/* Editorial Header */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4">
          The Pedigree
        </span>
        <h1 className="text-4xl md:text-7xl font-serif tracking-luxury text-white uppercase mb-6">
          The Academy & Founder Story
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-2xl leading-relaxed font-sans">
          A premium personal transformation atelier bridging modeling pedigree, posture engineering, and executive presence coached by Aakanksha Anand.
        </p>
      </div>

      {/* Founder Profile - Meet Aakanksha Anand */}
      <section className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24 md:mb-36">
        {/* Profile Image */}
        <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/20 shadow-2xl">
          <div className="absolute inset-4 border border-gold/15 -translate-x-4 translate-y-4 pointer-events-none z-10" />
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Aakanksha Anand - Heels & Glam Founder"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Founder Story details */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">Founder & Head Coach</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">Aakanksha Anand</h2>
          <div className="w-12 h-[1px] bg-gold/40" />

          <blockquote className="text-lg font-serif italic text-champagne/95 leading-relaxed pl-6 border-l border-gold/20">
            &quot;Confidence changes the way the world sees you. More importantly, it changes the way you see yourself.&quot;
          </blockquote>

          <div className="space-y-4 text-xs md:text-sm text-alabaster/70 font-sans leading-relaxed">
            <p>
              Aakanksha Anand founded Heels & Glam with a simple vision: to help women become the most confident and polished version of themselves. 
              Having experienced the transformative power of grooming, presentation, and confidence firsthand, she created a platform where women can learn skills that go far beyond appearance.
            </p>
            <p>
              Under her direction, Heels & Glam has established a unique somatic poise method, focusing on joint decompression, heel balance, vocal clarity, styling architecture, and digital image strategy. 
              She believes every woman possesses a unique identity worth celebrating, and her coaching is structured to refine—not replace—your authentic self.
            </p>
            <p>
              Through hands-on mentorship, structured practice guidelines, and real-world simulations, Aakanksha Anand empowers women to discover their strengths and walk into any boardroom, runway, or pageant stage with absolute self-belief.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button href="/apply" variant="solid">Schedule Private Consultation</Button>
            <Button href="https://wa.me/919880012345" variant="outline" className="border-green-500/50 hover:bg-green-600 hover:border-green-600">
              Message Aakanksha on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Academy Story - Mission, Vision, and Values */}
      <section className="relative py-20 bg-editorial-grey/10 border-y border-gold/10 mb-24 md:mb-36">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <div className="p-8 border border-gold/15 bg-abyss flex flex-col space-y-4">
              <Compass className="w-8 h-8 text-gold" />
              <h3 className="text-2xl font-serif text-white">Our Mission</h3>
              <p className="text-xs md:text-sm text-alabaster/60 font-sans leading-relaxed">
                To empower women through structured confidence, grooming, communication, and personal presence training. 
                We provide the kinetic and aesthetic tools required to build self-belief, step into your authority, and command attention.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 border border-gold/15 bg-abyss flex flex-col space-y-4">
              <Sparkles className="w-8 h-8 text-gold" />
              <h3 className="text-2xl font-serif text-white">Our Vision</h3>
              <p className="text-xs md:text-sm text-alabaster/60 font-sans leading-relaxed">
                To become India&apos;s most trusted transformation academy for women seeking confidence, elegance, personal growth, and professional presence. 
                We aim to set the gold standard in high-fashion modeling, pageant prep, and corporate grooming pedagogy.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">The Foundation</span>
              <h3 className="text-3xl font-serif text-white mt-2">Our Core Values</h3>
              <div className="w-8 h-[1px] bg-gold/40 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "Confidence", desc: "True confidence comes from preparation, self-awareness, posture alignment, and growth." },
                { icon: Heart, title: "Authenticity", desc: "Every woman possesses a unique identity and physical structure worth celebrating." },
                { icon: Award, title: "Excellence", desc: "We encourage continual, disciplined improvement in presentation, speech, and self-development." },
                { icon: Sparkles, title: "Empowerment", desc: "Growth begins when women realize their full potential and take ownership of their presence." }
              ].map((value, idx) => (
                <div key={idx} className="p-6 border border-gold/10 bg-abyss/50 text-center flex flex-col items-center space-y-3">
                  <value.icon className="w-6 h-6 text-gold" />
                  <h4 className="text-base font-serif text-white uppercase tracking-wider">{value.title}</h4>
                  <p className="text-xs text-alabaster/55 font-sans leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Row */}
      <div className="luxury-container text-center">
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">Are You Ready to Transform Your Presence?</h3>
        <p className="text-xs md:text-sm text-alabaster/50 font-sans max-w-lg mx-auto mb-8 leading-relaxed">
          Limited slots are available for our upcoming autumn cohort. Individual screenings and skeletal posture checks are part of the admissions process.
        </p>
        <Button href="/programs" variant="solid">View Available Programs</Button>
      </div>

    </div>
  );
}
