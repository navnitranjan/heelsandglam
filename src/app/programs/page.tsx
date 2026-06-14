'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Clock, 
  Users, 
  Calendar, 
  BookOpen, 
  Sparkles, 
  ArrowRight, 
  Award, 
  Compass, 
  CheckCircle,
  HelpCircle,
  BarChart,
  MessageCircle
} from 'lucide-react';
import Button from '@/components/ui/Button';

// 1. PROGRAMS DATA DETAILS
const OFFICIAL_PROGRAMS = [
  {
    id: 'personal-grooming',
    name: 'Personal Grooming Mastery',
    duration: '4 Weeks (Weekends)',
    capacity: 12,
    nextCohort: 'September 12, 2026',
    price: '₹55,000',
    tagline: 'Learn appearance management, styling fundamentals, grooming habits and self-presentation techniques.',
    description: 'A boutique module designed for working women, entrepreneurs, and students who want to structure their physical self-presentation, master color alignment, and create a sophisticated wardrobe.',
    imageSrc: '/images/traditional-saree-styling.jpg',
    outcomes: [
      'Understand your body geometry & silhouettes',
      'Curate a custom capsule wardrobe for work and galas',
      'Master personal beauty & hair grooming habits',
      'Establish clean posture & seated carriage elegance'
    ],
    syllabus: [
      'Week 1: Body geometry profiling, custom color theory, and styling templates.',
      'Week 2: Wardrobe organization, lookbook planning, and premium accessory mapping.',
      'Week 3: Skincare routines, everyday beauty architecture, and hair grooming patterns.',
      'Week 4: Poise & presence metrics: sitting, standing, and entering spaces with authority.'
    ]
  },
  {
    id: 'confidence-presence',
    name: 'Confidence & Presence Program',
    duration: '6 Weeks (Intensive)',
    capacity: 10,
    nextCohort: 'September 15, 2026',
    price: '₹75,000',
    tagline: 'Build self-belief, body language communication and executive presence.',
    description: 'An elite transformation program that focuses on the biomechanics of poise, active voice projection, and non-verbal posture corrections to help women command respect and sit/stand tall in any boardroom or assembly.',
    imageSrc: '/images/founder-portrait-red-full.jpg',
    outcomes: [
      'Release physical anxiety & posture tension',
      'Re-pattern body kinetics for executive presence',
      'Acquire speech modulation, volume control, & verbal pacing',
      'Command boardrooms and high-stakes social events'
    ],
    syllabus: [
      'Week 1:Musculoskeletal release, center of gravity checks, and alignment basics.',
      'Week 2: Non-verbal carriage dynamics: strides, hand gestures, and head tilts.',
      'Week 3: Vocal projection checks, resonance tuning, and current affairs statement framing.',
      'Week 4: Executive dining etiquette: formal multi-course protocols and champagne rules.',
      'Week 5: Spotlight scenarios: speaking under camera stress and crowd-pleasing speech.',
      'Week 6: Graduation roundtable: live executive simulation and final jury evaluation.'
    ]
  },
  {
    id: 'runway-modelling',
    name: 'Runway & Modelling Fundamentals',
    duration: '8 Weeks (Runway Prep)',
    capacity: 8,
    nextCohort: 'September 20, 2026',
    price: '₹1,20,000',
    tagline: 'Learn posture, movement and presentation techniques.',
    description: 'India\'s premier runway catwalk blueprint. Focuses on heel balancing physics, pacing symmetry, facial control, and poses. Includes a professional portfolio shoot directed by Aakanksha Anand.',
    imageSrc: '/images/runway-saree-lotus.jpg',
    outcomes: [
      'Gait correction, weight distribution, & heel balance',
      'Master dynamic ramp walk patterns (pacing, pivot, turn)',
      'Construct a portfolio of high-fashion and commercial poses',
      'Command camera angles and spotlight presence'
    ],
    syllabus: [
      'Week 1: Spine verticality checks, pelvic stabilization, and flat-foot walks.',
      'Week 2: Transitioning to heels: heel-to-toe kinetics and balance corrections.',
      'Week 3: The Runway walk: S-curve patterns, arm pacing, and shoulder symmetry.',
      'Week 4: Posing architecture: angles, facial expressions, and look points.',
      'Week 5: Cocktail walk vs. evening gown carriage and fabric manipulation.',
      'Week 6: High-fashion lookbook directed photo shoot (live photography session).',
      'Week 7: Runway mock trials: pacing with music and live spotlight staging.',
      'Week 8: The Graduation Catwalk: Showcase under top agency scouts and casting directors.'
    ]
  },
  {
    id: 'personal-branding',
    name: 'Personal Branding Program',
    duration: '4 Weeks (Hybrid)',
    capacity: 15,
    nextCohort: 'October 1, 2026',
    price: '₹60,000',
    tagline: 'Build a strong personal identity both online and offline.',
    description: 'Tailored for content creators, independent professionals, and rising corporate leaders. Learn styling for camera, profile aesthetics, speaking to lenses, and digital position strategy.',
    imageSrc: '/images/fashion-week-runway-jeans.jpg',
    outcomes: [
      'Design a cohesive visual and stylistic brand identity',
      'Master confidence in front of lenses and video setups',
      'Structure high-value digital content scripts and pacing',
      'Build digital positioning to increase authority and reach'
    ],
    syllabus: [
      'Week 1: Discovering your brand story, profile aesthetics, and aesthetic grids.',
      'Week 2: Wardrobe styling for camera, lighting patterns, and lens alignment.',
      'Week 3: Recording exercises: scripts, vocal pacing, and video confidence templates.',
      'Week 4: Digital distribution: platforms setup, media kits, and brand collaboration pitch templates.'
    ]
  }
];

