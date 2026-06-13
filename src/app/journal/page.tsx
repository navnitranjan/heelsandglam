'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, Award, ChevronRight, X } from 'lucide-react';
import Button from '@/components/ui/Button';

// 1. THE 6 OFFICIAL CATEGORIES
const CATEGORIES = [
  "All",
  "Confidence",
  "Grooming",
  "Personal Branding",
  "Modelling",
  "Women Empowerment",
  "Fashion"
];

// 2. THE 25 SEO-READY INDEX TOPICS (SIDEBAR PREVIEW)
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

// 3. THE 10 COMPLETE BLOG ARTICLES WITH BRAND CONTENT
const COMPLETE_ARTICLES = [
  {
    id: 1,
    title: "The Science of Walk: Spine Alignment & Heel Balance Kinetics",
    slug: "science-of-walk-kinetics",
    date: "June 10, 2026",
    readTime: "6 min read",
    category: "Modelling",
    type: "Article",
    excerpt: "Walking in high heels is not merely a styling choice; it is an active biomechanical equation. Discover how spine verticality and center of gravity check change your gait.",
    imageSrc: "/images/runway-saree-lotus.jpg",
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
    category: "Grooming",
    type: "Guide",
    excerpt: "Hours spent looking at laptops and phones compress the cervical vertebrae. Learn 5 essential posture routines to open your shoulders and lift your crown.",
    imageSrc: "/images/founder-portrait-red-full.jpg",
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
    category: "Modelling",
    type: "Guide",
    excerpt: "Catwalk presentation is built on pacing, timing, and center of gravity pivots. Study the structural walk elements directed by Aakanksha Anand.",
    imageSrc: "/images/fashion-week-runway-jeans.jpg",
    content: `Catwalk presentation is a discipline of visual timing. A great model does not rush; she controls the music's tempo through her strides.

1. Catwalk mechanics require walking in a straight linear path. One foot must step directly in front of the other. Keep your strides long and let your hips slide naturally—do not force an artificial sway.
2. When you reach the runway end, execute the pivot turn. Transfer your weight completely to the front foot, pivot 180 degrees on the balls of both feet, and slide your gaze away last.
3. Keep your head looking at the cameras until the body has turned. This 'gaze delay' creates high-contrast visual framing. By coordinating your turns and pacing, you present fabrics with maximum impact.`
  },
  {
    id: 4,
    title: "Vocal Projection: How Executive Leaders Build Speech Modulation Resonance",
    slug: "vocal-projection-executive-speech",
    date: "April 30, 2026",
    readTime: "6 min read",
    category: "Confidence",
    type: "Guide",
    excerpt: "True authority is vocalized. Learn the diaphragmatic breathing and verbal pacing techniques that command boardrooms and keynotes.",
    imageSrc: "/images/founder-portrait-red-half.jpg",
    content: `True authority is vocalized. Many women struggle with 'uptalk' (rising pitch at the end of sentences) or high speed of speech under pressure, which signals insecurity.

1. Start with diaphragmatic breathing. Inhale deeply so your stomach expands, and speak from your diaphragm rather than your throat. This deep resonance instantly lowers pitch and increases volume control.
2. Implement the 'pause strategy'. Never rush to fill silence. Pausing before key statements creates anticipation and shows high self-possession. Remove filler words (like 'um', 'like', 'ah') by pausing instead.
3. Modulation is key: slow down for critical insights and project your voice to the back of the room.`
  },
  {
    id: 5,
    title: "Wardrobe Styling: Curating a Capsule Wardrobe for Personal Presence",
    slug: "wardrobe-styling-capsule",
    date: "April 12, 2026",
    readTime: "5 min read",
    category: "Grooming",
    type: "Guide",
    excerpt: "Your wardrobe is a visual statement. Learn the body geometry profiling and color mapping rules to align your daily style with your branding targets.",
    imageSrc: "/images/traditional-saree-styling.jpg",
    content: `Your wardrobe is a visual statement. It is the first message you send before you speak. Curating a personal capsule wardrobe is a strategic branding exercise.

1. Determine your body geometry profile. Knowing your structural lines allows you to select silhouettes that fit you cleanly.
2. Apply color theory. Identify whether cool or warm tones align with your skin tone.
3. Select neutral essentials. A premium capsule wardrobe should contain high-quality staples in neutral shades—a tailored blazer, a silk shirt, and clean-cut trousers. These pieces can be styled in multiple ways to project elegance.`
  },
  {
    id: 6,
    title: "The Art of Presence: Personal Branding Frameworks for Aspiring Leaders",
    slug: "art-of-presence-personal-branding",
    date: "March 28, 2026",
    readTime: "8 min read",
    category: "Personal Branding",
    type: "Interview",
    excerpt: "Building a personal brand online and offline requires a cohesive visual, behavioral, and vocal framework. Discover Aakanksha Anand's branding blueprint.",
    imageSrc: "/images/founder-portrait-red-full.jpg",
    content: `Q: How do you define a personal brand beyond digital grids?
A: Personal branding is more than a social media profile; it is a holistic blueprint of how you present your authority to the world. It starts with self-consistency. Your styling, body language, and communication style must speak the same language.

Q: What is the first actionable step to establish physical authority?
A: First, define your visual signature. Select structural blazers, fitting silhouettes, and a distinct palette. 

Q: How does a leader project presence under heavy lighting or lens stress?
A: Secondly, master on-camera mechanics. Read to camera lenses with deliberate eye delay. Frame your thoughts in structured formats and maintain vocal projection. By aligning your digital grids with your offline poise, you build deep credibility.`
  },
  {
    id: 7,
    title: "Social Space Domination: Non-Verbal Communication and Stature Mechanics",
    slug: "social-space-domination-mechanics",
    date: "March 15, 2026",
    readTime: "6 min read",
    category: "Confidence",
    type: "Article",
    excerpt: "Your carriage dictates how people perceive your authority before you speak. Learn the non-verbal stance and spatial coordinates to own any room.",
    imageSrc: "/images/founder-portrait-red-half.jpg",
    content: `First impressions are visual. Stature is not about your physical height; it is about how much spatial volume you command with your frame. When people feel anxious, they slump, cross their arms, and look down—effectively shrinking themselves.

To project absolute authority, practice spatial presence. Stand with your feet aligned to your hips, distributing your weight equally. Keep your hands relaxed by your sides or use controlled gestures. Avoid checking your phone as a nervous default. Keep your head level and maintain a calm scanning gaze. When you claim your space physically, the room adjusts to your presence.`
  },
  {
    id: 8,
    title: "Breaking the Glass Runway: The Aparna Sharma Story",
    slug: "women-empowerment-decisive-carriage",
    date: "March 01, 2026",
    readTime: "7 min read",
    category: "Women Empowerment",
    type: "Student Story",
    excerpt: "Physical poise is a vehicle for personal empowerment. Read how Aparna Sharma conquered postural slumping to walk Milan runways and lead corporate sessions.",
    imageSrc: "/images/fashion-week-runway-jeans.jpg",
    content: `[BEFORE] Experienced chronic cervical spine slumping (tech-neck), walked with bent knees in high heels, and lacked confidence-driven presence during social gatherings.

[CHALLENGES] Struggling to balance head positioning, stabilizer muscle fatigue after 10 minutes in heels, and self-conscious positional boundaries.

[JOURNEY] Mentored directly by Aakanksha Anand. Focused on musculoskeletal decompression, center of gravity checks, and linear step mechanics. Coached in evening gown carriage and board-level presentations.

[AFTER] Walked runway at Milan Fashion Week and commands boardroom assemblies with 98% posture symmetry rating.

Physical poise is a vehicle for personal empowerment. When a woman realigns her skeletal structure, she shifts her mental self-perception. Decisive carriage—shoulders relaxed, head tall, chest open—actively reduces stress hormones and increases testosterone levels, generating feelings of power.

At Heels & Glam, we view poise training as a vehicle for personal growth. By conquering postural slouching and heels walk discomfort, women release positional anxiety. When you command your frame, you assert your right to belong in executive boardrooms, political keynotes, and high-fashion stages alike.`
  },
  {
    id: 9,
    title: "Couture Anatomy: Understanding Fabric Movement and Camera Geometry",
    slug: "couture-anatomy-fabric-movement",
    date: "Feb 18, 2026",
    readTime: "8 min read",
    category: "Fashion",
    type: "Article",
    excerpt: "High-fashion lookbook shoots require coordination with lighting and fabric movement. Discover the geometry behind successful lookbook poses.",
    imageSrc: "/images/runway-saree-lotus.jpg",
    content: `Posing for high-fashion campaigns is a collaborative choreography between your body and the fabric. You must understand how fabrics drape, catch lighting shadows, and sway with movements.

First, analyze your clothing weight. Heavy silks, organzas, and gowns require slow walks to allow fabrics to settle. 

Secondly, map your physical geometry to camera angles. Create high-contrast shapes—tilting your head slightly, placing a hand on your waist to show elbow angles, and pointing your toes. Never face cameras flat; tilt your chest 45 degrees to capture shadows. By matching fabric mechanics with body geometry, you build stunning lookbooks.`
  },
  {
    id: 10,
    title: "Modern Etiquette: Navigating High-Society Salons and Diplomatic Boardrooms",
    slug: "modern-etiquette-high-society",
    date: "Feb 05, 2026",
    readTime: "6 min read",
    category: "Grooming",
    type: "Guide",
    excerpt: "Modern social protocols require absolute mastery of table setting layouts, toast etiquette, and entering formal salons with grace.",
    imageSrc: "/images/traditional-saree-styling.jpg",
    content: `Elegance is complete when your carriage is matched by your social grace. Etiquette protocols protect you from social anxiety and ensure you blend seamlessly into high-stakes diplomatic and high-society environments.

1. Master dining mechanics. Know which utensil to pick (work from the outside in) and how to rest silverware to signal pauses or completion. 
2. Toast and dialogue with poise. Maintain brief, confident eye contact, modulate your voice, and keep posture straight when seated. Elegant carriage, matched with refined speech protocols, opens doors to key networks.`
  }
];

