import React from 'react';
import { BrandLogo } from '@/types/portfolio';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { SectionBackgroundMesh } from '@/components/common/SectionBackgroundMesh';

interface BrandLogosProps {
  logos: BrandLogo[];
}

export const BrandLogos: React.FC<BrandLogosProps> = ({ logos }) => {
  return (
    <section aria-label="Worked with clients and companies" className="py-8">
      <ScrollReveal direction="up">
        <div className="bg-white rounded-xl border border-[#F0F0F6] p-8 shadow-sm relative overflow-hidden">
          {/* Blurred glowing background color mesh */}
          <SectionBackgroundMesh variant="alternate" />

          <div className="relative z-10">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-[#767676] mb-6">
            Trusted by & Collaborated With
          </p>
          <div className="flex flex-wrap items-center justify-around gap-6 md:gap-10">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center py-2 px-4 rounded-lg hover:bg-amber-50 transition-colors duration-200"
              >
                <span className="text-sm md:text-base font-extrabold tracking-tight text-[#767676] group-hover:text-[#2B2B2B] transition-colors">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};
