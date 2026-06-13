'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Compass, 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Users, 
  Award, 
  Clock, 
  Camera, 
  ShieldCheck, 
  Heart,
  MessageSquare,
  ChevronDown,
  Info,
  Layers,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import Button from '@/components/ui/Button';

// CUSTOM SVG BRAND ICONS
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

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

// 1. OFFICIAL MASTER PROGRAMS DATA
const SIGNATURE_PROGRAMS = [
  {
    id: 'personal-grooming',
    slug: 'personal-grooming-mastery',
    name: 'Personal Grooming Mastery',
    tagline: 'Learn appearance management, styling fundamentals, and self-presentation techniques.',
    imageSrc: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    curriculums: [
      'Haute couture styling & color alignment templates',
      'Wardrobe engineering & capsule creation',
      'Daily beauty fundamentals & skincare architecture',
      'Personal poise & elegance posture realignment'
    ]
  },
  {
    id: 'confidence-presence',
    slug: 'confidence-presence-program',
    name: 'Confidence & Presence Program',
    tagline: 'Build self-belief, body language communication, and executive presence.',
    imageSrc: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=800',
    curriculums: [
      'Musculoskeletal alignment and body language confidence',
      'Public speaking gravitas & articulation structures',
      'Postural confidence coaching & mental boundary building',
      'Social etiquette & elite group interaction pacing'
    ]
  },
  {
    id: 'runway-modelling',
    slug: 'runway-modelling-fundamentals',
    name: 'Runway & Modelling Fundamentals',
    tagline: 'Learn posture, catwalk kinetics, and fashion presentation techniques.',
    imageSrc: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    curriculums: [
      'Ramp walk mechanics, balance, and pacing physics',
      'Studio posing templates & structural modeling postures',
      'Facial expression control & emotional focus projection',
      'Spotlight mapping & camera angles confidence'
    ]
  },
  {
    id: 'personal-branding',
    slug: 'personal-branding-program',
    name: 'Personal Branding Program',
    tagline: 'Build a strong, distinct personal identity both online and offline.',
    imageSrc: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    curriculums: [
      'Social media profile positioning & grid design aesthetics',
      'Speaking confidently on camera & video communication',
      'Professional identity coaching & corporate styling templates',
      'Strategic self-branding & local media marketing'
    ]
  }
];

// 2. OFFICIAL ROADMAP PHASES
const TRANSFORMATION_ROADMAP = [
  { phase: 'Phase 1', title: 'Assessment & Self Discovery', desc: 'Determine baseline posture, walk physics, personal style metrics, and confidence blockages.' },
  { phase: 'Phase 2', title: 'Confidence Foundation', desc: 'Break down physical sub-consciousness, and study standard posture alignment techniques.' },
  { phase: 'Phase 3', title: 'Grooming & Styling', desc: 'Personal color styling analysis, wardrobe mapping, and high-end aesthetic presentation habits.' },
  { phase: 'Phase 4', title: 'Communication & Presence', desc: 'Train vocal projection, speech modulation, active presence, and non-verbal body kinetics.' },
  { phase: 'Phase 5', title: 'Modelling & Presentation', desc: 'Study the physical parameters of ramp walking, pose framing, and camera angle control.' },
  { phase: 'Phase 6', title: 'Personal Brand Development', desc: 'Synthesize your story into a strong online presence and professional media packaging.' },
  { phase: 'Phase 7', title: 'Transformation Showcase', desc: 'Step out onto the graduation catwalk and capture your professional before/after lookbook.' }
];

// 3. OFFICIAL TESTIMONIALS
const OFFICIAL_TESTIMONIALS = [
  {
    quote: "Joining Heels & Glam transformed the way I carry myself. I learned confidence, communication and presentation skills that continue to help me every day.",
    name: "Aparna Sharma",
    role: "Pageant Runner-up & Runway Alumna",
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The academy helped me overcome self-doubt and become more comfortable in professional and social settings. The posture training is unmatched.",
    name: "Dr. Nikita Lal",
    role: "Corporate Leader & Public Speaker",
    avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The grooming and confidence modules gave me practical tools that improved both my personal and professional life. Aakanksha Anand is a brilliant mentor.",
    name: "Rhea Sen",
    role: "Content Creator & Entrepreneur",
    avatarSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
  }
];