// 4. CUSTOM EDITORIAL LAYOUT RENDERERS
const renderArticleLayout = (content: string) => {
  const paragraphs = content.split('\n\n').filter(Boolean);
  return (
    <div className="font-serif leading-relaxed text-alabaster/80 space-y-6 text-sm md:text-base">
      {paragraphs.map((p, idx) => (
        <p key={idx} className={idx === 0 ? "first-letter:text-6xl first-letter:font-serif first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold leading-relaxed text-white" : ""}>
          {p}
        </p>
      ))}
    </div>
  );
};

const renderGuideLayout = (content: string) => {
  const paragraphs = content.split('\n\n').filter(Boolean);
  return (
    <div className="font-sans space-y-6 text-xs md:text-sm text-alabaster/70">
      <div className="border-l border-gold/40 pl-4 mb-8 italic text-champagne/95 text-xs tracking-wider">
        STRUCTURED POISE BLUEPRINT & IMPLEMENTATION MANUAL. FOLLOW EACH STEP PRECISELY.
      </div>
      {paragraphs.map((p, idx) => {
        const match = p.match(/^(\d+)\.\s*([\s\S]*)/);
        if (match) {
          const num = match[1];
          const text = match[2];
          return (
            <div key={idx} className="flex gap-4 p-5 border border-gold/10 bg-editorial-grey/5 rounded-xs hover:border-gold/20 transition-all">
              <div className="flex-shrink-0 w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold font-serif text-sm font-semibold bg-abyss">
                {num}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium leading-relaxed">{text}</p>
              </div>
            </div>
          );
        }
        return <p key={idx} className="leading-relaxed">{p}</p>;
      })}
    </div>
  );
};

