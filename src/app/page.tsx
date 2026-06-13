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
  MessageSquare
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

// 1. PROGRAMS DATA DEFINITION
const PROGRAMS_DATA = [
  {
    id: 'runway-poise',
    slug: 'elite-runway-poise',
    name: 'Elite Runway & Poise',
    duration: '6 Weeks',
    capacity: 12,
    nextCohortStart: 'Sept 1, 2026',
    price: '₹95,000',
    tagline: 'Master the high-fashion runway walk and posture biomechanics.',
    description: 'A signature intensive designed for aspiring models and women seeking flawless body alignment, carriage, and confidence in high heels.',
    imageSrc: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Gait correction and heel balancing physics',
      'Runway walk pattern mechanics (S-curve and linear pacing)',
      'Camera presence and angle mapping',
      'Professional lookbook photo shoot portfolio'
    ],
    syllabus: [
      'Week 1: Spine-crown verticality and weight distribution',
      'Week 2: Heel-to-toe footwork kinetics & structural core stability',
      'Week 3: Visual focus, neck release, and arm pacing symmetry',
      'Week 4: Styling direction, high-fashion dress carriage',
      'Week 5: Live camera angle tests & photoshoot staging',
      'Week 6: Graduation Runway Showcase & Agency review'
    ]
  },
  {
    id: 'executive-grace',
    slug: 'executive-grace-presence',
    name: 'Executive Grace & Presence',
    duration: '4 Weeks',
    capacity: 10,
    nextCohortStart: 'Sept 15, 2026',
    price: '₹75,000',
    tagline: 'Command boardrooms, corporate galas, and keynotes with authority.',
    description: 'An elite personal grooming and etiquette masterclass tailored for corporate leaders, diplomats, and high-net-worth professionals.',
    imageSrc: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Non-verbal communication & somatic power positioning',
      'Executive wardrobe blueprint & personal color analysis',
      'High-society social dining and corporate etiquette',
      'Speech modulation & vocal gravitas'
    ],
    syllabus: [
      'Week 1: Body language physics & structural sitting posture',
      'Week 2: Haute couture styling, grooming & aesthetic branding',
      'Week 3: Dine like a diplomat (practical multi-course simulation)',
      'Week 4: Vocal projection, public presence, and media drills'
    ]
  },
  {
    id: 'pageant-masterclass',
    slug: 'pageant-guild-masterclass',
    name: 'The Pageant Guild Masterclass',
    duration: '8 Weeks',
    capacity: 8,
    nextCohortStart: 'Oct 1, 2026',
    price: '₹1,50,000',
    tagline: 'The blueprint for national and international beauty titles.',
    description: 'Rigorous personal training for Miss India, Miss Diva, and global pageants, covering interviews, styling, and mental conditioning.',
    imageSrc: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&q=80&w=800',
    outcomes: [
      'Stage walk choreography & evening gown carriage',
      'Improv Q&A prep and current affairs speaking strategy',
      'Somatic poise under extreme high-pressure scoring',
      'Mental resilience & public profile construction'
    ],
    syllabus: [
      'Week 1: Crown alignment, stage projection and spatial mapping',
      'Week 2: Evening gown vs. cocktail swimsuit walk mechanics',
      'Week 3: Pageant styling masterclass & swimsuit optimization',
      'Week 4: The Jury Q&A: Speech speed, tone, and framing structures',
      'Week 5: Mental poise under spotlight stress and physical endurance',
      'Week 6: Micro-camera training and press release simulation',
      'Week 7: Live pageant jury mock trials & video profiling',
      'Week 8: Crowning dress rehearsals and pageant final showcase'
    ]
  }
];

