import React from 'react';
import { EducationData } from '@/types/portfolio';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { SectionBackgroundMesh } from '@/components/common/SectionBackgroundMesh';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationSectionProps {
  education: EducationData;
  headingTag?: 'h1' | 'h2';
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education, headingTag = 'h2' }) => {
  return (
    <section id="education" aria-label="Education" className="py-6">
      <ScrollReveal direction="up">
        <SectionHeader title={education.title} subtitle={education.subtitle} as={headingTag} />
      </ScrollReveal>

      <div className="bg-white rounded-xl border border-[#F0F0F6] shadow-sm p-6 md:p-8 relative overflow-hidden">
        {/* Blurred glowing background color mesh */}
        <SectionBackgroundMesh variant="alternate" />

        <div className="divide-y divide-[#F0F0F6] relative z-10">
          {education.items.map((item, index) => (
            <ScrollReveal
              key={item.institution}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delayMs={index * 120}
              className={index > 0 ? 'pt-6' : ''}
            >
              <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 items-start ${index === education.items.length - 1 ? '' : 'pb-6'}`}>
                {/* Institution and Period */}
                <div className="md:col-span-5 space-y-2">
                  <div className="flex items-center gap-2 text-[#2B2B2B]">
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#FFB400] flex items-center justify-center shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[#2B2B2B]">
                      {item.institution}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-[#767676] pl-10">
                    {item.period &&
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-amber-500" />
                        {item.period}
                      </span>
                    }
                    {item.certificate && (
                      <span className="inline-flex items-center gap-1 bg-amber-100/80 text-amber-900 font-semibold px-2.5 py-0.5 rounded-full text-[11px]">
                        <Award className="w-3 h-3 text-amber-600" />
                        {item.certificate}
                      </span>
                    )}
                  </div>
                </div>

                {/* Degree / Role & Description */}
                <div className="md:col-span-7 space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-sm font-bold text-[#2B2B2B]">
                      {item.role}
                    </h4>
                    {item.stream && (
                      <span className="inline-flex items-center text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200/80 px-2.5 py-0.5 rounded-full">
                        {item.stream}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#767676] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