const renderInterviewLayout = (content: string) => {
  const paragraphs = content.split('\n\n').filter(Boolean);
  return (
    <div className="font-serif leading-relaxed text-sm md:text-base space-y-8">
      <div className="text-center py-4 border-y border-gold/15 my-6">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-bold">
          Exclusive Conversation: Aakanksha Anand
        </span>
      </div>
      {paragraphs.map((p, idx) => {
        if (p.startsWith('Q:')) {
          const text = p.replace(/^Q:\s*/, '');
          return (
            <div key={idx} className="pl-6 border-l border-gold text-white font-medium italic text-base md:text-lg">
              <span className="text-gold font-sans uppercase text-[10px] tracking-widest block not-italic mb-1 font-bold">Vogue Journal:</span>
              &ldquo;{text}&rdquo;
            </div>
          );
        } else if (p.startsWith('A:')) {
          const text = p.replace(/^A:\s*/, '');
          return (
            <div key={idx} className="text-alabaster/70 pl-6 leading-relaxed">
              <span className="text-alabaster/40 font-sans uppercase text-[10px] tracking-widest block mb-1 font-semibold">Aakanksha Anand:</span>
              {text}
            </div>
          );
        }
        return <p key={idx} className="text-alabaster/75 leading-relaxed">{p}</p>;
      })}
    </div>
  );
};

