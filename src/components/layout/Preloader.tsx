'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200); // Luxury loader screen shows for 2.2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-abyss"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
          }}
        >
          {/* Elegant Gold Brand text fading in and rising */}
          <div className="relative overflow-hidden mb-4">
            <motion.h1
              className="text-3xl md:text-5xl font-serif tracking-luxury text-gold uppercase"
              initial={{ y: 80, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1,
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
              }}
            >
              Heels & Glam
            </motion.h1>
          </div>

          <motion.div 
            className="w-12 h-[1px] bg-gold"
            initial={{ scaleX: 0 }}
            animate={{ 
              scaleX: 1,
              transition: { delay: 0.5, duration: 1, ease: "easeInOut" } 
            }}
          />

          <motion.p
            className="text-xs uppercase tracking-widest text-champagne mt-3 opacity-60 font-sans"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 0.8, 
              transition: { delay: 0.8, duration: 0.8 } 
            }}
          >
            By Aakanksha Anand
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
