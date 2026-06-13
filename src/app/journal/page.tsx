'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, Award, ChevronRight, Share2, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';

// 1. THE 25 SEO-READY BLOG TOPICS
const BLOG_TOPICS = [
  "The Science of Walk: Spine Alignment & Heel Balance Kinetics",
  "Tech-Neck Correction: 5 Exercises to Realign Cervical Spine Slumping",
  "Vogue Runway Mechanics: Pacing, turns, and pivots on the catwalk",
  "Haute Couture Wardrobe Blueprint: Organizing capsule styles for authority",
  "Vocal Projection for Leaders: Building tone and speech modulation resonance",
  "Posing Fundamentals: Mapping studio camera angles and shoulder tilts",
  "Micro-Expression Sync: Coordinating facial control under spotlight stress",
  "Grooming Routines for Creators: Everyday skin and hair hygiene habits",
  "Executive Presence: Standing, sitting, and crossing thresholds with gravitas",
  "Etiquette Masterclass: Decoding formal social multi-course dining rules",
  "Pageant Interview Strategy: Structuring current affairs Q&A responses",
  "Color Theory styling: How to match lookbook colors to personal skin tones",
  "Confidence Coaching: Re-patterning mental boundaries and self-doubt",
  "Catwalk Pacing: The relationship between runway tempo and stride length",
  "Corporate Etiquette: Non-verbal carriage dynamics in international assemblies",
  "Personal Branding online: Designing cohesive Instagram styling grids",
  "Fabric Manipulation: Walking and posing in heavy gowns and cocktail fabrics",
  "Foot Biomechanics: Preventing back pain and fatigue while walking in heels",
  "Public Speaking: Structural outlines to command large stages",
  "The Imposter Slump: Physical posture corrections to combat insecurity",
  "Haute Grooming: The detail parameters that distinguish polished leaders",
  "Camera Confidence: Exercises to speak naturally in front of video lenses",
  "Model Portfolio Blueprints: Customizing lookbooks for top agency castings",
  "Haute Etiquette: Serving champagne and hosting high-society salons",
  "Musculoskeletal Poise: How core stability improves posture alignment"
];

