'use client';

import React from 'react';
import Image from 'next/image';
import { ProfileData, SkillsData } from '@/types/portfolio';
import { ProgressBar } from '@/components/common/ProgressBar';
import { IconRenderer } from '@/components/common/IconRenderer';
import { Check, Download } from 'lucide-react';
import { triggerPdfDownload } from '@/utils/download';
import { getAssetPath } from '@/utils/asset';

interface SidebarProps {
  profile: ProfileData;
  skills: SkillsData;
}

export const Sidebar: React.FC<SidebarProps> = ({ profile, skills }) => {
  const asideRef = React.useRef<HTMLElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const asideEl = asideRef.current;
    const scrollEl = scrollRef.current;
    if (!asideEl || !scrollEl) return;

    // Honor prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let currentScroll = scrollEl.scrollTop;
    let targetScroll = scrollEl.scrollTop;
    let rafId: number | null = null;
    let lastTime = 0;
    let isRunning = false;

    // Sync state if user drags scrollbar directly
    const onScroll = () => {
      if (!isRunning) {
        currentScroll = scrollEl.scrollTop;
        targetScroll = scrollEl.scrollTop;
      }
    };

    scrollEl.addEventListener('scroll', onScroll, { passive: true });

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Exponential damping factor matching Lenis butter momentum (lambda = 8.8)
      const factor = 1 - Math.exp(-8.8 * dt);
      currentScroll += (targetScroll - currentScroll) * factor;

      scrollEl.scrollTop = currentScroll;

      if (Math.abs(targetScroll - currentScroll) > 0.4) {
        rafId = requestAnimationFrame(animate);
      } else {
        currentScroll = targetScroll;
        scrollEl.scrollTop = targetScroll;
        isRunning = false;
        lastTime = 0;
      }
    };

    const onWheel = (e: WheelEvent) => {
      const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
      if (maxScroll <= 0) return;

      // Prevent harsh default browser step jump & bubbling to window
      e.preventDefault();
      e.stopPropagation();

      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 16;
      else if (e.deltaMode === 2) delta *= scrollEl.clientHeight;

      // Smooth step multiplier with target clamping
      targetScroll = Math.max(0, Math.min(maxScroll, targetScroll + delta * 0.95));

      if (!isRunning) {
        isRunning = true;
        lastTime = 0;
        rafId = requestAnimationFrame(animate);
      }
    };

    // Non-passive wheel listener on aside so wheeling anywhere inside sidebar is butter-smooth
    asideEl.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      asideEl.removeEventListener('wheel', onWheel);
      scrollEl.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <aside
      ref={asideRef}
      data-lenis-prevent
      className="w-full lg:w-[310px] xl:w-[330px] shrink-0 bg-white shadow-sm border border-[#F0F0F6] rounded-2xl flex flex-col lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)] overflow-hidden z-20"
      aria-label="Profile and Skills Sidebar"
    >
      {/* Sticky Top Profile Card - Pinned at top */}
      <div className="p-6 lg:p-7 pb-4 bg-white z-10 shrink-0 flex flex-col items-center text-center border-b border-[#F0F0F6]">
        <div className="relative mb-3">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#F0F0F6] shadow-md relative bg-amber-50">
            <Image
              src={getAssetPath(profile.avatar)}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="128px"
              priority
            />
          </div>
          {/* Active Status Badge at bottom-right of avatar */}
          <span
            className="absolute bottom-1 right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-sm"
            title={profile.status}
            aria-label={profile.status}
          />
        </div>

        <h2 className="text-xl font-bold text-[#2B2B2B] tracking-tight">
          {profile.name}
        </h2>
        <div className="mt-1">
          <span className="text-xs font-medium bg-amber-50 text-amber-800 px-3 py-1 rounded-full">
            {profile.headline}
          </span>
        </div>

        {/* 4 Round Social Buttons matching Figma attachment */}
        <div className="flex items-center gap-2.5 mt-4">
          {profile.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="group relative w-8 h-8 rounded-full bg-[#FFB400] text-white flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-md hover:bg-[#E5A200]"
            >
              <IconRenderer name={social.icon} className="w-4 h-4" />

              {/* Tooltip on hover */}
              <span
                role="tooltip"
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-200 bg-[#2B2B2B] text-white text-[11px] font-semibold py-1 px-2.5 rounded shadow-md whitespace-nowrap z-20"
              >
                {social.name}
                <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#2B2B2B]" />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Scrollable Rest of Sidebar Content */}
      <div
        ref={scrollRef}
        data-lenis-prevent
        className="lg:flex-1 lg:overflow-y-auto overscroll-contain p-6 lg:p-7 pt-5 space-y-6"
      >
        {/* Core Skills moved to TOP */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[#2B2B2B] uppercase tracking-wider">
            Core Skills
          </h3>
          <div className="space-y-3">
            {skills.proficiency.map((skill) => (
              <ProgressBar
                key={skill.name}
                label={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
        </div>

        <hr className="border-[#F0F0F6]" />

        {/* Extra Skills Checklist */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[#2B2B2B] uppercase tracking-wider">
            Extra Skills
          </h3>
          <ul className="space-y-2 text-xs text-[#767676]">
            {skills.extraSkills.map((extra) => (
              <li key={extra.name} className="flex items-center gap-2.5">
                <span className="text-[#FFB400] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>{extra.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="border-[#F0F0F6]" />

        {/* Languages moved to BOTTOM */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold text-[#2B2B2B] uppercase tracking-wider">
            Languages
          </h3>
          <div className="space-y-3">
            {profile.languages.map((lang) => (
              <ProgressBar
                key={lang.name}
                label={lang.name}
                percentage={lang.percentage}
              />
            ))}
          </div>
        </div>

        <hr className="border-[#F0F0F6]" />

        {/* Download CV CTA Button */}
        <a
          href={profile.contact.cvUrl || '/Akhil%20Aravind.pdf'}
          download="Akhil Aravind.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={triggerPdfDownload}
          className="w-full py-3 px-4 bg-[#FFB400] hover:bg-[#E5A200] text-white text-xs font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
        >
          <span>Download CV</span>
          <Download className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