// 2. ASSESSMENT QUESTIONS DATA
const ASSESSMENT_QUESTIONS = [
  {
    question: "When entering a crowded social or professional setting, you typically:",
    options: [
      { text: "Feel slightly slouched, avoid eye contact, and head to the corner.", category: "poise", impact: 15 },
      { text: "Walk normally but check your phone to look occupied.", category: "poise", impact: 35 },
      { text: "Walk upright with shoulder alignment, scan the room, and smile.", category: "poise", impact: 90 }
    ]
  },
  {
    question: "How do you feel about speaking on camera or presenting in public?",
    options: [
      { text: "Extremely nervous, voice shakes, and speed of speech increases rapidly.", category: "communication", impact: 20 },
      { text: "Manageable but lack structure, often using filler words.", category: "communication", impact: 50 },
      { text: "Confident, maintain steady pacing, projection, and head alignment.", category: "communication", impact: 95 }
    ]
  },
  {
    question: "Your wardrobe and styling habits currently feel:",
    options: [
      { text: "Cluttered, default to comfort wear, unsure what silhouettes fit my structure.", category: "styling", impact: 25 },
      { text: "Decent but generic; lacks a clear, cohesive brand statement.", category: "styling", impact: 55 },
      { text: "Curated, color-harmonized, and explicitly aligns with my personal brand.", category: "styling", impact: 90 }
    ]
  },
  {
    question: "Your posture and comfort when walking in high heels:",
    options: [
      { text: "Suffer from back discomfort, drop my hips, and bend my knees while pacing.", category: "gait", impact: 15 },
      { text: "Can walk but lack grace; strides feel heavy and balance is unstable.", category: "gait", impact: 45 },
      { text: "Glide smoothly with heel-to-toe precision, straight knees, and active core.", category: "gait", impact: 95 }
    ]
  }
];

