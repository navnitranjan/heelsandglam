import React from 'react';
import { WifiOff } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-abyss text-alabaster flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* Decorative Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-md space-y-6">
        <div className="w-20 h-20 rounded-full border border-gold/20 bg-gold/5 flex items-center justify-center mx-auto mb-4 animate-pulse">
          <WifiOff className="w-10 h-10 text-gold" />
        </div>
        
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-sans font-bold block">
          Connection Interrupted
        </span>

        <h1 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-wider">
          Currently Offline
        </h1>

        <div className="w-12 h-[1px] bg-gold/30 mx-auto" />

        <p className="text-sm text-champagne/70 font-sans leading-relaxed">
          The Heels & Glam digital experience requires an active connection to process invitations or complete poise diagnostics. 
          Your cached view is loaded.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
          <Button href="/" variant="solid" className="text-xs tracking-luxury">
            Retry Connection
          </Button>
          <a 
            href="tel:+919742232322"
            className="py-3 px-6 border border-gold/30 hover:border-gold text-gold hover:text-white text-xs uppercase tracking-luxury font-sans font-semibold transition-all text-center flex items-center justify-center"
          >
            Admissions Desk
          </a>
        </div>
      </div>
    </div>
  );
}
