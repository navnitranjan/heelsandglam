import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import { Compass, Sparkles, Award, ShieldCheck, Heart, Users, Target, Check, HelpCircle } from 'lucide-react';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Academy Philosophy & Founder Story | Heels & Glam',
  description: 'Discover the Somatic Poise Method and the transformation framework developed by head coach Aakanksha Anand. Join Heels & Glam Academy.',
  keywords: [
    'academy philosophy',
    'somatic poise method',
    'Aakanksha Anand message',
    'heels walk training framework',
    'grooming academy values',
    'why Heels & Glam'
  ],
  alternates: {
    canonical: 'https://heelsandglam.com/academy',
  }
};

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-burgundy/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[500px] h-[500px] bg-rosegold/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Editorial Header */}
      <div className="luxury-container flex flex-col items-center text-center mb-16 md:mb-28 relative z-10 animate-fade-in">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4">
          The Pedigree
        </span>
        <h1 className="text-4xl md:text-8xl font-serif tracking-luxury text-white uppercase mb-6 leading-none">
          The Academy &<br />
          <span className="text-champagne font-serif">Philosophy</span>
        </h1>
        <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-8" />
        <p className="text-sm tracking-wide text-champagne max-w-xl leading-relaxed font-sans font-light">
          A premium personal transformation atelier bridging modeling pedigree, posture engineering, and executive presence coached by Aakanksha Anand.
        </p>
      </div>

      {/* Founder Message Section */}
      <section className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-28 md:mb-40 relative z-10">
        {/* Profile Image */}
        <div className="lg:col-span-5 relative aspect-[3/4] border border-gold/20 shadow-2xl">
          <div className="absolute inset-4 border border-gold/15 -translate-x-4 translate-y-4 pointer-events-none z-10" />
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="/images/founder-portrait-red-full.jpg"
              alt="Aakanksha Anand - Founder & Head Coach posing in a red dress"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-transparent" />
          </div>
        </div>

        {/* Founder message */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">FOUNDER MESSAGE</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">Aakanksha Anand</h2>
          <div className="w-12 h-[1px] bg-gold/40" />

          <blockquote className="text-lg font-serif italic text-champagne/95 leading-relaxed pl-6 border-l border-gold/20">
            &quot;Confidence is not a performance or an assertion—it is preparation and alignment. When your spine is decompressed, your weight is centered, and your mind is present, you possess the poise to command any room.&quot;
          </blockquote>

          <div className="space-y-4 text-xs md:text-sm text-alabaster/70 font-sans leading-relaxed font-light">
            <p>
              I founded Heels & Glam because I saw too many women with exceptional talent, intelligence, and ambition compromise their impact because of secondary posture habits, vocal anxiety, or styling mismatches.
            </p>
            <p>
              True authority is kinetic before it is spoken. My mentorship is built on structural body geometry, diaphragmatic resonance, and distinct visual branding. We do not try to make you fit a standard mold. Instead, we reveal the most powerful and aligned version of yourself.
            </p>
            <p>
              Whether your goal is to walk pageant stages, lead corporate assemblies, or design your own digital media presence, I invite you to join our private roster and execute your transformation.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Button href="/apply" variant="solid">Schedule Private Consultation</Button>
            <a 
              href="https://wa.me/919742232322?text=Hi%20Aakanksha!%20I%20read%20your%20Founder%20Message%20and%20want%20to%20consult%20about%20your%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="py-3.5 px-8 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Academy Philosophy - Somatic Poise Method */}
      <section className="relative py-24 bg-editorial-grey/10 border-y border-gold/10 mb-28 md:mb-40 z-10">
        <div className="luxury-container max-w-4xl text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4 block">THE SYSTEM</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase mb-6">The Somatic Poise Method</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mb-8" />
          <p className="text-xs md:text-sm text-pearl/70 leading-relaxed font-sans max-w-2xl mx-auto mb-16">
            Poise is a science. Most coaching schools focus on external fashion templates. At Heels & Glam, we deconstruct carriage kinetics from the skeletal alignment upwards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-sans">
            <div className="p-8 border border-gold/15 bg-abyss flex flex-col space-y-4">
              <span className="text-gold font-serif font-semibold text-lg">01. Muscle Decompression</span>
              <h4 className="text-base text-white uppercase tracking-wider">Spine Reset</h4>
              <p className="text-xs text-alabaster/60 leading-relaxed">
                We fix postural issues like forward neck lean (tech-neck) and pelvis hyperextension, returning your sacrum and shoulders to their natural, relaxed alignment.
              </p>
            </div>
            <div className="p-8 border border-gold/15 bg-abyss flex flex-col space-y-4">
              <span className="text-gold font-serif font-semibold text-lg">02. Gait Biomechanics</span>
              <h4 className="text-base text-white uppercase tracking-wider">Heel Strike Stability</h4>
              <p className="text-xs text-alabaster/60 leading-relaxed">
                Learn to control your center of gravity when stepping in heels. We train Members of the Heels & Glam Circle to walk with straight knees, roll weight, and pace walks systematically.
              </p>
            </div>
            <div className="p-8 border border-gold/15 bg-abyss flex flex-col space-y-4">
              <span className="text-gold font-serif font-semibold text-lg">03. Eye-Gaze Delay</span>
              <h4 className="text-base text-white uppercase tracking-wider">Spotlight Control</h4>
              <p className="text-xs text-alabaster/60 leading-relaxed">
                Control how you turn, scan, and settle your focus. A delayed gaze pivot technique creates a high-status framing effect on camera and on stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Framework (The 3 Stages) */}
      <section className="luxury-container mb-28 md:mb-40 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4 block">THE TRADEMARK METHODOLOGY</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white uppercase">The Transformation Method™</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 font-sans">
          {[
            {
              stage: "STAGE 01",
              title: "Kinetic Alignment",
              desc: "Re-patterning muscle posture blocks. We execute sacrum verticality checkups, wall posture resets, high-heel balance training, and diaphragmatic breathing calibration."
            },
            {
              stage: "STAGE 02",
              title: "Aesthetic Coding",
              desc: "Curating a custom styling signature. This includes personal skin tone color analysis, body geometry cut mapping, capsule wardrobe rules, and formal social dining protocols."
            },
            {
              stage: "STAGE 03",
              title: "Spotlight Delivery",
              desc: "Commanding attention under lens and crowd pressure. Master camera interview kinetics, public speaking setups, catwalk pivots, and high-stakes social composure."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-8 border border-gold/15 bg-editorial-grey/5 relative flex flex-col space-y-4">
              <span className="text-[10px] font-bold text-rosegold tracking-widest uppercase">{item.stage}</span>
              <h3 className="text-xl font-serif text-white uppercase tracking-wider">{item.title}</h3>
              <p className="text-xs text-pearl/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Heels & Glam - Comparative Matrix */}
      <section className="luxury-container max-w-4xl mb-28 md:mb-40 relative z-10">
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4 block">COMPARATIVE ANALYSIS</span>
          <h2 className="text-3xl font-serif text-white uppercase">Why Heels & Glam</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="overflow-x-auto border border-gold/15 font-sans">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-editorial-grey/25 border-b border-gold/15 text-[10px] uppercase tracking-widest text-gold font-bold">
                <th className="p-4 md:p-6">Feature</th>
                <th className="p-4 md:p-6 bg-gold/5 border-x border-gold/15">Heels & Glam Academy</th>
                <th className="p-4 md:p-6">Typical Grooming Schools</th>
              </tr>
            </thead>
            <tbody className="text-xs leading-relaxed">
              <tr className="border-b border-gold/10">
                <td className="p-4 md:p-6 font-semibold text-white">Pedagogy Method</td>
                <td className="p-4 md:p-6 bg-gold/5 border-x border-gold/15 text-pearl/90">Somatic Posture Reset & Kinesthetic Mechanics</td>
                <td className="p-4 md:p-6 text-pearl/50">Generic styling guidelines and makeup sheets</td>
              </tr>
              <tr className="border-b border-gold/10">
                <td className="p-4 md:p-6 font-semibold text-white">Individual Focus</td>
                <td className="p-4 md:p-6 bg-gold/5 border-x border-gold/15 text-pearl/90">Maximum 12-member cohorts with skeletal checks</td>
                <td className="p-4 md:p-6 text-pearl/50">Mass classes with no individual body geometry checks</td>
              </tr>
              <tr className="border-b border-gold/10">
                <td className="p-4 md:p-6 font-semibold text-white">Mentorship Access</td>
                <td className="p-4 md:p-6 bg-gold/5 border-x border-gold/15 text-pearl/90">Direct mentorship, lookbook feedback from Aakanksha Anand</td>
                <td className="p-4 md:p-6 text-pearl/50">Outsourced tutors with no personal founder contact</td>
              </tr>
              <tr>
                <td className="p-4 md:p-6 font-semibold text-white">Outcomes</td>
                <td className="p-4 md:p-6 bg-gold/5 border-x border-gold/15 text-pearl/90">High-stature posture check values, target-driven profile setup</td>
                <td className="p-4 md:p-6 text-pearl/50">Standard completion certificate with vague outcomes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Community Section */}
      <section className="luxury-container mb-28 md:mb-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold font-sans font-medium">THE COMMUNITY</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white uppercase leading-tight">Empowering Cohorts</h2>
            <div className="w-12 h-[1px] bg-gold/40" />
            <p className="text-xs md:text-sm text-pearl/70 font-sans leading-relaxed">
              Our alumnae roster is a network of female leaders, startup founders, doctors, pageant titleholders, and professional models. By entering a cohort, you enter a private space of mutual support, high ambitions, and shared transformation milestones.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-gold font-sans text-xs">
              <Users className="w-4 h-4" />
              <span>Over 500+ Alumnae across major cities in India.</span>
            </div>
          </div>
          <div className="lg:col-span-6 relative aspect-[4/3] border border-gold/15 overflow-hidden">
            <Image 
              src="/images/traditional-saree-styling.jpg"
              alt="Community group session and styling alignment"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-abyss/85 via-transparent to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="luxury-container mb-24 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-semibold mb-4 block">THE FOUNDATION</span>
          <h2 className="text-3xl font-serif text-white uppercase">Our Core Values</h2>
          <div className="w-12 h-[1px] bg-gold/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
          {[
            { icon: ShieldCheck, title: "Confidence", desc: "True confidence comes from preparation, self-awareness, posture alignment, and growth." },
            { icon: Heart, title: "Authenticity", desc: "Every woman possesses a unique identity and physical structure worth celebrating." },
            { icon: Award, title: "Excellence", desc: "We encourage continual, disciplined improvement in presentation, speech, and self-development." },
            { icon: Sparkles, title: "Empowerment", desc: "Growth begins when women realize their full potential and take ownership of their presence." }
          ].map((value, idx) => (
            <div key={idx} className="p-6 border border-gold/10 bg-abyss/50 text-center flex flex-col items-center space-y-3">
              <value.icon className="w-6 h-6 text-gold" />
              <h4 className="text-base font-serif text-white uppercase tracking-wider">{value.title}</h4>
              <p className="text-xs text-alabaster/55 font-sans leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Row */}
      <div className="luxury-container text-center relative z-10 pt-8">
        <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 uppercase">Begin Your Transformation</h3>
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-serif italic font-medium mb-6">
          The Art of Presence. The Science of Elegance.
        </p>
        <p className="text-xs md:text-sm text-alabaster/50 font-sans max-w-lg mx-auto mb-8 leading-relaxed">
          Limited slots are available for our upcoming cohort. Individual screenings and skeletal posture checks are part of the admissions process.
        </p>
        <div className="flex justify-center gap-4">
          <Button href="/apply" variant="solid">Request Your Invitation</Button>
          <Button href="/programs" variant="outline">Browse Transformation Programs</Button>
        </div>
      </div>
    </div>
  );
}
