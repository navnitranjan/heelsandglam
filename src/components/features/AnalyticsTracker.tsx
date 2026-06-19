'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pageview, trackEvent } from '@/lib/gtag';

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const scrollMilestones = useRef<{ [key: number]: boolean }>({ 25: false, 50: false, 75: false, 100: false });
  const pageTimer = useRef<number | null>(null);
  const timeMilestones = useRef<{ [key: number]: boolean }>({ 10: false, 30: false, 60: false, 120: false, 180: false });

  // 1. Page View Tracking on path or search param change
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);

    // Reset milestones for new page view
    scrollMilestones.current = { 25: false, 50: false, 75: false, 100: false };
    timeMilestones.current = { 10: false, 30: false, 60: false, 120: false, 180: false };

    // Reset page timer
    if (pageTimer.current) window.clearTimeout(pageTimer.current);
    
    const startTime = Date.now();
    const checkTime = () => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const thresholds = [10, 30, 60, 120, 180];
      
      thresholds.forEach((t) => {
        if (elapsed >= t && !timeMilestones.current[t]) {
          timeMilestones.current[t] = true;
          trackEvent({
            action: 'time_on_page',
            category: 'Engagement',
            label: `${t} seconds on ${pathname}`,
            value: t,
          });
        }
      });

      // Keep scheduling checks up to 180s
      if (elapsed < 180) {
        pageTimer.current = window.setTimeout(checkTime, 1000);
      }
    };
    pageTimer.current = window.setTimeout(checkTime, 1000);

    return () => {
      if (pageTimer.current) window.clearTimeout(pageTimer.current);
    };
  }, [pathname, searchParams]);

  // 2. Scroll Depth Tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight <= 0) return;

      const percentage = Math.min(Math.max(Math.round((scrollTop / scrollHeight) * 100), 0), 100);
      const milestones = [25, 50, 75, 100];

      milestones.forEach((m) => {
        // Trigger milestone if user scrolled past it
        if (percentage >= m && !scrollMilestones.current[m]) {
          scrollMilestones.current[m] = true;
          trackEvent({
            action: 'scroll_depth',
            category: 'Engagement',
            label: `Scroll ${m}% on ${pathname}`,
            value: m,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 3. Global Click Listener for click-based analytics (WhatsApp, Instagram, Apply, etc.)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      const button = target.closest('button');

      if (link) {
        const href = link.getAttribute('href') || '';
        const linkText = link.innerText?.trim() || '';

        // WhatsApp Clicks
        if (href.includes('wa.me') || href.includes('whatsapp.com')) {
          trackEvent({
            action: 'whatsapp_click',
            category: 'Lead Generation',
            label: `WhatsApp CTA Clicked: ${linkText || 'Direct Link'}`,
          });
          return;
        }

        // Google Review Clicks
        if (href.includes('review') && (href.includes('google.com') || href.includes('g.page'))) {
          trackEvent({
            action: 'google_review_click',
            category: 'Trust',
            label: `Google Review Clicked: ${linkText || 'Write a Review'}`,
          });
          return;
        }

        // Google Business Profile / Map Link
        if (href.includes('maps.google.com') || href.includes('g.page/r/')) {
          trackEvent({
            action: 'google_maps_click',
            category: 'Trust',
            label: `Google Maps/Profile Clicked: ${linkText || 'Business Location'}`,
          });
          return;
        }

        // Apply Now Clicks
        if (href.includes('/apply') || link.id === 'apply-now' || linkText.toLowerCase().includes('apply now') || linkText.toLowerCase().includes('begin your transformation')) {
          trackEvent({
            action: 'apply_now_click',
            category: 'Engagement',
            label: `Apply Now CTA clicked on ${pathname}`,
          });
          return;
        }

        // Instagram Clicks
        if (href.includes('instagram.com')) {
          trackEvent({
            action: 'instagram_click',
            category: 'Social Connection',
            label: `Instagram Clicked: ${href}`,
          });
          return;
        }

        // Phone Clicks
        if (href.startsWith('tel:')) {
          trackEvent({
            action: 'phone_click',
            category: 'Lead Generation',
            label: `Phone Call Clicked: ${href}`,
          });
          return;
        }

        // Program Card Clicks (if link matches a program route)
        const programRoutes = ['/fashion-grooming', '/confidence-coaching', '/modelling-classes', '/personal-branding', '/programs'];
        if (programRoutes.some((route) => href.endsWith(route))) {
          trackEvent({
            action: 'program_card_click',
            category: 'Engagement',
            label: `Program Visited: ${href}`,
          });
          return;
        }
      }

      if (button) {
        const btnText = button.innerText?.trim() || '';
        if (btnText.toLowerCase().includes('apply') || btnText.toLowerCase().includes('submit') || btnText.toLowerCase().includes('invitation')) {
          trackEvent({
            action: 'button_interaction',
            category: 'Engagement',
            label: `Form Action Button: ${btnText}`,
          });
        }
      }
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [pathname]);

  return null;
}
