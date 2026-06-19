'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, Award, ChevronRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { ARTICLES_DATABASE, BLOG_TOPICS } from '@/data/articles';

const CATEGORIES = [
  "All",
  "Confidence",
  "Grooming",
  "Personal Branding",
  "Modelling",
  "Women Empowerment",
  "Fashion"
];

export default function JournalClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All"
    ? ARTICLES_DATABASE
    : ARTICLES_DATABASE.filter(a => a.category === selectedCategory);

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
        
        {/* LEFT COLUMN: LIST */}
        <div className="lg:col-span-8 space-y-12">
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
          
          <div className="space-y-12">
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
                      sizes="(max-width: 768px) 100vw, 25vw"
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

                    <Link
                      href={`/journal/${article.slug}`}
                      className="text-[10px] uppercase tracking-luxury text-gold group-hover:text-white transition-colors font-sans font-semibold self-start flex items-center space-x-1 pt-2 cursor-pointer"
                    >
                      <span>Read Full Essay</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-16 border border-gold/10 bg-editorial-grey/5">
                <p className="text-xs text-alabaster/40 font-sans tracking-wide">No essays published in this category yet.</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="lg:col-span-4 space-y-12">
          <div className="p-8 border border-gold/20 bg-editorial-grey/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-gold/5 rounded-full blur-[50px] pointer-events-none" />
            
            <h3 className="text-xl font-serif text-white uppercase tracking-wider mb-6 border-b border-gold/15 pb-4">
              The Journal Index
            </h3>
            <p className="text-[10px] text-alabaster/40 font-sans tracking-wide mb-6 uppercase">
              25 Topics Under Editorial Review
            </p>

            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
              {BLOG_TOPICS.map((topic, index) => {
                // Find if this topic has a complete article
                const completeArticle = ARTICLES_DATABASE.find(
                  a => a.title.toLowerCase() === topic.toLowerCase()
                );

                if (completeArticle) {
                  return (
                    <Link
                      key={index}
                      href={`/journal/${completeArticle.slug}`}
                      className="flex space-x-3 items-start text-xs font-sans text-alabaster/70 hover:text-gold transition-colors py-1 cursor-pointer"
                    >
                      <span className="text-gold font-serif font-semibold text-xs">{(index + 1).toString().padStart(2, '0')}</span>
                      <p className="leading-snug font-medium text-white">{topic} <span className="text-[8px] text-gold border border-gold/30 px-1 rounded-xs uppercase tracking-widest ml-1 bg-gold/5">Read</span></p>
                    </Link>
                  );
                }

                return (
                  <div 
                    key={index}
                    className="flex space-x-3 items-start text-xs font-sans text-alabaster/50 hover:text-gold transition-colors py-1 cursor-help"
                    title="Coming Soon - This essay is currently under editorial review."
                  >
                    <span className="text-gold/60 font-serif font-semibold text-xs">{(index + 1).toString().padStart(2, '0')}</span>
                    <p className="leading-snug">{topic}</p>
                  </div>
                );
              })}
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
