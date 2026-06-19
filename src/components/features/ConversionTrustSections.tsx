'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, BookOpen, ChevronDown, Download, ExternalLink, ShieldCheck, Star } from 'lucide-react';
import Button from '@/components/ui/Button';
import { trackEvent } from '@/lib/gtag';
import { getRecaptchaToken } from '@/lib/recaptcha';
import {
  FAQS,
  GOOGLE_BUSINESS_URL,
  GOOGLE_REVIEW_SUMMARY,
  GOOGLE_REVIEW_URL,
  INSTAGRAM_WALL,
  SOCIAL_PROOF_STATS,
} from '@/data/conversionTrust';

const guideTitle = 'The 7 Confidence Secrets Every Woman Should Know';

export default function ConversionTrustSections() {
  const [openFaq, setOpenFaq] = useState(0);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', _honey: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);

  const downloadGuide = () => {
    const guide = [
      guideTitle,
      '',
      '1. Stand before you speak. A grounded body gives your voice more authority.',
      '2. Slow your entrance. Confidence is often read in the first three seconds.',
      '3. Use posture as styling. Clothes sit better when your shoulders and spine are aligned.',
      '4. Train your pause. Silence, used well, makes communication feel composed.',
      '5. Keep eye contact soft and intentional. Presence is not staring; it is steadiness.',
      '6. Build one signature detail. A consistent colour, silhouette, or accessory creates recall.',
      '7. Rehearse the woman you are becoming. Confidence grows faster when it is practiced physically.',
      '',
      'Heels & Glam by Aakanksha Anand',
      'WhatsApp admissions: +91 97422 32322',
    ].join('\n');

    const blob = new Blob([guide], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'heels-and-glam-7-confidence-secrets.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLeadMagnetSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = await getRecaptchaToken('download_confidence_guide');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'lead_magnet',
          recaptchaToken: token,
          data: {
            name: leadForm.name,
            email: leadForm.email,
            phone: leadForm.phone,
            guide: guideTitle,
            _honey: leadForm._honey,
          },
        }),
      });

      if (res.ok) {
        trackEvent({ action: 'lead_magnet_download', category: 'Lead Generation', label: guideTitle });
        setHasDownloaded(true);
        downloadGuide();
      }
    } catch (err) {
      console.error('[Lead Magnet Error]', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="google-reviews" className="relative py-20 md:py-28 border-t border-gold/10 bg-editorial-grey/5 overflow-hidden">
        <div className="luxury-container max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold block">Google Review Integration</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">Loved by Students</h2>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
            <div className="border border-gold/20 bg-black/40 px-6 py-5 text-center md:text-right">
              <div className="flex justify-center md:justify-end items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="block text-4xl font-serif text-gold">{GOOGLE_REVIEW_SUMMARY.rating}</span>
              <span className="block text-[10px] uppercase tracking-widest text-pearl/50 font-sans">
                {GOOGLE_REVIEW_SUMMARY.totalReviews} Google reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {GOOGLE_REVIEW_SUMMARY.reviews.map((review) => (
              <article key={review.name} className="glass-panel p-6 border border-gold/15 flex flex-col gap-4">
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                  ))}
                </div>
                <p className="text-[15px] text-pearl/65 font-sans leading-[1.7] flex-grow">{review.text}</p>
                <div className="pt-4 border-t border-gold/10">
                  <span className="block text-sm font-serif text-white uppercase tracking-wide">{review.name}</span>
                  <span className="block text-[10px] uppercase tracking-widest text-gold/80 font-sans">{review.context}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 py-3.5 px-8 bg-gold text-abyss hover:bg-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all"
              onClick={() => trackEvent({ action: 'click_google_review_us', category: 'Trust', label: 'Review us on Google' })}
            >
              <span>Review us on Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 py-3.5 px-8 border border-gold/30 text-gold hover:text-white hover:border-gold text-xs uppercase tracking-luxury font-sans font-semibold transition-all"
              onClick={() => trackEvent({ action: 'click_google_business_profile', category: 'Trust', label: 'Google Business Profile' })}
            >
              <span>View Google Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section id="trust-indicators" className="relative py-20 md:py-28 border-t border-gold/10 overflow-hidden">
        <div className="luxury-container max-w-6xl">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold block">Social Proof</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">Proof Without Noise</h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {SOCIAL_PROOF_STATS.map((stat) => (
              <div key={stat.label} className="p-6 border border-gold/15 bg-editorial-grey/5 text-center space-y-3">
                <ShieldCheck className="w-5 h-5 text-gold mx-auto" />
                <span className="block text-4xl font-serif text-gold">{stat.value}</span>
                <span className="block text-[11px] uppercase tracking-[0.2em] text-white font-sans font-semibold">{stat.label}</span>
                <p className="text-[12px] text-pearl/45 font-sans leading-relaxed">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="instagram-wall" className="relative py-20 md:py-28 border-t border-gold/10 bg-editorial-grey/5 overflow-hidden">
        <div className="luxury-container max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold block">Instagram Community</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">Behind the Poise</h2>
              <div className="w-12 h-[1px] bg-gold/30" />
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/_heelsandglam/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gold/20 text-gold hover:text-white hover:border-gold text-[10px] uppercase tracking-widest font-sans transition-colors">@_heelsandglam</a>
              <a href="https://www.instagram.com/that_tall_babez/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-gold/20 text-gold hover:text-white hover:border-gold text-[10px] uppercase tracking-widest font-sans transition-colors">@that_tall_babez</a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {INSTAGRAM_WALL.map((post) => (
              <a
                key={`${post.handle}-${post.title}`}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[4/5] overflow-hidden border border-gold/10 bg-abyss"
                onClick={() => trackEvent({ action: 'instagram_wall_click', category: 'Social Connection', label: `${post.handle} ${post.title}` })}
              >
                <Image src={post.image} alt={`${post.title} on ${post.handle}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-4 bottom-4">
                  <ExternalLink className="w-5 h-5 text-gold mb-3" />
                  <span className="block text-[10px] uppercase tracking-widest text-gold font-sans font-bold">{post.handle}</span>
                  <span className="block text-lg font-serif text-white uppercase tracking-wide">{post.title}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="confidence-guide" className="relative py-20 md:py-28 border-t border-gold/10 overflow-hidden">
        <div className="luxury-container grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-sans font-bold">Free Confidence Guide</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">The 7 Confidence Secrets Every Woman Should Know</h2>
            <div className="w-12 h-[1px] bg-gold/40" />
            <p className="text-base md:text-lg text-alabaster/65 font-sans leading-[1.8]">
              A concise private guide from the Heels & Glam presence framework, created for women preparing to look, speak, and move with more authority.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-8 md:p-12 border border-gold/10 relative overflow-hidden">
              {!hasDownloaded ? (
                <form onSubmit={handleLeadMagnetSubmit} className="flex flex-col space-y-5">
                  <div className="flex items-center gap-3 text-gold mb-2">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-[10px] uppercase tracking-widest font-sans font-bold">Download after registration</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input required aria-label="Name" placeholder="Name" value={leadForm.name} onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })} className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-sm text-alabaster font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-pearl/30" />
                    <input required type="email" aria-label="Email" placeholder="Email" value={leadForm.email} onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })} className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-sm text-alabaster font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-pearl/30" />
                  </div>
                  <input required type="tel" aria-label="Phone" placeholder="Phone" value={leadForm.phone} onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })} className="w-full bg-editorial-grey/30 border border-gold/20 px-4 py-3 text-sm text-alabaster font-sans focus:outline-none focus:border-gold transition-colors placeholder:text-pearl/30" />
                  <div className="absolute -left-[9999px]" aria-hidden="true">
                    <input tabIndex={-1} autoComplete="off" value={leadForm._honey} onChange={(e) => setLeadForm({ ...leadForm, _honey: e.target.value })} />
                  </div>
                  <Button type="submit" variant="solid" className="w-full py-4 font-semibold text-xs tracking-luxury" disabled={isSubmitting}>
                    {isSubmitting ? 'Preparing Guide...' : 'Unlock the Guide'}
                  </Button>
                </form>
              ) : (
                <div className="py-8 text-center">
                  <Download className="w-10 h-10 text-gold mx-auto mb-5" />
                  <h3 className="text-2xl font-serif text-white mb-3">Your guide is downloading</h3>
                  <p className="text-[15px] text-alabaster/60 font-sans mb-6">We have also sent your details to the admissions desk for follow-up.</p>
                  <button onClick={downloadGuide} className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans cursor-pointer">Download again</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-20 md:py-28 border-t border-gold/10 bg-editorial-grey/5 overflow-hidden">
        <div className="luxury-container max-w-4xl">
          <div className="text-center mb-14 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold font-bold block">Admissions FAQ</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-wider">Before You Apply</h2>
            <div className="w-12 h-[1px] bg-gold/30 mx-auto" />
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={faq.question} className="border border-gold/15 bg-abyss/60">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-5 p-5 text-left cursor-pointer"
                  aria-expanded={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span className="text-lg font-serif text-white uppercase tracking-wide">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-[15px] text-pearl/60 font-sans leading-[1.8]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
