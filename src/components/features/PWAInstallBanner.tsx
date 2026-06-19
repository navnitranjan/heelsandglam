'use client';

import React, { useEffect, useState } from 'react';
import { Share, Download, X } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

export default function PWAInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isAlreadyStandalone, setIsAlreadyStandalone] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Register Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('[PWA] Service Worker registered scope:', reg.scope))
        .catch((err) => console.error('[PWA] Service Worker registration failed:', err));
    }

    // 2. Check if already installed / running as standalone
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches 
      || (window.navigator as any).standalone === true;
    setIsAlreadyStandalone(isStandalone);

    if (isStandalone) return;

    // 3. Detect iOS platform
    const ua = window.navigator.userAgent;
    const ios = !!ua.match(/iPad|iPhone|iPod/) && !(window as any).MSStream;
    setIsIOS(ios);

    // 4. Listen to Android's install prompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Delay showing the popup to avoid aggressive prompting
      const isDismissed = localStorage.getItem('pwa_install_dismissed') === 'true';
      if (!isDismissed) {
        setTimeout(() => {
          setIsVisible(true);
          trackEvent({ action: 'pwa_prompt_show', category: 'PWA', label: 'Android Installation Prompt' });
        }, 15000); // 15 seconds delay
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // 5. iOS fallback showing logic (if not standalone, prompt manually once)
    if (ios) {
      const isDismissed = localStorage.getItem('pwa_install_dismissed') === 'true';
      if (!isDismissed) {
        setTimeout(() => {
          setIsVisible(true);
          trackEvent({ action: 'pwa_prompt_show', category: 'PWA', label: 'iOS Add to Home Screen Instruction' });
        }, 20000); // 20 seconds delay
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    
    // Show native browser install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    trackEvent({ 
      action: 'pwa_prompt_response', 
      category: 'PWA', 
      label: `Install response: ${outcome}` 
    });

    // We no longer need the prompt
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('pwa_install_dismissed', 'true');
    trackEvent({ action: 'pwa_prompt_dismiss', category: 'PWA', label: 'Install prompt dismissed' });
  };

  if (!isVisible || isAlreadyStandalone) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm w-[calc(100vw-3rem)] glass-panel p-6 border border-gold/30 shadow-[0_15px_30px_rgba(0,0,0,0.8)] animate-fade-up">
      {/* Absolute Close Button */}
      <button 
        onClick={handleDismiss}
        className="absolute top-4 right-4 p-1 text-alabaster/40 hover:text-gold transition-colors"
        aria-label="Dismiss install offer"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="space-y-4">
        <span className="text-[9px] uppercase tracking-[0.25em] text-gold font-sans font-bold block">
          Digital Circle Access
        </span>

        <h3 className="text-lg font-serif text-white uppercase tracking-wider pr-6">
          Install Heels &amp; Glam Experience
        </h3>

        <p className="text-xs text-champagne/70 leading-relaxed font-sans font-light">
          Add the Heels &amp; Glam Circle to your home screen for quick offline access, program status coordinates, and premium booking portals.
        </p>

        {isIOS ? (
          /* iOS Instructions */
          <div className="pt-2 border-t border-gold/10 flex items-center space-x-3 text-[11px] font-sans text-white/80">
            <Share className="w-5 h-5 text-gold shrink-0" />
            <span>
              Tap <strong className="text-gold">Share</strong> in Safari, then select <strong className="text-gold">Add to Home Screen</strong>.
            </span>
          </div>
        ) : (
          /* Android / Desktop Install Action */
          <div className="pt-2 border-t border-gold/10 flex justify-end space-x-3">
            <button 
              onClick={handleDismiss}
              className="px-4 py-2 text-xs uppercase tracking-widest text-alabaster/50 hover:text-white transition-all font-sans font-medium"
            >
              Later
            </button>
            <button 
              onClick={handleInstallClick}
              disabled={!deferredPrompt}
              className="px-5 py-2 bg-gold text-abyss hover:bg-white hover:text-abyss text-xs uppercase tracking-widest font-sans font-semibold transition-all flex items-center space-x-2 disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install App</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