// 4. OFFICIAL FAQS
const OFFICIAL_FAQS = [
  {
    q: "Who can join?",
    a: "Any woman seeking confidence, grooming, communication or personal presence development. Our students range from young students to mature executives."
  },
  {
    q: "Do I need modelling experience?",
    a: "No. Beginners are welcome. We start from ground-level posture mechanics, balance points, and walk basics."
  },
  {
    q: "Is this only for aspiring models?",
    a: "No. Our programs benefit college students, corporate professionals, entrepreneurs, and creators who wish to stand tall and project authority."
  },
  {
    q: "Are classes online or offline?",
    a: "Program formats vary by batch. We organize intensive, physical runway bootcamps alongside select online theory/branding modules."
  },
  {
    q: "How do I apply?",
    a: "You can apply directly via our admissions questionnaire page or schedule a free consultation with our coaching team on WhatsApp."
  }
];

export default function Home() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Parallax Scroller Setup
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 800], [0, 200]);

  // Form states
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % OFFICIAL_TESTIMONIALS.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-abyss text-alabaster overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1920')`,
            y: heroBgY 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/85 via-abyss/45 to-abyss z-10" />

        {/* Floating background lights */}
        <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-gold/5 rounded-full blur-[100px] pointer-events-none z-10" />
        <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] bg-gold-dust/5 rounded-full blur-[100px] pointer-events-none z-10" />

        <div className="luxury-container relative z-20 flex flex-col items-center text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-[10px] tracking-[0.3em] text-gold uppercase font-sans font-medium mb-6">
              Heels & Glam Academy by Aakanksha Anand
            </span>
            
            <h1 className="text-5xl md:text-8xl font-serif tracking-luxury text-white uppercase leading-none mb-6">
              Transform Your Confidence.<br />
              <span className="text-gold font-serif">Own Every Room.</span>
            </h1>

            <p className="text-sm md:text-lg text-champagne/80 font-sans tracking-wide max-w-2xl leading-relaxed mb-10">
              India&apos;s premier boutique personal grooming, confidence-building, modelling, and personal branding academy. 
              We believe confidence is not inherited—it is cultivated.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
              <Button href="/apply" variant="solid" className="w-full sm:w-auto">
                Book Free Consultation
              </Button>
              <Button href="#programs" variant="outline" className="w-full sm:w-auto">
                Join Next Batch
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2">
          <span className="text-[9px] tracking-[0.25em] text-alabaster/40 font-sans uppercase">Discover Presence</span>
          <motion.div 
            className="w-[1px] h-10 bg-gold/30 relative overflow-hidden"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-gold"
              animate={{ y: ["0%", "200%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT HEELS & GLAM */}
      <section id="about" className="relative py-24 md:py-36 border-t border-gold/10">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Transformation Guild
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Elegance is More Than Appearance.
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />

            <div className="space-y-4 text-sm md:text-base text-alabaster/70 font-sans leading-relaxed">
              <p className="font-serif italic text-gold text-lg mb-2">
                &quot;It is the confidence to enter a room without hesitation. It is the ability to communicate with clarity. It is the posture that reflects self-belief. It is the presence that leaves a lasting impression.&quot;
              </p>
              <p>
                At Heels & Glam, we help women develop these qualities through structured training, expert mentorship, and practical, real-world transformation. 
                Our academy combines poise, body posture, vocal projection, wardrobe styling, dining etiquette, runway walk, and personal branding into a unified curriculum.
              </p>
              <p>
                Our transformation programs are designed not only for aspiring runway models but also for college students, corporate professionals, entrepreneurs, content creators, and ambitious women who wish to project authority and style.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="flex space-x-3 items-start">
                <div className="p-2 border border-gold/20 bg-editorial-grey/20 mt-1">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-gold mb-1 font-sans font-semibold">Structured Poise</h4>
                  <p className="text-xs text-alabaster/55 font-sans leading-snug">Spine-crown decompression, gait kinetics, and core elevation training.</p>
                </div>
              </div>

              <div className="flex space-x-3 items-start">
                <div className="p-2 border border-gold/20 bg-editorial-grey/20 mt-1">
                  <Sparkles className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-gold mb-1 font-sans font-semibold">Empowerment Blueprint</h4>
                  <p className="text-xs text-alabaster/55 font-sans leading-snug">Personal style mapping, current affairs communication, and online branding.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping editorial layout */}
          <div className="lg:col-span-5 relative w-full aspect-[3/4] flex justify-center items-center">
            <div className="absolute inset-4 border border-gold/25 -translate-x-4 translate-y-4 pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden border border-gold/15 shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
                alt="Elegance Masterclass"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
            </div>
            
            <div className="absolute bottom-6 right-[-10px] p-6 glass-panel flex flex-col space-y-2 max-w-[240px]">
              <span className="text-[9px] tracking-widest uppercase text-gold font-sans font-semibold">The Core Philosophy</span>
              <span className="text-base font-serif text-white leading-tight">Confidence is Cultivated</span>
              <p className="text-[10px] text-alabaster/50 font-sans leading-normal">Elegance is not inherited. It is a refined skill practiced with purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER AUTHORITY SECTION */}
      <section id="founder" className="relative py-24 md:py-36 bg-editorial-grey/10 border-y border-gold/10">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Grid */}
          <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden border border-gold/20 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Aakanksha Anand"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold block mb-1">Academy Founder & Head Coach</span>
              <h3 className="text-3xl font-serif text-white">Aakanksha Anand</h3>
            </div>
          </div>

          {/* Founder Story content */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Vogue Mentorship
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Meet Aakanksha Anand.
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />

            <blockquote className="text-lg md:text-xl font-serif italic text-champagne/90 leading-relaxed pl-6 border-l border-gold/30">
              &quot;Confidence changes the way the world sees you. More importantly, it changes the way you see yourself.&quot;
            </blockquote>

            <div className="space-y-4 text-xs md:text-sm text-alabaster/70 font-sans leading-relaxed">
              <p>
                Aakanksha Anand founded Heels & Glam with a clear vision: to help women become the most confident and expressive versions of themselves. 
                Having experienced the profound personal transformation of grooming, styling, and presence firsthand, she created a platform dedicated to coaching skills that extend far beyond aesthetics.
              </p>
              <p>
                Through individual posture correction, vocal modulation, and media branding mentorship, she has helped thousands of college students, corporate professionals, and pageant titleholders build authority and authentic presence.
              </p>
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold/10">
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-gold font-light">100%</span>
                <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Empowerment Rate</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-gold font-light">1,000s</span>
                <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Alumni Coached</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-gold font-light">Lavelle Rd</span>
                <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Flagship Atelier</span>
              </div>
            </div>

            <Button href="/academy" variant="outline" className="self-start">
              Read Founder Story
            </Button>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE PROGRAMS */}
      <section id="programs" className="relative py-24 md:py-36 border-b border-gold/10">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Elite Curriculums
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Signature Programs
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4 mb-6" />
          <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl leading-relaxed">
            Four specialized courses designed to cultivate posture, style, speaking gravitas, and personal identity.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-8">
          {SIGNATURE_PROGRAMS.map((program) => (
            <div 
              key={program.id}
              className="group relative flex flex-col bg-editorial-grey/10 border border-gold/15 transition-all duration-500 hover:border-gold/50 hover:bg-editorial-grey/20 p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Program Card Visual */}
                <div className="lg:col-span-5 relative aspect-square overflow-hidden border border-gold/10">
                  <Image 
                    src={program.imageSrc}
                    alt={program.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 15vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-abyss/40 to-transparent" />
                </div>

                {/* Program Details */}
                <div className="lg:col-span-7 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300 mb-2">
                    {program.name}
                  </h3>
                  <p className="text-xs text-alabaster/60 font-sans leading-relaxed mb-4">
                    {program.tagline}
                  </p>
                  
                  {/* Curriculums mapping */}
                  <div className="space-y-1.5 mb-6">
                    {program.curriculums.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-[10px] text-alabaster/80 font-sans">
                        <Check className="w-3 h-3 text-gold shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href="/programs"
                    className="text-[10px] uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans font-semibold self-start flex items-center space-x-1"
                  >
                    <span>View Cohort Details</span>
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="/programs" variant="solid">
            Explore All Syllabus Details
          </Button>
        </div>
      </section>

      {/* 5. STUDENT TRANSFORMATION JOURNEY */}
      <section id="roadmap" className="relative py-24 md:py-36 bg-editorial-grey/5 border-b border-gold/10">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Gait & Style Milestones
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Student Transformation Journey
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4 mb-6" />
          <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl leading-relaxed">
            Our step-by-step development pipeline designed to structure confidence, styling, and personal presence.
          </p>
        </div>

        {/* Interactive Roadmap Layout */}
        <div className="luxury-container relative max-w-5xl">
          {/* Central Connecting Vertical Line for desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/20 -translate-x-1/2" />

          <div className="space-y-12">
            {TRANSFORMATION_ROADMAP.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Node Pointer */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold border-4 border-abyss z-10" />

                {/* Content Panel */}
                <div className="pl-12 md:pl-0 md:w-1/2 px-0 md:px-8">
                  <div className="p-6 border border-gold/15 bg-editorial-grey/10 hover:border-gold/30 transition-all duration-350">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-semibold font-sans block mb-1">
                      {item.phase}
                    </span>
                    <h4 className="text-lg font-serif text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Empty Spacer Column for layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SKELETAL COMPARISON */}
      <section id="somatic-comparison" className="relative py-24 md:py-36 border-b border-gold/10">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Somatic Posture Analysis
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Before vs After Transformation
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4 mb-6" />
          <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl leading-relaxed">
            Drag the cursor overlay to analyze postural alignment correction, tech-neck release, and core elevation.
          </p>
        </div>

        {/* Posture Compare Slider */}
        <div className="luxury-container flex flex-col items-center">
          <div 
            ref={sliderRef}
            className="relative w-full max-w-3xl aspect-[16/10] md:aspect-[16/9] bg-abyss border border-gold/15 overflow-hidden select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Before (Slouched) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200')` }}
              />
              <svg className="absolute inset-0 w-full h-full stroke-red-500/40 stroke-2" fill="none">
                <line x1="43%" y1="20%" x2="52%" y2="85%" strokeDasharray="5,5" />
                <circle cx="43%" cy="20%" r="6" fill="#ef4444" />
                <circle cx="46%" cy="45%" r="6" fill="#ef4444" />
                <circle cx="52%" cy="85%" r="6" fill="#ef4444" />
              </svg>
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-red-950/80 border border-red-500/20 text-[9px] uppercase tracking-widest text-red-200 font-sans">
                Before: Cervical Slump & Pelvic Drop
              </div>
            </div>

            {/* After (Correct) */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-abyss"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-75"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200')` }}
              />
              <svg className="absolute inset-0 w-full h-full stroke-gold stroke-2" fill="none">
                <line x1="47%" y1="15%" x2="47%" y2="85%" />
                <circle cx="47%" cy="15%" r="6" fill="#C5A059" />
                <circle cx="47%" cy="45%" r="6" fill="#C5A059" />
                <circle cx="47%" cy="85%" r="6" fill="#C5A059" />
              </svg>
              <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gold/90 border border-gold/30 text-[9px] uppercase tracking-widest text-abyss font-sans font-medium">
                After: Somatic Alignment & Poise Elevation
              </div>
            </div>

            {/* Drag Handle */}
            <div 
              className="absolute top-0 bottom-0 w-[1px] bg-gold z-10 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold bg-abyss flex items-center justify-center shadow-lg">
                <span className="text-[12px] text-gold font-sans font-medium select-none">↔</span>
              </div>
            </div>
          </div>

          {/* Stats metrics layout */}
          <div className="w-full max-w-3xl grid grid-cols-3 gap-4 md:gap-8 mt-10 text-center">
            <div className="p-6 border border-gold/10 bg-editorial-grey/5">
              <span className="block text-2xl md:text-3xl font-serif text-gold font-light">+15%</span>
              <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Spine Decompression</span>
            </div>
            <div className="p-6 border border-gold/10 bg-editorial-grey/5">
              <span className="block text-2xl md:text-3xl font-serif text-gold font-light">98%</span>
              <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Symmetry Index</span>
            </div>
            <div className="p-6 border border-gold/10 bg-editorial-grey/5">
              <span className="block text-2xl md:text-3xl font-serif text-gold font-light">100%</span>
              <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">High-Heel Balance</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY HEELS & GLAM */}
      <section id="why-choose" className="relative py-24 md:py-36 bg-editorial-grey/5 border-b border-gold/10">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Structured poise
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Why Heels & Glam?
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />
            <p className="text-sm text-alabaster/60 font-sans leading-relaxed">
              We focus on a highly tailored, scientific approach to posture. Our students don&apos;t just learn to walk; they undergo a total musculoskeletal adaptation to hold themselves with maximum impact.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gold/10 bg-editorial-grey/10 flex flex-col space-y-4 hover:border-gold/30 transition-all duration-350">
              <Award className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif text-white">Structured Transformation</h3>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Every curriculum module is carefully designed and scheduled to produce measurable posture, styling, and presence growth.
              </p>
            </div>

            <div className="p-8 border border-gold/10 bg-editorial-grey/10 flex flex-col space-y-4 hover:border-gold/30 transition-all duration-350">
              <Users className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif text-white">Expert Guidance</h3>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Receive direct personal mentorship, color assessment, styling blueprints, and camera profiling from Aakanksha Anand.
              </p>
            </div>

            <div className="p-8 border border-gold/10 bg-editorial-grey/10 flex flex-col space-y-4 hover:border-gold/30 transition-all duration-350">
              <Compass className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif text-white">Practical Learning</h3>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Learn poise, speech pacing, and camera styling through exercises, mock-runways, multi-course dining simulations, and shoots.
              </p>
            </div>

            <div className="p-8 border border-gold/10 bg-editorial-grey/10 flex flex-col space-y-4 hover:border-gold/30 transition-all duration-350">
              <Sparkles className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif text-white">Elite Community</h3>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Gain entry into a supportive, exclusive network of ambitious corporate professionals, content creators, and pageant finalists.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 7. ACADEMY MOMENTS / LUXURY GALLERY PREVIEW */}
      <section id="gallery" className="relative py-24 md:py-36 border-b border-gold/10">
        <div className="luxury-container flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Vogue Lookbook
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Academy Moments
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />
          </div>
          <Button href="/gallery" variant="outline" className="mt-6 md:mt-0 self-start md:self-auto">
            Explore Lookbooks
          </Button>
        </div>

        {/* Masonry Layout Grid */}
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Personal Grooming", tag: "Haute Couture Styling", url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=600" },
            { title: "Ramp Walk Basics", tag: "High-Heel Gait Correction", url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600" },
            { title: "Camera Posing Class", tag: "Studio Modeling Angles", url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600" },
            { title: "Personal Branding Setup", tag: "On-Camera Speaking confidence", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600" }
          ].map((item, index) => (
            <div 
              key={index}
              className="group relative aspect-[3/4] overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-500 shadow-xl"
            >
              <Image 
                src={item.url}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-transparent opacity-80 z-10 transition-opacity duration-350 group-hover:opacity-95" />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-3 group-hover:translate-y-0 transition-transform duration-350">
                <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold block mb-1">
                  {item.tag}
                </span>
                <h4 className="text-lg font-serif text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. TESTIMONIALS (SUCCESS STORIES) */}
      <section id="testimonials" className="relative py-24 md:py-36 bg-editorial-grey/5 border-b border-gold/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="luxury-container flex flex-col items-center max-w-4xl text-center relative z-20">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-8">
            Student Transformations
          </span>

          <MessageSquare className="w-8 h-8 text-gold/30 mb-8" />

          <div className="h-[240px] md:h-[180px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-center animate-fade-in"
              >
                <p className="text-base md:text-xl font-serif text-champagne/90 leading-relaxed italic max-w-2xl mb-8">
                  &quot;{OFFICIAL_TESTIMONIALS[testimonialIndex].quote}&quot;
                </p>
                
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/30">
                    <Image 
                      src={OFFICIAL_TESTIMONIALS[testimonialIndex].avatarSrc}
                      alt={OFFICIAL_TESTIMONIALS[testimonialIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left font-sans">
                    <span className="block text-xs uppercase tracking-luxury font-semibold text-gold">
                      {OFFICIAL_TESTIMONIALS[testimonialIndex].name}
                    </span>
                    <span className="text-[10px] text-alabaster/40 uppercase tracking-widest">
                      {OFFICIAL_TESTIMONIALS[testimonialIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex space-x-4 mt-8">
            <button 
              onClick={() => setTestimonialIndex((prev) => (prev - 1 + OFFICIAL_TESTIMONIALS.length) % OFFICIAL_TESTIMONIALS.length)}
              className="p-3 border border-gold/20 text-gold hover:bg-gold hover:text-abyss transition-colors"
              aria-label="Previous Student Story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % OFFICIAL_TESTIMONIALS.length)}
              className="p-3 border border-gold/20 text-gold hover:bg-gold hover:text-abyss transition-colors"
              aria-label="Next Student Story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM SHOWCASE */}
      <section id="instagram" className="relative py-24 md:py-36 border-b border-gold/10">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <InstagramIcon className="w-6 h-6 text-gold mb-4" />
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Atelier Lookbooks
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            @heelsandglam
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4" />
        </div>

        <div className="luxury-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post, idx) => (
            <a 
              key={idx}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-350 block"
            >
              <Image 
                src={post.url}
                alt={`Instagram Post ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-abyss/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center space-y-2">
                <span className="text-[10px] text-gold font-sans font-medium uppercase tracking-widest">Inspect Feed</span>
                <div className="flex space-x-3 text-[10px] text-alabaster/80 font-sans">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-3 h-3 text-gold fill-gold" />
                    <span>{post.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageSquare className="w-3 h-3 text-gold fill-gold" />
                    <span>{post.comments}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section id="faq" className="relative py-24 md:py-36 bg-editorial-grey/5 border-b border-gold/10">
        <div className="luxury-container max-w-4xl">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
              Clarifications
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Admissions FAQ
            </h2>
            <div className="w-12 h-[1px] bg-gold/40 mt-4 mx-auto" />
          </div>

          <div className="space-y-4">
            {OFFICIAL_FAQS.map((item, idx) => (
              <div 
                key={idx}
                className="border border-gold/15 bg-editorial-grey/10"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-serif text-lg text-white hover:text-gold transition-colors focus:outline-none"
                >
                  <span>{item.q}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-gold transition-transform duration-350 shrink-0 ml-4 ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-xs md:text-sm text-alabaster/60 font-sans leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. ADMISSION CTA & CONTACT */}
      <section id="contact" className="relative py-24 md:py-36 border-b border-gold/10 scroll-mt-24">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Start Transformation
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Secure Your Consultation.
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />
            <p className="text-sm text-alabaster/60 font-sans leading-relaxed">
              Applications are open for the upcoming cohort. Seats are strictly limited to ensure individual posture mapping, personalized styling, and focused mentorship.
            </p>

            <div className="space-y-4 pt-4 font-sans text-xs">
              <div className="flex items-center space-x-4">
                <div className="p-3 border border-gold/20 bg-editorial-grey/20">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-alabaster/40 uppercase tracking-widest text-[9px] font-semibold">Flagship Atelier</span>
                  <span className="text-alabaster/80">Lavelle Road, Bangalore, Karnataka, India</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 animate-pulse">
                <div className="p-3 border border-green-500/20 bg-green-950/20">
                  <WhatsAppIcon className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <span className="block text-green-400 uppercase tracking-widest text-[9px] font-semibold">Admissions Desk WhatsApp</span>
                  <a href="https://wa.me/919880012345" target="_blank" rel="noopener noreferrer" className="text-alabaster/80 hover:text-gold transition-colors font-medium">
                    +91 98800 12345 (Direct Inquiries)
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 border border-gold/20 bg-editorial-grey/20">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-alabaster/40 uppercase tracking-widest text-[9px] font-semibold">Admissions Email</span>
                  <span className="text-alabaster/80">admissions@heelsandglam.com</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/apply" variant="solid" className="flex items-center space-x-2">
                <span>Start Application Funnel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              <Button href="https://wa.me/919880012345" variant="outline" className="flex items-center space-x-2 border-green-500/50 hover:bg-green-600 hover:border-green-600">
                <WhatsAppIcon className="w-4 h-4 text-green-400 fill-green-400 group-hover:text-white" />
                <span>Chat on WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-12 border border-gold/10 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!contactSubmitted ? (
                  <motion.form 
                    key="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="flex flex-col space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-2xl font-serif text-white">Request Free Bio-Etiquette Check</h3>
                    <p className="text-xs text-alabaster/60 font-sans -mt-4">Submit your profile summary for early batch invitation alerts.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">FULL NAME</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          required 
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          required 
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">COHORT SELECTION</label>
                        <select className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-gold font-sans focus:outline-none focus:border-gold transition-colors">
                          <option value="personal-grooming" className="bg-abyss text-white">Personal Grooming Mastery</option>
                          <option value="confidence" className="bg-abyss text-white">Confidence & Presence Program</option>
                          <option value="runway" className="bg-abyss text-white">Runway & Modelling Fundamentals</option>
                          <option value="branding" className="bg-abyss text-white">Personal Branding Program</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">WHAT COMPELS YOU TO RE-PATTERN YOUR PRESENCE?</label>
                      <textarea 
                        rows={4} 
                        required
                        placeholder="E.g., chronic slumping, public speaking anxiety, pageant title coaching target..."
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors placeholder:opacity-30"
                      />
                    </div>

                    <Button type="submit" variant="solid" className="w-full py-4 font-semibold text-xs tracking-luxury">
                      Submit Consultation Request
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
                    <p className="text-xs text-alabaster/60 font-sans max-w-sm leading-relaxed mb-6">
                      Thank you. Your consultation request has been secured. Our head registrar will review your transformation goals and message you to schedule a biomechanics check.
                    </p>
                    <button 
                      onClick={() => setContactSubmitted(false)}
                      className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans"
                    >
                      File another consultation profile
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* 12. PREMIUM FOOTER CTA */}
      <section className="relative py-24 md:py-36 bg-abyss border-t border-gold/10">
        <div className="luxury-container">
          <div className="relative border border-gold/30 bg-editorial-grey/5 p-8 md:p-16 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-xl space-y-4 mb-8 lg:mb-0 relative z-10">
              <span className="text-[10px] uppercase tracking-luxury text-gold font-sans font-medium block">
                The Final Brand Statement
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white">
                Confidence is not a talent reserved for a few.
              </h2>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                It is a skill that can be developed, refined and strengthened. Our mission is to help women discover their presence, embrace their individuality and step into every room with confidence, elegance and purpose.
              </p>
            </div>

            <div className="w-full lg:max-w-xs relative z-10 flex flex-col space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold block">Admissions Status</span>
              <div className="p-4 border border-gold/20 bg-editorial-grey/25 text-xs text-champagne/80 font-sans leading-relaxed">
                <p className="font-semibold text-white mb-1">Upcoming Batch: September 2026</p>
                <p>Limited seats remaining to guarantee personal coach attention. Pre-screenings apply.</p>
              </div>
              <Button href="/apply" variant="solid" className="w-full text-center">
                Begin Admissions Process
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// 5. GALLERY MOCK POSTS
const INSTAGRAM_POSTS = [
  { url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=500", likes: "1.4k", comments: "98" },
  { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500", likes: "1.1k", comments: "54" },
  { url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=500", likes: "2.3k", comments: "145" },
  { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500", likes: "1.9k", comments: "82" },
  { url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=500", likes: "3.8k", comments: "212" },
  { url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500", likes: "2.1k", comments: "109" }
];
