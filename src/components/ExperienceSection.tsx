import React from 'react';
import { ExperienceData } from '@/types/portfolio';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { SectionBackgroundMesh } from '@/components/common/SectionBackgroundMesh';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceSectionProps {
  experience: ExperienceData;
  headingTag?: 'h1' | 'h2';
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, headingTag = 'h2' }) => {
  return (
    <section id="experience" aria-label="Work History" className="py-4">
      <ScrollReveal direction="up">
        <SectionHeader title={experience.title} subtitle={experience.subtitle} as={headingTag} />
      </ScrollReveal>

      <div className="bg-white rounded-xl border border-[#F0F0F6] shadow-sm p-6 md:p-8 relative overflow-hidden">
        {/* Blurred glowing background color mesh */}
        <SectionBackgroundMesh variant="default" />
        <div className="divide-y divide-[#F0F0F6] relative z-10">
          {experience.items.map((job, index) => (
            <ScrollReveal
              key={`${job.company}-${job.period}`}
              direction={index % 2 === 0 ? 'left' : 'right'}
              delayMs={index * 80}
              className={`relative z-10 ${index > 0 ? 'pt-8' : ''}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-8">
                {/* Left Column: Company, Period, Badge, Location & Clients */}
                <div className="md:col-span-5 space-y-2.5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-[#FFB400] flex items-center justify-center shrink-0 shadow-xs">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#2B2B2B] leading-snug">
                        {job.company}
                      </h3>
                      <span className="inline-block mt-1 bg-[#FFB400]/20 text-amber-900 font-bold px-2.5 py-0.5 rounded text-[11px]">
                        {job.badge}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-[#767676] pl-12">
                    <div className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span>{job.period}</span>
                    </div>

                    {job.location && (
                      <div className="flex items-center gap-1.5 text-[11px] text-[#A0A0A0]">
                        <MapPin className="w-3.5 h-3.5 text-amber-500/70" />
                        <span>{job.location}</span>
                      </div>
                    )}
                  </div>

                  {/* Clients if any */}
                  {job.clients && job.clients.length > 0 && (
                    <div className="pl-12 pt-1 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] text-[#767676] font-medium">Clients:</span>
                      {job.clients.map((client) => (
                        <a
                          key={client.name}
                          href={client.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 hover:text-amber-700 underline underline-offset-2"
                        >
                          {client.name}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Column: Title, Summary, Accomplishment Highlights & Tech stack */}
                <div className="md:col-span-7 space-y-3">
                  <h4 className="text-base font-bold text-[#2B2B2B]">
                    {job.title}
                  </h4>

                  {/* Summary */}
                  {job.summary && (
                    <p className="text-xs text-[#444] font-medium leading-relaxed">
                      {job.summary}
                    </p>
                  )}

                  {/* Accomplishment Highlights */}
                  {job.highlights && job.highlights.length > 0 ? (
                    <ul className="space-y-2 pt-1">
                      {job.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs text-[#666] leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFB400] shrink-0 mt-1.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    job.description && (
                      <p className="text-xs text-[#767676] leading-relaxed whitespace-pre-line">
                        {job.description}
                      </p>
                    )
                  )}

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F0F0F6] text-[#2B2B2B] hover:bg-amber-100 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
