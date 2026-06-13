'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { trackEvent } from '@/lib/gtag';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Academy', href: '/academy' },
    { label: 'Programs', href: '/programs' },
    { label: 'Lookbook', href: '/gallery' },
    { label: 'Journal', href: '/journal' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? 'py-4 bg-abyss/85 backdrop-blur-md border-b border-gold/10' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="luxury-container flex items-center justify-between">
          {/* Elegant Serif Logo */}
          <Link href="/" className="group flex flex-col">
            <span className="text-xl md:text-2xl font-serif tracking-luxury text-gold uppercase transition-colors group-hover:text-white">
              Heels & Glam
            </span>
            <span className="text-[9px] uppercase tracking-[0.2em] text-champagne opacity-65 -mt-1 font-sans">
              Aakanksha Anand
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-luxury text-alabaster/80 hover:text-gold transition-colors duration-350 font-sans"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Trigger */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/apply"
              onClick={() => trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Header Desktop Request' })}
              className="px-6 py-2.5 text-xs uppercase tracking-luxury border border-gold text-gold hover:bg-gold hover:text-abyss transition-all duration-350 font-sans"
              aria-label="Request invitation to apply for Heels and Glam programs"
            >
              Request Invitation
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gold hover:text-white transition-colors"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed inset-0 z-35 flex flex-col bg-abyss pt-28 px-8"
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
            }}
            exit={{ 
              opacity: 0, 
              y: '-10%',
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            <nav className="flex flex-col space-y-8 mb-12" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-serif text-alabaster hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/apply"
              onClick={() => {
                setIsMenuOpen(false);
                trackEvent({ action: 'click_apply', category: 'Engagement', label: 'Header Mobile Request' });
              }}
              className="w-full py-4 text-center text-xs uppercase tracking-luxury bg-gold text-abyss hover:bg-white hover:text-abyss transition-all font-sans"
            >
              Request Invitation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
