import React from 'react';

interface SectionBackgroundMeshProps {
  className?: string;
  variant?: 'default' | 'alternate' | 'compact';
}

/**
 * SectionBackgroundMesh:
 * Renders the signature glowing ambient blurred color meshes (amber/orange, blue/sky, rose/amber)
 * matching the visual attraction of HeroSection across all section cards.
 */
export const SectionBackgroundMesh: React.FC<SectionBackgroundMeshProps> = ({
  className = '',
  variant = 'default',
}) => {
  if (variant === 'alternate') {
    return (
      <div aria-hidden="true" className={`pointer-events-none select-none ${className}`}>
        {/* Top-Right Sky/Blue Glow */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-bl from-blue-500/20 via-sky-400/15 to-transparent blur-3xl pointer-events-none" />
        {/* Bottom-Left Amber/Orange Glow */}
        <div className="absolute -bottom-20 -left-16 w-80 h-80 rounded-full bg-gradient-to-tr from-[#FFB400]/25 via-orange-400/20 to-transparent blur-3xl pointer-events-none" />
        {/* Mid-Right Rose/Amber Soft Glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-l from-rose-400/15 via-amber-300/15 to-transparent blur-2xl pointer-events-none" />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div aria-hidden="true" className={`pointer-events-none select-none ${className}`}>
        {/* Corner Warm Orange/Yellow Glow */}
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-gradient-to-br from-[#FFB400]/25 via-orange-400/20 to-transparent blur-2xl pointer-events-none" />
        {/* Opposite Corner Blue/Sky Glow */}
        <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-tl from-blue-500/20 via-sky-400/15 to-transparent blur-2xl pointer-events-none" />
      </div>
    );
  }

  // Default variant (HeroSection style)
  return (
    <div aria-hidden="true" className={`pointer-events-none select-none ${className}`}>
      {/* Top-Left Warm Amber/Orange glow */}
      <div className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#FFB400]/25 via-orange-400/20 to-transparent blur-3xl pointer-events-none" />
      {/* Bottom-Right Electric Blue/Sky glow */}
      <div className="absolute -bottom-24 -right-20 w-96 h-96 rounded-full bg-gradient-to-tl from-blue-500/20 via-sky-400/15 to-transparent blur-3xl pointer-events-none" />
      {/* Mid Center Rose/Amber soft glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-rose-400/15 via-amber-300/15 to-transparent blur-2xl pointer-events-none" />
    </div>
  );
};
