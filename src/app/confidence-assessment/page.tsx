'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  Award, 
  Compass, 
  ShieldCheck, 
  UserCheck, 
  ChevronRight 
} from 'lucide-react';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/lib/gtag';

// CUSTOM SVG WHATSAPP ICON
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

const QUIZ_QUESTIONS = [
  {
    category: "Confidence",
    question: "When entering a room of high-profile delegates, your immediate reaction is:",
    options: [
      { text: "Drop your chin, slide along the edges, and blend in quickly.", score: 20 },
      { text: "Simulate confidence but feel intense posture tension in your shoulders.", score: 55 },
      { text: "Glide tall, scan spaces with level gaze, and claim your presence.", score: 95 }
    ]
  },
  {
    category: "Communication",
    question: "Speaking under boardroom spotlight or camera lens pressure, you tend to:",
    options: [
      { text: "Speak rapidly, drop sentence endings, and experience vocal shakiness.", score: 15 },
      { text: "Communicate clearly but use filler words ('um', 'like') to avoid silence.", score: 50 },
      { text: "Speak from the diaphragm, modularize pitch, and pause deliberately.", score: 95 }
    ]
  },
  {
    category: "Personal Presence",
    question: "Regarding your overall posture alignment (sacrum-crown verticality):",
    options: [
      { text: "Experience heavy tech-neck slumping or bent-knee strides in heels.", score: 15 },
      { text: "Posture is decent, but heels gait feels unstable after 15 minutes.", score: 60 },
      { text: "Walk with straight-knee catwalk precision and core stabilization.", score: 95 }
    ]
  },
  {
    category: "Grooming",
    question: "Your wardrobe choices and styling signature are typically:",
    options: [
      { text: "Unplanned. Defaulting to comfort style sheet grids with no skin mapping.", score: 20 },
      { text: "Polished but templated. Lacking a distinct capsule structure and skin tone theory.", score: 65 },
      { text: "Signature-curated. silhouetted details matching body geometry cuts.", score: 95 }
    ]
  },
  {
    category: "Body Language",
    question: "When executing turns, pivots, or holding dialogs during high-stakes forums:",
    options: [
      { text: "Avoid direct eye contact, fold hands, or check phone screens.", score: 15 },
      { text: "Maintain steady eye contact but default to fidgeting with accessories.", score: 55 },
      { text: "Coordinate turns with delayed gaze delay, using deliberate expressions.", score: 95 }
    ]
  },
  {
    category: "Self Belief",
    question: "Regarding your internal posture limits and impostor self-talk:",
    options: [
      { text: "Highly critical. Feel secondary to other delegates in the room.", score: 20 },
      { text: "Manageable, but positional doubt overrides poise during major keynotes.", score: 60 },
      { text: "Command self-belief as an authority, framing presence unconditionally.", score: 95 }
    ]
  }
];

