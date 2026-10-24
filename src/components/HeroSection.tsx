import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProfileData } from '@/types/portfolio';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { SectionBackgroundMesh } from '@/components/common/SectionBackgroundMesh';

interface HeroSectionProps {
  profile: ProfileData;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ profile }) => {
  return (
    <section
      aria-label="Introduction Hero"
      className="bg-white rounded-2xl shadow-sm border border-[#F0F0F6] p-8 md:p-12 relative overflow-hidden"
    >
      {/* Blurred glowing background color meshes for high visual attraction */}
      <SectionBackgroundMesh variant="default" />

      {/* Floating decorative symbols with smooth breathing / pulsing effect */}
      <div aria-hidden="true" className="pointer-events-none select-none">
        <div className="absolute top-6 left-12 text-[#FFB400] text-2xl font-light animate-breathe">
          +
        </div>
        <div className="absolute bottom-10 left-1/3 text-emerald-500 text-sm font-bold animate-breathe-delayed">
          ▲
        </div>
        <div className="absolute top-1/4 right-1/3 w-4 h-4 rounded-full border-2 border-[#FFB400]/70 animate-breathe-reverse" />
        <div className="absolute top-7 right-10 text-amber-500 text-xl animate-breathe">
          ✦
        </div>
        <div className="absolute bottom-6 left-16 text-rose-400 text-xs font-black animate-breathe-delayed">
          ◆
        </div>
        <div className="absolute top-1/3 left-6 text-blue-500/80 font-mono text-xs font-bold animate-breathe-reverse">
          &lt;/&gt;
        </div>
        <div className="absolute bottom-1/4 right-8 text-amber-500/80 font-mono text-xs font-bold animate-breathe">
          {'{ }'}
        </div>
        <div className="absolute top-12 left-1/2 -translate-x-1/2 text-amber-400 text-sm animate-breathe-delayed">
          ★
        </div>
        <div className="absolute bottom-8 right-1/4 text-amber-500 text-sm animate-breathe-reverse">
          ⚡
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Copy & CTA */}
        <div className="lg:col-span-7 space-y-6">
          <ScrollReveal direction="up" delayMs={100}>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 tracking-wide">
              <span className="text-[#FFB400] text-sm font-black" aria-hidden="true">✦</span>
              <span>{profile.heroTag || 'Frontend Engineering · Performance · Architecture'}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={200}>
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
                {profile.heroGreeting || `I'm ${profile.name}`}
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                <span className="text-[#FFB400] block">
                  {profile.heroHeadlineYellow || 'I turn complex ideas into'}
                </span>
                <span className="text-[#2B2B2B] block">
                  {profile.heroHeadlineEnd || 'exceptional web experiences.'}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={300}>
            <p className="text-[#767676] text-sm md:text-base leading-relaxed max-w-xl">
              {profile.mission.description}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={400}>
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FFB400] hover:bg-[#E5A200] text-white text-xs font-black uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>LET&apos;S BUILD</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 py-3.5 text-[#2B2B2B] hover:text-[#FFB400] text-xs font-black uppercase tracking-wider transition-colors"
              >
                <span>EXPLORE MY WORK</span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delayMs={500}>
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-[#F0F0F6]">
              {(profile.heroStats || [
                { value: '10+', label: 'Years in Development' },
                { value: '20+', label: 'Projects Delivered' },
                { value: 'Performance', label: 'Built Into Every Layer' },
              ]).map((stat, i) => (
                <div key={i} className="space-y-1">
                  <span className="text-lg sm:text-xl lg:text-2xl font-black text-[#2B2B2B] block tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-[#767676] block leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Developer Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <ScrollReveal direction="left" delayMs={200}>
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px]">
              {/* Background accent ring/glow */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#FFB400]/25 via-amber-100/40 to-transparent transform rotate-3" />
              <div className="absolute inset-0 rounded-3xl border-2 border-[#FFB400]/30 -rotate-2" />

              {/* Developer Hero Portrait */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white border-4 border-white">
                <Image
                  src={profile.heroImage}
                  alt={`${profile.name} - ${profile.headline}`}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 280px, 340px"
                />
              </div>

              {/* Floating tech badge */}
              <div className="absolute -bottom-3 -left-3 bg-white shadow-lg border border-[#F0F0F6] py-2 px-3.5 rounded-xl flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span className="text-[11px] font-bold text-[#2B2B2B]">
                  {profile.status}
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
