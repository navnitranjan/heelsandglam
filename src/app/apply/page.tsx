'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  ArrowRight, 
  ArrowLeft, 
  FileText, 
  User, 
  Compass, 
  Sparkles, 
  CheckCircle2,
  Calendar,
  MessageSquare
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

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form local state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    cohort: 'personal-grooming',
    experience: 'beginner',
    targets: '',
    postureSlump: 'yes',
    heelsWalkComfort: 'medium',
    preferredConsultation: 'whatsapp'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Pre-filled WhatsApp link text
  const waMessage = encodeURIComponent(
    `Hi Aakanksha! I just submitted my Heels & Glam Admissions Profile.\n\n` +
    `*Name:* ${formData.fullName}\n` +
    `*Cohort:* ${formData.cohort}\n` +
    `*City:* ${formData.city}\n` +
    `*Targets:* ${formData.targets}\n\n` +
    `I would like to book my free posture assessment call.`
  );

  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24">
      
      {/* Page Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4">
          The Admissions Office
        </span>
        <h1 className="text-4xl md:text-7xl font-serif tracking-luxury text-white uppercase mb-6">
          Cohort Application
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-2xl leading-relaxed font-sans">
          Applications are open for the Autumn 2026 Batch. Complete your presence profile below to secure your private consultation and skeletal posture screening.
        </p>
      </div>

      <div className="luxury-container max-w-2xl">
        <div className="glass-panel p-8 md:p-12 border border-gold/15 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-gold/3 rounded-full blur-[65px] pointer-events-none" />

          {/* Form wrapper */}
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                onSubmit={handleSubmit}
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Step Indicators */}
                <div className="flex items-center justify-between border-b border-gold/10 pb-4 text-[9px] uppercase tracking-widest text-gold font-semibold font-sans">
                  <span className={currentStep === 1 ? "text-white" : ""}>01. Profile</span>
                  <span className={currentStep === 2 ? "text-white" : ""}>02. Experience</span>
                  <span className={currentStep === 3 ? "text-white" : ""}>03. Biometrics</span>
                </div>

                {/* STEP 1: PERSONAL PROFILE */}
                {currentStep === 1 && (
                  <motion.div 
                    key="step1"
                    className="space-y-6"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                  >
                    <h3 className="text-xl font-serif text-white">01. Candidate Personal Profile</h3>
                    
                    <div className="flex flex-col space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">FULL NAME</label>
                      <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required 
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">EMAIL ADDRESS</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          required 
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">CITY / REGION</label>
                        <input 
                          type="text" 
                          name="city" 
                          value={formData.city}
                          onChange={handleInputChange}
                          required 
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button type="button" onClick={nextStep} variant="solid" className="flex items-center space-x-2">
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: OBJECTIVES & EXPERIENCE */}
                {currentStep === 2 && (
                  <motion.div 
                    key="step2"
                    className="space-y-6"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                  >
                    <h3 className="text-xl font-serif text-white">02. Goals & Experience</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">COHORT SELECTION</label>
                        <select 
                          name="cohort" 
                          value={formData.cohort}
                          onChange={handleInputChange}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-gold font-sans focus:outline-none focus:border-gold transition-colors"
                        >
                          <option value="personal-grooming" className="bg-abyss text-white">Personal Grooming Mastery</option>
                          <option value="confidence" className="bg-abyss text-white">Confidence & Presence Program</option>
                          <option value="runway" className="bg-abyss text-white">Runway & Modelling Fundamentals</option>
                          <option value="branding" className="bg-abyss text-white">Personal Branding Program</option>
                        </select>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">MODELLING BACKGROUND</label>
                        <select 
                          name="experience" 
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-gold font-sans focus:outline-none focus:border-gold transition-colors"
                        >
                          <option value="beginner" className="bg-abyss text-white">No modelling experience (Beginner)</option>
                          <option value="intermediate" className="bg-abyss text-white">Some styling/shoot background</option>
                          <option value="advanced" className="bg-abyss text-white">Professional runway / Pageant candidate</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">YOUR PRIMARY TRANSFORMATION TARGETS</label>
                      <textarea 
                        name="targets"
                        value={formData.targets}
                        onChange={handleInputChange}
                        rows={4} 
                        required
                        placeholder="E.g., chronic spine slumping, vocal projection under stress, pageant title preparations..."
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-alabaster font-sans focus:outline-none focus:border-gold transition-colors placeholder:opacity-30"
                      />
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button type="button" onClick={prevStep} variant="outline" className="flex items-center space-x-2">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </Button>
                      <Button type="button" onClick={nextStep} variant="solid" className="flex items-center space-x-2">
                        <span>Continue</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: BIOMETRIC BASELINE */}
                {currentStep === 3 && (
                  <motion.div 
                    key="step3"
                    className="space-y-6"
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                  >
                    <h3 className="text-xl font-serif text-white">03. Posture & Communication Baseline</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">DO YOU EXPERIENCE SKELETAL SLUMPING?</label>
                        <select 
                          name="postureSlump" 
                          value={formData.postureSlump}
                          onChange={handleInputChange}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-gold font-sans focus:outline-none focus:border-gold transition-colors"
                        >
                          <option value="yes" className="bg-abyss text-white">Yes, I slump at desks (tech-neck)</option>
                          <option value="no" className="bg-abyss text-white">No, my posture feels aligned</option>
                          <option value="unsure" className="bg-abyss text-white">Unsure, I want a somatic check</option>
                        </select>
                      </div>
                      <div className="flex flex-col space-y-2">
                        <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">HIGH-HEELS WALKING COMFORT</label>
                        <select 
                          name="heelsWalkComfort" 
                          value={formData.heelsWalkComfort}
                          onChange={handleInputChange}
                          className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-gold font-sans focus:outline-none focus:border-gold transition-colors"
                        >
                          <option value="low" className="bg-abyss text-white">Low comfort (pain / knee bend walk)</option>
                          <option value="medium" className="bg-abyss text-white">Medium comfort (can walk but lack grace)</option>
                          <option value="high" className="bg-abyss text-white">High comfort (glide smoothly, straight knee)</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <label className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold">PREFERRED ADMISSIONS CONTACT CHANNEL</label>
                      <select 
                        name="preferredConsultation" 
                        value={formData.preferredConsultation}
                        onChange={handleInputChange}
                        className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-xs text-gold font-sans focus:outline-none focus:border-gold transition-colors"
                      >
                        <option value="whatsapp" className="bg-abyss text-white">Direct WhatsApp Consultation</option>
                        <option value="call" className="bg-abyss text-white">Voice Call Screening Session</option>
                        <option value="visit" className="bg-abyss text-white">Atelier Visit (Lavelle Road, Bangalore)</option>
                      </select>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button type="button" onClick={prevStep} variant="outline" className="flex items-center space-x-2">
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back</span>
                      </Button>
                      <Button type="submit" variant="solid" className="flex items-center space-x-2">
                        <span>Submit Profile</span>
                        <Check className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

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
                  <CheckCircle2 className="w-8 h-8 text-gold" />
                </div>
                
                <h3 className="text-3xl font-serif text-white mb-2">Profile Filed</h3>
                <p className="text-xs text-alabaster/60 font-sans max-w-sm leading-relaxed mb-8">
                  Your biometrics baseline and transformation targets have been registered at the Heels & Glam Admissions Desk.
                </p>

                {/* Direct Conversion Buttons */}
                <div className="flex flex-col space-y-3 w-full">
                  <a 
                    href={`https://wa.me/919880012345?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-green-600 text-white hover:bg-green-700 text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                    <span>Open WhatsApp Consultation Desk</span>
                  </a>

                  <Button href="https://wa.me/919880012345" variant="outline" className="w-full text-center">
                    Call Registrar Now
                  </Button>
                </div>

                <button 
                  onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                  }}
                  className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans mt-8"
                >
                  File another admissions profile
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
