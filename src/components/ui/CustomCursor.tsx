'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Detect if device supports hover pointer
    const hasMouse = window.matchMedia('(pointer: fine)').matches;
    if (!hasMouse) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-gold rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isHovering ? 2.2 : 1,
        }}
        transition={{ type: "spring", stiffness: 450, damping: 25, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 border border-gold/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 18,
          y: position.y - 18,
          scale: isHovering ? 1.4 : 1,
          borderColor: isHovering ? "rgba(197, 160, 89, 0.8)" : "rgba(197, 160, 89, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.4 }}
      />
    </>
  );
}
