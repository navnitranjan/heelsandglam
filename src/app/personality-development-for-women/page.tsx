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
  title: 'Personality Development for Women | Executive Presence Academy',
  description: 'Command respect in every room. Accelerate your executive presence, conversational charm, and social etiquette under Aakanksha Anand\'s mentorship.',
  keywords: [
    'personality development',
    'personality development classes for women',
    'executive presence training',
    'social etiquette course',
    'communication coaching for women',
    'confidence and posture course'
  ],
  alternates: {
    canonical: 'https://heelsandglam.com/personality-development-for-women',
  }
};

export default function PersonalityDevelopmentForWomenPage() {
  const waMessage = encodeURIComponent(
    "Hi Aakanksha! I am exploring the Personality Development for Women page and want to verify seat availability for the upcoming cohort."
  );

  const faqs = [
    {
      q: "Who is this program designed for?",
      a: "This program is specifically curated for women—including corporate executives, startup founders, lawyers, content creators, and ambitious members of the Circle—seeking to establish a high-stature presence and project self-possession."
    },
    {
      q: "What kinetic metrics are covered in the training?",
      a: "We address posture slouching, spine verticality, gait mechanics in high heels, hand gesture stabilization, vocal modulation, and conversational etiquette."
    },
    {
      q: "Are the classes offline or online?",
      a: "We offer offline Flagship Masterclasses at our luxury atelier in Electronic City, Bangalore, alongside hybrid and private 1-on-1 mentorship paths."
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
          Personality Development Masterclass • Behavioral Stature
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          Personality<br />
          <span className="text-champagne font-serif">Development</span>
        </h1>
        <div className="w-16 h-[1px] bg-rosegold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          Accelerate your personal and professional presence. Master verbal elegance, social etiquette, and executive carriage to own any room you enter.
        </p>
      </div>

      {/* Spacing & Content section */}
      <section className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28 relative z-10">
        {/* Visual column */}
        <div className="lg:col-span-5 relative aspect-[3/4] border border-rosegold/15 overflow-hidden shadow-2xl">
          <Image 
            src="/images/founder-portrait-red-half.jpg"
            alt="Founder Aakanksha Anand presenting executive stature"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-[50%_20%]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent z-10" />
        </div>

        {/* Details column */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-widest text-rosegold font-sans font-bold">Executive Stature</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight uppercase">Own Your Space & Voice</h2>
          <div className="w-12 h-[1px] bg-rosegold/40" />

          <p className="text-xs md:text-sm text-pearl/70 font-sans leading-relaxed">
            True poise is a silent authority. Our personality development training focuses on aligning your physical stature, vocal resonance, and conversational grace, enabling you to present authority and approachability in perfect harmony.
          </p>

          {/* Bullet syllabus details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-sans text-xs">
            {[
              "High-Stature Body Language & Stance Mechanics",
              "Executive Voice Projection & Diaphragm Control",
              "Social and Table Dining Etiquette Systems",
              "Somatic Posture Adjustment & Alignment",
              "Assertive Conversation Styling & Boundary Building",
              "Confidence Mastery & Impostor Doubt Recovery"
            ].map((item) => (
              <div key={item} className="flex items-center space-x-2">
                <Check className="w-4 h-4 text-rosegold shrink-0" />
                <span className="text-pearl/65">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-wrap gap-4 items-center">
            <a 
              href={`https://wa.me/919742232322?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
              <span>Lock Personality Seat</span>
            </a>
            <Button href="/apply" variant="outline">
              Begin Your Transformation
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
