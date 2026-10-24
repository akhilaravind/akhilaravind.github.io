'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delayMs = 0,
  direction = 'up',
  once = true,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // SSR and pre-hydration: Render static, fully-visible semantic HTML
  // This guarantees immediate First Contentful Paint, instant LCP, and complete search-bot indexing.
  if (shouldReduceMotion || !isMounted) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { x: -24, y: 0, opacity: 0.15 };
      case 'right':
        return { x: 24, y: 0, opacity: 0.15 };
      case 'up':
        return { x: 0, y: 20, opacity: 0.15 };
      case 'down':
        return { x: 0, y: -20, opacity: 0.15 };
      case 'fade':
      default:
        return { x: 0, y: 0, opacity: 0.15 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: Math.min(delayMs / 1000, 0.3),
          ease: [0.16, 1, 0.3, 1],
        },
      }}
      viewport={{
        once,
        amount: 0.08,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