export default function ProgramsPage() {
  // Assessment Tool States
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (impactScore: number) => {
    const nextAnswers = [...answers, impactScore];
    setAnswers(nextAnswers);

    if (currentQuestionIdx + 1 < ASSESSMENT_QUESTIONS.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetAssessment = () => {
    setAnswers([]);
    setCurrentQuestionIdx(0);
    setShowResults(false);
    setAssessmentStarted(false);
  };

  // Compute average score (out of 100)
  const averageScore = answers.length > 0 
    ? Math.round(answers.reduce((a, b) => a + b, 0) / answers.length)
    : 0;

  const getSomaticAdvice = (score: number) => {
    if (score < 40) {
      return {
        profile: "Presence Cultivation Priority",
        description: "Your posture alignment, voice projection, and styling alignment show significant opportunities for refinement. You likely suffer from tech-neck cervical slumping and high-heel gait strain.",
        recommendation: "We recommend our structured Personal Grooming Mastery or Confidence & Presence Program to build posture biomechanics and base poise."
      };
    } else if (score < 75) {
      return {
        profile: "Refinement & Polish Target",
        description: "You possess good baseline confidence and style, but lack consistent structural elegance, vocal gravitas, and strategic personal branding markers.",
        recommendation: "Our Confidence & Presence Program or Personal Branding Program will help you align your styling, eliminate verbal fillers, and command authority."
      };
    } else {
      return {
        profile: "Elite Mastery & Spotlight Ready",
        description: "You have excellent posture, clean vocal pacing, and curated styling habits. Your alignment is symmetrical and poised.",
        recommendation: "You are an ideal candidate for Runway & Modelling Fundamentals or advanced Pageant masterclass preparations to launch into lookbook campaigns."
      };
    }
  };

  const advice = getSomaticAdvice(averageScore);

  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24">
      
      {/* Page Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4">
          Bespoke Mentorship
        </span>
        <h1 className="text-4xl md:text-7xl font-serif tracking-luxury text-white uppercase mb-6">
          Signature Programs
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-2xl leading-relaxed font-sans">
          Four structured transformation programs led by Aakanksha Anand. Pre-screening assessment applies to all candidates.
        </p>
      </div>

      {/* Cohorts Catalog */}
      <section className="luxury-container space-y-24 mb-28 md:mb-40">
        {OFFICIAL_PROGRAMS.map((program, idx) => (
          <div 
            key={program.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Column */}
            <div className={`lg:col-span-5 relative aspect-[4/5] border border-gold/15 overflow-hidden shadow-2xl ${
              idx % 2 === 1 ? 'lg:order-last' : ''
            }`}>
              <div className="absolute inset-0 bg-gradient-to-t from-abyss/70 to-transparent z-10" />
              <Image 
                src={program.imageSrc}
                alt={program.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-abyss/90 border border-gold/30 text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">
                Cohort price: {program.price}
              </div>
            </div>

            {/* Content Details Column */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">Cohort Syllabus</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white">{program.name}</h2>
              <div className="w-12 h-[1px] bg-gold/45" />

              <p className="text-xs md:text-sm text-alabaster/60 font-sans italic leading-relaxed">
                {program.tagline}
              </p>
              
              <p className="text-sm text-alabaster/80 font-sans leading-relaxed">
                {program.description}
              </p>

              {/* Outcomes Bullet list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {program.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs text-alabaster/70 font-sans">
                    <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Program Meta Data panel */}
              <div className="p-5 border border-gold/10 bg-editorial-grey/5 grid grid-cols-3 gap-4 text-center font-sans text-xs">
                <div>
                  <Clock className="w-4 h-4 text-gold mx-auto mb-1.5" />
                  <span className="block text-[8px] uppercase tracking-widest text-alabaster/40 mb-0.5">Duration</span>
                  <span className="text-[10px] text-white font-medium">{program.duration}</span>
                </div>
                <div>
                  <Users className="w-4 h-4 text-gold mx-auto mb-1.5" />
                  <span className="block text-[8px] uppercase tracking-widest text-alabaster/40 mb-0.5">Seat Limit</span>
                  <span className="text-[10px] text-white font-medium">{program.capacity} spots</span>
                </div>
                <div>
                  <Calendar className="w-4 h-4 text-gold mx-auto mb-1.5" />
                  <span className="block text-[8px] uppercase tracking-widest text-alabaster/40 mb-0.5">Next Intake</span>
                  <span className="text-[10px] text-white font-medium">{program.nextCohort}</span>
                </div>
              </div>

              {/* Weekly breakdown */}
              <div className="space-y-2.5">
                <span className="text-[9px] uppercase tracking-widest text-gold font-semibold font-sans block">Syllabus Overview</span>
                <div className="divide-y divide-gold/10">
                  {program.syllabus.map((week, wIdx) => (
                    <div key={wIdx} className="py-2.5 flex space-x-3 text-xs font-sans text-alabaster/60 leading-normal">
                      <span className="text-gold font-semibold font-serif">W0{wIdx + 1}</span>
                      <p>{week.substring(week.indexOf(':') + 1).trim()}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <Button href="/apply" variant="solid">Begin Your Transformation</Button>
                <Button href="https://wa.me/919742232322" variant="outline">Consult via WhatsApp</Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 2. INTERACTIVE FREE PRESENCE ASSESSMENT TOOL */}
      <section id="presence-assessment" className="relative py-24 bg-editorial-grey/10 border-t border-gold/15">
        <div className="luxury-container max-w-3xl">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-luxury text-gold font-sans font-medium mb-3">
              Self Diagnosis Tool
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white">
              Free Grooming & Presence Assessment
            </h2>
            <div className="w-12 h-[1px] bg-gold/40 mt-4 mx-auto mb-6" />
            <p className="text-xs md:text-sm text-alabaster/60 uppercase tracking-widest max-w-xl mx-auto leading-relaxed">
              Take our 4-question interactive presence check to evaluate your postural alignment, style indices, and public speech modulation.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 border border-gold/10 shadow-2xl relative overflow-hidden min-h-[360px] flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/3 rounded-full blur-[60px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {!assessmentStarted ? (
                <motion.div 
                  key="start"
                  className="text-center space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Compass className="w-12 h-12 text-gold mx-auto mb-4 animate-spin-slow" />
                  <h3 className="text-2xl font-serif text-white">Poise Biomechanics Questionnaire</h3>
                  <p className="text-xs text-alabaster/55 font-sans max-w-md mx-auto leading-relaxed">
                    This assessment analyzes common presence constraints:tech-neck slumping, knee-bend walk failures, styling mismatch, and speech speeds under spotlight stress.
                  </p>
                  <Button type="button" onClick={() => setAssessmentStarted(true)} variant="solid">
                    Begin Presence Check
                  </Button>
                </motion.div>
              ) : !showResults ? (
                <motion.div 
                  key="question"
                  className="space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-gold font-sans font-semibold border-b border-gold/10 pb-3">
                    <span>Presence Assessment</span>
                    <span>Question {currentQuestionIdx + 1} of {ASSESSMENT_QUESTIONS.length}</span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif text-white leading-snug">
                    {ASSESSMENT_QUESTIONS[currentQuestionIdx].question}
                  </h3>

                  <div className="flex flex-col space-y-3">
                    {ASSESSMENT_QUESTIONS[currentQuestionIdx].options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(opt.impact)}
                        className="w-full text-left p-4 border border-gold/15 bg-editorial-grey/5 text-xs md:text-sm text-alabaster/80 font-sans hover:border-gold hover:bg-editorial-grey/15 transition-all duration-300 focus:outline-none"
                      >
                        {opt.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  className="space-y-6 text-center animate-fade-in"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <BarChart className="w-12 h-12 text-gold mx-auto mb-4" />
                  <h3 className="text-2xl font-serif text-white">Your Presence Index: {averageScore}%</h3>
                  
                  <div className="p-6 border border-gold/20 bg-gold/5 max-w-lg mx-auto text-left font-sans space-y-2">
                    <span className="block text-[10px] uppercase tracking-widest text-gold font-bold">{advice.profile}</span>
                    <p className="text-xs text-alabaster/80 leading-relaxed">{advice.description}</p>
                    <p className="text-xs text-gold leading-relaxed font-semibold pt-2 border-t border-gold/10">{advice.recommendation}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center pt-4">
                    <Button href={`https://wa.me/919742232322?text=Hi%20Aakanksha,%20I%20completed%20the%20Presence%20Assessment.%20My%20Index%20is%20${averageScore}%.%20I%20would%20like%20to%20review%20my%20somatic%20profile.`} variant="solid" className="flex items-center space-x-2 border-green-500 hover:bg-green-600">
                      <MessageCircle className="w-4 h-4 text-green-400 fill-green-400 group-hover:text-white" />
                      <span>Review Score on WhatsApp</span>
                    </Button>
                    <button 
                      onClick={resetAssessment}
                      className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans py-2.5 px-6 border border-gold/25 hover:border-gold"
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

    </div>
  );
}
