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
  UserCheck,
  Maximize2,
  Mic,
  Fingerprint
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/lib/gtag';

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

// 1a. CINEMATIC JOURNEY CHAPTERS (PHASE 3 - THE TRANSFORMATION METHOD™)
const JOURNEY_CHAPTERS = [
  {
    id: 1,
    chapter: "Stage 01",
    title: "Awareness",
    subtitle: "Skeletal Self-Discovery & Diagnostics",
    desc: "The path of poise begins by mapping physical reality. Coached by Aakanksha Anand, we audit your musculoskeletal baseline. Through video posture mappings, we identify tech-neck slumping, pelvic alignment deviations, and joint compensations.",
    metrics: ["Skeletal Posture Mapping", "Tech-Neck Degree Audit", "Foot Strike Gait Assessment", "Center of Gravity Check"],
    image: "/images/founder-portrait-red-half.jpg"
  },
  {
    id: 2,
    chapter: "Stage 02",
    title: "Growth",
    subtitle: "Musculoskeletal Decompression & Carriage Reset",
    desc: "Releasing muscle tension and correcting habitual slouching. We decompress back strain, activate pelvic stabilizers, open the shoulder plates, and execute vertical spine resets to unlock healthy stature.",
    metrics: ["Shoulder Plate Expansion", "Spine Wall Calibration", "Pelvic Tilt Stabilizations", "Strides Gait Adjustments"],
    image: "/images/traditional-saree-styling.jpg"
  },
  {
    id: 3,
    chapter: "Stage 03",
    title: "Confidence",
    subtitle: "Vocal Resonance & Inner Composure",
    desc: "Building diaphragmatic vocal projection and emotional composure. We train pitch modulation, eliminate verbal fillers, stabilize speech rates, and overcome impostor dynamics under spotlight stress.",
    metrics: ["Diaphragmatic Speech Projecting", "Pitch Modulation Checks", "Filler Words Elimination", "Camera Anxiety Defeat"],
    image: "/images/founder-portrait-red-full.jpg"
  },
  {
    id: 4,
    chapter: "Stage 04",
    title: "Presence",
    subtitle: "Catwalk Kinetics & Heel Balance Calibration",
    desc: "Mastering the physics of walking in heels. Learn to step straight-kneed, roll weight fluidly, execute elegant turns, and coordinate eye contact transitions using the signature delayed gaze turn.",
    metrics: ["Straight-Knee Catwalk Strides", "Heel Balancing Alignment", "Cats Walk Pivot Turns", "Delayed Eye Gaze Pivot"],
    image: "/images/runway-saree-lotus.jpg"
  },
  {
    id: 5,
    chapter: "Stage 05",
    title: "Leadership",
    subtitle: "Executive Styling & Identity Geometry",
    desc: "Architecting your signature personal style. We map your skin undertone color palette, examine body geometry silhouettes, structure capsule profiles, and master high-society etiquette.",
    metrics: ["Skin Undertone Colors Mapping", "Body Geometry Silhouette Cut", "Capsule Profile Strategy", "Social Dining Etiquettes"],
    image: "/images/fashion-week-runway-jeans.jpg"
  },
  {
    id: 6,
    chapter: "Stage 06",
    title: "Impact",
    subtitle: "Spotlight Graduation & Roster Launch",
    desc: "The final showcase. Complete a professional lookbook photoshoot directed by Aakanksha Anand and execute a graduation runway presentation to casting directors and scouts.",
    metrics: ["Lookbook Portfolio Shoot", "Catwalk Graduation Showcase", "Pageant & Agency Pipeline", "Alumnae Roster Integration"],
    image: "/images/traditional-saree-styling.jpg"
  }
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
    image: "/images/founder-red-half-circle.jpg",
    before: "Skeletal slumping (tech-neck) and dropped chin.",
    challenge: "Muscular fatigue after 15 minutes of wearing 4-inch stilettos; bent knees walk gait pattern.",
    journey: "Custom skeletal wall alignment checkups, pelvic stabilizer corrections, and straight-knee step kinetics coached by Aakanksha.",
    transformation: "Integrated delayed eye gaze pivots and evening gown carriage balance.",
    result: "Secured Top 5 National Pageant placement and runs catwalks with 98% posture symmetry."
  },
  {
    name: "Dr. Nikita Lal",
    role: "VP, Corporate Operations",
    image: "/images/founder-red-leaning.jpg",
    before: "Rapid, nervous speaking speed and shoulders collapsed forward.",
    challenge: "Shaky pitch resonance under high presentation pressure; filler word traps (ums, likes).",
    journey: "Diaphragmatic pitch checkups, modular pacing exercises, and high-society social dining protocols.",
    transformation: "Styled into a custom-fitted structured capsule blazer styling grid.",
    result: "Commands international operational assemblies with absolute vocal poise and posture composure."
  },
  {
    name: "Rhea Sen",
    role: "Founder, Creators Atelier",
    image: "/images/founder-red-wind.jpg",
    before: "Camera lens anxiety, flat posing profiles.",
    challenge: "Fragmented style identity; nervous fidgeting in front of studio cameras.",
    journey: "Personal skin undertone color mapping, body silhouette geometry, and media turn checks.",
    transformation: "Curated a signature digital lookbook and calibrated gaze delay transitions.",
    result: "Expanded her atelier brand to 150k+ followers with clean camera-facing confidence."
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

// 5a. CINEMATIC FILM SCENES DATA (PHASE 3)
const FILM_SCENES = [
  {
    id: "scene-1",
    sceneNum: "01",
    title: "Arrival",
    timecode: "00:02:14",
    subtitle: "Stepping into the Lavelle Road flagship atelier. The scent of jasmine, warm gold lighting, and the quiet weight of transformation.",
    image: "/images/founder-portrait-red-half.jpg",
    action: "Somatic check-in initiates."
  },
  {
    id: "scene-2",
    sceneNum: "02",
    title: "Discovery",
    timecode: "00:15:42",
    subtitle: "The posture and pelvic calibration screening. Mapping the vertical plumb line, identifying tech-neck curvatures, and defining personal skeletal grids.",
    image: "/images/founder-portrait-red-full.jpg",
    action: "Gait and pelvic alignment assessment."
  },
  {
    id: "scene-3",
    sceneNum: "03",
    title: "Learning",
    timecode: "01:34:10",
    subtitle: "Musculoskeletal decompression drills. Calibrating catwalk stride lengths, shoulder plate stabilization, and speech pacing from the diaphragm.",
    image: "/images/traditional-saree-styling.jpg",
    action: "Vocal resonance and heel carriage exercises."
  },
  {
    id: "scene-4",
    sceneNum: "04",
    title: "Transformation",
    timecode: "02:45:18",
    subtitle: "The styling mapping. Building capsule wardrobes, matching silhouette structures to body geometry, and conducting the lookbook campaign photoshoot.",
    image: "/images/founder-red-full-circle.jpg",
    action: "Wardrobe styling & photo testing."
  },
  {
    id: "scene-5",
    sceneNum: "05",
    title: "Graduation",
    timecode: "03:12:05",
    subtitle: "Showcasing under high-contrast spotlights. Walking with straight-knee precision before top scouts, model agencies, and corporate directors.",
    image: "/images/runway-saree-lotus.jpg",
    action: "Live runway presentation."
  }
];

// 5b. INTERACTIVE SOMATIC CONFIDENCE EVOLUTION DATA (PHASE 8)
const EVOLUTION_WEEKS = [
  {
    week: "Week 01",
    label: "Somatic Baseline Assessment",
    metrics: { posture: 45, vocal: 35, stride: 30, carriage: 40 },
    description: "Orientation baseline checks. Characterized by noticeable cervical neck slumping (tech-neck), shallow chest breathing, and knee bends while walking in high heels.",
    accent: "text-red-400 border-red-500/20 bg-red-950/10"
  },
  {
    week: "Week 04",
    label: "Somatic Postural Decompression",
    metrics: { posture: 68, vocal: 52, stride: 48, carriage: 58 },
    description: "Somatic skeletal reset. Wall tests completed. Engagement of core stabilizers corrects excessive lower back curvature and stabilizes balance coordinates.",
    accent: "text-rosegold border-rosegold/20 bg-rosegold/10"
  },
  {
    week: "Week 08",
    label: "Vocal Resonance & Catwalk Flow",
    metrics: { posture: 85, vocal: 78, stride: 76, carriage: 80 },
    description: "Catwalk kinetics training. Gaze delay turns implemented, pacing strides with runway music beats, and speaking from the diaphragm to command spaces.",
    accent: "text-gold border-gold/20 bg-gold/10"
  },
  {
    week: "Week 12",
    label: "Absolute Presence & Graduation",
    metrics: { posture: 98, vocal: 95, stride: 94, carriage: 96 },
    description: "Full somatic transformation. 98% symmetry rating verified. Effortless stride carriage under spotlight focus before fashion scouts and executive councils.",
    accent: "text-green-400 border-green-500/20 bg-green-950/10"
  }
];

// 5c. EDITORIAL INSTAGRAM LOOKBOOK WALL & REELS DATA (PHASE 2)
const INSTAGRAM_WALL_ITEMS = [
  {
    id: 1,
    category: "Reels",
    title: "Catwalk Pacing & Stride Mechanics",
    likes: "4.8k",
    comments: "256",
    image: "/images/runway-saree-lotus.jpg",
    isVideo: true,
    meta: "Latest Reels • 0:30"
  },
  {
    id: 2,
    category: "Founder Insights",
    title: "Carriage Dynamics for Leaders",
    likes: "3.2k",
    comments: "144",
    image: "/images/founder-portrait-red-full.jpg",
    quote: "Presence is the posture of authority.",
    meta: "Founder Moments"
  },
  {
    id: 3,
    category: "Behind the Scenes",
    title: "Atelier Wardrobe & Saree Draping Class",
    likes: "2.9k",
    comments: "112",
    image: "/images/traditional-saree-styling.jpg",
    meta: "BTS • Academy Life"
  },
  {
    id: 4,
    category: "Reels",
    title: "Catwalk Pivot Delay Calibration",
    likes: "5.1k",
    comments: "318",
    image: "/images/fashion-week-runway-jeans.jpg",
    isVideo: true,
    meta: "Latest Reels • 0:45"
  },
  {
    id: 5,
    category: "Student Highlights",
    title: "Aparna Sharma - Milan Runway Stage",
    likes: "4.3k",
    comments: "198",
    image: "/images/founder-turquoise-oval.png",
    meta: "Transformation Stories"
  },
  {
    id: 6,
    category: "Founder Insights",
    title: "Diaphragmatic Pitch Check Rules",
    likes: "3.9k",
    comments: "185",
    image: "/images/founder-portrait-red-half.jpg",
    quote: "True authority speaks with vocal resonance.",
    meta: "Founder Moments"
  }
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
  const [isSubmittingQuizLead, setIsSubmittingQuizLead] = useState(false);

  // Request Consultation Form State
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '', cohort: 'personal-grooming', message: '' });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleQuizLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingQuizLead(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'assessment',
          data: {
            name: leadForm.name,
            phone: leadForm.phone,
            email: leadForm.email,
            score: quizResultInfo?.score,
            category: quizResultInfo?.category,
            description: quizResultInfo?.description
          }
        })
      });
      if (res.ok) {
        setConsultationBooked(true);
        trackEvent({ action: 'assessment_complete', category: 'Funnel', label: 'Somatic Quiz Completion', value: quizResultInfo?.score });
        trackEvent({ action: 'form_submit_lead', category: 'Lead Generation', label: 'Confidence Lead Capture' });
        
        // WhatsApp redirect details
        const waMsg = encodeURIComponent(
          `Hi Aakanksha! I completed my Presence Score check on Heels & Glam.\n\n` +
          `*Candidate Name:* ${leadForm.name}\n` +
          `*Score:* ${quizResultInfo?.score}%\n` +
          `*Category:* ${quizResultInfo?.category} Presence\n\n` +
          `I would like to book my private alignment consultation.`
        );
        window.open(`https://wa.me/919742232322?text=${waMsg}`, '_blank');
      }
    } catch (err) {
      console.error('[Quiz Lead Submit Error]', err);
    } finally {
      setIsSubmittingQuizLead(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'contact',
          data: {
            name: contactForm.name,
            email: contactForm.email,
            phone: contactForm.phone,
            cohort: contactForm.cohort,
            message: contactForm.message
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

  // Journey Chapter System State (Phase 3)
  const [activeJourneyChapter, setActiveJourneyChapter] = useState(1);

  // Founder Story Active Chapter
  const [activeChapter, setActiveChapter] = useState(FOUNDER_CHAPTERS[0].id);

  // Gallery Selected Lookbook
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_MOCK[0] | null>(null);

  // Contact status
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Accordion active FAQ
  const [faqActive, setFaqActive] = useState<number | null>(null);

  // Cinematic Film Player States
  const [activeFilmScene, setActiveFilmScene] = useState(0);
  const [isFilmPlaying, setIsFilmPlaying] = useState(false);
  const [filmMuted, setFilmMuted] = useState(true);

  // Confidence Evolution Tracker State
  const [activeWeekIdx, setActiveWeekIdx] = useState(0);

  // Instagram Wall Filter State
  const [activeInstaTab, setActiveInstaTab] = useState("All");

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isFilmPlaying) {
      interval = setInterval(() => {
        setActiveFilmScene((prev) => (prev + 1) % FILM_SCENES.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isFilmPlaying]);

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
          <span className="text-[10px] tracking-[0.35em] text-rosegold uppercase font-sans font-bold mb-6 block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              The Digital Poise Atelier
            </motion.span>
          </span>
          
          <h1 className="text-6xl md:text-9xl font-serif tracking-luxury text-white uppercase leading-none mb-6">
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
                className="block text-gold"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                Confidence.
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-1">
              <motion.span
                className="block text-rosegold font-serif"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Own Every Room.
              </motion.span>
            </span>
          </h1>

          <motion.p 
            className="text-sm md:text-lg text-champagne/85 font-sans tracking-wide max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            India&apos;s premier boutique personal grooming, confidence-building, modelling, and personal branding academy. 
            We believe confidence is not inherited—it is cultivated.
          </motion.p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center z-30">
            <Button 
              href="#quiz-presence" 
              variant="solid" 
              className="w-full sm:w-auto"
              onClick={() => trackEvent({ action: 'click_discover_presence_score', category: 'Engagement', label: 'Homepage Hero Discover Presence' })}
            >
              Discover Your Presence Score
            </Button>
            <Button 
              href="#about" 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => trackEvent({ action: 'click_read_philosophy', category: 'Engagement', label: 'Homepage Hero Read Philosophy' })}
            >
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

      {/* EDITORIAL TEXT MARQUEE TICKER (PHASE 3) */}
      <div className="w-full bg-burgundy/25 border-y border-gold/15 py-4 overflow-hidden relative z-20 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-xs tracking-[0.4em] uppercase font-sans text-champagne font-bold px-8">
              Presence &bull; Poise &bull; Authority &bull; Somatic Calibration &bull; Elegance &bull; Self-Respect &bull; Alignment
            </span>
          ))}
        </div>
      </div>

      {/* PHASE 1: THE ART OF PRESENCE CINEMATIC STORYTELLING */}
      <section className="relative min-h-screen bg-black flex flex-col justify-center items-center py-32 border-b border-gold/10 overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-burgundy/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Column: Parallax Image Reveal */}
          <div className="lg:col-span-5 relative w-full aspect-[3/4.5] overflow-hidden border border-gold/20 shadow-2xl group">
            <div className="absolute inset-0 bg-gold/5 z-10 transition-colors group-hover:bg-transparent duration-500" />
            <div className="absolute inset-3 border border-gold/15 z-20 pointer-events-none" />
            <motion.div 
              className="relative w-full h-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image 
                src="/images/founder-red-wind.jpg"
                alt="Aakanksha Anand - High Couture Art of Presence Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_20%] transition-all duration-1000 grayscale group-hover:grayscale-0"
              />
            </motion.div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent z-25" />
            <div className="absolute bottom-6 left-6 z-30">
              <span className="text-[9px] uppercase tracking-[0.3em] text-gold font-bold block mb-1">FOUNDER VISION</span>
              <span className="text-xl font-serif text-white uppercase tracking-widest">THE DIRECT GAZE</span>
            </div>
          </div>

          {/* Right Column: Large Typography Reveal */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.4em] text-rosegold uppercase font-sans font-bold block">
                [ ESTABLISHED PEDIGREE ]
              </span>
              <h2 className="text-5xl md:text-8xl font-serif text-white uppercase tracking-luxury leading-[0.95] font-light">
                THE ART OF <br />
                <span className="text-gold font-serif italic font-medium">PRESENCE.</span>
              </h2>
            </div>

            <div className="w-16 h-[1px] bg-gold/30" />

            <div className="space-y-8 font-sans text-sm md:text-base text-alabaster/70 leading-relaxed max-w-2xl">
              <p className="border-l border-gold/30 pl-6 text-gold/90 font-serif italic text-lg leading-relaxed">
                &ldquo;Presence is not something you are born with. It is an intentional configuration of your skeletal alignment, your center of gravity, and the pitch of your voice.&rdquo;
              </p>
              <p className="text-alabaster/60">
                Coached by Aakanksha Anand, Heels & Glam strips away positional sub-consciousness. 
                Through precise musculoskeletal recalibration, diaphragmatic voice modulation, and custom body silhouette styling, we help you assert your signature digital and physical authority. 
                Whether entering a corporate summit or navigating a national pageant catwalk, you will command your space unconditionally.
              </p>
            </div>

            <div className="pt-6">
              <Link 
                href="/apply" 
                className="inline-flex items-center space-x-4 group text-xs uppercase tracking-luxury text-gold hover:text-white transition-all font-semibold"
              >
                <span>Initiate Your Calibration</span>
                <span className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center group-hover:border-gold group-hover:bg-gold group-hover:text-abyss transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
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
                className="object-cover object-[50%_25%] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-transparent to-transparent" />
            </div>
          </div>

        </div>
      </section>

      {/* PHASE 2: CONFIDENCE MANIFESTO EXPERIENCE */}
      <section className="relative min-h-screen bg-abyss flex items-center justify-center py-32 border-b border-gold/10 overflow-hidden">
        {/* Full-screen background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.02),transparent)] z-0 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-burgundy/3 rounded-full blur-[150px] pointer-events-none" />

        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
          {/* Left Column: Large Editorial Manifesto Text */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12 order-2 lg:order-1">
            <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-sans font-bold block">
              THE MANIFESTO
            </span>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-6xl font-serif text-white uppercase tracking-wide leading-tight">
                Confidence is not a trait you wait for. <br />
                <span className="text-rosegold italic font-serif font-light">It is a posture you assume.</span>
              </h3>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>

            {/* Overlapping text design (magazine-style layout) */}
            <div className="relative font-sans text-xs md:text-sm text-alabaster/60 leading-relaxed max-w-xl space-y-6">
              <span className="absolute -top-12 -left-8 text-9xl font-serif text-gold/5 font-bold pointer-events-none select-none">
                GLAM
              </span>
              <p>
                We do not fit in. We own the room. Heels & Glam was founded on a simple truth: that every woman has a signature, uncompromised presence waiting to be unlocked. 
              </p>
              <p>
                True elegance is silent authority. When you stand tall, align your spine wall, stabilise your pelvic balance, and speak with vocal resonance, the entire room shifts. It is the physics of respect, and it can be trained.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button href="/apply" variant="solid">Join the Guild</Button>
              <Button href="/manifesto" variant="outline">Read Full Manifesto</Button>
            </div>
          </div>

          {/* Right Column: Magazine Portrait with Circular frame */}
          <div className="lg:col-span-5 relative w-full aspect-[3/4.5] flex justify-center items-center order-1 lg:order-2">
            <div className="absolute inset-0 border border-gold/15 -translate-x-3 translate-y-3 pointer-events-none" />
            <div className="relative w-full h-full overflow-hidden border border-gold/20 shadow-2xl bg-black">
              {/* Circular framing design overlay */}
              <div className="absolute inset-8 rounded-full border border-white/10 z-10 flex items-center justify-center pointer-events-none">
                <div className="absolute inset-4 rounded-full border border-gold/10" />
              </div>
              <Image 
                src="/images/founder-red-half-circle.jpg"
                alt="Aakanksha Anand - Confidence Manifesto Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_20%] opacity-85 hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-transparent to-transparent z-15" />
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMY EXPERIENCE FILM */}
      <section id="experience-film" className="relative py-28 md:py-40 bg-black border-y border-gold/10 overflow-hidden scroll-mt-24">
        {/* Ambient projection glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="luxury-container max-w-6xl relative z-10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold mb-3">
              Cinematic Storytelling
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-wider">
              The Academy Film
            </h2>
            <div className="w-16 h-[1px] bg-gold/30 mt-4 mb-6" />
            <p className="text-xs md:text-sm text-champagne/70 max-w-xl leading-relaxed uppercase tracking-widest font-sans font-light">
              Experience the stages of personal transformation in high definition. Scrub through the reel to witness the process.
            </p>
          </div>

          {/* Film Widescreen Player Frame */}
          <div className="relative border border-gold/20 bg-abyss shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            
            {/* Top Widescreen Letterbox Overlay */}
            <div className="absolute top-0 inset-x-0 h-10 bg-black/95 border-b border-gold/10 z-20 px-6 flex justify-between items-center text-[8px] md:text-[10px] font-sans uppercase tracking-[0.2em] text-alabaster/40">
              <div className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
                <span className="text-white font-semibold">REC // LIVE FEED</span>
              </div>
              <div className="hidden sm:block">Aspect Ratio: 2.39:1 CinemaScope</div>
              <div className="text-gold font-bold">SCENE: {FILM_SCENES[activeFilmScene].sceneNum} / 05</div>
            </div>

            {/* Main Screen (aspect-video) */}
            <div className="relative aspect-[2.39/1] w-full min-h-[300px] overflow-hidden flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilmScene}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={FILM_SCENES[activeFilmScene].image}
                    alt={FILM_SCENES[activeFilmScene].title}
                    fill
                    priority
                    className="object-cover opacity-65"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                </motion.div>
              </AnimatePresence>

              {/* Grid calibration guides overlaid (simulating camera viewfinder) */}
              <div className="absolute inset-0 border border-white/5 pointer-events-none z-10 m-6 flex items-center justify-center">
                <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 left-1/3" />
                <div className="absolute top-0 bottom-0 w-[1px] bg-white/5 right-1/3" />
                <div className="absolute left-0 right-0 h-[1px] bg-white/5 top-1/3" />
                <div className="absolute left-0 right-0 h-[1px] bg-white/5 bottom-1/3" />
                
                {/* Viewfinder crosshairs */}
                <div className="w-4 h-4 border-t border-l border-gold/30 absolute top-0 left-0" />
                <div className="w-4 h-4 border-t border-r border-gold/30 absolute top-0 right-0" />
                <div className="w-4 h-4 border-b border-l border-gold/30 absolute bottom-0 left-0" />
                <div className="w-4 h-4 border-b border-r border-gold/30 absolute bottom-0 right-0" />
              </div>

              {/* Widescreen bottom letterbox overlay (holds subtitles) */}
              <div className="absolute bottom-0 inset-x-0 bg-black/95 border-t border-gold/10 z-20 py-4 px-6 min-h-[80px] md:min-h-[100px] flex flex-col justify-center items-center">
                <div className="text-[10px] md:text-xs text-gold uppercase tracking-[0.2em] font-sans font-bold mb-2">
                  {FILM_SCENES[activeFilmScene].title} &bull; {FILM_SCENES[activeFilmScene].action}
                </div>
                <p className="text-xs md:text-sm text-center font-serif text-white max-w-3xl leading-relaxed italic">
                  &ldquo;{FILM_SCENES[activeFilmScene].subtitle}&rdquo;
                </p>
              </div>

            </div>

            {/* Playback Controls & Progress Bar */}
            <div className="bg-editorial-grey/25 border-t border-gold/15 p-4 flex flex-col md:flex-row items-center justify-between gap-4 select-none">
              
              {/* Play / Pause buttons */}
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => setIsFilmPlaying(!isFilmPlaying)}
                  className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all cursor-pointer"
                  aria-label={isFilmPlaying ? "Pause film" : "Play film"}
                >
                  {isFilmPlaying ? (
                    <span className="font-bold text-xs uppercase tracking-tighter">||</span>
                  ) : (
                    <Play className="w-4 h-4 fill-gold hover:fill-black" />
                  )}
                </button>

                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-widest text-alabaster/40 font-sans">Timecode</span>
                  <span className="text-xs text-white font-mono">{FILM_SCENES[activeFilmScene].timecode}</span>
                </div>
              </div>

              {/* Progress Scrubbing Bar */}
              <div className="flex-1 w-full flex items-center space-x-3">
                <span className="text-[9px] font-mono text-alabaster/40">00:00:00</span>
                <div className="flex-grow h-1.5 bg-white/10 rounded-full overflow-hidden relative cursor-pointer group">
                  {FILM_SCENES.map((scene, idx) => {
                    const widthPercent = 100 / FILM_SCENES.length;
                    const isPassedOrActive = idx <= activeFilmScene;
                    return (
                      <div 
                        key={scene.id}
                        onClick={() => {
                          setActiveFilmScene(idx);
                          setIsFilmPlaying(false);
                        }}
                        className="absolute top-0 bottom-0 hover:bg-gold/40 transition-colors"
                        style={{ 
                          left: `${idx * widthPercent}%`, 
                          width: `${widthPercent}%`,
                          borderRight: idx < FILM_SCENES.length - 1 ? '1px solid rgba(0,0,0,0.5)' : 'none'
                        }}
                      >
                        <div className={`h-full ${idx === activeFilmScene ? 'bg-gold' : isPassedOrActive ? 'bg-gold/60' : 'bg-transparent'}`} />
                      </div>
                    );
                  })}
                </div>
                <span className="text-[9px] font-mono text-alabaster/40">03:45:00</span>
              </div>

              {/* Right indicators & Sound toggle */}
              <div className="flex items-center space-x-6 text-[10px] font-sans">
                {/* Audio waves simulating audio play */}
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => setFilmMuted(!filmMuted)}
                    className="text-gold hover:text-white transition-colors cursor-pointer"
                  >
                    <Volume2 className={`w-4 h-4 ${filmMuted ? 'opacity-30' : 'opacity-100'}`} />
                  </button>
                  <div className="flex items-end space-x-0.5 h-3">
                    <div className={`w-0.5 bg-gold transition-all duration-300 ${isFilmPlaying && !filmMuted ? 'h-3 animate-pulse' : 'h-1'}`} />
                    <div className={`w-0.5 bg-gold transition-all duration-300 ${isFilmPlaying && !filmMuted ? 'h-2 animate-pulse' : 'h-1'}`} />
                    <div className={`w-0.5 bg-gold transition-all duration-300 ${isFilmPlaying && !filmMuted ? 'h-4 animate-pulse' : 'h-1'}`} />
                    <div className={`w-0.5 bg-gold transition-all duration-300 ${isFilmPlaying && !filmMuted ? 'h-1.5 animate-pulse' : 'h-1'}`} />
                  </div>
                </div>

                <div className="hidden lg:flex items-center space-x-1 border border-gold/25 px-2.5 py-1 text-[9px] text-gold uppercase tracking-widest font-semibold bg-gold/5">
                  <span>1080P Dolby Vision</span>
                </div>
              </div>

            </div>

          </div>

          {/* Film strip thumbnails list */}
          <div className="grid grid-cols-5 gap-2 md:gap-4 mt-6">
            {FILM_SCENES.map((scene, idx) => (
              <button 
                key={scene.id}
                onClick={() => {
                  setActiveFilmScene(idx);
                  setIsFilmPlaying(false);
                }}
                className={`relative aspect-video border overflow-hidden transition-all duration-350 cursor-pointer ${
                  idx === activeFilmScene 
                    ? 'border-gold shadow-lg ring-1 ring-gold/45 scale-102' 
                    : 'border-gold/15 grayscale opacity-50 hover:opacity-80 hover:grayscale-0'
                }`}
              >
                <Image 
                  src={scene.image}
                  alt={scene.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/45 z-10 flex flex-col justify-between p-2 text-left">
                  <span className="text-[7px] md:text-[8px] font-mono text-gold/80 block uppercase">Scene {scene.sceneNum}</span>
                  <span className="text-[8px] md:text-[10px] text-white font-sans font-bold leading-none">{scene.title}</span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* PHASE 3: CONFIDENCE EVOLUTION METER */}
      <section className="relative py-28 md:py-40 border-b border-gold/10 bg-editorial-grey/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[130px] pointer-events-none" />
        
        <div className="luxury-container max-w-6xl relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
              PHASE 03 // SOMATIC METER
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-wider">
              Confidence Evolution Meter
            </h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
            <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
              Track the kinetic evolution of personal authority. Explore the 5 critical stages of physical presence calibration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left side: Full body portrait with hotspots */}
            <div className="lg:col-span-5 relative w-full aspect-[3/4.5] flex justify-center items-center">
              <div className="absolute inset-4 border border-gold/20 -translate-x-3 translate-y-3 pointer-events-none z-10" />
              <div className="relative w-full h-full overflow-hidden border border-gold/15 shadow-2xl bg-black">
                <Image 
                  src="/images/founder-red-full-circle.jpg"
                  alt="Aakanksha Anand - Poise and Stature Calibration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover opacity-85"
                />
                
                {/* Hotspot Markers */}
                {[
                  { id: 0, top: "25%", left: "48%", name: "Awareness" },
                  { id: 1, top: "42%", left: "52%", name: "Confidence" },
                  { id: 2, top: "55%", left: "45%", name: "Presence" },
                  { id: 3, top: "72%", left: "54%", name: "Elegance" },
                  { id: 4, top: "88%", left: "48%", name: "Impact" }
                ].map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => setActiveWeekIdx(spot.id)}
                    className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group z-20 focus:outline-none"
                    style={{ top: spot.top, left: spot.left }}
                    aria-label={`View stage ${spot.name}`}
                  >
                    <span className="absolute inset-0 rounded-full bg-gold/20 animate-ping group-hover:bg-gold/40" />
                    <span className={`w-3.5 h-3.5 rounded-full border border-gold transition-all duration-300 ${
                      activeWeekIdx === spot.id ? 'bg-gold scale-120' : 'bg-abyss/80 group-hover:bg-gold'
                    }`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right side: Interactive Evolution Stats */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-8 font-sans">
              <div className="flex space-x-1.5 overflow-x-auto pb-4 border-b border-gold/10">
                {[
                  { name: "Awareness", label: "01. Self-Diagnosis" },
                  { name: "Confidence", label: "02. Spine Reset" },
                  { name: "Presence", label: "03. Vocal Gravitas" },
                  { name: "Elegance", label: "04. Catwalk Poise" },
                  { name: "Impact", label: "05. Roster Launch" }
                ].map((w, idx) => (
                  <button
                    key={w.name}
                    onClick={() => setActiveWeekIdx(idx)}
                    className={`px-4 py-2.5 text-[9px] uppercase tracking-widest transition-all border shrink-0 ${
                      activeWeekIdx === idx
                        ? 'bg-gold text-abyss border-gold font-bold'
                        : 'bg-editorial-grey/15 text-alabaster/40 border-gold/10 hover:text-white'
                    } cursor-pointer`}
                  >
                    {w.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Stats Panel */}
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-rosegold font-bold block mb-1">
                    CURRENT STATE CALIBRATION
                  </span>
                  <h3 className="text-3xl font-serif text-white uppercase tracking-wider">
                    {["Awareness Check", "Confidence Decompression", "Presence Spotlight", "Elegance Kinetics", "Impact Authority"][activeWeekIdx]}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-pearl/70 leading-relaxed min-h-[75px] max-w-xl">
                  {[
                    "Somatic diagnostic baseline. Video assessments map pelvic deviations, tech-neck curvatures, and center of gravity displacements.",
                    "Spine verticality reset. Decompressing musculoskeletal tension and releasing shoulder plates forward slouching.",
                    "Vocal resonance activation. Speak from the diaphragm, eliminate verbal fillers, and control speech rates under pressure.",
                    "Catwalk stride mechanics. Calibration of straight-knee heel walking gait and delayed eye gaze turns.",
                    "Absolute presence graduation. Catwalk roster presentation and elite digital personal branding launch."
                  ][activeWeekIdx]}
                </p>

                {/* Progress Gauges */}
                <div className="space-y-4 max-w-xl">
                  {[
                    { label: "Posture Plumb Line Alignment", val: [40, 65, 82, 92, 98][activeWeekIdx] },
                    { label: "Vocal Modulation & Diaphragm Control", val: [30, 50, 75, 85, 95][activeWeekIdx] },
                    { label: "Catwalk Kinetics & Heel Balance", val: [20, 45, 68, 88, 96][activeWeekIdx] },
                    { label: "Executive Presence Index", val: [35, 58, 80, 90, 99][activeWeekIdx] }
                  ].map((gauge) => (
                    <div key={gauge.label} className="space-y-1">
                      <div className="flex justify-between text-[9px] uppercase text-pearl/50 tracking-wider">
                        <span>{gauge.label}</span>
                        <span className="text-gold font-bold">{gauge.val}%</span>
                      </div>
                      <div className="h-1 bg-white/5 overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-rosegold via-gold to-white"
                          initial={{ width: 0 }}
                          animate={{ width: `${gauge.val}%` }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PHASE 4: FOUNDER LETTER SECTION */}
      <section id="founder" className="relative py-28 md:py-40 bg-editorial-grey/10 border-y border-gold/10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Portrait with elegant oval frame */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="absolute inset-4 border border-gold/15 -translate-x-4 translate-y-4 pointer-events-none" />
            <div className="relative w-full aspect-[3/4.5] overflow-hidden border border-gold/20 shadow-2xl">
              <Image 
                src="/images/founder-turquoise-oval.png"
                alt="Aakanksha Anand - Founder & Head Coach Portrait"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[50%_20%] transition-transform duration-700 hover:scale-103"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-abyss/80 to-transparent" />
            </div>
          </div>

          {/* Right Column: Editorial Letter */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-sans font-bold block">
              AN INVITATION FROM THE FOUNDER
            </span>
            
            <h3 className="text-4xl md:text-6xl font-serif text-white leading-tight">
              Elegance is Silent Authority.
            </h3>
            
            <div className="w-12 h-[1px] bg-gold/40" />

            <div className="space-y-6 text-sm text-alabaster/70 font-sans leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:line-height-1">
                Dear Aspiring Leader,
              </p>
              <p>
                Growing up, I realized that posture is not just an aesthetic parameter—it is where confidence starts. Watching women lose their presence due to musculoskeletal sub-consciousness drove me to study body mechanics.
              </p>
              <p>
                Heels & Glam is not a standard modelling school. It is an elite transformation guild where corporate leaders, creators, and pageant contenders acquire the physical kinetics of authority.
              </p>
              <p>
                When a woman stands tall, opens her chest, and modulates her voice, the room shifts. I invite you to join us on this journey to decompress your carriage and claim your space unconditionally.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-4 border-t border-gold/15">
              <span className="font-serif italic text-gold text-2xl tracking-widest block mb-1">
                Aakanksha Anand
              </span>
              <span className="text-[9px] uppercase tracking-widest text-pearl/40 font-sans font-semibold">
                Founder & Head Coach, Heels & Glam
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="/academy" variant="solid">Explore the Academy</Button>
              <Button href="https://wa.me/919742232322" variant="outline">Consult via WhatsApp</Button>
            </div>
          </div>

        </div>
      </section>

      {/* PROPRIETARY FRAMEWORK: THE CONFIDENCE CODE */}
      <section className="relative py-28 md:py-40 border-b border-gold/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-burgundy/3 rounded-full blur-[130px] pointer-events-none" />
        <div className="luxury-container max-w-5xl relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
              THE SIGNATURE FRAMEWORK
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-wider">
              The Confidence Code
            </h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
            <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed font-sans font-light">
              A trademarked multi-dimensional model designed by Aakanksha Anand, bridging physical mechanics, vocal gravitas, and identity positioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {[
              { icon: Compass, title: "Presence", desc: "Command spatial authority through open posture framing, scanning levelly, and holding gaze pivots." },
              { icon: Maximize2, title: "Poise", desc: "Correct carriage biomechanics—spine verticality resets, shoulder decompression, and heels walk comfort." },
              { icon: Mic, title: "Communication", desc: "Unlock vocal resonance, speak from the diaphragm, and command pacing using deliberate pauses." },
              { icon: Fingerprint, title: "Style", desc: "Map body geometry silhouettes, identify skin color theories, and build a signature capsule profile." },
              { icon: ShieldCheck, title: "Confidence", desc: "Re-pattern subconscious slumping, address impostor habits, and live stature unconditionally." },
              { icon: Award, title: "Personal Brand", desc: "Align digital profile aesthetics, media assets, and offline presentation into a unified authority." }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="p-8 border border-gold/15 bg-editorial-grey/5 flex flex-col space-y-4 relative group hover:border-gold/30 transition-all duration-300"
              >
                <div className="p-3 bg-gold/5 border border-gold/15 text-gold w-fit rounded-full group-hover:bg-gold group-hover:text-abyss transition-colors duration-300">
                  <pillar.icon className="w-5 h-5" />
                </div>
                
                <span className="text-[9px] text-gold tracking-widest uppercase font-bold">
                  Pillar 0{idx + 1}
                </span>
                
                <h3 className="text-lg font-serif text-white uppercase tracking-wider">
                  {pillar.title}
                </h3>
                
                <p className="text-xs text-pearl/60 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 3: INTERACTIVE TRANSFORMATION ROADMAP (CINEMATIC CHAPTERS) */}
      <section id="journey-presence" className="relative py-28 md:py-40 border-b border-gold/10 bg-editorial-grey/5">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
            THE TRADEMARK METHODOLOGY
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-white uppercase">
            The Transformation Method™
          </h2>
          <div className="w-12 h-[1px] bg-gold/40 mt-4 mb-6" />
          <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl leading-relaxed">
            Our proprietary 6-stage transformation methodology designed to structure physical posture, style, and vocal self-possession.
          </p>
        </div>

        {/* Chapter Selection Bar */}
        <div className="luxury-container max-w-4xl flex justify-center space-x-2 border-b border-gold/10 pb-6 mb-16 overflow-x-auto">
          {JOURNEY_CHAPTERS.map((ch) => (
            <button
              key={ch.id}
              onClick={() => {
                setActiveJourneyChapter(ch.id);
                trackEvent({ action: 'journey_chapter_view', category: 'Engagement', label: `Viewed ${ch.chapter}` });
              }}
              className={`px-6 py-3 text-[10px] uppercase tracking-luxury font-sans font-bold transition-all border shrink-0 ${
                activeJourneyChapter === ch.id
                  ? 'bg-gold text-abyss border-gold'
                  : 'bg-editorial-grey/10 text-alabaster/40 border-gold/15 hover:border-gold/30 hover:text-white'
              } cursor-pointer`}
            >
              {ch.chapter}
            </button>
          ))}
        </div>

        {/* Chapter Content Grid */}
        <div className="luxury-container max-w-5xl">
          <AnimatePresence mode="wait">
            {JOURNEY_CHAPTERS.filter(ch => ch.id === activeJourneyChapter).map((ch) => {
              const chMessage = encodeURIComponent(
                `Hi Aakanksha! I am reviewing the ${ch.chapter} (${ch.title}) on your transformation roadmap and want to request my invitation.`
              );
              return (
                <motion.div
                  key={ch.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  {/* Left detail column */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-[10px] uppercase tracking-widest text-gold font-bold font-sans">
                      {ch.chapter} • {ch.subtitle}
                    </span>
                    <h3 className="text-3xl md:text-5xl font-serif text-white uppercase leading-tight">
                      {ch.title}
                    </h3>
                    <div className="w-12 h-[1px] bg-gold/45" />
                    
                    <p className="text-xs md:text-sm text-pearl/70 font-sans leading-relaxed">
                      {ch.desc}
                    </p>

                    {/* Metrics check grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans text-xs">
                      {ch.metrics.map((metric) => (
                        <div key={metric} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-gold shrink-0" />
                          <span className="text-pearl/65">{metric}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 flex flex-wrap gap-4">
                      <a
                        href={`https://wa.me/919742232322?text=${chMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2"
                        onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: `WhatsApp ${ch.chapter}` })}
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                        <span>Lock Chapter Spot</span>
                      </a>
                      <Button href="/apply" variant="outline" onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: `Apply from ${ch.chapter}` })}>
                        Begin Your Transformation
                      </Button>
                    </div>
                  </div>

                  {/* Right visual column with overlay */}
                  <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl">
                    <div className="absolute inset-4 border border-gold/10 -translate-x-3 translate-y-3 pointer-events-none z-10" />
                    <Image
                      src={ch.image}
                      alt={ch.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-abyss/90 via-transparent to-transparent z-10" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
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

          {/* Somatic Confidence Evolution Tracker (Phase 8) */}
          <div className="w-full max-w-3xl mt-12 p-6 md:p-8 border border-gold/15 bg-editorial-grey/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-burgundy/10 rounded-full blur-[50px] pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 pb-4 border-b border-gold/10 gap-4">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-bold block mb-1">
                  Interactive Evolution
                </span>
                <h4 className="text-xl font-serif text-white uppercase tracking-wider">
                  Confidence Evolution Tracker
                </h4>
              </div>
              <div className="flex space-x-1.5 overflow-x-auto pb-1 sm:pb-0">
                {EVOLUTION_WEEKS.map((w, idx) => (
                  <button
                    key={w.week}
                    onClick={() => setActiveWeekIdx(idx)}
                    className={`px-3 py-1.5 text-[9px] font-sans uppercase tracking-widest transition-all border shrink-0 ${
                      activeWeekIdx === idx
                        ? 'bg-gold text-abyss border-gold font-semibold'
                        : 'bg-editorial-grey/15 text-alabaster/40 border-gold/10 hover:text-white'
                    } cursor-pointer`}
                  >
                    {w.week}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Description & state info */}
              <div className="md:col-span-5 space-y-4">
                <span className="text-xs uppercase tracking-luxury text-gold font-sans font-semibold">
                  {EVOLUTION_WEEKS[activeWeekIdx].label}
                </span>
                <p className="text-xs text-alabaster/60 font-sans leading-relaxed min-h-[75px]">
                  {EVOLUTION_WEEKS[activeWeekIdx].description}
                </p>
                <div className={`p-4 border ${EVOLUTION_WEEKS[activeWeekIdx].accent} text-[9px] font-sans tracking-wide uppercase`}>
                  Status: {EVOLUTION_WEEKS[activeWeekIdx].label}
                </div>
              </div>

              {/* Progress Gauges */}
              <div className="md:col-span-7 space-y-4 font-sans text-xs">
                {[
                  { name: "Posture Symmetry Index", val: EVOLUTION_WEEKS[activeWeekIdx].metrics.posture },
                  { name: "Vocal Tone Resonance", val: EVOLUTION_WEEKS[activeWeekIdx].metrics.vocal },
                  { name: "Catwalk Gait Balance Kinetics", val: EVOLUTION_WEEKS[activeWeekIdx].metrics.stride },
                  { name: "Visual Presence & Stature", val: EVOLUTION_WEEKS[activeWeekIdx].metrics.carriage }
                ].map((m) => (
                  <div key={m.name} className="space-y-1">
                    <div className="flex justify-between text-[9px] uppercase text-alabaster/50 tracking-wider">
                      <span>{m.name}</span>
                      <span className="text-gold font-bold">{m.val}%</span>
                    </div>
                    <div className="h-1 bg-white/5 overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-rosegold via-gold to-white"
                        initial={{ width: 0 }}
                        animate={{ width: `${m.val}%` }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
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
                    onSubmit={handleQuizLeadSubmit}
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
                        disabled={isSubmittingQuizLead}
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
                          disabled={isSubmittingQuizLead}
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
                          disabled={isSubmittingQuizLead}
                        />
                      </div>
                    </div>

                    <Button type="submit" variant="solid" className="w-full py-4 text-xs font-semibold tracking-luxury mt-2" disabled={isSubmittingQuizLead}>
                      {isSubmittingQuizLead ? 'Securing...' : 'Secure Assessment Score'}
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
                      href={`https://wa.me/919742232322?text=${waConsultMessage}`}
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

      {/* PHASE 5: MAGAZINE TRANSFORMATION STORIES */}
      <section id="testimonials" className="relative py-28 md:py-40 bg-abyss border-b border-gold/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/3 rounded-full blur-[100px] pointer-events-none" />

        <div className="luxury-container max-w-6xl relative z-20">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
              PHASE 05 // THE TRANSFORMATION REGISTRY
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-wider">
              Magazine Stories
            </h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
            <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
              Witness the kinetic shift from skeletal self-consciousness to absolute spatial presence.
            </p>
          </div>

          {/* Before-During-After Storyboards */}
          <div className="min-h-[500px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {CINEMATIC_STORIES.filter((_, idx) => idx === testimonialIdx).map((story) => (
                <motion.div
                  key={story.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full"
                >
                  {/* Photo panel: Elegant vertical block with a gold frame border */}
                  <div className="lg:col-span-5 relative w-full aspect-[3/4.2] overflow-hidden border border-gold/20 shadow-2xl bg-black">
                    <div className="absolute inset-3 border border-gold/10 pointer-events-none z-10" />
                    <Image 
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent z-15" />
                    <div className="absolute bottom-6 left-6 right-6 z-20">
                      <span className="text-[9px] text-gold uppercase tracking-[0.25em] font-sans font-bold block mb-1">
                        {story.role}
                      </span>
                      <h4 className="text-3xl font-serif text-white font-medium uppercase tracking-wider">
                        {story.name}
                      </h4>
                    </div>
                  </div>

                  {/* Magazine Columns Details */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs">
                    
                    {/* Before Column */}
                    <div className="p-6 border border-red-500/10 bg-red-950/5 relative">
                      <span className="text-[8px] uppercase tracking-widest text-red-400 font-bold block mb-2">
                        01 / SKELETAL BASELINE (BEFORE)
                      </span>
                      <p className="text-pearl/60 italic leading-relaxed">
                        &ldquo;{story.before}&rdquo;
                      </p>
                    </div>

                    {/* Challenge Column */}
                    <div className="p-6 border border-rosegold/15 bg-editorial-grey/5 relative">
                      <span className="text-[8px] uppercase tracking-widest text-rosegold font-bold block mb-2">
                        02 / STRUCTURAL OBSTACLE
                      </span>
                      <p className="text-pearl/70 leading-relaxed">
                        &ldquo;{story.challenge}&rdquo;
                      </p>
                    </div>

                    {/* Journey Column */}
                    <div className="p-6 border border-gold/10 bg-editorial-grey/5 relative">
                      <span className="text-[8px] uppercase tracking-widest text-gold font-bold block mb-2">
                        03 / METHODOLOGY JOURNEY
                      </span>
                      <p className="text-pearl/75 leading-relaxed">
                        &ldquo;{story.journey}&rdquo;
                      </p>
                    </div>

                    {/* Transformation Column */}
                    <div className="p-6 border border-gold/15 bg-editorial-grey/5 relative">
                      <span className="text-[8px] uppercase tracking-widest text-gold font-bold block mb-2">
                        04 / KINETIC RESET
                      </span>
                      <p className="text-pearl/85 leading-relaxed">
                        &ldquo;{story.transformation}&rdquo;
                      </p>
                    </div>

                    {/* Result Column (Full Width) */}
                    <div className="md:col-span-2 p-6 border border-gold/25 bg-gold/5 relative overflow-hidden flex flex-col justify-center">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gold/3 rounded-full blur-xl pointer-events-none" />
                      <span className="text-[9px] uppercase tracking-widest text-gold font-bold flex items-center space-x-2 mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                        <span>05 / GRADUATION OUTCOME</span>
                      </span>
                      <p className="text-white text-sm leading-relaxed font-serif italic font-medium">
                        &ldquo;{story.result}&rdquo;
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Testimonial Navigation Controls */}
          <div className="flex justify-center items-center space-x-6 mt-12">
            <button 
              onClick={() => setTestimonialIdx((prev) => (prev - 1 + CINEMATIC_STORIES.length) % CINEMATIC_STORIES.length)}
              className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-abyss transition-all cursor-pointer"
              aria-label="Previous Magazine Story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-bold">
              PAGE 0{testimonialIdx + 1} OF 0{CINEMATIC_STORIES.length}
            </span>
            <button 
              onClick={() => setTestimonialIdx((prev) => (prev + 1) % CINEMATIC_STORIES.length)}
              className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-abyss transition-all cursor-pointer"
              aria-label="Next Magazine Story"
            >
              <ChevronRight className="w-5 h-5" />
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

      {/* EDITORIAL INSTAGRAM LOOKBOOK WALL & REELS SHOWCASE (PHASE 2) */}
      <section className="relative py-28 md:py-40 border-b border-gold/10 bg-obsidian">
        <div className="luxury-container flex flex-col items-center text-center mb-16">
          <InstagramIcon className="w-6 h-6 text-rosegold mb-4" />
          <span className="text-xs uppercase tracking-luxury text-rosegold font-sans font-medium mb-3">
            Digital Luxury Salon
          </span>
          <h2 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-wider">
            @heelsandglam
          </h2>
          <div className="w-16 h-[1px] bg-rosegold/30 mt-4 mb-8" />
          
          {/* Instagram Media Filters */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
            {["All", "Reels", "Founder Insights", "Behind the Scenes", "Student Highlights"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveInstaTab(tab)}
                className={`px-4 py-2 text-[9px] uppercase tracking-widest font-sans font-semibold transition-all border ${
                  activeInstaTab === tab
                    ? 'bg-rosegold text-abyss border-rosegold font-bold'
                    : 'bg-burgundy/5 text-alabaster/40 border-rosegold/15 hover:border-rosegold/30 hover:text-white'
                } cursor-pointer`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Magazine Lookbook Grid */}
        <div className="luxury-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSTAGRAM_WALL_ITEMS.filter(item => activeInstaTab === "All" || item.category === activeInstaTab).map((item) => (
            <a 
              key={item.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden border border-rosegold/10 hover:border-rosegold/40 transition-all duration-500 block bg-burgundy/5 ${
                item.isVideo ? 'aspect-[9/16] max-w-sm mx-auto w-full' : 'aspect-square'
              }`}
            >
              <Image 
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103 opacity-75 group-hover:opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-90 z-10" />

              {/* Video Play Overlay */}
              {item.isVideo && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-350">
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </div>
              )}

              {/* Text / Quote Overlay for static lookbook */}
              {!item.isVideo && 'quote' in item && item.quote && (
                <div className="absolute top-6 left-6 right-6 z-20 pr-4">
                  <span className="text-[8px] uppercase tracking-widest text-rosegold font-sans font-bold block mb-1">Founder Note</span>
                  <p className="text-sm font-serif italic text-white/90 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                </div>
              )}

              {/* Bottom metadata details */}
              <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-350">
                <span className="text-[8px] uppercase tracking-widest text-rosegold font-sans font-semibold block mb-1" dangerouslySetInnerHTML={{ __html: item.meta }} />
                <h4 className="text-base font-serif text-white leading-snug">{item.title}</h4>
                
                {/* Likes/Comments counters */}
                <div className="flex items-center space-x-4 mt-3 pt-3 border-t border-white/10 text-[10px] font-sans text-alabaster/40">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-3.5 h-3.5 text-rosegold fill-rosegold" />
                    <span>{item.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="w-3.5 h-3.5 text-rosegold fill-rosegold" />
                    <span>{item.comments}</span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* SOCIAL-TO-WHATSAPP FUNNEL (PHASE 5) */}
        <div className="luxury-container mt-16 max-w-4xl relative z-20">
          <div className="p-8 md:p-12 border border-rosegold/25 bg-burgundy/5 text-center space-y-6">
            <span className="text-[9px] uppercase tracking-[0.25em] text-rosegold font-sans font-bold block">
              Seen Us On Instagram? Continue Your Transformation.
            </span>
            <h3 className="text-2xl md:text-4xl font-serif text-white uppercase tracking-wider max-w-2xl mx-auto leading-tight">
              Book Your Private Somatic Alignment Check on WhatsApp
            </h3>
            <p className="text-xs text-pearl/60 font-sans max-w-lg mx-auto leading-relaxed">
              Connect directly with our Head Registrar. Share your posture alignment targets or camera presentation challenges to coordinate your direct Admissions callback.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a 
                href="https://wa.me/919742232322" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3.5 px-8 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2"
                onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Social Funnel WhatsApp' })}
              >
                <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                <span>Message Admissions Desk</span>
              </a>
              <Button 
                href="/apply" 
                variant="outline"
                onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Social Funnel Request' })}
              >
                Request Your Invitation
              </Button>
            </div>
          </div>
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

      {/* PHASE 7: COMMUNITY EXPERIENCE - THE HEELS & GLAM CIRCLE */}
      <section id="academy-circle" className="relative py-28 md:py-40 bg-editorial-grey/5 border-b border-gold/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/2 rounded-full blur-[130px] pointer-events-none" />
        <div className="luxury-container max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Copy side */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
                THE SOVEREIGN ROSTER
              </span>
              <h2 className="text-4xl md:text-6xl font-serif text-white uppercase leading-none">
                The Heels & Glam<br />
                <span className="text-champagne">Circle</span>
              </h2>
              <div className="w-12 h-[1px] bg-gold/30" />
              <p className="text-xs md:text-sm text-pearl/70 leading-relaxed font-sans font-light">
                Admissions to Heels & Glam grants lifetime membership to our sovereign alumnae guild. More than a network, it is a private society of female leaders, startup founders, doctors, pageant titleholders, and corporate executives who support each other's spatial positioning.
              </p>
              
              <div className="space-y-4 pt-2">
                {[
                  { title: "Elite Networking Assemblies", desc: "Private physical cohort connection assemblies at our Lavelle Road Flagship." },
                  { title: "Catwalk Mastery Workshops", desc: "Alumnae refresher clinics checking muscle decompression and straight-knee strikes." },
                  { title: "Sovereign Mentorship", desc: "Direct dialogue boards and portfolio reviews coached by Aakanksha Anand." }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs font-sans">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium uppercase tracking-wider">{item.title}</h4>
                      <p className="text-pearl/50 font-light mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual cards grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-transparent to-transparent pointer-events-none z-10" />
              
              <div className="space-y-4">
                <div className="relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-xl">
                  <Image 
                    src="/images/traditional-saree-styling.jpg" 
                    alt="Cohort styling circle workshop"
                    fill
                    sizes="(max-width: 1024px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4 border border-gold/10 bg-editorial-grey/25 text-center font-sans">
                  <span className="block text-[10px] text-gold font-bold">500+</span>
                  <span className="text-[8px] uppercase tracking-widest text-pearl/40">Alumnae Roster</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 border border-gold/10 bg-editorial-grey/25 text-center font-sans">
                  <span className="block text-[10px] text-gold font-bold">12 Max</span>
                  <span className="text-[8px] uppercase tracking-widest text-pearl/40">Cohort Seat Limit</span>
                </div>
                <div className="relative aspect-[3/4] border border-gold/15 overflow-hidden shadow-xl">
                  <Image 
                    src="/images/founder-portrait-red-half.jpg" 
                    alt="Aakanksha Anand mentoring delegates"
                    fill
                    sizes="(max-width: 1024px) 100vw, 20vw"
                    className="object-cover"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PHASE 6: PRESENCE MANIFESTO */}
      <section className="relative min-h-screen py-36 bg-abyss flex items-center justify-center border-b border-gold/10 overflow-hidden">
        {/* Glow element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="luxury-container text-center max-w-5xl relative z-10 space-y-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-sans font-semibold">
            THE PRESENCE MANIFESTO
          </span>

          <h2 className="text-4xl md:text-8xl font-serif text-white tracking-luxury leading-none uppercase">
            Poise is the Stature<br />
            <span className="text-champagne">of Authority</span>
          </h2>

          <div className="w-16 h-[1px] bg-gold/30 mx-auto" />

          {/* Large typography lines */}
          <div className="space-y-12 text-center">
            {[
              { num: "I", text: "POSTURE IS SKELETAL POWER. WE STAND TALL NOT TO DOMINATE, BUT TO CLAIM THE SPATIAL RIGHTS TO OUR FRAME." },
              { num: "II", text: "GAIT IS KINETIC ELEGANCE. THE STRAIGHT-KNEE STRIDE AND DELAYED GAZE TURN ARE THE MARKS OF ABSOLUTE POISE." },
              { num: "III", text: "VOICE IS RESONANT AUTHORITY. DIAPHRAGMATIC PROJECTING AND SYSTEMATIC PAUSING COMMAND RESPECT IN SILENCE." },
              { num: "IV", text: "STYLE IS GEOMETRY. WE MAP SKIN COLOR THEORY AND SILHOUETTES AS AN ACT OF IDENTITY ENGINEERING." },
              { num: "V", text: "CONFIDENCE IS NOT INHERITED. IT IS CONSCIOUSLY ALIGNED, HABITUATED, AND LIVED UNCONDITIONALLY." }
            ].map((p, idx) => (
              <div key={idx} className="max-w-3xl mx-auto space-y-2">
                <span className="font-serif text-gold text-lg block">{p.num}</span>
                <p className="font-sans font-light text-xs md:text-sm tracking-[0.2em] text-alabaster/75 leading-relaxed uppercase">
                  {p.text}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <Button href="/apply" variant="solid" onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Manifesto Apply CTA' })}>
              Accept the Code & Apply
            </Button>
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEW SYSTEM (PHASE 3) & TRUST ENGINE (PHASE 9) */}
      <section className="relative py-28 md:py-40 bg-editorial-grey/15 border-b border-gold/10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="luxury-container max-w-5xl relative z-10">
          
          <div className="text-center mb-16 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
              TRUST ENGINE // GOOGLE BUSINESS VERIFIED
            </span>
            <h2 className="text-4xl md:text-7xl font-serif text-white uppercase tracking-wider">
              Review Us on Google
            </h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
            <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
              We build trust through real transformations. Scan or click to check out our rating and write your own review.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center bg-black/40 border border-gold/10 p-8 md:p-12">
            
            {/* Left side: QR Codes display */}
            <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
              <div className="flex flex-col items-center space-y-3 p-4 border border-gold/10 bg-editorial-grey/10 max-w-[220px]">
                <div className="relative w-40 h-40 bg-white p-2">
                  <Image 
                    src="/images/google-qr-business.png" 
                    alt="Google Business Profile QR Code" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-alabaster/50 text-center font-sans font-semibold">
                  Google Business QR
                </span>
              </div>

              <div className="flex flex-col items-center space-y-3 p-4 border border-gold/10 bg-editorial-grey/10 max-w-[220px]">
                <div className="relative w-40 h-40 bg-white p-2">
                  <Image 
                    src="/images/google-qr-reviews.png" 
                    alt="Google Reviews Direct QR Code" 
                    fill 
                    className="object-contain"
                  />
                </div>
                <span className="text-[9px] uppercase tracking-widest text-gold text-center font-sans font-semibold">
                  Scan to Write Review
                </span>
              </div>
            </div>

            {/* Right side: Trust Signals & direct CTA */}
            <div className="md:col-span-6 space-y-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
                <span className="text-lg font-serif text-white ml-2">4.9 / 5.0 Rating</span>
              </div>
              
              <h3 className="text-2xl font-serif text-gold uppercase tracking-wide">
                84 Verified Candidate Reviews
              </h3>
              
              <p className="text-xs text-alabaster/60 font-sans leading-relaxed">
                Candidate selection and trust are built upon transparency. Our alumnae rate the Heels & Glam musculoskeletal checkups, catwalk kinetics posture recalibrations, and styling bootcamps as highly effective.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                <a 
                  href="https://g.page/r/CQ-UR9T15uCeEBM/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-3 px-6 bg-gold text-abyss hover:bg-white hover:text-abyss text-xs uppercase tracking-luxury font-sans font-semibold transition-all text-center"
                  onClick={() => trackEvent({ action: 'click_google_review_cta', category: 'Trust', label: 'Home Review Page Link' })}
                >
                  Write a Google Review
                </a>
                <a 
                  href="https://g.page/r/CQ-UR9T15uCeEBM/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-3 px-6 border border-gold/30 hover:border-gold text-gold hover:text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all text-center"
                  onClick={() => trackEvent({ action: 'click_google_profile_cta', category: 'Trust', label: 'Home Google Profile Link' })}
                >
                  View Google Business Listing
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GOOGLE MAP EXPERIENCE (PHASE 4) & VISIT US / FIND US (PHASE 9) */}
      <section className="relative py-28 md:py-40 bg-black border-b border-gold/10 overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="luxury-container max-w-5xl relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Map Column */}
            <div className="lg:col-span-7 relative min-h-[350px] md:min-h-[450px] border border-gold/10 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m18!1m12!1m3!1d3889.3789053912953!2d77.6723113!3d12.8639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6c57f722cb59%3A0xcb1b9e246cf98889!2sSNN%20Raj%20Greenbay!5e0!3m2!1sen!2sin!4v1718366000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale opacity-80 contrast-125 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                title="Heels & Glam Flagship Atelier Map Location"
              />
            </div>

            {/* Address & Direction Coordinates */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 p-8 border border-gold/10 bg-editorial-grey/5">
              <span className="text-[10px] uppercase tracking-[0.4em] text-gold font-bold block">
                LOCATE THE GUILD // FIND US
              </span>
              
              <h3 className="text-3xl font-serif text-white uppercase tracking-wider leading-tight">
                Our Flagship Atelier
              </h3>

              <div className="w-12 h-[1px] bg-gold/30" />

              <div className="space-y-4 font-sans text-xs text-alabaster/60 leading-relaxed">
                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-gold mb-1 font-semibold">Address</span>
                  <p className="text-alabaster/80">
                    SNN RAJ GREENBAY, Phase II,<br />
                    Electronic City, Doddanagamangala Village,<br />
                    Karnataka 560100
                  </p>
                </div>

                <div>
                  <span className="block text-[9px] uppercase tracking-widest text-gold mb-1 font-semibold">Atelier Hours</span>
                  <p className="text-alabaster/80">
                    Monday &mdash; Sunday: 09:00 AM &mdash; 06:00 PM<br />
                    *By Confirmed Admissions Callback Only
                  </p>
                </div>
              </div>

              <div className="flex flex-col space-y-3 pt-4">
                <a 
                  href="https://maps.google.com/?q=SNN+RAJ+GREENBAY+Phase+II+Electronic+City" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-4 px-6 bg-gold text-abyss hover:bg-white hover:text-abyss text-xs uppercase tracking-luxury font-sans font-semibold transition-all text-center"
                  onClick={() => trackEvent({ action: 'click_directions', category: 'Engagement', label: 'Map Section Directions Link' })}
                >
                  Get Driving Directions
                </a>
                <a 
                  href="https://g.page/r/CQ-UR9T15uCeEBM/review" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-4 px-6 border border-gold/25 hover:border-gold text-gold hover:text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all text-center"
                  onClick={() => trackEvent({ action: 'click_review_map', category: 'Trust', label: 'Map Section Review Link' })}
                >
                  Review Us on Google Business
                </a>
              </div>
            </div>

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
                  <span className="text-alabaster/80">SNN RAJ GREENBAY, Phase II, Electronic City, Doddanagamangala Village, Karnataka 560100</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 animate-pulse">
                <div className="p-3 border border-green-500/20 bg-green-950/20">
                  <WhatsAppIcon className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <span className="block text-green-400 uppercase tracking-widest text-[9px] font-semibold">Admissions Desk WhatsApp</span>
                  <a 
                    href="https://wa.me/919742232322" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-alabaster/80 hover:text-gold transition-colors font-medium"
                    onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Contact Panel WhatsApp Link' })}
                  >
                    +91 97422 32322 (Direct Inquiries)
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 border border-gold/20 bg-editorial-grey/20">
                  <Mail className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="block text-alabaster/40 uppercase tracking-widest text-[9px] font-semibold">Admissions Email</span>
                  <span className="text-alabaster/80 font-medium">heelsandglam@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button 
                href="/apply" 
                variant="solid" 
                className="flex items-center space-x-2"
                onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Contact Panel Start Application' })}
              >
                <span>Begin Your Transformation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
              <a 
                href="https://wa.me/919742232322" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-green-500/50 hover:bg-green-600 hover:border-green-600 px-6 py-3 text-xs uppercase tracking-widest text-green-400 hover:text-white font-sans font-semibold transition-all"
                onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Contact Panel WhatsApp Button' })}
              >
                <WhatsAppIcon className="w-4 h-4 text-green-400 fill-green-400 group-hover:text-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Consultation Booking Form */}
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
                    <p className="text-xs text-alabaster/60 font-sans -mt-4">Submit your details below to schedule your alignment screening.</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="contact-name" className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">FULL NAME</label>
                        <input 
                          type="text" 
                          id="contact-name"
                          required 
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                          disabled={isSubmittingContact}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="contact-email" className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">EMAIL ADDRESS</label>
                        <input 
                          type="email" 
                          id="contact-email"
                          required 
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                          disabled={isSubmittingContact}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="contact-phone" className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          id="contact-phone"
                          required 
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                          disabled={isSubmittingContact}
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="contact-cohort" className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">COHORT SELECTION</label>
                        <select 
                          id="contact-cohort"
                          value={contactForm.cohort}
                          onChange={(e) => setContactForm({ ...contactForm, cohort: e.target.value })}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-gold font-sans focus:outline-none focus:border-gold transition-colors"
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
                      <label htmlFor="contact-message" className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">WHAT COMPELS YOU TO RE-PATTERN YOUR PRESENCE?</label>
                      <textarea 
                        id="contact-message"
                        rows={4} 
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Detail any posture slumps, confidence goals, or pageant targets..."
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors placeholder:opacity-30"
                        disabled={isSubmittingContact}
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
                    <p className="text-xs text-alabaster/60 font-sans max-w-sm leading-relaxed mb-6">
                      Thank you. Your consultation request has been secured. Our head registrar will review your transformation goals and message you to schedule a biomechanics check.
                    </p>
                    <button 
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({ name: '', email: '', phone: '', cohort: 'personal-grooming', message: '' });
                      }}
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
                Begin Your Transformation
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