// 2. TESTIMONIALS DATA
const TESTIMONIALS = [
  {
    quote: "Heels & Glam completely redefined how I carry myself in the boardroom. The focus on somatic posture helped me overcome chronic tech-neck slumping, and the styling blueprint gave me a new level of presence.",
    name: "Aditi Rao",
    role: "VP, McKinsey & Co. (Alumna 2025)",
    avatarSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "Under Aakanksha's guidance, my runway walk transformed from amateur to pageant-ready. Her focus on foot biomechanics and mental poise was the differentiator that helped me secure a Top 5 pageant finish.",
    name: "Meera Sen",
    role: "Miss India Finalist 2025",
    avatarSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    quote: "The posture realignment was life-changing. After years of lower back discomfort in heels, I learned the alignment markers to walk, stand, and project confidence effortlessly. A masterpiece program.",
    name: "Dr. Sarah Joseph",
    role: "Aesthetic Dermatologist & Pageant Contestant",
    avatarSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150"
  }
];

// 3. GALLERY DATA
const GALLERY_ITEMS = [
  {
    title: "The Editorial Lookbook",
    desc: "Elite styling directed by Aakanksha Anand.",
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Somatic Posture Class",
    desc: "Precision weight and spine alignment training.",
    url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Runway Masterclass",
    desc: "Pacing and gait correction on the catwalk.",
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Pageant Portfolio Prep",
    desc: "Stage projection under spotlight stress.",
    url: "https://images.unsplash.com/photo-1496449903678-c8dd735012ba?auto=format&fit=crop&q=80&w=600"
  }
];

