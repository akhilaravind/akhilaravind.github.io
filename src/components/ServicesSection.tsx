import React from 'react';
import { ServicesData } from '@/types/portfolio';
import { SectionHeader } from '@/components/common/SectionHeader';
import { IconRenderer } from '@/components/common/IconRenderer';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { SectionBackgroundMesh } from '@/components/common/SectionBackgroundMesh';

interface ServicesSectionProps {
  services: ServicesData;
  headingTag?: 'h1' | 'h2';
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, headingTag = 'h2' }) => {
  return (
    <section id="services" aria-label="Services" className="py-6">
      <ScrollReveal direction="up">
        <SectionHeader title={services.title} subtitle={services.subtitle} as={headingTag} />
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.items.map((service, index) => (
          <ScrollReveal
            key={service.id}
            direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            delayMs={(index % 3) * 90}
            className="h-full"
          >
            <div className="bg-white rounded-xl p-8 border border-[#F0F0F6] shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col items-center text-center group h-full relative overflow-hidden">
              {/* Blurred glowing background color mesh */}
              <SectionBackgroundMesh variant="compact" />

              {/* Top Accent Line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFB400] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-amber-50 group-hover:bg-[#FFB400] text-[#FFB400] group-hover:text-white flex items-center justify-center transition-all duration-300 mb-5 shadow-inner">
                <IconRenderer name={service.icon} className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[#2B2B2B] mb-3 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#767676] text-xs leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>

              {/* Optional badge or action */}
              {service.badge && (
                <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  {service.badge}
                </span>
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
