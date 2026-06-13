'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Compass, Sparkles, X, Heart, Eye } from 'lucide-react';
import Button from '@/components/ui/Button';

// 1. LOOKBOOK DETAILS
const LOOKBOOK_GALLERY = [
  {
    id: 1,
    title: "The Couture Silhouette",
    tag: "Personal Styling",
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800",
    desc: "Aakanksha Anand directing a custom color harmony and capsule wardrobe shoot.",
    photographer: "Rahul Bose (Celebrity Photographer)",
    location: "Oberoi Atelier, Bangalore"
  },
  {
    id: 2,
    title: "Runway Gait Balance",
    tag: "Catwalk Kinetics",
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800",
    desc: "Aspiring models training in structural heel strikes and arm pacing coordinates.",
    photographer: "Amit Verma (Fashion Editor)",
    location: "Runway Studio, Mumbai"
  },
  {
    id: 3,
    title: "The Somatic Stance",
    tag: "Posture Alignment",
    url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800",
    desc: "Musculoskeletal alignment and pelvic stabilization checks during high-heel walks.",
    photographer: "Karan Johar (Studio Director)",
    location: "Heels & Glam Atelier, Bangalore"
  },
  {
    id: 4,
    title: "Pageant Crown Prep",
    tag: "Pageant Masterclass",
    url: "https://images.unsplash.com/photo-1496449903678-c8dd735012ba?auto=format&fit=crop&q=80&w=800",
    desc: "Stage projection under spot lights and gown carriage choreography rehearsals.",
    photographer: "Rajiv Sethi (Pageant Choreographer)",
    location: "Grand Ballroom, Bangalore"
  },
  {
    id: 5,
    title: "Executive Presence Drills",
    tag: "Corporate Grooming",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    desc: "Professionals practicing non-verbal communication, seated poise, and boardroom entrance.",
    photographer: "Siddharth Sen (Editorial Lead)",
    location: "Corporate Suite, Bangalore"
  },
  {
    id: 6,
    title: " cat walk Pivot Kinetics",
    tag: "Ramp Walk Basic",
    url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=800",
    desc: "Model showing structural weight distribution, knee extension, and center of gravity pivot.",
    photographer: "Rahul Bose (Celebrity Photographer)",
    location: "Runway Studio, Bangalore"
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<typeof LOOKBOOK_GALLERY[0] | null>(null);

  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24">
      
      {/* Editorial Header */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4">
          The Aesthetics
        </span>
        <h1 className="text-4xl md:text-7xl font-serif tracking-luxury text-white uppercase mb-6">
          The Runway Lookbook
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-2xl leading-relaxed font-sans">
          A visual archive of classroom postures, photoshoot layouts, pageant stages, and student transformations directed by Heels & Glam.
        </p>
      </div>

      {/* Grid Masonry Layout */}
      <section className="luxury-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {LOOKBOOK_GALLERY.map((item) => (
          <div 
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative w-full aspect-[3/4] border border-gold/15 overflow-hidden shadow-2xl cursor-pointer hover:border-gold/50 transition-all duration-500 bg-editorial-grey/10"
          >
            {/* Visual */}
            <Image 
              src={item.url}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Hover Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/10 to-transparent opacity-80 z-10 transition-opacity duration-350 group-hover:opacity-90" />
            
            {/* Spotlight icons */}
            <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex space-x-2">
              <div className="p-2 rounded-full bg-abyss/80 border border-gold/30 text-gold hover:text-white">
                <Eye className="w-4 h-4" />
              </div>
            </div>

            {/* Info details */}
            <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-3 group-hover:translate-y-0 transition-transform duration-350">
              <span className="text-[9px] uppercase tracking-widest text-gold font-sans font-semibold block mb-1">
                {item.tag}
              </span>
              <h3 className="text-xl font-serif text-white mb-2">
                {item.title}
              </h3>
              <p className="text-[10px] text-alabaster/40 font-sans tracking-wide">
                Shot at: {item.location}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* DYNAMIC LIGHTBOX MODAL OVERLAY */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-abyss/95 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-gold hover:text-white transition-colors p-2 z-55"
              aria-label="Close Lookbook Details"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div 
              className="relative max-w-4xl w-full bg-abyss border border-gold/30 flex flex-col md:flex-row overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()} // stop close
            >
              {/* Image side */}
              <div className="relative w-full md:w-1/2 aspect-[3/4] md:aspect-auto md:min-h-[500px]">
                <Image 
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text metadata side */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-center space-y-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-sans font-semibold">
                    {selectedImage.tag}
                  </span>
                  <h2 className="text-3xl font-serif text-white mt-1">
                    {selectedImage.title}
                  </h2>
                  <div className="w-12 h-[1px] bg-gold/45 mt-4" />
                </div>

                <p className="text-xs md:text-sm text-alabaster/70 font-sans leading-relaxed">
                  {selectedImage.desc}
                </p>

                <div className="space-y-2 text-xs font-sans text-champagne/80">
                  <p><strong className="text-gold">Photographer:</strong> {selectedImage.photographer}</p>
                  <p><strong className="text-gold">Location:</strong> {selectedImage.location}</p>
                </div>

                <div className="pt-4">
                  <Button href="/apply" variant="solid" onClick={() => setSelectedImage(null)}>
                    Apply for Next Cohort
                  </Button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Footer */}
      <div className="luxury-container text-center">
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-6">Experience Your Transformation Firsthand</h3>
        <p className="text-xs md:text-sm text-alabaster/50 font-sans max-w-lg mx-auto mb-8 leading-relaxed">
          Our cohorts feature practical shoots with professional lookbook delivery. Learn posing and build your modeling portfolio today.
        </p>
        <Button href="/apply" variant="solid">Book Free Assessment</Button>
      </div>

    </div>
  );
}
