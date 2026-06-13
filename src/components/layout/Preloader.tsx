'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already visited in this session
    const hasVisited = sessionStorage.getItem('hg_preloader_visited');
    if (hasVisited === 'true') {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('hg_preloader_visited', 'true');
    }, 4500); // 4.5 seconds for complete sequence

    return () => clearTimeout(timer);
  }, []);

  const handleSkip = () => {
    setLoading(false);
    sessionStorage.setItem('hg_preloader_visited', 'true');
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-abyss overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          {/* Subtle Ambient Gold Light Glow (Dior/Chanel inspired) */}
          <motion.div 
            className="absolute w-2 h-2 rounded-full bg-gold shadow-[0_0_60px_25px_rgba(197,160,89,0.8)]"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ 
              scale: [1, 2, 0.5, 0], 
              opacity: [0, 1, 1, 0],
              y: [0, -80, -160, -240],
            }}
            transition={{ duration: 3.5, ease: "easeInOut" }}
          />

          {/* Reveal "Heels & Glam" with elegant cinematic typography */}
          <div className="relative overflow-hidden mb-2 text-center select-none px-4">
            <motion.h1
              className="text-4xl md:text-7xl font-serif tracking-luxury text-white uppercase"
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ 
                opacity: 1, 
                letterSpacing: "0.15em",
                transition: { delay: 0.8, duration: 1.5, ease: "easeOut" }
              }}
            >
              Heels & Glam
            </motion.h1>
          </div>

          {/* Divider Line */}
          <motion.div 
            className="w-16 h-[1px] bg-gold/40"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: { delay: 1.5, duration: 1, ease: "easeInOut" } 
            }}
          />

          {/* Reveal Tagline */}
          <div className="relative overflow-hidden mt-4 text-center select-none px-6">
            <motion.p
              className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-champagne/80 font-sans italic"
              initial={{ opacity: 0, y: 15 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 2.2, duration: 1, ease: "easeOut" } 
              }}
            >
              The Art of Presence. The Science of Elegance.
            </motion.p>
          </div>

          {/* Elegant Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-gold rounded-full"
                style={{
                  top: `${Math.random() * 80 + 10}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
                initial={{ opacity: 0, y: 50, scale: 0.2 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  y: -150,
                  scale: [0.2, 1.2, 0.2],
                }}
                transition={{
                  delay: 2.6 + i * 0.1,
                  duration: 2.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Skip Button */}
          <motion.button
            onClick={handleSkip}
            className="absolute bottom-8 text-[9px] uppercase tracking-widest text-alabaster/40 hover:text-gold transition-colors font-sans py-2 px-4 border border-gold/10 hover:border-gold/30 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5 } }}
          >
            Skip Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
