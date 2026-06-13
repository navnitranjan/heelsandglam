import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Check, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

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

export const metadata: Metadata = {
  title: 'Professional Modelling Classes | Catwalk & Casting Academy India',
  description: 'Launch your high-fashion modelling career. Learn runway stride mechanics, pose geometry, and build lookbook portfolios under Aakanksha Anand.',
  keywords: [
    'modelling classes',
    'modelling academy India',
    'catwalk modelling course',
    'photoshoot posing training',
    'lookbook creation for models',
    'modelling casting prep'
  ]
};

export default function ModellingClassesPage() {
  const waMessage = encodeURIComponent(
    "Hi Aakanksha! I am exploring the Modelling Classes page and want to verify seat availability for the upcoming cohort."
  );

  const faqs = [
    {
      q: "What does the model lookbook project include?",
      a: "It features studio lighting, clothing coordination, posing geometry instruction, and professional photographer direction, producing 5 high-end portfolio images."
    },
    {
      q: "Do you assist with modelling agency castings?",
      a: "Yes. We prepare students for international and national agency castings, teaching posture tricks, jury communication, and styling guidelines."
    },
    {
      q: "I am a complete beginner. Can I enroll?",
      a: "Yes. Our modelling classes start with foundational posture walks, weight balances, and eye level focus drills, designed for beginners."
    }
  ];

  return (
    <div className="min-h-screen bg-obsidian text-pearl py-12 md:py-24 relative overflow-hidden">
      {/* Glow elements */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[400px] h-[400px] bg-rosegold/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Main Header */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-24 relative z-10">
        <span className="text-[10px] uppercase tracking-[0.35em] text-rosegold font-sans font-bold mb-4">
          Professional Modelling Classes • Course Overview
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Modelling<br />
          <span className="text-champagne font-serif">Classes</span>
        </h1>
        <div className="w-16 h-[1px] bg-rosegold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          India&apos;s premier modelling academy under founder Aakanksha Anand. Complete catwalk training, photoshoot styling, and portfolio lookbook creation.
        </p>
      </div>

      {/* Spacing & Content section */}
      <section className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28 relative z-10">
        {/* Visual column */}
        <div className="lg:col-span-5 relative aspect-[3/4] border border-rosegold/15 overflow-hidden shadow-2xl">
          <Image 
            src="/images/fashion-week-runway-jeans.jpg"
            alt="Modelling catwalk posture styling session"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent z-10" />
        </div>

        {/* Details column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-widest text-rosegold font-sans font-bold">The Catwalk Pedigree</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight uppercase">Master the Runway Stride</h2>
          <div className="w-12 h-[1px] bg-rosegold/40" />

          <p className="text-xs md:text-sm text-pearl/70 font-sans leading-relaxed">
            Catwalk presentation requires a discipline of skeletal pacing and center of gravity control. Our professional modelling classes break down every milestone of the catwalk, ensuring you step onto high-fashion stages with poise.
          </p>

          {/* Bullet syllabus details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans text-xs">
            {[
              "Catwalk Linear Walking & Heel Strikes",
              "Delayed Gaze Pivot Turn Mechanics",
              "Fabric Movement & Saree Carriage",
              "Studio Camera Angle Posing Profiles",
              "Lookbook Shoot Directing Guidelines",
              "Top Modeling Agency Castings Preparation"
            ].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-rosegold shrink-0" />
                <span className="text-pearl/65">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap gap-4 items-center">
            <a 
              href={`https://wa.me/919880012345?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Lock Modelling Class Seat</span>
            </a>
            <Button href="/apply" variant="outline">
              Initiate Admissions Profile
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="luxury-container max-w-4xl relative z-10 border-t border-rosegold/10 pt-16 mb-12">
        <div className="text-center mb-12">
          <HelpCircle className="w-8 h-8 text-rosegold mx-auto mb-3" />
          <h3 className="text-2xl font-serif text-white uppercase tracking-wider">Frequently Asked Questions</h3>
          <div className="w-8 h-[1px] bg-rosegold/30 mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 border border-rosegold/10 bg-editorial-grey/5 flex flex-col space-y-3">
              <h4 className="text-sm font-serif text-white uppercase tracking-wide">{faq.q}</h4>
              <p className="text-xs text-pearl/60 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
