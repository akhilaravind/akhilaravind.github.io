'use client';

import React, { useEffect } from 'react';

/**
 * SmoothScrollProvider:
 * Integrates Lenis smooth momentum scrolling with dynamic import to keep initial bundle size minimal
 * and eliminate main-thread blocking on first load.
 */
export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Only initialize in browser environment
    if (typeof window === 'undefined') return;

    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let lenisInstance: any = null;
    let rafId: number;

    // Dynamically import Lenis to eliminate it from the critical path
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.2,
      });

      lenisInstance = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    }).catch(() => {
      // Graceful fallback to native scrolling
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return <>{children}</>;
};