// 2. THE 5 COMPLETE BLOG ARTICLES WITH ACTUAL CONTENT
const COMPLETE_ARTICLES = [
  {
    id: 1,
    title: "The Science of Walk: Spine Alignment & Heel Balance Kinetics",
    slug: "science-of-walk-kinetics",
    date: "June 10, 2026",
    readTime: "6 min read",
    category: "catwalk-poise",
    excerpt: "Walking in high heels is not merely a styling choice; it is an active biomechanical equation. Discover how spine verticality and center of gravity check change your gait.",
    imageSrc: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    content: `Walking in high heels is not merely a styling choice; it is an active biomechanical equation. When you elevate your heels, you shift your center of gravity forward. Without conscious posture correction, the body compensates by tilting the pelvis, bending the knees, and slumping the shoulders—leading to strain, instability, and a heavy gait.

At Heels & Glam, we teach the Somatic Poise Method to correct this compensation. The first step is spine-crown verticality. You must imagine a plumb line pulling the crown of your head upward, allowing the cervical vertebrae to decompress. 

Secondly, stabilize the pelvis. Engaging the lower core prevents the lower back from hyperextending. When stepping, the foot must strike heel-first, immediately rolling weight onto the toe. Keep your knees straight as you pass your weight over the foot. Practice pacing in front of a mirror: keep your chest open, let your arms slide symmetrically by your sides, and gaze forward at eye level. By stabilizing your skeletal core, you stand and glide with effortless grace.`
  },
  {
    id: 2,
    title: "Tech-Neck Correction: 5 Exercises to Realign Cervical Spine Slumping",
    slug: "tech-neck-correction-exercises",
    date: "May 28, 2026",
    readTime: "5 min read",
    category: "somatic-poise",
    excerpt: "Hours spent looking at laptops and phones compress the cervical vertebrae. Learn 5 essential posture routines to open your shoulders and lift your crown.",
    imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800",
    content: `Modern lifestyles dictate that we look down at screens for hours daily. This forward head posture—commonly called 'tech-neck'—adds up to 30 pounds of pressure on the cervical spine, leading to slouched shoulders, shallow breathing, and a projection of insecurity.

To correct tech-neck slumping, practice these five daily skeletal exercises:
1. The Spine Wall Check: Stand flat against a wall with heels, sacrum, shoulders, and the back of your head making contact. Hold for 3 minutes to reset positional memory.
2. Chin Tucks: Gaze forward and draw your head straight back, creating a double chin. Hold for 5 seconds. Repeat 10 times to strengthen deep neck muscles.
3. Shoulder Rolls & Openers: Inhale and roll shoulders up to your ears, then slide them down your back, opening the chest. Repeat 15 times.
4. Pectoral Doorway Stretch: Place your forearms on a doorframe at 90-degree angles. Step forward slowly to stretch the chest muscles.
5. Crown Reaches: Sit tall, inhale, and actively push the top-center of your skull towards the ceiling while dropping your shoulders. These exercises restore structural symmetry and project absolute authority.`
  },
  {
    id: 3,
    title: "Runway Catwalk Mechanics: Pivots, Pacing, and Turn Techniques",
    slug: "runway-catwalk-mechanics",
    date: "May 15, 2026",
    readTime: "7 min read",
    category: "modelling",
    excerpt: " Catwalk presentation is built on pacing, timing, and center of gravity pivots. Study the structural walk elements directed by Aakanksha Anand.",
    imageSrc: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
    content: `Catwalk presentation is a discipline of visual timing. A great model does not rush; she controls the music's tempo through her strides.

Catwalk mechanics require walking in a straight linear path. One foot must step directly in front of the other. Keep your strides long and let your hips slide naturally—do not force an artificial sway.

When you reach the runway end, execute the pivot turn. Transfer your weight completely to the front foot, pivot 180 degrees on the balls of both feet, and slide your gaze away last. Keep your head looking at the cameras until the body has turned. This 'gaze delay' creates high-contrast visual framing. By coordinating your turns and pacing, you present fabrics with maximum impact.`
  },
  {
    id: 4,
    title: "Vocal Projection: How Executive Leaders Build Speech Modulation Resonance",
    slug: "vocal-projection-executive-speech",
    date: "April 30, 2026",
    readTime: "6 min read",
    category: "communication",
    excerpt: "True authority is vocalized. Learn the diaphragmatic breathing and verbal pacing techniques that command boardrooms and keynotes.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    content: `True authority is vocalized. Many women struggle with 'uptalk' (rising pitch at the end of sentences) or high speed of speech under pressure, which signals insecurity.

To build vocal gravitas, start with diaphragmatic breathing. Inhale deeply so your stomach expands, and speak from your diaphragm rather than your throat. This deep resonance instantly lowers pitch and increases volume control.

Secondly, implement the 'pause strategy'. Never rush to fill silence. Pausing before key statements creates anticipation and shows high self-possession. Remove filler words (like 'um', 'like', 'ah') by pausing instead. Modulation is key: slow down for critical insights and project your voice to the back of the room.`
  },
  {
    id: 5,
    title: "Wardrobe Styling: Curating a Capsule Wardrobe for Personal Presence",
    slug: "wardrobe-styling-capsule",
    date: "April 12, 2026",
    readTime: "5 min read",
    category: "styling",
    excerpt: "Your wardrobe is a visual statement. Learn the body geometry profiling and color mapping rules to align your daily style with your branding targets.",
    imageSrc: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&q=80&w=800",
    content: `Your wardrobe is a visual statement. It is the first message you send before you speak. Curating a personal capsule wardrobe is a strategic branding exercise.

First, determine your body geometry profile. Knowing your structural lines allows you to select silhouettes that fit you cleanly. 

Secondly, apply color theory. Identify whether cool or warm tones align with your skin tone. A premium capsule wardrobe should contain high-quality staples in neutral shades—a tailored blazer, a silk shirt, and clean-cut trousers. These pieces can be styled in multiple ways to project elegance in corporate boardrooms, creative agencies, and social galas.`
  }
];

export default function JournalPage() {
  const [activeArticle, setActiveArticle] = useState<typeof COMPLETE_ARTICLES[0] | null>(null);

  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24">
      
      {/* Page Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4">
          The Intellect
        </span>
        <h1 className="text-4xl md:text-7xl font-serif tracking-luxury text-white uppercase mb-6">
          The Journal
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-2xl leading-relaxed font-sans">
          Bespoke essays, somatic tutorials, style blueprints, and digital branding strategies curated by Aakanksha Anand.
        </p>
      </div>

      <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* LEFT COLUMN: SELECTED ARTICLE VIEWER OR LIST */}
        <div className="lg:col-span-8 space-y-12">
          <AnimatePresence mode="wait">
            {activeArticle ? (
              <motion.article 
                key="active"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 animate-fade-in"
              >
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans flex items-center space-x-1"
                >
                  <span>← Back to Articles</span>
                </button>

                <div className="relative aspect-[16/9] w-full border border-gold/15 overflow-hidden shadow-xl">
                  <Image 
                    src={activeArticle.imageSrc}
                    alt={activeArticle.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex space-x-4 text-xs font-sans text-alabaster/40 font-medium">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{activeArticle.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>{activeArticle.readTime}</span>
                  </span>
                  <span className="uppercase tracking-widest text-gold">{activeArticle.category}</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-serif text-white">{activeArticle.title}</h2>
                <div className="w-12 h-[1px] bg-gold/35" />

                {/* Article Body */}
                <div className="text-xs md:text-sm text-alabaster/70 font-sans leading-relaxed space-y-6 whitespace-pre-wrap pt-4">
                  {activeArticle.content}
                </div>

                <div className="pt-8 border-t border-gold/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase text-gold font-sans font-semibold">Written by Aakanksha Anand</span>
                  <Button href="/apply" variant="outline">Consult Founder About This Topic</Button>
                </div>
              </motion.article>
            ) : (
              <motion.div 
                key="list"
                className="space-y-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h2 className="text-2xl font-serif text-white uppercase tracking-wider border-b border-gold/10 pb-4">Featured Articles</h2>
                
                {COMPLETE_ARTICLES.map((article) => (
                  <div 
                    key={article.id}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 border border-gold/15 bg-editorial-grey/5 hover:border-gold/35 transition-all duration-350"
                  >
                    <div className="md:col-span-4 relative aspect-[4/3] overflow-hidden border border-gold/10">
                      <Image 
                        src={article.imageSrc}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-75 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="md:col-span-8 flex flex-col space-y-3">
                      <div className="flex space-x-3 text-[10px] font-sans text-alabaster/40 uppercase tracking-widest">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300">
                        {article.title}
                      </h3>
                      
                      <p className="text-xs text-alabaster/55 font-sans leading-relaxed line-clamp-2">
                        {article.excerpt}
                      </p>

                      <button
                        onClick={() => setActiveArticle(article)}
                        className="text-[10px] uppercase tracking-luxury text-gold group-hover:text-white transition-colors font-sans font-semibold self-start flex items-center space-x-1 pt-2"
                      >
                        <span>Read Full Essay</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT COLUMN: SIDEBAR - THE 25 SEO BLOG TOPICS INDEX */}
        <div className="lg:col-span-4 space-y-12">
          
          {/* Index card */}
          <div className="p-8 border border-gold/20 bg-editorial-grey/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gold/5 rounded-full blur-[50px] pointer-events-none" />
            
            <h3 className="text-xl font-serif text-white uppercase tracking-wider mb-6 border-b border-gold/15 pb-4">
              The Journal Index
            </h3>
            <p className="text-[10px] text-alabaster/40 font-sans tracking-wide mb-6 uppercase">
              25 SEO-Ready Topics Under Editorial Review
            </p>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {BLOG_TOPICS.map((topic, index) => (
                <div 
                  key={index}
                  className="flex space-x-3 items-start text-xs font-sans text-alabaster/60 hover:text-gold transition-colors py-1 cursor-help"
                  title="Coming Soon - This essay is currently under editorial review."
                >
                  <span className="text-gold font-serif font-semibold text-xs">{(index + 1).toString().padStart(2, '0')}</span>
                  <p className="leading-snug">{topic}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gold/15 text-center">
              <span className="text-[9px] uppercase tracking-widest text-alabaster/40 block mb-2">Request Early Access to Index Essays</span>
              <Button href="/apply" variant="solid" className="w-full text-center py-2.5 text-[10px]">
                Subscribe to private roster
              </Button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
