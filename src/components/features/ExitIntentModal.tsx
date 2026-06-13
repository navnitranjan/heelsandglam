'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Award } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Only check on desktop clients
    if (typeof window === 'undefined') return;

    const checkSession = sessionStorage.getItem('heels_exit_intent_triggered');
    if (checkSession) {
      setHasTriggered(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggered) return;
      
      // clientY < 20 indicates mouse moving upwards out of the window viewport
      if (e.clientY < 20) {
        setIsOpen(true);
        setHasTriggered(true);
        sessionStorage.setItem('heels_exit_intent_triggered', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-obsidian/90 backdrop-blur-md px-4 font-sans">
          {/* Modal box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg bg-obsidian border border-rosegold/25 p-8 md:p-12 relative shadow-2xl overflow-hidden"
          >
            {/* Ambient gold glow */}
            <div className="absolute top-0 right-0 w-[180px] h-[180px] bg-rosegold/5 rounded-full blur-[65px] pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-pearl/50 hover:text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Content */}
            <div className="text-center space-y-6 relative z-10">
              <div className="flex justify-center space-x-1">
                <Sparkles className="w-6 h-6 text-rosegold" />
              </div>

              <span className="text-[10px] uppercase tracking-[0.3em] text-rosegold font-bold block">
                AN EXCLUSIVE INVITATION
              </span>

              <h2 className="text-2xl md:text-3xl font-serif text-white uppercase leading-snug">
                Before You<br />
                <span className="text-champagne font-serif">Leave Atelier</span>
              </h2>

              <div className="w-12 h-[1px] bg-rosegold/30 mx-auto" />

              <p className="text-xs text-pearl/60 leading-relaxed max-w-sm mx-auto font-light">
                Discover your posture symmetry, heels walk gait index, and vocal authority score. Access the official Heels & Glam diagnostic assessment tool.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  href="/confidence-assessment" 
                  variant="solid" 
                  onClick={handleClose}
                  className="py-3 px-6 text-center text-xs font-semibold tracking-luxury"
                >
                  Reveal Presence Index
                </Button>
                <button
                  onClick={handleClose}
                  className="text-xs uppercase tracking-luxury text-pearl/50 hover:text-white transition-colors py-2.5 px-6 border border-rosegold/15 hover:border-rosegold/30 cursor-pointer font-medium"
                >
                  Return to Atelier
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
