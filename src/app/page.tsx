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
  MessageCircle,
  Play,
  Volume2,
  X,
  FileText,
  UserCheck
} from 'lucide-react';
import Button from '@/components/ui/Button';

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

// 1. TIMELINE STAGES (PHASE 3)
const TIMELINE_STAGES = [
  { stage: "Stage 01", title: "Self Discovery", desc: "Biometric and posture baseline analysis. Identify spine curvatures, pelvic tilt issues, and custom style metrics." },
  { stage: "Stage 02", title: "Confidence Foundation", desc: "Release musculoskeletal tension. Train basic balancing coordinates and decompress positional slumps." },
  { stage: "Stage 03", title: "Grooming Mastery", desc: "Personal skin care regimens and styling theory. Match fabrics, silhouettes, and wardrobe capsule profiles." },
  { stage: "Stage 04", title: "Communication Excellence", desc: "Speak from the diaphragm. Learn to modulation pitch, remove filler speech, and speak with vocal resonance." },
  { stage: "Stage 05", title: "Poise & Presence", desc: "Re-pattern your walk in heels. Command visual angles, delay eye contact turns, and walk with straight knees." },
  { stage: "Stage 06", title: "Personal Branding", desc: "Establish offline and online presence. Create dynamic Instagram grids and capture high-value video scripts." },
  { stage: "Stage 07", title: "Transformation Showcase", desc: "Catwalk graduation runway. Secure your professional lookbook shoots directed by Aakanksha Anand." }
];

// 2. ASSESSMENT QUIZ (PHASE 4)
const QUIZ_QUESTIONS = [
  {
    category: "Self Image",
    question: "When looking in a mirror before an event, your internal dialogue is typically:",
    options: [
      { text: "Critical. Focusing on posture slumps, neck folds, or styling errors.", score: 15 },
      { text: "Indifferent. Defaulting to comfort styling, wishing to get it over with.", score: 45 },
      { text: "Constructive. Recognizing body geometry, aligning shoulder plates, and walking tall.", score: 95 }
    ]
  },
  {
    category: "Confidence",
    question: "Standing in front of a high-profile audience, you experience:",
    options: [
      { text: "Physical anxiety, chest breathing, rapid speed of speech, and neck tension.", score: 15 },
      { text: "Manageable nerves, but default to filler words like 'um' and 'like' to fill spaces.", score: 50 },
      { text: "Decompressed spine, steady pace, speaking from the diaphragm, and using pauses.", score: 95 }
    ]
  },
  {
    category: "Grooming",
    question: "Your wardrobe styling and daily self-presentation habits are:",
    options: [
      { text: "Unplanned. Grabbing whatever is clean, ignoring body geometry lines.", score: 20 },
      { text: "Balanced but default to corporate templates; lacking a distinctive brand color strategy.", score: 60 },
      { text: "Curated. Hand-picked fabrics, harmonized styling grids, and custom fitting coordinates.", score: 95 }
    ]
  },
  {
    category: "Personal Presence",
    question: "When crossing thresholds or entering crowded boardrooms/galas:",
    options: [
      { text: "Drop your chin, avoid scanning, and slide to the corners to blend in.", score: 15 },
      { text: "Enter quickly, checking your phone screen to simulate looking occupied.", score: 40 },
      { text: "Glide tall, head level, shoulders down and back, scanning spaces calmly.", score: 95 }
    ]
  },
  {
    category: "Public Speaking",
    question: "When reading to camera lenses or speaking into spotlight microphones:",
    options: [
      { text: "Lock up completely, speak fast, and rush the script delivery to finish.", score: 10 },
      { text: "Deliver the contents but lose physical coordination and hand pacing controls.", score: 55 },
      { text: "Coordinate eye contact delay, hold camera focus, and modulate vocal resonance.", score: 95 }
    ]
  }
];

