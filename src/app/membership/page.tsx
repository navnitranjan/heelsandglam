'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Shield, Users, Award, Check } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24 relative overflow-hidden">
      {/* Background Decorative Gold Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-gold/2 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[450px] h-[450px] bg-gold/3 rounded-full blur-[140px] pointer-events-none" />

      {/* Page Header */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-28 animate-fade-in relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold mb-4">
          Elite Circle • Invitation Only
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          The Private Circle<br />
          <span className="text-gold font-serif">Membership</span>
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          An exclusive, invitation-only network for alumnae, corporate leaders, and fashion creators to maintain their presence, attend advanced sessions, and access VIP networking.
        </p>
      </div>

      {/* Features Overview */}
      <section className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 mb-28">
        
        {/* Left Side: Editorial Story */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <div className="space-y-4">
            <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-sans font-semibold">The Roster</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">Maintain Your Presence</h2>
            <div className="w-12 h-[1px] bg-gold/30" />
          </div>

          <p className="text-sm text-alabaster/70 font-sans leading-relaxed">
            poise is a practice, not a destination. Once you complete your initial cohort, maintaining your skeletal alignment, styling edge, and voice modulation requires continuous calibration. The Private Circle is built to sustain this momentum through advanced peer networks.
          </p>

          {/* Pillars List */}
          <div className="space-y-6 pt-4 font-sans text-xs">
            {[
              { icon: Shield, title: "Private Alumnae Community", desc: "A secure digital space to consult with Aakanksha Anand, share progress videos, and exchange career opportunities." },
              { icon: Sparkles, title: "Monthly Poise Calibration", desc: "Interactive monthly alignment check sessions on Lavelle Road to review posture coordinates and walk biomechanics." },
              { icon: Users, title: "VIP Networking Salons", desc: "Connect with entrepreneurs, corporate partners, and casting agencies during our high-society networking events." },
              { icon: Calendar, title: "Advanced Pageant prep & Shoots", desc: "Priority booking for custom portfolio lookbook photoshoots and gown styling masterclasses." }
            ].map((pillar, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="p-2 bg-editorial-grey/5 border border-gold/15 text-gold shrink-0">
                  <pillar.icon className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-semibold text-white uppercase tracking-wider text-[10px]">{pillar.title}</h4>
                  <p className="text-alabaster/50 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Image card */}
        <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/20 overflow-hidden shadow-2xl">
          <Image 
            src="/images/traditional-saree-styling.jpg"
            alt="Aakanksha Anand presenting at Zorains Studio styling workshop"
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-bold block mb-1">VIP Workshop</span>
            <p className="text-xs text-white/55 font-sans">Traditional Styling Masterclass Session</p>
          </div>
        </div>

      </section>

      {/* Circle Admission Process */}
      <section className="relative py-20 bg-editorial-grey/10 border-y border-gold/10 text-center mb-20">
        <div className="luxury-container max-w-xl space-y-6">
          <Award className="w-10 h-10 text-gold mx-auto mb-2" />
          <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wider">How to Secure Your Invite</h3>
          <div className="w-8 h-[1px] bg-gold/45 mx-auto" />
          <p className="text-xs md:text-sm text-alabaster/60 font-sans leading-relaxed">
            The Private Circle is open to graduates of our core signature programs (Grooming Mastery, Confidence & Presence, or Catwalk Fundamentals). Individual candidate admissions are approved directly by the founder desk.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button href="/apply" variant="solid">Request Your Invitation</Button>
            <Button href="https://wa.me/919742232322?text=Hi%20Aakanksha!%20I%20am%20interested%20in%20The%20Private%20Circle%20membership." variant="outline">Consult via WhatsApp</Button>
          </div>
        </div>
      </section>

    </div>
  );
}