const renderStudentStoryLayout = (content: string) => {
  const paragraphs = content.split('\n\n').filter(Boolean);
  
  let beforeText = "";
  let challengesText = "";
  let journeyText = "";
  let afterText = "";
  const remainingParas: string[] = [];
  
  paragraphs.forEach(p => {
    if (p.includes('[BEFORE]')) {
      beforeText = p.replace('[BEFORE]', '').trim();
    } else if (p.includes('[CHALLENGES]')) {
      challengesText = p.replace('[CHALLENGES]', '').trim();
    } else if (p.includes('[JOURNEY]')) {
      journeyText = p.replace('[JOURNEY]', '').trim();
    } else if (p.includes('[AFTER]')) {
      afterText = p.replace('[AFTER]', '').trim();
    } else {
      remainingParas.push(p);
    }
  });

  return (
    <div className="space-y-8 font-sans">
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold text-center border-b border-gold/10 pb-4">
        Alumna Case File & Transformation Audit
      </div>
      
      {(beforeText || afterText) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beforeText && (
            <div className="p-5 border border-red-500/10 bg-red-950/5 relative">
              <span className="text-[9px] uppercase tracking-widest text-red-400 font-bold block mb-2">Original Poise Baseline</span>
              <p className="text-xs text-alabaster/60 italic leading-relaxed">&ldquo;{beforeText}&rdquo;</p>
            </div>
          )}
          {afterText && (
            <div className="p-5 border border-gold/20 bg-gold/5 relative">
              <span className="text-[9px] uppercase tracking-widest text-gold font-bold block mb-2">Validated Transformation</span>
              <p className="text-xs text-white font-medium italic leading-relaxed">&ldquo;{afterText}&rdquo;</p>
            </div>
          )}
        </div>
      )}

      {(challengesText || journeyText) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-b border-gold/10 py-6">
          {challengesText && (
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">The Barriers</h4>
              <p className="text-xs text-alabaster/55 leading-relaxed">{challengesText}</p>
            </div>
          )}
          {journeyText && (
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-gold font-bold mb-2">Calibration Course</h4>
              <p className="text-xs text-alabaster/60 leading-relaxed">{journeyText}</p>
            </div>
          )}
        </div>
      )}

      {remainingParas.length > 0 && (
        <div className="space-y-6 text-sm text-alabaster/70 leading-relaxed font-serif pt-4">
          {remainingParas.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default function JournalPage() {
  const [activeArticle, setActiveArticle] = useState<typeof COMPLETE_ARTICLES[0] | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All"
    ? COMPLETE_ARTICLES
    : COMPLETE_ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24 relative overflow-hidden">
      
      {/* Page Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in relative z-10">
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

      <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
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
                className="space-y-6"
              >
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans flex items-center space-x-1 cursor-pointer"
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

                <div className="flex flex-wrap gap-4 text-xs font-sans text-alabaster/40 font-medium items-center">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-gold" />
                    <span>{activeArticle.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    <span>{activeArticle.readTime}</span>
                  </span>
                  <span className="uppercase tracking-widest text-gold">{activeArticle.category}</span>
                  <span className="border border-gold/30 px-2 py-0.5 text-[8px] text-white tracking-[0.15em] font-semibold bg-gold/5 uppercase rounded-xs">
                    {activeArticle.type}
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-serif text-white">{activeArticle.title}</h2>
                <div className="w-12 h-[1px] bg-gold/35" />

                {/* Article Body */}
                <div className="pt-4">
                  {activeArticle.type === 'Guide' && renderGuideLayout(activeArticle.content)}
                  {activeArticle.type === 'Interview' && renderInterviewLayout(activeArticle.content)}
                  {activeArticle.type === 'Student Story' && renderStudentStoryLayout(activeArticle.content)}
                  {activeArticle.type === 'Article' && renderArticleLayout(activeArticle.content)}
                  {!['Guide', 'Interview', 'Student Story', 'Article'].includes(activeArticle.type) && (
                    <div className="text-xs md:text-sm text-alabaster/70 font-sans leading-relaxed space-y-6 whitespace-pre-wrap">
                      {activeArticle.content}
                    </div>
                  )}
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
                <div className="border-b border-gold/10 pb-4 space-y-6">
                  <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Featured Essays</h2>
                  
                  {/* Category Selector Filter Bar */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-1.5 text-[9px] uppercase tracking-widest font-sans font-semibold transition-all border ${
                          selectedCategory === cat
                            ? 'bg-gold text-abyss border-gold'
                            : 'bg-editorial-grey/10 text-alabaster/50 border-gold/15 hover:border-gold/30 hover:text-white'
                        } cursor-pointer`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                
                {filteredArticles.length > 0 ? (
                  filteredArticles.map((article) => (
                    <div 
                      key={article.id}
                      className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 border border-gold/15 bg-editorial-grey/5 hover:border-gold/35 transition-all duration-350"
                    >
                      <div className="md:col-span-4 relative aspect-[4/3] overflow-hidden border border-gold/10">
                        <Image 
                          src={article.imageSrc}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-103"
                        />
                      </div>
                      
                      <div className="md:col-span-8 flex flex-col space-y-3">
                        <div className="flex flex-wrap items-center gap-3 text-[10px] font-sans text-alabaster/40 uppercase tracking-widest">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                          <span>•</span>
                          <span className="text-gold font-semibold">{article.category}</span>
                          <span>•</span>
                          <span className="border border-gold/25 px-1.5 py-0.5 text-[8px] text-white tracking-[0.1em] font-semibold bg-gold/5 uppercase rounded-xs">
                            {article.type}
                          </span>
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-gold transition-colors duration-300">
                          {article.title}
                        </h3>
                        
                        <p className="text-xs text-alabaster/55 font-sans leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>

                        <button
                          onClick={() => setActiveArticle(article)}
                          className="text-[10px] uppercase tracking-luxury text-gold group-hover:text-white transition-colors font-sans font-semibold self-start flex items-center space-x-1 pt-2 cursor-pointer"
                        >
                          <span>Read Full Essay</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-16 border border-gold/10 bg-editorial-grey/5">
                    <p className="text-xs text-alabaster/40 font-sans tracking-wide">No essays published in this category yet.</p>
                  </div>
                )}
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
              25 Topics Under Editorial Review
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
