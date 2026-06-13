'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  Users,
  Compass,
  AlertTriangle,
  Info,
  TrendingUp,
  X
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

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  // Form local state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    cohort: 'personal-grooming',
    experience: 'beginner',
    targets: ''
  });

  const [calculatorStarted, setCalculatorStarted] = useState(false);

  // Transformation Calculator ratings
  const [ratings, setRatings] = useState({
    confidence: 5,
    communication: 5,
    presence: 5,
    selfImage: 5
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (key: keyof typeof ratings, val: number) => {
    setRatings((prev) => ({ ...prev, [key]: val }));
    if (!calculatorStarted) {
      setCalculatorStarted(true);
      trackEvent({ action: 'assessment_start', category: 'Engagement', label: 'Admissions Presence Calculator' });
    }
  };

  // Calculations
  const potentialScore = Math.round(
    ((ratings.confidence + ratings.communication + ratings.presence + ratings.selfImage) / 40) * 100
  );

  const getCalculatorFeedback = (score: number) => {
    if (score >= 85) {
      return "EXCEPTIONAL POISE POTENTIAL. Recommended cohort: Elite Runway & Modelling. Somatic framework focus: spotlight calibration and lookbook creation.";
    }
    if (score >= 60) {
      return "REFINED LEADERSHIP BASELINE. Recommended cohort: Executive Grace & Presence. Somatic framework focus: vocal pitch checks, stance mechanics, and capsule styling.";
    }
    return "DEVELOPING POISE BASELINE. Recommended cohort: Personal Grooming Mastery. Somatic framework focus: tech-neck posture realignments and heels walk comfort drills.";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    trackEvent({ action: 'form_submit_admissions', category: 'Lead Generation', label: 'Admissions Profile Form' });
    if (calculatorStarted) {
      trackEvent({ action: 'assessment_completion', category: 'Engagement', label: 'Admissions Presence Calculator' });
    }
  };

  // Pre-filled WhatsApp message
  const waMessage = encodeURIComponent(
    `Hi Aakanksha! I completed my Heels & Glam Admissions Profile.\n\n` +
    `*Candidate Name:* ${formData.fullName}\n` +
    `*Cohort Choice:* ${formData.cohort}\n` +
    `*City:* ${formData.city}\n` +
    `*Calculated Presence Potential:* ${potentialScore}%\n` +
    `*Transformation Target:* ${formData.targets}\n\n` +
    `I would like to lock my admissions pre-screening callbacks.`
  );

  return (
    <div className="min-h-screen bg-obsidian text-pearl py-12 md:py-24 relative overflow-hidden">
      {/* Background glow backdrops */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[500px] h-[500px] bg-rosegold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Welcome Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-rosegold font-sans font-bold mb-4">
          The Admissions Office • Cohort Selection
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          The Invitation<br />
          <span className="text-champagne font-serif">To Poise</span>
        </h1>
        <div className="w-16 h-[1px] bg-rosegold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-2xl leading-relaxed font-sans font-light">
          We maintain strict cohort limits of 12 candidates to ensure personalized musculoskeletal checks, custom styling palettes, and individual voice modulation sessions. We select candidates—we do not sell to them.
        </p>
      </div>

      {/* Scarcity Dashboard (Phase 2) */}
      <section className="luxury-container max-w-4xl mb-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 border border-rosegold/15 bg-burgundy/5 text-center font-sans text-xs">
          <div>
            <span className="block text-[8px] uppercase tracking-widest text-rosegold font-semibold mb-1">Upcoming cohort</span>
            <span className="text-sm text-white font-medium">Autumn Batch 2026</span>
          </div>
          <div>
            <span className="block text-[8px] uppercase tracking-widest text-rosegold font-semibold mb-1">Seats Capacity</span>
            <span className="text-sm text-white font-medium">12 Candidates Max</span>
          </div>
          <div>
            <span className="block text-[8px] uppercase tracking-widest text-rosegold font-semibold mb-1">Validated Seats</span>
            <span className="text-sm text-green-400 font-bold">Only 3 Remain</span>
          </div>
          <div>
            <span className="block text-[8px] uppercase tracking-widest text-rosegold font-semibold mb-1">Atelier Callback Status</span>
            <span className="text-sm text-white font-medium">Pre-screenings active</span>
          </div>
        </div>
      </section>

      {/* Who Should Apply vs Who Should Not Apply */}
      <section className="luxury-container grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mb-24 relative z-10">
        {/* Should Apply */}
        <div className="p-8 border border-rosegold/10 bg-editorial-grey/5 space-y-6">
          <div className="flex items-center space-x-3 text-rosegold">
            <Compass className="w-5 h-5" />
            <h3 className="text-lg font-serif text-white uppercase tracking-wider">Who Should Apply</h3>
          </div>
          <div className="w-10 h-[1px] bg-rosegold/30" />
          <ul className="space-y-4 text-xs text-pearl/70 leading-relaxed font-sans">
            <li className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              <span>Ambitious women looking to build elite visual presence for corporate keynotes or public stages.</span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              <span>Pageant candidates seeking catwalk mechanics, turns, and current affairs interview calibration.</span>
            </li>
            <li className="flex items-start space-x-2">
              <Check className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
              <span>Leaders looking to correct cervical slumping (tech-neck) and command spaces vocalizing tall.</span>
            </li>
          </ul>
        </div>

        {/* Should Not Apply */}
        <div className="p-8 border border-burgundy/20 bg-burgundy/5 space-y-6">
          <div className="flex items-center space-x-3 text-rosegold">
            <AlertTriangle className="w-5 h-5 text-rosegold" />
            <h3 className="text-lg font-serif text-white uppercase tracking-wider">Who Should Not Apply</h3>
          </div>
          <div className="w-10 h-[1px] bg-rosegold/30" />
          <ul className="space-y-4 text-xs text-pearl/60 leading-relaxed font-sans">
            <li className="flex items-start space-x-2">
              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Candidates seeking instant transformation shortcuts without daily posture/speech training.</span>
            </li>
            <li className="flex items-start space-x-2">
              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Anyone expecting standard mass lecture sessions rather than intimate private atelier coaching.</span>
            </li>
            <li className="flex items-start space-x-2">
              <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
              <span>Those unwilling to calibrate physical habits (heel strikes, spine verticality checkpoints).</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Interactive Transformation Calculator (Phase 3) */}
      <section className="luxury-container max-w-4xl mb-24 relative z-10">
        <div className="p-8 md:p-12 border border-rosegold/15 bg-editorial-grey/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-burgundy/10 rounded-full blur-[50px] pointer-events-none" />
          
          <div className="text-center mb-10">
            <span className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-bold block mb-1">Interactive Diagnostic</span>
            <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Transformation Potential Calculator</h3>
            <p className="text-xs text-pearl/50 font-sans max-w-md mx-auto leading-relaxed mt-2">
              Adjust the rating dials (0 to 10) to map your baseline posture, styling confidence, and vocal resonance goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Dials */}
            <div className="lg:col-span-7 space-y-5 font-sans text-xs">
              {[
                { name: "Confidence baseline", key: "confidence" as const },
                { name: "Communication & Pitch clarity", key: "communication" as const },
                { name: "Personal Presence & Stature", key: "presence" as const },
                { name: "Self Image & Styling Confidence", key: "selfImage" as const }
              ].map((item) => (
                <div key={item.key} className="space-y-1">
                  <div className="flex justify-between uppercase text-pearl/50 text-[9px] tracking-wider font-semibold">
                    <span>{item.name}</span>
                    <span className="text-rosegold">{ratings[item.key]} / 10</span>
                  </div>
                  <input 
                    type="range" 
                    id={`rating-${item.key}`}
                    min="1" 
                    max="10" 
                    value={ratings[item.key]}
                    onChange={(e) => handleRatingChange(item.key, parseInt(e.target.value))}
                    aria-label={item.name}
                    aria-valuemin={1}
                    aria-valuemax={10}
                    aria-valuenow={ratings[item.key]}
                    className="w-full h-1 bg-white/10 accent-rosegold appearance-none rounded-full cursor-ew-resize"
                  />
                </div>
              ))}
            </div>

            {/* Potential Results */}
            <div className="lg:col-span-5 p-6 border border-rosegold/20 bg-burgundy/10 flex flex-col justify-center space-y-4 min-h-[200px]">
              <div className="text-center">
                <span className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-bold block mb-1">Your Potential Presence Score</span>
                <span className="text-4xl md:text-5xl font-serif text-white font-bold block">{potentialScore}%</span>
              </div>
              <p className="text-[10px] text-pearl/70 font-sans leading-relaxed text-center italic border-t border-rosegold/10 pt-4">
                &ldquo;{getCalculatorFeedback(potentialScore)}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Profile Form */}
      <section className="luxury-container max-w-2xl relative z-10">
        <div className="glass-panel p-8 md:p-12 border border-rosegold/15 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-burgundy/5 rounded-full blur-[65px] pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="text-center mb-8 border-b border-rosegold/10 pb-4">
                  <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Candidate Invitation Profile</h3>
                  <p className="text-xs text-pearl/50 font-sans -mt-2">Provide your transformation credentials to verify selection eligibility.</p>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <label htmlFor="apply-fullname" className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">FULL NAME</label>
                  <input 
                    type="text" 
                    id="apply-fullname"
                    name="fullName" 
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required 
                    className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-pearl font-sans focus:outline-none focus:border-rosegold transition-colors"
                  />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="apply-email" className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">EMAIL ADDRESS</label>
                  <input 
                    type="email" 
                    id="apply-email"
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-pearl font-sans focus:outline-none focus:border-rosegold transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="apply-phone" className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">PHONE NUMBER</label>
                    <input 
                      type="tel" 
                      id="apply-phone"
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                      className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-pearl font-sans focus:outline-none focus:border-rosegold transition-colors"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="apply-city" className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">CITY / REGION</label>
                    <input 
                      type="text" 
                      id="apply-city"
                      name="city" 
                      value={formData.city}
                      onChange={handleInputChange}
                      required 
                      className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-pearl font-sans focus:outline-none focus:border-rosegold transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="apply-cohort" className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">TARGET COHORT</label>
                    <select 
                      id="apply-cohort"
                      name="cohort" 
                      value={formData.cohort}
                      onChange={handleInputChange}
                      className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-rosegold font-sans focus:outline-none focus:border-rosegold transition-colors"
                    >
                      <option value="personal-grooming" className="bg-obsidian text-white">Personal Grooming Mastery</option>
                      <option value="confidence" className="bg-obsidian text-white">Confidence & Presence Program</option>
                      <option value="runway" className="bg-obsidian text-white">Runway & Modelling Fundamentals</option>
                      <option value="branding" className="bg-obsidian text-white">Personal Branding Program</option>
                    </select>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="apply-experience" className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">MODELLING LEVEL</label>
                    <select 
                      id="apply-experience"
                      name="experience" 
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-rosegold font-sans focus:outline-none focus:border-rosegold transition-colors"
                    >
                      <option value="beginner" className="bg-obsidian text-white">Beginner (No experience)</option>
                      <option value="intermediate" className="bg-obsidian text-white">Intermediate (Shoots / classes)</option>
                      <option value="advanced" className="bg-obsidian text-white">Professional (Runway / pageants)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="apply-targets" className="text-[9px] uppercase tracking-widest text-rosegold font-sans font-semibold">TRANSFORMATION OBJECTIVES</label>
                  <textarea 
                    id="apply-targets"
                    name="targets"
                    value={formData.targets}
                    onChange={handleInputChange}
                    rows={4} 
                    required
                    placeholder="Describe your goals (posture correction, vocal project, pageant prep...)"
                    className="w-full bg-editorial-grey/30 border border-rosegold/20 px-4 py-3 text-xs text-pearl font-sans focus:outline-none focus:border-rosegold transition-colors placeholder:opacity-30"
                  />
                </div>

                <Button type="submit" variant="solid" className="w-full py-4 font-semibold text-xs tracking-luxury mt-2">
                  File Admissions Profile
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
                <div className="w-16 h-16 rounded-full border border-rosegold bg-burgundy/15 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-rosegold" />
                </div>
                
                <h3 className="text-3xl font-serif text-white mb-2">Profile Filed</h3>
                <p className="text-xs text-pearl/60 font-sans max-w-sm leading-relaxed mb-8">
                  Your biometrics targets and presence rating of {potentialScore}% have been registered at the Admissions Office.
                </p>

                {/* WhatsApp call button */}
                <div className="flex flex-col space-y-3 w-full">
                  <a 
                    href={`https://wa.me/919880012345?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-green-600 text-white hover:bg-green-700 text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
                    onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Admissions Success WhatsApp Callback' })}
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                    <span>Secure Admissions Callback on WhatsApp</span>
                  </a>

                  <Button 
                    href="https://wa.me/919880012345" 
                    variant="outline" 
                    className="w-full text-center"
                    onClick={() => trackEvent({ action: 'click_whatsapp', category: 'Lead Generation', label: 'Admissions Success Voice Screening' })}
                  >
                    Initiate Direct Voice Screening
                  </Button>
                </div>

                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      email: '',
                      phone: '',
                      city: '',
                      cohort: 'personal-grooming',
                      experience: 'beginner',
                      targets: ''
                    });
                  }}
                  className="text-xs uppercase tracking-luxury text-rosegold hover:text-white transition-colors font-sans mt-8 cursor-pointer"
                >
                  File another admissions profile
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

    </div>
  );
}
