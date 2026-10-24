'use client';

import React from 'react';

/**
 * FloatingBackgroundOrbs:
 * Renders glowing ambient blurred circles in orange, yellow, blue, and red
 * across the background with smooth floating and breathing animations.
 * Positioned with z-0 so they cast a visible ambient glow across the canvas.
 */
export const FloatingBackgroundOrbs: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 1. Warm Orange Orb - Top Left / Mid */}
      <div
        className="absolute top-[-5%] left-[-5%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-orange-500/35 via-amber-500/25 to-transparent blur-[100px] animate-orb-slow-1"
      />

      {/* 2. Vibrant Sunny Yellow Orb - Top Right */}
      <div
        className="absolute top-[15%] right-[-5%] w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-yellow-400/40 via-amber-300/30 to-transparent blur-[90px] animate-orb-slow-2"
      />

      {/* 3. Royal Electric Blue Orb - Center Left */}
      <div
        className="absolute top-[45%] left-[2%] w-[580px] h-[580px] rounded-full bg-gradient-to-bl from-blue-500/30 via-sky-400/25 to-transparent blur-[110px] animate-orb-slow-3"
      />

      {/* 4. Vivid Rose / Red Orb - Bottom Right */}
      <div
        className="absolute bottom-[8%] right-[5%] w-[540px] h-[540px] rounded-full bg-gradient-to-tl from-rose-500/30 via-red-500/25 to-transparent blur-[105px] animate-orb-slow-4"
      />

      {/* 5. Center-Mid Ambient Amber/Yellow Glow */}
      <div
        className="absolute top-[72%] left-[25%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-amber-400/30 via-orange-400/25 to-transparent blur-[110px] animate-orb-slow-2"
      />
    </div>
  );
};
