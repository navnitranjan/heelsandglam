import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, Award, FileText, ExternalLink, Video } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Press & Media Center | Heels & Glam Academy',
  description: 'Access official press kits, view media coverage and press releases, and explore upcoming workshops mentored by Aakanksha Anand.',
  keywords: [
    'Heels & Glam press room',
    'Aakanksha Anand media',
    'grooming academy awards',
    'modelling events Bangalore',
    'press kit download'
  ]
};

export default function PressPage() {
  const mediaArticles = [
    {
      source: "Vogue India",
      title: "How Aakanksha Anand is Reconstructing Catwalk Kinetics in Indian Modelling",
      date: "April 2026",
      excerpt: "Vogue explores the Somatic Poise Method and how posture alignment is replacing traditional styling templates for aspiring models."
    },
    {
      source: "Harper's Bazaar",
      title: "The Musculoskeletal Chemistry of High Stature & Boardroom Command",
      date: "March 2026",
      excerpt: "Bazaar checks in with head coach Aakanksha Anand on how deep voice modulation and pelvis checks restore corporate presence."
    },
    {
      source: "Femina Magazine",
      title: "Overcoming Impostor Doubt: Posture Correction as a Tool for Female Empowerment",
      date: "January 2026",
      excerpt: "An interview on how correcting joint slumping and high-heels discomfort helps women claim their authority in high-stakes fields."
    }
  ];

  const workshops = [
    {
      title: "Autumn Poise & Silhouette Masterclass",
      location: "Lavelle Road Atelier, Bangalore",
      date: "September 15-18, 2026",
      type: "Offline Flagship"
    },
    {
      title: "Executive Vocal Stature & Presence Forum",
      location: "Hybrid / Live stream",
      date: "October 02, 2026",
      type: "Executive Cohort"
    },
    {
      title: "Elite Pageant Walk & Gown Carriage Intensive",
      location: "Lavelle Road Atelier, Bangalore",
      date: "November 10-12, 2026",
      type: "Pageant Guild"
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian text-pearl py-12 md:py-24 relative overflow-hidden">
      {/* Glow backdrops */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[400px] h-[400px] bg-rosegold/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Title */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 relative z-10 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.35em] text-rosegold font-sans font-bold mb-4">
          Press Room • Media Kits & Announcements
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Press &<br />
          <span className="text-champagne font-serif">Media</span>
        </h1>
        <div className="w-16 h-[1px] bg-rosegold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          Official announcements, media clippings, events calendar, and press resources for Heels & Glam Academy.
        </p>
      </div>

      {/* Featured In Logo Bar */}
      <section className="luxury-container border-y border-rosegold/10 py-10 mb-20 relative z-10">
        <div className="text-center mb-6">
          <span className="text-[9px] uppercase tracking-widest text-rosegold font-semibold font-sans">FEATURED IN</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center opacity-40 hover:opacity-75 transition-opacity duration-350">
          <span className="font-serif text-xl tracking-[0.2em] uppercase text-white">Vogue</span>
          <span className="font-serif text-xl tracking-[0.1em] uppercase text-white">Bazaar</span>
          <span className="font-serif text-xl tracking-[0.15em] uppercase text-white">Femina</span>
          <span className="font-serif text-xl tracking-[0.25em] uppercase text-white">Elle</span>
        </div>
      </section>

      {/* Press kit and articles */}
      <section className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20 relative z-10">
        {/* Left Column: Media Coverage */}
        <div className="lg:col-span-8 space-y-8">
          <h2 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-wider mb-6 border-b border-rosegold/15 pb-4">
            Media Mentions
          </h2>
          <div className="space-y-6">
            {mediaArticles.map((art, idx) => (
              <div 
                key={idx} 
                className="p-6 border border-rosegold/10 bg-editorial-grey/5 hover:border-rosegold/30 transition-all duration-300 flex flex-col space-y-3 font-sans"
              >
                <div className="flex justify-between items-center text-[10px] uppercase tracking-widest text-rosegold font-semibold">
                  <span>{art.source}</span>
                  <span>{art.date}</span>
                </div>
                <h3 className="text-base font-serif text-white uppercase tracking-wide">{art.title}</h3>
                <p className="text-xs text-pearl/60 leading-relaxed font-light">{art.excerpt}</p>
                <a 
                  href="https://wa.me/919880012345?text=Hi%20Aakanksha!%20I%20want%20to%20request%20access%20to%20your%20press%20releases."
                  className="text-[9px] uppercase tracking-luxury text-rosegold hover:text-white transition-colors self-start flex items-center space-x-1"
                >
                  <span>Request Full Press Clipping</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Press Kit Downloads & Events */}
        <div className="lg:col-span-4 space-y-12">
          {/* Press Kit Download */}
          <div className="p-8 border border-rosegold/20 bg-editorial-grey/10 relative overflow-hidden flex flex-col space-y-6 font-sans">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-rosegold/5 rounded-full blur-[50px] pointer-events-none" />
            <h3 className="text-lg font-serif text-white uppercase tracking-wider border-b border-rosegold/15 pb-3">
              Press Resources
            </h3>
            <p className="text-xs text-pearl/50 leading-relaxed font-light">
              Download official brand assets, founder biography profiles, lookbook high-resolution photography, and press release bundles.
            </p>
            <div className="space-y-3">
              <Button href="https://wa.me/919880012345?text=Hi%20Aakanksha!%20I%20would%20like%20to%20request%20your%20Official%20Press%20Kit%20PDF." variant="solid" className="w-full justify-center flex items-center space-x-2 py-3 text-[10px]">
                <FileText className="w-4 h-4" />
                <span>Request Brand Kit (PDF)</span>
              </Button>
              <Button href="https://wa.me/919880012345?text=Hi%20Aakanksha!%20I%20would%20like%20to%20request%20your%20Media%20Photo%20Asset%20Bundle." variant="outline" className="w-full justify-center flex items-center space-x-2 py-3 text-[10px]">
                <Video className="w-4 h-4" />
                <span>Request Asset Bundle (ZIP)</span>
              </Button>
            </div>
          </div>

          {/* Upcoming timeline */}
          <div className="space-y-6 font-sans">
            <h3 className="text-lg font-serif text-white uppercase tracking-wider border-b border-rosegold/15 pb-3">
              Upcoming Events
            </h3>
            <div className="space-y-4">
              {workshops.map((ws, index) => (
                <div key={index} className="border-l-2 border-rosegold pl-4 py-1 flex flex-col space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-rosegold font-bold">{ws.type}</span>
                  <h4 className="text-xs font-serif text-white uppercase font-semibold leading-tight">{ws.title}</h4>
                  <span className="text-[10px] text-pearl/50">{ws.date} • {ws.location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <div className="luxury-container text-center pt-8 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-rosegold font-semibold mb-4 block">MEDIA INQUIRIES</span>
        <h3 className="text-2xl md:text-3xl font-serif text-white uppercase mb-6">Coordinate an Interview</h3>
        <p className="text-xs text-pearl/50 font-sans max-w-md mx-auto mb-8 leading-relaxed font-light">
          For speaking keynotes, media panel bookings, brand sponsorships, and press commentary from Aakanksha Anand, connect directly with our admissions desk.
        </p>
        <a 
          href="https://wa.me/919880012345?text=Hi%20Aakanksha!%20I%20am%20a%20member%20of%20the%20press%20and%20would%20like%20to%20coordinate%20an%20interview."
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-8 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all inline-flex items-center space-x-2"
        >
          <span>Coordinate Media Interview</span>
        </a>
      </div>
    </div>
  );
}
