'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Program } from '@/types';
import Button from '@/components/ui/Button';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="group relative w-full bg-editorial-grey/15 border border-gold/10 overflow-hidden flex flex-col h-[520px]">
      {/* Background Image Container */}
      <div className="relative w-full h-[280px] overflow-hidden">
        {/* Muted overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-abyss via-abyss/20 to-transparent z-10" />
        
        {/* Dynamic Image */}
        <Image
          src={program.imageSrc}
          alt={program.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Floating Intake Scarcity Badge */}
        <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-abyss/85 border border-gold/30 text-[9px] uppercase tracking-widest text-gold font-sans font-medium">
          Next Intake: {program.nextCohortStart}
        </div>
      </div>

      {/* Info Body */}
      <div className="p-8 flex flex-col flex-grow z-20">
        <span className="text-[10px] uppercase tracking-widest text-champagne mb-2 font-sans font-medium">
          {program.duration} • Limit {program.capacity} Seats
        </span>
        <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold transition-colors duration-300">
          {program.name}
        </h3>
        <p className="text-xs text-alabaster/60 font-sans leading-relaxed mb-6 line-clamp-3">
          {program.tagline}
        </p>

        {/* Action Trigger Row */}
        <div className="mt-auto flex items-center justify-between">
          <Link
            href={`/programs/${program.slug}`}
            className="text-xs uppercase tracking-luxury text-gold hover:text-white transition-colors font-sans font-medium"
          >
            Explore Syllabus
          </Link>
          <Button href="/apply" variant="outline" className="py-2.5 px-6 text-[10px]">
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}
