'use client';

import React, { useState, useRef } from 'react';

export default function WalkAnalyzer() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (touchX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (mouseX / rect.width) * 100));
    setSliderPosition(percentage);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="mb-6 text-center">
        <h3 className="text-xl uppercase tracking-luxury text-gold mb-2 font-sans font-medium">
          The Somatic Poise Analyzer
        </h3>
        <p className="text-xs text-alabaster/60 uppercase tracking-widest max-w-md">
          Slide the indicator to overlay alignment markers and analyze structural walk corrections.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full max-w-3xl aspect-[16/9] bg-editorial-grey/20 border border-gold/15 overflow-hidden select-none cursor-ew-resize"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before / Incorrect Image (Base) */}
        <div className="absolute inset-0 flex items-center justify-center bg-abyss">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 filter grayscale" style={{ backgroundImage: `url('/assets/incorrect_posture_placeholder.jpg')` }} />
          <div className="absolute top-6 left-6 px-4 py-1.5 bg-red-900/80 border border-red-500/30 text-[9px] uppercase tracking-widest text-red-200 font-sans">
            Incorrect: Tech-Neck & Hip Drop
          </div>
          {/* Skeleton Alignment lines overlay */}
          <svg className="absolute inset-0 w-full h-full stroke-red-500/30 stroke-2" fill="none">
            <line x1="45%" y1="10%" x2="55%" y2="90%" strokeDasharray="5,5" />
            <circle cx="45%" cy="15%" r="6" fill="#ef4444" />
          </svg>
        </div>

        {/* After / Correct Image (Overlayed with clip path) */}
        <div
          className="absolute inset-0 flex items-center justify-center bg-abyss transition-all duration-75"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: `url('/assets/correct_posture_placeholder.jpg')` }} />
          <div className="absolute top-6 right-6 px-4 py-1.5 bg-gold/80 border border-gold/30 text-[9px] uppercase tracking-widest text-abyss font-sans font-medium">
            Correct: Neuro-Somatic Poise
          </div>
          {/* Straight Alignment line overlay */}
          <svg className="absolute inset-0 w-full h-full stroke-gold stroke-2" fill="none">
            <line x1="50%" y1="10%" x2="50%" y2="90%" />
            <circle cx="50%" cy="15%" r="6" fill="#C5A059" />
          </svg>
        </div>

        {/* Divider Slider Handle bar */}
        <div
          className="absolute top-0 bottom-0 w-[1px] bg-gold z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gold bg-abyss flex items-center justify-center shadow-lg">
            <span className="text-[10px] text-gold font-sans font-medium select-none">↔</span>
          </div>
        </div>
      </div>
    </div>
  );
}
