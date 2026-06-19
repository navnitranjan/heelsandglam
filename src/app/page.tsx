'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import GoldParticles from '@/components/ui/GoldParticles';
import TrustWidget from '@/components/features/TrustWidget';
import {
  ArrowRight,
  Check,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Compass,
  Star,
  MapPin,
  Mail,
  Award,
  Clock,
  ShieldCheck,
  Users,
  Maximize2,
  Mic,
  Fingerprint
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/lib/gtag';
import { getRecaptchaToken } from '@/lib/recaptcha';

// CUSTOM SVG BRAND ICONS
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

// TRANSFORMATION STORIES DATA (3 strongest)
const TRANSFORMATION_STORIES = [
  {
    name: "Aakanskha Anand",
    role: "Pageant Finalist & Alumna",
    image: "/images/founder-red-half-circle.jpg",
    quote: "Secured Top 5 National Pageant placement and runs catwalks with 98% posture symmetry.",
    summary: "From skeletal slumping and tech-neck to commanding runway stages with straight-knee precision and delayed eye gaze pivots."
  },
  {
    name: "Aakanskha Anand",
    role: "VP, Corporate Operations",
    quote: "Commands international operational assemblies with absolute vocal poise and posture composure.",
    image: "/images/founder-red-leaning.jpg",
    summary: "Overcame rapid speaking speed and collapsed shoulders. Now delivers executive presentations with diaphragmatic vocal projection."
  },
  {
    name: "Aakanskha Anand",
    role: "Founder, Creators Atelier",
    quote: "Expanded her atelier brand to 150k+ followers with clean camera-facing confidence.",
    image: "/images/founder-red-wind.jpg",
    summary: "Defeated camera anxiety and fragmented style. Curated a signature digital lookbook and calibrated gaze delay transitions."
  }
];

// FLAGSHIP PROGRAMS DATA (4 programs)
const FLAGSHIP_PROGRAMS = [
  {
    id: 'personal-grooming',
    name: 'Personal Grooming Mastery',
    tagline: 'Appearance management, styling fundamentals, and self-presentation techniques.',
    duration: '4 Weeks',
    href: '/fashion-grooming',
    image: '/images/traditional-saree-styling.jpg'
  },
  {
    id: 'confidence-presence',
    name: 'Confidence & Presence',
    tagline: 'Biomechanics of poise, vocal projection, and executive body language.',
    duration: '6 Weeks',
    href: '/confidence-coaching',
    image: '/images/founder-portrait-red-full.jpg'
  },
  {
    id: 'runway-modelling',
    name: 'Runway & Modelling',
    tagline: 'Heel mechanics, catwalk dynamics, posing, and portfolio shoots.',
    duration: '8 Weeks',
    href: '/modelling-classes',
    image: '/images/runway-saree-lotus.jpg'
  },
  {
    id: 'personal-branding',
    name: 'Personal Branding',
    tagline: 'Camera confidence, digital positioning, and identity strategy.',
    duration: '4 Weeks',
    href: '/personal-branding',
    image: '/images/fashion-week-runway-jeans.jpg'
  }
];

export default function Home() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 250]);

  // Testimonial Navigation
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Contact Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', cohort: 'personal-grooming', message: '', _honey: '' });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    try {
      const token = await getRecaptchaToken('submit_consultation');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          recaptchaToken: token,
          data: {
            name: contactForm.name,
            email: contactForm.email,
            phone: contactForm.phone,
            cohort: contactForm.cohort,
            message: contactForm.message,
            _honey: contactForm._honey
          }
        })
      });
      if (res.ok) {
        setContactSubmitted(true);
        trackEvent({ action: 'form_submit_consultation', category: 'Lead Generation', label: 'Request Consultation Form' });

        const waMsg = encodeURIComponent(
          `Hi Aakanksha! I requested a private consultation on Heels & Glam.\n\n` +
          `*Name:* ${contactForm.name}\n` +
          `*Email:* ${contactForm.email}\n` +
          `*Cohort Interest:* ${contactForm.cohort}\n` +
          `*Message / Goals:* ${contactForm.message}`
        );
        window.open(`https://wa.me/919742232322?text=${waMsg}`, '_blank');
      }
    } catch (err) {
      console.error('[Contact Submit Error]', err);
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-abyss text-alabaster overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 1: HERO
          One powerful statement. Two CTAs. Full viewport.
      ═══════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: backgroundY }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image
            src="/images/runway-saree-lotus.jpg"
            alt="Heels & Glam Academy — Runway Poise Showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_15%]"
          />
        </motion.div>

        {/* Floating Ambient Gold Particles */}
        <GoldParticles />

        <div className="absolute inset-0 bg-gradient-to-b from-abyss/85 via-abyss/45 to-abyss z-10" />

        <div className="luxury-container relative z-20 flex flex-col items-center text-center px-4 max-w-5xl">
          <span className="text-[11px] tracking-[0.35em] text-rosegold uppercase font-sans font-bold mb-6 block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              India&apos;s Premier Poise & Presence Academy
            </motion.span>
          </span>

          <h1 className="text-5xl md:text-8xl font-serif tracking-luxury text-white uppercase leading-none mb-8">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Transform Your
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block gold-shimmer-text italic"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Presence.
              </motion.span>
            </span>
          </h1>

          <motion.p
            className="text-base md:text-lg text-champagne/80 font-sans tracking-wide max-w-2xl leading-[1.8] mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Grooming, confidence, runway training, and personal branding — mentored by Aakanksha Anand in Bangalore.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center z-30"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              href="/apply"
              variant="solid"
              className="w-full sm:w-auto"
              onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Hero Primary CTA' })}
            >
              Begin Your Transformation
            </Button>
            <Button
              href="/programs"
              variant="outline"
              className="w-full sm:w-auto"
              onClick={() => trackEvent({ action: 'click_explore_programs', category: 'Engagement', label: 'Hero Secondary CTA' })}
            >
              Explore Programs
            </Button>
          </motion.div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 2: FOUNDER AUTHORITY
          Condensed 50%. Credibility-focused. No storytelling chapters.
      ═══════════════════════════════════════════════════════════════ */}
      <section id="founder" className="relative py-20 md:py-28 border-t border-gold/10 overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">

          {/* Portrait */}
          <div className="lg:col-span-5 relative w-full aspect-[3/4] overflow-hidden border border-gold/20 shadow-2xl group">
            <div className="absolute inset-0 bg-gold/5 z-10 transition-colors group-hover:bg-transparent duration-500" />
            <div className="absolute inset-3 border border-gold/15 z-20 pointer-events-none" />
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/images/founder-turquoise-oval.png"
                alt="Aakanksha Anand - Founder & Head Coach, Heels & Glam Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_20%] transition-all duration-1000 grayscale group-hover:grayscale-0"
              />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent z-25" />
          </div>

          {/* Founder Copy */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <span className="text-[11px] tracking-[0.25em] text-gold uppercase font-sans font-bold block">
              Meet the Founder
            </span>

            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Elegance is <span className="text-gold italic">Silent Authority.</span>
            </h2>

            <div className="w-12 h-[1px] bg-gold/40" />

            <p className="text-base md:text-lg text-champagne/80 font-serif italic leading-[1.8] border-l-2 border-gold/30 pl-6">
              &ldquo;Presence is not an accidental trait — it is a structural configuration of skeletal alignment, centered gravity, and diaphragmatic projection.&rdquo;
            </p>

            <p className="text-base md:text-lg text-alabaster/70 font-sans leading-[1.8]">
              Aakanksha Anand founded Heels & Glam as an elite transformation guild where corporate leaders, creators, and pageant contenders acquire the physical kinetics of authority. Through precise posture decompression, vocal resonance training, and bespoke styling, she prepares women to claim spatial authority — whether commanding a boardroom or walking a high-fashion runway.
            </p>

            {/* Signature */}
            <div className="pt-4 border-t border-gold/15">
              <span className="font-serif italic text-gold text-2xl tracking-widest block mb-1">
                Aakanksha Anand
              </span>
              <span className="text-[10px] uppercase tracking-widest text-pearl/40 font-sans font-semibold block">
                Founder • Luxury Presence Mentor • Transformation Coach
              </span>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/aakanksha-anand" variant="outline">About the Founder</Button>
            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 3: SIGNATURE TRANSFORMATION FRAMEWORK
          6 elegant pillars. Merged from Confidence Code + Methodology.
      ═══════════════════════════════════════════════════════════════ */}
      <section id="framework" className="relative py-20 md:py-28 border-t border-gold/10 bg-editorial-grey/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy/3 rounded-full blur-[130px] pointer-events-none" />
        <div className="luxury-container max-w-5xl relative z-10">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold block">
              The Signature Framework
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">
              The Confidence Code&trade;
            </h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
            <p className="text-base text-alabaster/60 max-w-2xl mx-auto leading-[1.8] font-sans">
              A multi-dimensional model designed by Aakanksha Anand, bridging physical mechanics, vocal gravitas, and identity positioning into a unified transformation methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {[
              { icon: Compass, title: "Presence", desc: "Command spatial authority through open posture framing, level scanning, and deliberate gaze pivots." },
              { icon: Maximize2, title: "Poise", desc: "Correct carriage biomechanics — spine verticality resets, shoulder decompression, and heels walk comfort." },
              { icon: Mic, title: "Communication", desc: "Unlock vocal resonance, speak from the diaphragm, and command pacing with deliberate pauses." },
              { icon: Fingerprint, title: "Style", desc: "Map body geometry silhouettes, identify skin colour theory, and build a signature capsule profile." },
              { icon: ShieldCheck, title: "Confidence", desc: "Re-pattern subconscious slumping, address impostor habits, and live your stature unconditionally." },
              { icon: Award, title: "Personal Brand", desc: "Align digital profile aesthetics, media assets, and offline presentation into a unified authority." }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 border border-gold/15 bg-editorial-grey/5 flex flex-col space-y-4 relative group hover:border-gold/30 transition-all duration-300"
              >
                <div className="p-3 bg-gold/5 border border-gold/15 text-gold w-fit rounded-full group-hover:bg-gold group-hover:text-abyss transition-colors duration-300">
                  <pillar.icon className="w-5 h-5" />
                </div>

                <span className="text-[10px] text-gold tracking-widest uppercase font-bold">
                  Pillar 0{idx + 1}
                </span>

                <h3 className="text-xl font-serif text-white uppercase tracking-wider">
                  {pillar.title}
                </h3>

                <p className="text-[15px] text-pearl/60 leading-[1.7]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 4: SUCCESS TRANSFORMATIONS
          3 strongest stories. Link to dedicated page.
      ═══════════════════════════════════════════════════════════════ */}
      <section id="transformations" className="relative py-20 md:py-28 border-t border-gold/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="luxury-container max-w-6xl relative z-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold block">
                Real Results
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">
                Transformation Stories
              </h2>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
            <Button href="/transformation-stories" variant="outline" className="mt-6 md:mt-0 self-start md:self-auto">
              View All Stories
            </Button>
          </div>

          {/* Story Cards */}
          <div className="min-h-[420px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {TRANSFORMATION_STORIES.filter((_, idx) => idx === testimonialIdx).map((story) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full"
                >
                  {/* Photo */}
                  <div className="lg:col-span-5 relative w-full aspect-[3/4] overflow-hidden border border-gold/20 shadow-2xl bg-black">
                    <div className="absolute inset-3 border border-gold/10 pointer-events-none z-10" />
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top transition-transform duration-700 hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-15" />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <span className="text-[10px] text-gold uppercase tracking-[0.25em] font-sans font-bold block mb-1">
                        {story.role}
                      </span>
                      <h4 className="text-3xl font-serif text-white font-medium uppercase tracking-wider">
                        {story.name}
                      </h4>
                    </div>
                  </div>

                  {/* Story Content */}
                  <div className="lg:col-span-7 flex flex-col space-y-6">
                    <p className="text-base md:text-lg text-alabaster/70 font-sans leading-[1.8]">
                      {story.summary}
                    </p>

                    <div className="p-6 border border-gold/25 bg-gold/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/3 rounded-full blur-xl pointer-events-none" />
                      <span className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center space-x-2 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-gold" />
                        <span>Transformation Outcome</span>
                      </span>
                      <p className="text-lg text-white leading-[1.7] font-serif italic font-medium">
                        &ldquo;{story.quote}&rdquo;
                      </p>
                    </div>

                    <div className="pt-2">
                      <Button
                        href="/apply"
                        variant="solid"
                        onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Transformation CTA' })}
                      >
                        Start Your Transformation
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 mt-10">
            <button
              onClick={() => setTestimonialIdx((prev) => (prev - 1 + TRANSFORMATION_STORIES.length) % TRANSFORMATION_STORIES.length)}
              className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-abyss transition-all cursor-pointer"
              aria-label="Previous Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-[11px] uppercase tracking-widest text-gold font-sans font-bold">
              {testimonialIdx + 1} of {TRANSFORMATION_STORIES.length}
            </span>
            <button
              onClick={() => setTestimonialIdx((prev) => (prev + 1) % TRANSFORMATION_STORIES.length)}
              className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-abyss transition-all cursor-pointer"
              aria-label="Next Story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 5: PROGRAMS PREVIEW
          4 flagship offerings. Clean cards. Link to full detail.
      ═══════════════════════════════════════════════════════════════ */}
      <section id="programs" className="relative py-20 md:py-28 border-t border-gold/10 bg-editorial-grey/5">
        <div className="luxury-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold block">
                Bespoke Mentorship
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">
                Signature Programs
              </h2>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
            <Button href="/programs" variant="outline" className="mt-6 md:mt-0 self-start md:self-auto">
              Explore All Programs
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLAGSHIP_PROGRAMS.map((program) => (
              <Link
                key={program.id}
                href={program.href}
                className="group relative flex flex-col border border-gold/10 hover:border-gold/40 transition-all duration-500 overflow-hidden bg-abyss"
                onClick={() => trackEvent({ action: 'click_program', category: 'Engagement', label: program.name })}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/30 to-transparent z-10" />

                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-abyss/90 border border-gold/30 flex items-center space-x-1.5">
                    <Clock className="w-3 h-3 text-gold" />
                    <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">{program.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow space-y-3">
                  <h3 className="text-lg font-serif text-white uppercase tracking-wider leading-snug">
                    {program.name}
                  </h3>
                  <p className="text-[15px] text-pearl/55 font-sans leading-[1.7] flex-grow">
                    {program.tagline}
                  </p>
                  <span className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-widest text-gold font-sans font-semibold pt-2 group-hover:text-white transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          SECTION 6: SOCIAL PROOF
          Google rating + stats + compact strip. Dramatic condensation.
      ═══════════════════════════════════════════════════════════════ */}
      <section id="social-proof" className="relative py-20 md:py-28 border-t border-gold/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[130px] pointer-events-none" />
        <div className="luxury-container max-w-5xl relative z-10">

          <div className="text-center mb-14 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold block">
              Verified Trust
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">
              Proven Excellence
            </h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </div>

          {/* Stats Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {[
              { value: "4.9", label: "Google Rating", sublabel: "out of 5.0" },
              { value: "84+", label: "Verified Reviews", sublabel: "Google Business" },
              { value: "500+", label: "Alumnae", sublabel: "Trained & Graduated" },
              { value: "12", label: "Cohort Limit", sublabel: "Per Batch" }
            ].map((stat, idx) => (
              <div key={idx} className="p-6 border border-gold/15 bg-editorial-grey/5 text-center space-y-2 hover:border-gold/30 transition-all duration-300">
                <span className="block text-3xl md:text-4xl font-serif text-gold">{stat.value}</span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-white font-sans font-semibold">{stat.label}</span>
                <span className="block text-[10px] uppercase tracking-widest text-pearl/40 font-sans">{stat.sublabel}</span>
              </div>
            ))}
          </div>

          {/* Google Review CTA */}
          <div className="p-8 md:p-10 border border-gold/15 bg-black/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-center md:text-left">
                <span className="block text-lg font-serif text-white">4.9 / 5.0 on Google Business</span>
                <span className="block text-[11px] text-pearl/50 font-sans uppercase tracking-widest">84 verified candidate reviews</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://g.page/r/CQ-UR9T15uCeEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 bg-gold text-abyss hover:bg-white hover:text-abyss text-xs uppercase tracking-luxury font-sans font-semibold transition-all text-center"
                onClick={() => trackEvent({ action: 'click_google_review_cta', category: 'Trust', label: 'Social Proof Review CTA' })}
              >
                Write a Review
              </a>
              <a
                href="https://g.page/r/CQ-UR9T15uCeEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 border border-gold/30 hover:border-gold text-gold hover:text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all text-center"
                onClick={() => trackEvent({ action: 'click_google_profile_cta', category: 'Trust', label: 'Social Proof Google Profile' })}
              >
                View Business Profile
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* ═══════════════════════════════════════════════════════════════
          TRUST & VERIFICATION QR CTAS
      ═══════════════════════════════════════════════════════════════ */}
      <TrustWidget />

      {/* ═══════════════════════════════════════════════════════════════
          SECTION 7: ADMISSIONS CTA
          High emotional impact. Form + contact info. Address integrated.
      ═══════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-20 md:py-28 border-t border-gold/10 bg-editorial-grey/5 scroll-mt-24">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-bold">
              Start Your Transformation
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Secure Your <span className="text-gold italic">Invitation.</span>
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />
            <p className="text-base md:text-lg text-alabaster/65 font-sans leading-[1.8]">
              Applications are open for the upcoming cohort. Seats are strictly limited to ensure individual posture mapping, personalized styling, and focused mentorship.
            </p>

            <div className="space-y-4 pt-2 font-sans text-sm">
              <div className="flex items-center space-x-4">
                <div className="p-3 border border-gold/20 bg-editorial-grey/20">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-alabaster/40 uppercase tracking-widest text-[10px] font-semibold">Flagship Atelier</span>
                  <span className="text-alabaster/80 text-[15px]">SNN RAJ GREENBAY, Phase II, Electronic City, Karnataka 560100</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 border border-green-500/20 bg-green-950/20">
                  <WhatsAppIcon className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <span className="block text-green-400 uppercase tracking-widest text-[10px] font-semibold">WhatsApp Admissions</span>
                  <a
                    href="https://wa.me/919742232322"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-alabaster/80 hover:text-gold transition-colors font-medium text-[15px]"
                    onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Admissions WhatsApp Link' })}
                  >
                    +91 97422 32322
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 border border-gold/20 bg-editorial-grey/20">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-alabaster/40 uppercase tracking-widest text-[10px] font-semibold">Email</span>
                  <span className="text-alabaster/80 font-medium text-[15px]">heelsandglam@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <a
                href="https://wa.me/919742232322"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-green-500/50 hover:bg-green-600 hover:border-green-600 px-6 py-3 text-xs uppercase tracking-widest text-green-400 hover:text-white font-sans font-semibold transition-all"
                onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Admissions WhatsApp Button' })}
              >
                <WhatsAppIcon className="w-4 h-4 text-green-400 fill-green-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-12 border border-gold/10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!contactSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleContactSubmit}
                    className="flex flex-col space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-serif text-white uppercase tracking-wide">Request Consultation</h3>
                    <p className="text-[15px] text-alabaster/55 font-sans -mt-4 leading-[1.7]">Submit your details below to schedule your alignment screening.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="contact-name" className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">FULL NAME</label>
                        <input
                          type="text"
                          id="contact-name"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-sm text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                          disabled={isSubmittingContact}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">EMAIL ADDRESS</label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-sm text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                          disabled={isSubmittingContact}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="contact-phone" className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">PHONE NUMBER</label>
                        <input
                          type="tel"
                          id="contact-phone"
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-sm text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                          disabled={isSubmittingContact}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="contact-cohort" className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">COHORT SELECTION</label>
                        <select
                          id="contact-cohort"
                          value={contactForm.cohort}
                          onChange={(e) => setContactForm({ ...contactForm, cohort: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-sm text-gold font-sans focus:outline-none focus:border-gold transition-colors"
                          disabled={isSubmittingContact}
                        >
                          <option value="personal-grooming" className="bg-abyss text-white">Personal Grooming Mastery</option>
                          <option value="confidence" className="bg-abyss text-white">Confidence & Presence Program</option>
                          <option value="runway" className="bg-abyss text-white">Runway & Modelling Fundamentals</option>
                          <option value="branding" className="bg-abyss text-white">Personal Branding Program</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">WHAT COMPELS YOU TO RE-PATTERN YOUR PRESENCE?</label>
                      <textarea
                        id="contact-message"
                        rows={3}
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Share your confidence goals or challenges..."
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-sm text-alabaster font-sans focus:outline-none focus:border-gold transition-colors placeholder:opacity-30"
                        disabled={isSubmittingContact}
                      />
                    </div>


                    {/* Honeypot field — hidden from humans, catches bots */}
                    <div className="absolute -left-[9999px]" aria-hidden="true">
                      <input
                        type="text"
                        name="_honey"
                        tabIndex={-1}
                        autoComplete="off"
                        value={contactForm._honey}
                        onChange={(e) => setContactForm({ ...contactForm, _honey: e.target.value })}
                      />
                    </div>

                    <Button type="submit" variant="solid" className="w-full py-4 font-semibold text-xs tracking-luxury" disabled={isSubmittingContact}>
                      {isSubmittingContact ? 'Submitting Request...' : 'Request Your Invitation'}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 rounded-full border border-gold bg-gold/10 flex items-center justify-center mb-6">
                      <Check className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-2xl font-serif text-white mb-2">Request Filed Successfully</h3>
                    <p className="text-[15px] text-alabaster/60 font-sans max-w-sm leading-[1.7] mb-6">
                      Thank you. Our head registrar will review your goals and schedule a consultation.
                    </p>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({ name: '', email: '', phone: '', cohort: 'personal-grooming', message: '', _honey: '' });
                      }}
                      className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans cursor-pointer"
                    >
                      File another consultation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
