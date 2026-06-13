import { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger to GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGsap = (callback: () => void, dependencies: any[] = []) => {
  const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // GSAP context automatically handles reverting all scroll triggers, animations and timelines created within it
    const ctx = gsap.context(callback);
    
    return () => {
      ctx.revert();
    };
  }, dependencies);
};