// 4. INSTAGRAM SIMULATED DATA
const INSTAGRAM_POSTS = [
  { url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=500", likes: "1.2k", comments: "84" },
  { url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=500", likes: "958", comments: "45" },
  { url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=500", likes: "2.1k", comments: "112" },
  { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500", likes: "1.5k", comments: "78" },
  { url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=500", likes: "3.4k", comments: "189" },
  { url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500", likes: "1.8k", comments: "96" }
];

export default function LuxuryHomepage() {
  // Posture Slider States
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Testimonial Index State
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Program Syllabus Tab State
  const [activeProgramTab, setActiveProgramTab] = useState(PROGRAMS_DATA[0].id);

  // Scroll parallax reference
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 800], [0, 200]);

  // Form submission notifications
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [salonSubmitted, setSalonSubmitted] = useState(false);

  // Posture slider tracking handlers
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

  // Auto-play Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-abyss text-alabaster overflow-hidden">
      
      {/* SECTION 1: LUXURY HERO SECTION */}
      <section ref={heroRef} className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        {/* Parallax background image */}
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1920')`,
            y: heroBgY 
          }}
        />
        {/* Muted luxury layout overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/80 via-abyss/45 to-abyss z-10" />
        
        {/* Gold glow details */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold-dust/5 rounded-full blur-[120px] pointer-events-none z-10" />

        <div className="luxury-container relative z-20 flex flex-col items-center text-center px-4 max-w-4xl">
          {/* Framer motion animate up */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <span className="text-xs tracking-[0.3em] text-gold uppercase font-sans font-medium mb-6">
              Heels & Glam Academy
            </span>
            
            <h1 className="text-5xl md:text-8xl font-serif tracking-luxury text-white uppercase leading-none mb-6">
              The Art of Poise.<br />
              <span className="text-gold font-serif">Science of Elegance.</span>
            </h1>

            <p className="text-sm md:text-lg text-champagne/80 font-sans tracking-wide max-w-2xl leading-relaxed mb-10">
              India&apos;s premier boutique personal transformation and high-fashion grooming guild. 
              We engineer posture, walk kinetics, and visual presence for the elite woman.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
              <Button href="#programs" variant="solid" className="w-full sm:w-auto">
                Explore Syllabi
              </Button>
              <Button href="#contact" variant="outline" className="w-full sm:w-auto">
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center space-y-2">
          <span className="text-[9px] tracking-[0.25em] text-alabaster/40 font-sans uppercase">Scroll to Discover</span>
          <motion.div 
            className="w-[1px] h-12 bg-gold/30 relative overflow-hidden"
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

      {/* SECTION 2: ABOUT HEELS & GLAM */}
      <section id="about" className="relative py-24 md:py-36 border-t border-gold/10">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Narrative Text */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Elegance is a Structured Discipline.
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />
            
            <p className="text-sm md:text-base text-alabaster/70 font-sans leading-relaxed">
              At Heels & Glam, we reject the notion that posture and elegance are merely aesthetic accessories. 
              They are somatic representations of power, health, and self-possession. 
              We bridge the elite movement mechanics of runway models with the sophisticated presentation required 
              by boardrooms, pageants, and diplomatic assemblies.
            </p>

            <p className="text-sm md:text-base text-alabaster/70 font-sans leading-relaxed">
              Founded on the principles of Neuro-Somatic Poise, our curriculum realigns the center of gravity, 
              repave pelvic and cervical spine kinetic paths, and coordinates head-crown elevations. 
              You will leave carrying a magnetic presence that commands attention the moment you cross the threshold of any room.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-6">
              <div className="flex space-x-3 items-start">
                <div className="p-2 border border-gold/20 bg-editorial-grey/20 mt-1">
                  <ShieldCheck className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-gold mb-1 font-sans font-medium">Kinetic Engineering</h4>
                  <p className="text-xs text-alabaster/55 font-sans leading-snug">Structural corrections of joint mobility & weight distribution.</p>
                </div>
              </div>

              <div className="flex space-x-3 items-start">
                <div className="p-2 border border-gold/20 bg-editorial-grey/20 mt-1">
                  <Camera className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-luxury text-gold mb-1 font-sans font-medium">Camera Confidence</h4>
                  <p className="text-xs text-alabaster/55 font-sans leading-snug">Aesthetic angle profiling and micro-expression synchronization.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Column Image Overlay */}
          <div className="lg:col-span-5 relative w-full aspect-[4/5] md:aspect-[3/4] flex justify-center items-center">
            {/* Primary Border frame */}
            <div className="absolute inset-4 border border-gold/20 -translate-x-4 translate-y-4 pointer-events-none" />
            
            {/* Primary High-fashion Image */}
            <div className="relative w-full h-full overflow-hidden border border-gold/15">
              <Image 
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800"
                alt="Luxury Fashion Carriage"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/60 to-transparent" />
            </div>

            {/* Overlapping floating card */}
            <div className="absolute bottom-8 right-[-20px] p-6 glass-panel flex flex-col space-y-2 max-w-[220px]">
              <span className="text-[10px] tracking-widest uppercase text-gold font-sans font-bold">Admissions Limit</span>
              <span className="text-lg font-serif text-white leading-tight">Max 12 Seats Per Cohort</span>
              <p className="text-[10px] text-alabaster/50 font-sans leading-normal">To ensure bespoke posture mapping and individual somatic direction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MEET AAKANKSHA ANAND */}
      <section id="founder" className="relative py-24 md:py-36 bg-editorial-grey/15 border-y border-gold/10">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Image */}
          <div className="lg:col-span-5 relative aspect-[4/5] md:aspect-[3/4] overflow-hidden border border-gold/20 shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Aakanksha Anand"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">Founder & Head Director</span>
              <h3 className="text-2xl font-serif text-white">Aakanksha Anand</h3>
            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              The Founder&apos;s Voice
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Movement is Your Autograph.
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />

            <blockquote className="text-lg md:text-xl font-serif italic text-champagne/90 leading-relaxed pl-6 border-l border-gold/30">
              &quot;Confidence is not a loud display; it is a quiet physical alignment. Your posture details how you treat your own architecture. When you walk with grace, the space yields to your presence.&quot;
            </blockquote>

            <p className="text-sm text-alabaster/70 font-sans leading-relaxed">
              Aakanksha Anand is a certified posture consultant, fashion movement choreographer, and pageant coach. 
              Having spent a decade mentoring top models, corporate directors, and pageant titleholders, she developed 
              the *Somatic Poise Framework*—a unique synthesis of musculoskeletal alignment, styling physics, and public presence.
            </p>

            <p className="text-sm text-alabaster/70 font-sans leading-relaxed">
              Her structured methodologies are designed to break decade-long bodily slumps, release cervical compression, 
              and build complete confidence under the spotlight or in high-pressure assemblies.
            </p>

            {/* Performance Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold/10">
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-gold font-light">10+</span>
                <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Years Coaching</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-gold font-light">5,000+</span>
                <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Alumni Empowered</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif text-gold font-light">15+</span>
                <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Pageant Winners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROGRAMS OVERVIEW */}
      <section id="programs" className="relative py-24 md:py-36 border-b border-gold/10">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Signature Cohorts
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Curated Curriculums
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4 mb-6" />
          <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl leading-relaxed">
            Select your cohort based on your personal and professional targets. Individual screening applies.
          </p>
        </div>

        {/* Dynamic Multi-column Layout */}
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {PROGRAMS_DATA.map((program) => (
            <div 
              key={program.id}
              className="group relative flex flex-col bg-editorial-grey/10 border border-gold/15 transition-all duration-500 hover:border-gold/50 hover:bg-editorial-grey/25"
            >
              {/* Image Header */}
              <div className="relative w-full h-64 overflow-hidden">
                <Image 
                  src={program.imageSrc}
                  alt={program.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/25 to-transparent z-10" />
                
                {/* Cohort Scarcity Tag */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-abyss/90 border border-gold/20 text-[9px] uppercase tracking-widest text-gold font-sans font-medium">
                  Intake: {program.nextCohortStart}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-[10px] tracking-widest uppercase text-champagne font-sans font-medium">
                    {program.duration} • Limit {program.capacity} Seats
                  </span>
                  <span className="text-xs uppercase text-gold font-sans font-semibold">{program.price}</span>
                </div>

                <h3 className="text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300 mb-3">
                  {program.name}
                </h3>
                
                <p className="text-xs text-alabaster/60 font-sans leading-relaxed mb-6">
                  {program.tagline}
                </p>

                {/* Outcomes bullet points */}
                <div className="space-y-2 mb-8">
                  {program.outcomes.map((outcome, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-[11px] text-alabaster/80 font-sans">
                      <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>

                {/* Action Trigger row */}
                <div className="mt-auto pt-6 border-t border-gold/10 flex items-center justify-between">
                  <button 
                    onClick={() => {
                      setActiveProgramTab(program.id);
                      document.getElementById('syllabus-details')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-[10px] uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans font-medium flex items-center space-x-1"
                  >
                    <span>Inspect Syllabus</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                  <Button href="#contact" variant="outline" className="py-2 px-4 text-[9px] tracking-widest">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SYLLABUS INSPECTOR TABULAR VIEW */}
        <div id="syllabus-details" className="luxury-container scroll-mt-28">
          <div className="glass-panel p-8 md:p-12 border border-gold/10 flex flex-col space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gold/10 pb-6">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-gold font-sans font-semibold">Interactive Curriculum Details</span>
                <h3 className="text-3xl font-serif text-white mt-1">Week-by-Week Breakdown</h3>
              </div>
              
              {/* Tab Toggles */}
              <div className="flex space-x-2 mt-4 md:mt-0 overflow-x-auto py-1">
                {PROGRAMS_DATA.map((prog) => (
                  <button
                    key={prog.id}
                    onClick={() => setActiveProgramTab(prog.id)}
                    className={`px-4 py-2.5 text-[10px] uppercase tracking-luxury font-sans font-medium transition-all duration-350 border shrink-0 ${
                      activeProgramTab === prog.id 
                        ? 'bg-gold text-abyss border-gold' 
                        : 'bg-editorial-grey/10 border-gold/20 text-gold hover:border-gold hover:text-white'
                    }`}
                  >
                    {prog.name.split(' ')[1] || prog.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Displaying details of active program tab */}
            {PROGRAMS_DATA.filter(p => p.id === activeProgramTab).map((program) => (
              <div key={program.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[10px] tracking-widest uppercase text-gold font-sans font-medium">Syllabus Overview</span>
                  <h4 className="text-2xl font-serif text-white leading-snug">{program.name}</h4>
                  <p className="text-xs text-alabaster/60 font-sans leading-relaxed">{program.description}</p>
                  
                  <div className="pt-4 flex flex-col space-y-2 text-xs font-sans text-champagne/90">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gold" />
                      <span>Duration: {program.duration} intensive</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gold" />
                      <span>Limit: {program.capacity} elite candidates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gold" />
                      <span>Commencement: {program.nextCohortStart}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col space-y-3">
                  <span className="text-[10px] tracking-widest uppercase text-gold font-sans font-medium">Weekly Modules</span>
                  
                  <div className="divide-y divide-gold/10">
                    {program.syllabus.map((weekText, idx) => (
                      <div key={idx} className="py-3 flex space-x-4 items-start font-sans text-xs">
                        <span className="text-gold font-bold font-serif text-sm">0{idx + 1}</span>
                        <p className="text-alabaster/80 leading-relaxed">{weekText.substring(weekText.indexOf(':') + 1).trim()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: STUDENT TRANSFORMATIONS */}
      <section id="transformations" className="relative py-24 md:py-36 bg-editorial-grey/10 border-b border-gold/10">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Somatic Metrics
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-white">
            Postural Alignment Analysis
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4 mb-6" />
          <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl leading-relaxed">
            Drag the cursor overlay to analyze postural engineering correction, spine balancing, and core elevation.
          </p>
        </div>

        {/* Interactive Posture Comparison Slider */}
        <div className="luxury-container flex flex-col items-center">
          <div 
            ref={sliderRef}
            className="relative w-full max-w-3xl aspect-[16/10] md:aspect-[16/9] bg-abyss border border-gold/15 overflow-hidden select-none cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* Slide 1: Incorrect Slumped Posture (Underneath) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200')` }}
              />
              {/* Bad alignment lines */}
              <svg className="absolute inset-0 w-full h-full stroke-red-500/40 stroke-2" fill="none">
                <line x1="43%" y1="20%" x2="52%" y2="85%" strokeDasharray="5,5" />
                <circle cx="43%" cy="20%" r="6" fill="#ef4444" />
                <circle cx="46%" cy="45%" r="6" fill="#ef4444" />
                <circle cx="52%" cy="85%" r="6" fill="#ef4444" />
              </svg>
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-red-950/80 border border-red-500/20 text-[9px] uppercase tracking-widest text-red-200 font-sans">
                Incorrect: Cervical Compression & Pelvic Tilt
              </div>
            </div>

            {/* Slide 2: Elegant Posture (Overlayed, clipped) */}
            <div 
              className="absolute inset-0 flex items-center justify-center bg-abyss"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200')` }}
              />
              {/* Correct alignment lines */}
              <svg className="absolute inset-0 w-full h-full stroke-gold stroke-2" fill="none">
                <line x1="47%" y1="15%" x2="47%" y2="85%" />
                <circle cx="47%" cy="15%" r="6" fill="#C5A059" />
                <circle cx="47%" cy="45%" r="6" fill="#C5A059" />
                <circle cx="47%" cy="85%" r="6" fill="#C5A059" />
              </svg>
              <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gold/90 border border-gold/30 text-[9px] uppercase tracking-widest text-abyss font-sans font-medium">
                Correct: Somatic Poise & Core Elevation
              </div>
            </div>

            {/* Drag Handle Divider */}
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
              <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">High-Heel Stability</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE HEELS & GLAM */}
      <section id="why-choose" className="relative py-24 md:py-36 border-b border-gold/10">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              The Distinctions
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
            {/* Feature 1 */}
            <div className="p-8 border border-gold/10 bg-editorial-grey/10 flex flex-col space-y-4 hover:border-gold/30 transition-all duration-350">
              <Award className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif text-white">Somatic Biomechanics</h3>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Personalized kinetic correction maps analyzing stride pacing, core containment, and pelvic rotations to eliminate knee and spine fatigue.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 border border-gold/10 bg-editorial-grey/10 flex flex-col space-y-4 hover:border-gold/30 transition-all duration-350">
              <Camera className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif text-white">Editorial Shoots</h3>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Graduate portfolio shoots directed by fashion editors and captured by celebrity photographers to visually register your posture improvements.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 border border-gold/10 bg-editorial-grey/10 flex flex-col space-y-4 hover:border-gold/30 transition-all duration-350">
              <Compass className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif text-white">Elite Networking</h3>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Immediate placements and casting introductions to elite fashion designers, modeling agencies, and pageant directors.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 border border-gold/10 bg-editorial-grey/10 flex flex-col space-y-4 hover:border-gold/30 transition-all duration-350">
              <Sparkles className="w-6 h-6 text-gold" />
              <h3 className="text-xl font-serif text-white">Social Grace Mastery</h3>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Comprehensive grooming classes including high-end dining protocols, champagne service, styling guides, and verbal communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: GALLERY PREVIEW */}
      <section id="gallery" className="relative py-24 md:py-36 bg-editorial-grey/10 border-b border-gold/10">
        <div className="luxury-container flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              The Lookbook
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Academy Moments
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />
          </div>
          <Button href="/gallery" variant="outline" className="mt-6 md:mt-0 self-start md:self-auto">
            View Full Lookbook
          </Button>
        </div>

        {/* Masonry Layout Grid */}
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
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
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-transparent opacity-80 z-10 transition-opacity duration-350 group-hover:opacity-90" />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-3 group-hover:translate-y-0 transition-transform duration-350">
                <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-medium block mb-1">
                  {item.desc}
                </span>
                <h4 className="text-lg font-serif text-white">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: TESTIMONIALS */}
      <section id="testimonials" className="relative py-24 md:py-36 border-b border-gold/10 overflow-hidden">
        {/* Soft backdrops */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="luxury-container flex flex-col items-center max-w-4xl text-center relative z-20">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-8">
            Student Testimony
          </span>

          <MessageSquare className="w-8 h-8 text-gold/30 mb-8" />

          {/* Testimonial slider container */}
          <div className="h-[220px] md:h-[180px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center"
              >
                <p className="text-base md:text-xl font-serif text-champagne/90 leading-relaxed italic max-w-2xl mb-8">
                  &quot;{TESTIMONIALS[testimonialIndex].quote}&quot;
                </p>
                
                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold/30">
                    <Image 
                      src={TESTIMONIALS[testimonialIndex].avatarSrc}
                      alt={TESTIMONIALS[testimonialIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left font-sans">
                    <span className="block text-xs uppercase tracking-luxury font-medium text-gold">
                      {TESTIMONIALS[testimonialIndex].name}
                    </span>
                    <span className="text-[10px] text-alabaster/40 uppercase tracking-widest">
                      {TESTIMONIALS[testimonialIndex].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Triggers */}
          <div className="flex space-x-4 mt-10">
            <button 
              onClick={() => setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="p-3 border border-gold/20 text-gold hover:bg-gold hover:text-abyss transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
              className="p-3 border border-gold/20 text-gold hover:bg-gold hover:text-abyss transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 9: INSTAGRAM SHOWCASE */}
      <section id="instagram" className="relative py-24 md:py-36 bg-editorial-grey/10 border-b border-gold/10">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <InstagramIcon className="w-6 h-6 text-gold mb-4" />
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Digital Salon
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
              <div className="absolute inset-0 bg-abyss/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center space-y-2">
                <span className="text-[10px] text-gold font-sans font-medium uppercase tracking-widest">View Post</span>
                <div className="flex space-x-3 text-[10px] text-alabaster/80 font-sans font-medium">
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

      {/* SECTION 10: CONTACT CTA */}
      <section id="contact" className="relative py-24 md:py-36 border-b border-gold/10 scroll-mt-24">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              The Admissions
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Secure Your Invitation.
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />
            <p className="text-sm text-alabaster/60 font-sans leading-relaxed">
              We screening all candidates to customize postures, goals, and training. Fill out the application profile, and our admissions salon will connect with you within 24 hours.
            </p>

            <div className="space-y-4 pt-4 font-sans text-xs">
              <div className="flex items-center space-x-4">
                <div className="p-3 border border-gold/20 bg-editorial-grey/20">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-alabaster/40 uppercase tracking-widest text-[9px]">The Academy Atelier</span>
                  <span className="text-alabaster/80">Lavelle Road, Bangalore, Karnataka, India</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 border border-gold/20 bg-editorial-grey/20">
                  <Phone className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-alabaster/40 uppercase tracking-widest text-[9px]">Direct Placement Line</span>
                  <span className="text-alabaster/80">+91 98800 12345</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 border border-gold/20 bg-editorial-grey/20">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-alabaster/40 uppercase tracking-widest text-[9px]">Admissions Desk</span>
                  <span className="text-alabaster/80">admissions@heelsandglam.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">FULL NAME</label>
                        <input 
                          type="text" 
                          required 
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          required 
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          required 
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">COHORT OF INTEREST</label>
                        <select className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-gold font-sans focus:outline-none focus:border-gold transition-colors">
                          <option value="runway-poise" className="bg-abyss text-white">Elite Runway & Poise</option>
                          <option value="executive-grace" className="bg-abyss text-white">Executive Grace & Presence</option>
                          <option value="pageant-masterclass" className="bg-abyss text-white">The Pageant Guild Masterclass</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gold font-sans font-medium">YOUR PERSONAL TRANSFORMATION GOALS</label>
                      <textarea 
                        rows={4} 
                        required
                        placeholder="Detail any posture issues or pageant targets..."
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors placeholder:opacity-40"
                      />
                    </div>

                    <Button type="submit" variant="solid" className="w-full py-4 font-semibold text-xs tracking-luxury">
                      Submit Profile Profile
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
                    <h3 className="text-2xl font-serif text-white mb-2">Application Received</h3>
                    <p className="text-xs text-alabaster/60 font-sans max-w-sm leading-relaxed mb-6">
                      Your posture profile has been secured. Our head registrar will review your goals and call you to arrange a biomechanics screening session.
                    </p>
                    <button 
                      onClick={() => setContactSubmitted(false)}
                      className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans"
                    >
                      Apply for another cohort
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: PREMIUM FOOTER CTA */}
      <section className="relative py-24 md:py-36 bg-abyss">
        {/* Border line separator */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gold/15" />

        <div className="luxury-container">
          <div className="relative border border-gold/30 bg-editorial-grey/5 p-8 md:p-16 overflow-hidden flex flex-col lg:flex-row lg:items-center justify-between">
            {/* Glowing circle background decoration */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="max-w-xl space-y-4 mb-8 lg:mb-0 relative z-10">
              <span className="text-[10px] uppercase tracking-luxury text-gold font-sans font-medium block">
                The Glam Salon Newsletter
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-white">
                Register for Elite Admissions Announcements
              </h2>
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Receive private alerts for regional high-heel posture clinics, styling invitations, and early applications periods.
              </p>
            </div>

            <div className="w-full lg:max-w-md relative z-10">
              <AnimatePresence mode="wait">
                {!salonSubmitted ? (
                  <motion.form 
                    key="salon-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSalonSubmitted(true);
                    }}
                    className="flex flex-col sm:flex-row gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <input 
                      type="email" 
                      placeholder="EMAIL ADDRESS" 
                      required 
                      className="w-full bg-editorial-grey/40 border border-gold/20 px-4 py-4 text-xs text-alabaster tracking-widest focus:outline-none focus:border-gold transition-colors font-sans placeholder:opacity-50"
                    />
                    <button 
                      type="submit" 
                      className="sm:w-auto px-8 py-4 bg-gold text-abyss hover:bg-white hover:text-abyss text-xs uppercase tracking-luxury transition-all font-sans font-medium shrink-0"
                    >
                      Join the Salon
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="salon-success"
                    className="p-4 border border-gold/20 bg-gold/5 text-center font-sans text-xs text-gold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you. You have been added to the Private Admissions Roster.
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
