import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import { ARTICLES_DATABASE, getArticleBySlug } from '@/data/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate static params for Next.js prerendering
export async function generateStaticParams() {
  return ARTICLES_DATABASE.map((a) => ({
    slug: a.slug,
  }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Heels & Glam Journal`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.imageSrc }],
      type: 'article',
      publishedTime: article.date,
      authors: ['Aakanksha Anand']
    }
  };
}

// Render layouts
const renderArticleLayout = (content: string) => {
  const paragraphs = content.split('\n\n').filter(Boolean);
  return (
    <div className="font-serif leading-relaxed text-alabaster/80 space-y-6 text-sm md:text-base">
      {paragraphs.map((p, idx) => (
        <p 
          key={idx} 
          className={
            idx === 0 
              ? "first-letter:text-6xl first-letter:font-serif first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-bold leading-relaxed text-white" 
              : ""
          }
        >
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
        <span className="text-[10px] uppercase tracking-[0.35em] text-gold font-sans font-bold">
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

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  // Pre-filled WhatsApp inquiry
  const waInquiry = encodeURIComponent(
    `Hi Aakanksha! I am reading your journal article "${article.title}" and would like to consult about this cohort topic.`
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://heelsandglam.com${article.imageSrc}`,
    "datePublished": "2026-06-10",
    "author": {
      "@type": "Person",
      "name": "Aakanksha Anand",
      "jobTitle": "Founder & Head Coach"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Heels & Glam Academy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://heelsandglam.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-abyss text-alabaster py-12 md:py-24 relative overflow-hidden">
      {/* Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-burgundy/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-3/4 right-0 w-[400px] h-[400px] bg-rosegold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="luxury-container max-w-4xl relative z-10 space-y-8">
        <Link 
          href="/journal"
          className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans flex items-center space-x-2 self-start cursor-pointer mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Journal</span>
        </Link>

        <div className="relative aspect-[16/9] w-full border border-gold/15 overflow-hidden shadow-2xl">
          <Image 
            src={article.imageSrc}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
            priority
          />
        </div>

        <div className="flex flex-wrap gap-4 text-xs font-sans text-alabaster/40 font-medium items-center">
          <span className="flex items-center space-x-1">
            <Calendar className="w-3.5 h-3.5 text-gold" />
            <span>{article.date}</span>
          </span>
          <span className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-gold" />
            <span>{article.readTime}</span>
          </span>
          <span className="uppercase tracking-widest text-gold">{article.category}</span>
          <span className="border border-gold/30 px-2 py-0.5 text-[8px] text-white tracking-[0.15em] font-semibold bg-gold/5 uppercase rounded-xs">
            {article.type}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">{article.title}</h1>
        <div className="w-16 h-[1px] bg-gold/35" />

        {/* Content Section */}
        <div className="pt-4">
          {article.type === 'Guide' && renderGuideLayout(article.content)}
          {article.type === 'Interview' && renderInterviewLayout(article.content)}
          {article.type === 'Student Story' && renderStudentStoryLayout(article.content)}
          {article.type === 'Article' && renderArticleLayout(article.content)}
          {!['Guide', 'Interview', 'Student Story', 'Article'].includes(article.type) && (
            <div className="text-xs md:text-sm text-alabaster/70 font-sans leading-relaxed space-y-6 whitespace-pre-wrap">
              {article.content}
            </div>
          )}
        </div>

        <div className="pt-12 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-[10px] uppercase text-gold font-sans font-semibold">Written by Aakanksha Anand</span>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`https://wa.me/919742232322?text=${waInquiry}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <span>Consult Founder About Topic</span>
            </a>
            <Button href="/apply" variant="outline">
              Begin Your Transformation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