// 3. CINEMATIC STORIES (PHASE 5)
const CINEMATIC_STORIES = [
  {
    name: "Aparna Sharma",
    role: "Pageant Finalist & Alumna",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    before: "Struggled with chronic tech-neck slumping, walked with bent knees in high heels, and lacked posture verticality in social pageants.",
    during: "Mentored under Aakanksha Anand. Realigned center of gravity, stabilized hip movement, and practiced fabric control.",
    after: "Walks with straight knees and open chest. Placed in the Top 5 of national pageants and works with prominent agencies."
  },
  {
    name: "Dr. Nikita Lal",
    role: "VP, Corporate Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    before: "Experienced vocal shaking, fast speaking, and uptalk in high-stakes boardroom keynotes.",
    during: "Focused on diaphragmatic resonance projection, pause training metrics, and corporate styling modules.",
    after: "Commands the boardroom with authority. lower vocal pitch, clear modulation, and conducts elite media interviews."
  },
  {
    name: "Rhea Sen",
    role: "Founder, Creators Atelier",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    before: "Lacked styling presence, felt self-conscious on camera, and had a fragmented digital brand image.",
    during: "Completed body geometry mapping, personal capsule creation, and on-camera lens reading simulations.",
    after: "Built a cohesive personal brand with 150k+ followers, styling deals, and steps into shoots with absolute confidence."
  }
];

// 4. FOUNDER CHAPTERS (PHASE 8)
const FOUNDER_CHAPTERS = [
  {
    id: "chap-1",
    title: "Chapter 1: The Beginning",
    content: "Growing up, I realized that posture is not just an aesthetic parameter—it is where confidence starts. Watching women lose their presence due to musculoskeletal sub-consciousness drove me to study body mechanics."
  },
  {
    id: "chap-2",
    title: "Chapter 2: The Vision",
    content: "I didn't want to build a simple modeling school. My vision was to create a luxury transformation guild where corporate leaders, creators, and pageant contenders could acquire the physical kinetics of authority."
  },
  {
    id: "chap-3",
    title: "Chapter 3: The Transformation Philosophy",
    content: "Elegance is a structured physics. By realigning the center of gravity, stabilising pelvic tilt, and mastering vocal resonance, we decompress the frame and teach women to carry themselves with gravitas."
  },
  {
    id: "chap-4",
    title: "Chapter 4: Empowering Women",
    content: "Empowerment is not a statement; it is a physical reality. When a woman stands tall, opens her chest, and modularizes her voice, the room shifts. I guide women to claim their spaces unconditionally."
  },
  {
    id: "chap-5",
    title: "Chapter 5: The Future",
    content: "Heels & Glam is expanding the Lavelle Road flagship atelier, integrating AI gait metrics, and introducing private styling retreats to make luxury poise training accessible to ambitious leaders across India."
  }
];

// 5. GALLERY DATA (PHASE 7)
const GALLERY_MOCK = [
  { title: "Global Runway Walk", desc: "Catwalk balance and stride prep.", url: "/images/fashion-week-runway-jeans.jpg" },
  { title: "Personal Styling Studio", desc: "Haute couture draping and wardrobes.", url: "/images/traditional-saree-styling.jpg" },
  { title: "Somatic Posture Class", desc: "Spine alignment and balance mechanics.", url: "/images/founder-portrait-red-full.jpg" },
  { title: "Lotus Catwalk Mechanics", desc: "Gown and saree carriage training.", url: "/images/runway-saree-lotus.jpg" }
];