export default function ConfidenceAssessmentPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', phone: '', email: '' });
  const [results, setResults] = useState<{ score: number; category: string; desc: string } | null>(null);

  const handleOptionSelect = (score: number) => {
    const nextScores = [...scores, score];
    setScores(nextScores);

    if (currentQuestion + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const avg = Math.round(nextScores.reduce((a, b) => a + b, 0) / nextScores.length);
      let category = "Emerging";
      let desc = "Your baseline posture has key somatic blocks. Focus: Tech-neck releases, basic balance training, and lower pelvic tilt controls.";

      if (avg >= 85) {
        category = "Exceptional";
        desc = "Symmetrical posture and strong vocal projection. Ready for advanced catwalk layouts and high-ticket camera lookbooks.";
      } else if (avg >= 65) {
        category = "Refined";
        desc = "Aligned posture but requires gait balance pacing tweaks, dining etiquette, and online personal branding coordinates.";
      } else if (avg >= 40) {
        category = "Developing";
        desc = "Experiencing vocal pitch uptalk, shoulder collapses, and slight gait heavy strikes. Focus: diaphragmatic breathing and wall poise reset.";
      }

      setResults({ score: avg, category, desc });
      setLeadCaptured(true);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadCaptured(false);
    trackEvent({ action: 'form_submit_assessment_lead', category: 'Lead Generation', label: 'Assessment Lead Form' });
    trackEvent({ action: 'assessment_completion', category: 'Engagement', label: 'Confidence Assessment Complete' });
  };

  // WhatsApp Pre-filled message
  const waMessage = encodeURIComponent(
    `Hi Aakanksha! I just completed the Somatic Confidence Assessment.\n\n` +
    `*Candidate Name:* ${leadForm.name}\n` +
    `*Presence Score:* ${results?.score}%\n` +
    `*Category:* ${results?.category} Presence\n\n` +
    `I would like to book my free 15-minute voice alignment callback.`
  );

  return (
    <div className="min-h-screen bg-obsidian text-pearl py-12 md:py-24 relative overflow-hidden">
      {/* Background glow backdrops */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[500px] h-[500px] bg-rosegold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Welcome Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-rosegold font-sans font-bold mb-4">
          Diagnostic Tool • Somatic Checks
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Confidence<br />
          <span className="text-champagne font-serif">Assessment</span>
        </h1>
        <div className="w-16 h-[1px] bg-rosegold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          Measure your physical presence, posture symmetry, and vocal resonance metrics. This assessment maps your alignment category.
        </p>
      </div>

      {/* Main interactive panel */}
      <div className="luxury-container max-w-2xl relative z-10">
        <div className="glass-panel p-8 md:p-12 border border-rosegold/15 shadow-2xl relative min-h-[380px] flex flex-col justify-center">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-burgundy/5 rounded-full blur-[65px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {!quizStarted ? (
              <motion.div 
                key="start"
                className="text-center space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Compass className="w-12 h-12 text-rosegold mx-auto mb-4 animate-spin-slow" />
                <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Somatic Presence Check</h3>
                <p className="text-xs text-pearl/60 font-sans max-w-md mx-auto leading-relaxed">
                  Evaluate your current skeletal stature, heels gait stability, style mapping, and voice modulation resonance across 6 parameters.
                </p>
                 <Button 
                   type="button" 
                   onClick={() => {
                     setQuizStarted(true);
                     trackEvent({ action: 'assessment_start', category: 'Engagement', label: 'Confidence Assessment Start' });
                   }} 
                   variant="solid"
                 >
                  Begin Diagnostic
                </Button>
              </motion.div>
            ) : leadCaptured ? (
              <motion.div 
                key="lead"
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center">
                  <UserCheck className="w-12 h-12 text-rosegold mx-auto mb-4" />
                  <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Secure Results</h3>
                  <p className="text-xs text-pearl/50 font-sans max-w-md mx-auto leading-relaxed mt-2">
                    Submit your profile credentials below to generate your somatic index and unlock your direct Admissions callback.
                  </p>
                </div>

                <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-md mx-auto">
                  <div className="flex flex-col space-y-1">
                    <label className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">NAME</label>
                    <input 
                      type="text" 
                      required 
                      value={leadForm.name}
                      onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-pearl font-sans focus:outline-none focus:border-rosegold transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">PHONE</label>
                      <input 
                        type="tel" 
                        required 
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                        className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-pearl font-sans focus:outline-none focus:border-rosegold transition-colors"
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <label className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">EMAIL</label>
                      <input 
                        type="email" 
                        required 
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                        className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-pearl font-sans focus:outline-none focus:border-rosegold transition-colors"
                      />
                    </div>
                  </div>

                  <Button type="submit" variant="solid" className="w-full py-4 text-xs font-semibold tracking-luxury mt-2">
                    Reveal Somatic Score
                  </Button>
                </form>
              </motion.div>
            ) : results ? (
              <motion.div 
                key="results"
                className="space-y-6 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <Award className="w-12 h-12 text-rosegold mx-auto mb-4" />
                <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Presence Index: {results.score}%</h3>
                
                <div className="p-6 border border-rosegold/20 bg-burgundy/10 max-w-lg mx-auto text-left font-sans space-y-2">
                  <span className="block text-[10px] uppercase tracking-widest text-rosegold font-bold">Category: {results.category} Presence</span>
                  <p className="text-xs text-pearl/70 leading-relaxed">{results.desc}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                  <a 
                    href={`https://wa.me/919880012345?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2"
                    onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Assessment Result WhatsApp Check' })}
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                    <span>Review Score on WhatsApp</span>
                  </a>
                  <button 
                    onClick={() => {
                      setResults(null);
                      setScores([]);
                      setCurrentQuestion(0);
                      setQuizStarted(false);
                      setLeadForm({ name: '', phone: '', email: '' });
                      trackEvent({ action: 'assessment_retake', category: 'Engagement', label: 'Confidence Assessment Retake' });
                    }}
                    className="text-xs uppercase tracking-luxury text-rosegold hover:text-white transition-colors font-sans py-2.5 px-6 border border-rosegold/25 hover:border-rosegold cursor-pointer"
                  >
                    Retake Check
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="question"
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-rosegold font-sans font-bold border-b border-rosegold/10 pb-3">
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
                      onClick={() => handleOptionSelect(opt.score)}
                      className="w-full text-left p-4 border border-rosegold/15 bg-editorial-grey/5 text-xs md:text-sm text-pearl/80 font-sans hover:border-rosegold hover:bg-burgundy/10 transition-all duration-300 focus:outline-none cursor-pointer"
                    >
                      {opt.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