export default function Home() {
  // Real-time Countdown Timer (Phase 9)
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 24, seconds: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Posture Compare Slider States
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    setSliderPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
  };

  // Quiz States (Phase 4)
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizResultInfo, setQuizResultInfo] = useState<{ score: number; category: string; description: string } | null>(null);
  
  // Lead Capture state
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '' });
  const [consultationBooked, setConsultationBooked] = useState(false);

  const handleQuizAnswer = (score: number) => {
    const nextScores = [...scores, score];
    setScores(nextScores);

    if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const avg = Math.round(nextScores.reduce((a, b) => a + b, 0) / nextScores.length);
      let category = "Emerging";
      let desc = "You need basic postural decompression, styling coordinates, and diaphragmatic breathing patterns.";
      
      if (avg >= 85) {
        category = "Exceptional";
        desc = "Your posture is symmetrical, and vocal projection commands authority. Ideal for lookbooks.";
      } else if (avg >= 65) {
        category = "Refined";
        desc = "Strong style and confidence; needs slight heel gait pacing adjustments and online branding strategy.";
      } else if (avg >= 40) {
        category = "Developing";
        desc = "Some alignment and presence blocks. Focus on Tech-Neck release and speech rate modulation.";
      }

      setQuizResultInfo({ score: avg, category, description: desc });
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setScores([]);
    setCurrentQuestion(0);
    setQuizFinished(false);
    setQuizResultInfo(null);
    setQuizStarted(false);
    setConsultationBooked(false);
    setLeadForm({ name: '', phone: '', email: '' });
  };

  // Cinematic Testimonials Index
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Founder Story Active Chapter
  const [activeChapter, setActiveChapter] = useState(FOUNDER_CHAPTERS[0].id);

  // Gallery Selected Lookbook
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_MOCK[0] | null>(null);

  // Contact status
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Accordion active FAQ
  const [faqActive, setFaqActive] = useState<number | null>(null);

  // Form Pre-filled WhatsApp link text
  const waConsultMessage = encodeURIComponent(
    `Hi Aakanksha! I completed my Presence Score check.\n\n` +
    `*My Score:* ${quizResultInfo?.score}%\n` +
    `*Category:* ${quizResultInfo?.category}\n\n` +
    `I would like to book my private consultation to review my postural alignment.`
  );

  return (
    <div className="relative min-h-screen bg-abyss text-alabaster overflow-hidden">

      {/* PHASE 2: EDITORIAL MAGAZINE HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col justify-center items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/runway-saree-lotus.jpg')`,
          }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/85 via-abyss/45 to-abyss z-10" />

        <div className="luxury-container relative z-20 flex flex-col items-center text-center px-4 max-w-5xl">
          <span className="text-[10px] tracking-[0.35em] text-gold uppercase font-sans font-bold mb-6">
            The Digital Poise Atelier
          </span>
          
          <h1 className="text-6xl md:text-9xl font-serif tracking-luxury text-white uppercase leading-none mb-6">
            Transform Your Confidence.<br />
            <span className="text-gold font-serif">Own Every Room.</span>
          </h1>

          <p className="text-sm md:text-lg text-champagne/85 font-sans tracking-wide max-w-2xl leading-relaxed mb-10">
            India&apos;s premier boutique personal grooming, confidence-building, modelling, and personal branding academy. 
            We believe confidence is not inherited—it is cultivated.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center z-30">
            <Button href="#quiz-presence" variant="solid" className="w-full sm:w-auto">
              Discover Your Presence Score
            </Button>
            <Button href="#about" variant="outline" className="w-full sm:w-auto">
              Read Philosophy
            </Button>
          </div>
        </div>

        {/* Phase 9 Countdown Timer Overlay */}
        <div className="absolute bottom-12 left-6 right-6 z-20 flex flex-col md:flex-row md:items-center justify-between border-t border-gold/10 pt-6 luxury-container">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
              Admissions Status: Autumn Batch September 2026. Only 3 Seats Remaining!
            </span>
          </div>

          <div className="flex items-center space-x-4 font-sans text-xs">
            <span className="text-alabaster/40 uppercase tracking-widest text-[9px]">Batch Starts in:</span>
            <div className="flex space-x-2 text-center text-white">
              <div><span className="font-serif font-bold text-sm text-gold">{timeLeft.days}d</span></div>
              <div><span className="font-serif font-bold text-sm text-gold">{timeLeft.hours}h</span></div>
              <div><span className="font-serif font-bold text-sm text-gold">{timeLeft.minutes}m</span></div>
              <div><span className="font-serif font-bold text-sm text-gold">{timeLeft.seconds}s</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CHAPTER 1 (PHASE 2): EDITORIAL MAGAZINE PHILOSOPHY */}
      <section id="about" className="relative py-28 md:py-40 border-t border-gold/10">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Vogue Lookbook • Philosophy
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight">
              Elegance is More Than Appearance.
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />

            <div className="space-y-6 text-sm md:text-base text-alabaster/70 font-sans leading-relaxed">
              <p className="font-serif italic text-gold text-xl mb-4 border-l-2 border-gold/30 pl-6">
                &quot;It is the confidence to enter a room without hesitation. It is the ability to communicate with clarity. It is the posture that reflects self-belief. It is the presence that leaves a lasting impression.&quot;
              </p>
              <p>
                At Heels & Glam, we help women develop these qualities through structured training, expert mentorship, and practical, real-world transformation. 
                Our programs are designed not only for aspiring runway models but also for college students, corporate professionals, entrepreneurs, content creators, and ambitious women who wish to stand tall and project authority.
              </p>
            </div>
          </div>

          {/* Large Magazine Layout Photo */}
          <div className="lg:col-span-5 relative w-full aspect-[3/4] flex justify-center items-center">
            <div className="absolute inset-4 border border-gold/25 -translate-x-4 translate-y-4 pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden border border-gold/15 shadow-2xl">
              <Image 
                src="/images/traditional-saree-styling.jpg"
                alt="Aakanksha Anand conducting styling workshop in traditional red and gold saree"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* PHASE 8: FOUNDER STORYTELLING EXPERIENCE */}
      <section id="founder" className="relative py-28 md:py-40 bg-editorial-grey/10 border-y border-gold/10">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Portrait Image */}
          <div className="lg:col-span-5 relative aspect-[3/4] overflow-hidden border border-gold/20 shadow-2xl">
            <Image 
              src="/images/founder-portrait-red-half.jpg"
              alt="Aakanksha Anand - Heels & Glam Founder posing in red dress"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent opacity-85" />
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-bold block mb-1">Founder & Head Coach</span>
              <h3 className="text-3xl font-serif text-white">Aakanksha Anand</h3>
            </div>
          </div>

          {/* Chapters Storytelling */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Vogue Profile • Chapters
            </span>
            
            <div className="flex space-x-2 overflow-x-auto py-1 border-b border-gold/10 pb-4">
              {FOUNDER_CHAPTERS.map((chap) => (
                <button
                  key={chap.id}
                  onClick={() => setActiveChapter(chap.id)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-luxury font-sans font-semibold transition-all shrink-0 border border-transparent ${
                    activeChapter === chap.id 
                      ? 'text-gold border-gold/30 bg-editorial-grey/25' 
                      : 'text-alabaster/40 hover:text-white'
                  }`}
                >
                  {chap.title.split(':')[0]}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {FOUNDER_CHAPTERS.filter(c => c.id === activeChapter).map((chap) => (
                <motion.div
                  key={chap.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 font-sans text-xs md:text-sm text-alabaster/70 leading-relaxed min-h-[160px] animate-fade-in"
                >
                  <h3 className="text-xl md:text-2xl font-serif text-white font-medium">{chap.title}</h3>
                  <div className="w-8 h-[1px] bg-gold/30 mt-2 mb-4" />
                  <p>{chap.content}</p>
                </motion.div>
              ))}
            </AnimatePresence>

            <blockquote className="text-lg font-serif italic text-champagne/90 pl-6 border-l border-gold/25 mt-6">
              &quot;Confidence changes the way the world sees you. More importantly, it changes the way you see yourself.&quot;
            </blockquote>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/academy" variant="solid">Read Complete Pedigree</Button>
              <Button href="https://wa.me/919880012345" variant="outline">WhatsApp Dialogue Desk</Button>
            </div>
          </div>

        </div>
      </section>

      {/* PHASE 3: INTERACTIVE TRANSFORMATION ROADMAP */}
      <section id="journey-presence" className="relative py-28 md:py-40 border-b border-gold/10 bg-editorial-grey/5">
        <div className="luxury-container flex flex-col items-center text-center mb-20">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Milestones of Poise
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-white">
            Your Journey To Presence
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4 mb-6" />
          <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl leading-relaxed">
            Our step-by-step development roadmap designed to structure physical posture, style, and vocal self-possession.
          </p>
        </div>

        {/* Vertical Connected Stage road */}
        <div className="luxury-container relative max-w-5xl">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gold/25 -translate-x-1/2" />

          <div className="space-y-12">
            {TIMELINE_STAGES.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual node marker */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-abyss z-10 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />

                {/* Content block */}
                <div className="pl-12 md:pl-0 md:w-1/2 px-0 md:px-8">
                  <div className="p-8 border border-gold/15 bg-editorial-grey/10 hover:border-gold/30 hover:bg-editorial-grey/15 transition-all duration-350 shadow-xl">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans block mb-1">
                      {item.stage}
                    </span>
                    <h4 className="text-xl font-serif text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Empty block for layout grid */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOMATIC BEFORE vs AFTER COMPARISON */}
      <section className="relative py-28 md:py-40 border-b border-gold/10">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            Somatic Mechanics
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-white">
            Somatic Posture Realignment
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4 mb-6" />
          <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl leading-relaxed">
            Drag the cursor handle to evaluate postural alignment correction, tech-neck release, and core elevation coordinates.
          </p>
        </div>

        {/* Posture Compare Slider */}
        <div className="luxury-container flex flex-col items-center">
          <div 
            ref={sliderRef}
            className="relative w-full max-w-3xl aspect-[16/10] md:aspect-[16/9] bg-abyss border border-gold/15 overflow-hidden select-none cursor-ew-resize"
            onMouseMove={(e) => handleSliderMove(e.clientX)}
            onTouchMove={(e) => { if (e.touches.length > 0) handleSliderMove(e.touches[0].clientX); }}
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
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-75"
                style={{ backgroundImage: `url('/images/founder-portrait-red-full.jpg')` }}
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
              style={{ left: `${sliderPos}%` }}
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

      {/* PHASE 4: CONFIDENCE ASSESSMENT QUIZ */}
      <section id="quiz-presence" className="relative py-28 md:py-40 bg-editorial-grey/10 border-b border-gold/10">
        <div className="luxury-container max-w-3xl">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
              Poise Assessment
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Discover Your Presence Score
            </h2>
            <div className="w-12 h-[1px] bg-gold/40 mt-4 mx-auto mb-6" />
            <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
              Answer 5 core style and posture questions to evaluate your current structural alignment and communication resonance.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 border border-gold/15 shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/3 rounded-full blur-[65px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {!quizStarted ? (
                <motion.div 
                  key="start"
                  className="text-center space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Compass className="w-12 h-12 text-gold mx-auto mb-4 animate-spin-slow" />
                  <h3 className="text-2xl font-serif text-white uppercase tracking-wide">Presence Assessment Quiz</h3>
                  <p className="text-xs text-alabaster/55 font-sans max-w-md mx-auto leading-relaxed">
                    This test evaluates key parameters: tech-neck slumping, gait stability, speech speeds, and personal styling confidence.
                  </p>
                  <Button type="button" onClick={() => setQuizStarted(true)} variant="solid">
                    Begin Assessment
                  </Button>
                </motion.div>
              ) : !quizFinished ? (
                <motion.div 
                  key="question"
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-gold font-sans font-semibold border-b border-gold/10 pb-3">
                    <span>{QUIZ_QUESTIONS[currentQuestion].category}</span>
                    <span>Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-white leading-snug">
                    {QUIZ_QUESTIONS[currentQuestion].question}
                  </h3>

                  <div className="flex flex-col space-y-3">
                    {QUIZ_QUESTIONS[currentQuestion].options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleQuizAnswer(opt.score)}
                        className="w-full text-left p-4 border border-gold/15 bg-editorial-grey/5 text-xs md:text-sm text-alabaster/80 font-sans hover:border-gold hover:bg-editorial-grey/15 transition-all duration-300 focus:outline-none cursor-pointer"
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : !consultationBooked ? (
                <motion.div 
                  key="results-capture"
                  className="space-y-6 animate-fade-in"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="text-center">
                    <UserCheck className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-2xl font-serif text-white uppercase tracking-wide">Assessment Completed</h3>
                    <p className="text-xs text-alabaster/55 font-sans max-w-md mx-auto leading-relaxed mt-2">
                      Submit your profile details below to reveal your custom score, category grade, and unlock a free alignment consultation callback.
                    </p>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setConsultationBooked(true);
                    }}
                    className="space-y-4 max-w-md mx-auto"
                  >
                    <div className="flex flex-col space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">NAME</label>
                      <input 
                        type="text" 
                        required 
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col space-y-1">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">PHONE</label>
                        <input 
                          type="tel" 
                          required 
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">EMAIL</label>
                        <input 
                          type="email" 
                          required 
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <Button type="submit" variant="solid" className="w-full py-4 text-xs font-semibold tracking-luxury mt-2">
                      Secure Assessment Score
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="score-results"
                  className="space-y-6 text-center animate-fade-in"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-serif text-white">Your Presence Index: {quizResultInfo?.score}%</h3>
                  
                  <div className="p-6 border border-gold/20 bg-gold/5 max-w-lg mx-auto text-left font-sans space-y-2">
                    <span className="block text-[10px] uppercase tracking-widest text-gold font-bold">Category: {quizResultInfo?.category} Presence</span>
                    <p className="text-xs text-alabaster/80 leading-relaxed">{quizResultInfo?.description}</p>
                    <p className="text-[10px] text-champagne/60 leading-normal pt-2 border-t border-gold/10">Registrar callback matches: A free 15-minute voice alignment check has been booked for {leadForm.name}.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center pt-4">
                    <a 
                      href={`https://wa.me/919880012345?text=${waConsultMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                      <span>Review Score on WhatsApp</span>
                    </a>
                    <button 
                      onClick={resetQuiz}
                      className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans py-2.5 px-6 border border-gold/25 hover:border-gold cursor-pointer"
                    >
                      Retake Assessment
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* PHASE 5: CINEMATIC TESTIMONIALS (STUDENT TRANSFORMATIONS) */}
      <section id="testimonials" className="relative py-28 md:py-40 bg-abyss border-b border-gold/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="luxury-container max-w-5xl relative z-20">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
              Transformation Stories
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Cinematic Testimonials
            </h2>
            <div className="w-12 h-[1px] bg-gold/40 mt-4 mx-auto" />
          </div>

          {/* Before-During-After Storyboards */}
          <div className="min-h-[420px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {CINEMATIC_STORIES.filter((_, idx) => idx === testimonialIdx).map((story, index) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in"
                >
                  {/* Photo panel */}
                  <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl">
                    <Image 
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[10px] text-gold uppercase tracking-widest font-sans font-semibold block">{story.role}</span>
                      <h4 className="text-2xl font-serif text-white">{story.name}</h4>
                    </div>
                  </div>

                  {/* Stories Details */}
                  <div className="lg:col-span-7 flex flex-col space-y-6 font-sans">
                    <div className="border-b border-gold/10 pb-4">
                      <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold block mb-1">Before: The Challenge</span>
                      <p className="text-xs md:text-sm text-alabaster/60 leading-relaxed italic">&quot;{story.before}&quot;</p>
                    </div>

                    <div className="border-b border-gold/10 pb-4">
                      <span className="text-[9px] uppercase tracking-widest text-gold font-bold block mb-1">During: The Transformation</span>
                      <p className="text-xs md:text-sm text-alabaster/70 leading-relaxed italic">&quot;{story.during}&quot;</p>
                    </div>

                    <div>
                      <span className="text-[9px] uppercase tracking-widest text-green-400 font-bold block mb-1">After: The Poise</span>
                      <p className="text-xs md:text-sm text-white font-medium leading-relaxed italic">&quot;{story.after}&quot;</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Testimonial Nav */}
          <div className="flex justify-center space-x-4 mt-10">
            <button 
              onClick={() => setTestimonialIdx((prev) => (prev - 1 + CINEMATIC_STORIES.length) % CINEMATIC_STORIES.length)}
              className="p-3 border border-gold/20 text-gold hover:bg-gold hover:text-abyss transition-colors cursor-pointer"
              aria-label="Previous Cinematic Story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setTestimonialIdx((prev) => (prev + 1) % CINEMATIC_STORIES.length)}
              className="p-3 border border-gold/20 text-gold hover:bg-gold hover:text-abyss transition-colors cursor-pointer"
              aria-label="Next Cinematic Story"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* PHASE 7: FASHION WEEK GALLERY (ACADEMY MOMENTS) */}
      <section id="gallery" className="relative py-28 md:py-40 border-b border-gold/10">
        <div className="luxury-container flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Vogue Lookbook
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white">
              Academy Moments
            </h2>
            <div className="w-12 h-[1px] bg-gold/40" />
          </div>
          <Button href="/gallery" variant="outline" className="mt-6 md:mt-0 self-start md:self-auto">
            View All Lookbooks
          </Button>
        </div>

        {/* Masonry-style catalog */}
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_MOCK.map((photo, index) => (
            <div 
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-[3/4] overflow-hidden border border-gold/10 hover:border-gold/40 transition-all duration-500 shadow-2xl cursor-pointer"
            >
              <Image 
                src={photo.url}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-transparent opacity-85 z-10 transition-opacity duration-350 group-hover:opacity-95" />
              
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-3 group-hover:translate-y-0 transition-transform duration-350">
                <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold block mb-1">
                  {photo.desc}
                </span>
                <h4 className="text-lg font-serif text-white">
                  {photo.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Fullscreen Lookbook Viewer */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-abyss/95 backdrop-blur-sm p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhoto(null)}
            >
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-6 right-6 text-gold hover:text-white p-2 z-55 cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
              
              <motion.div 
                className="relative max-w-3xl w-full aspect-[3/4] border border-gold/30 shadow-2xl overflow-hidden"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Image 
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-abyss via-abyss/40 to-transparent p-8 text-center">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold block mb-1">{selectedPhoto.desc}</span>
                  <h3 className="text-3xl font-serif text-white">{selectedPhoto.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* INSTAGRAM LOOKBOOK FEED */}
      <section className="relative py-24 border-b border-gold/10">
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
                alt={`Instagram Feed ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-abyss/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center space-y-2">
                <span className="text-[10px] text-gold font-sans font-medium uppercase tracking-widest">Open Instagram</span>
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

      {/* ADMISSIONS FAQ ACCORDIONS */}
      <section className="relative py-28 md:py-40 bg-editorial-grey/5 border-b border-gold/10">
        <div className="luxury-container max-w-4xl">
          
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
              Clarifications
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-white">
              Admissions FAQ
            </h2>
            <div className="w-12 h-[1px] bg-gold/40 mt-4 mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              { q: "Who can join?", a: "Any woman seeking confidence, grooming, communication or personal presence development. We coach candidates ranging from college students to corporate leaders." },
              { q: "Do I need modelling experience?", a: "No. Beginners are welcome. We map your musculoskeletal posture, balance parameters, and heels gait basics from the ground up." },
              { q: "Is this only for aspiring models?", a: "No. Our curriculums benefit professionals, entrepreneurs, creators, and public speakers who wish to command boardrooms and social assemblies tall." },
              { q: "Are classes online or offline?", a: "Program formats vary by batch. We conduct physical runway bootcamps alongside online digital branding sessions." },
              { q: "How do I apply?", a: "You can submit your bio-etiquette targets via our online application page, or initiate a consultation screening directly on WhatsApp." }
            ].map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gold/15 bg-editorial-grey/10"
              >
                <button
                  onClick={() => setFaqActive(faqActive === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-serif text-lg text-white hover:text-gold transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    className={`w-4 h-4 text-gold transition-transform duration-350 shrink-0 ml-4 ${
                      faqActive === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {faqActive === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-xs md:text-sm text-alabaster/60 font-sans leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ADMISSION CONTACT CTA */}
      <section id="contact" className="relative py-28 md:py-40 border-b border-gold/10 scroll-mt-24">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium">
              Start Transformation
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight">
              Secure Your Invitation.
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
                  <span className="text-alabaster/80 font-medium">admissions@heelsandglam.com</span>
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
                    <h3 className="text-2xl font-serif text-white uppercase tracking-wide">Request Consultation</h3>
                    <p className="text-xs text-alabaster/60 font-sans -mt-4">Submit your details below to schedule your alignment screening.</p>
                    
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
                        placeholder="Detail any posture slumps, confidence goals, or pageant targets..."
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
                      className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans cursor-pointer"
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

      {/* FINAL BRAND STATEMENT FOOTER CTA */}
      <section className="relative py-28 md:py-40 bg-abyss border-t border-gold/10">
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

// 6. INSTAGRAM LOOKBOOK POSTS
const INSTAGRAM_POSTS = [
  { url: "/images/founder-portrait-red-half.jpg", likes: "2.4k", comments: "124" },
  { url: "/images/founder-portrait-red-full.jpg", likes: "1.8k", comments: "89" },
  { url: "/images/fashion-week-runway-jeans.jpg", likes: "3.2k", comments: "210" },
  { url: "/images/traditional-saree-styling.jpg", likes: "2.7k", comments: "148" },
  { url: "/images/runway-saree-lotus.jpg", likes: "4.1k", comments: "312" },
  { url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=500", likes: "2.1k", comments: "109" }
];
