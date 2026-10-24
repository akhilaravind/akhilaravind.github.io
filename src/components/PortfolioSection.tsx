'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { PortfolioData } from '@/types/portfolio';
import { SectionHeader } from '@/components/common/SectionHeader';
import { ScrollReveal } from '@/components/common/ScrollReveal';
import { SectionBackgroundMesh } from '@/components/common/SectionBackgroundMesh';
import { ExternalLink, Layers } from 'lucide-react';

interface PortfolioSectionProps {
  portfolio: PortfolioData;
  headingTag?: 'h1' | 'h2';
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ portfolio, headingTag = 'h2' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All Categories') {
      return portfolio.projects;
    }
    return portfolio.projects.filter(
      (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }, [portfolio.projects, selectedCategory]);

  return (
    <section id="portfolio" aria-label="Portfolio" className="py-4">
      <ScrollReveal direction="up">
        <SectionHeader title={portfolio.title} subtitle={portfolio.subtitle} as={headingTag} />
      </ScrollReveal>

      {/* Category Filter Tabs */}
      <ScrollReveal direction="up" delayMs={100}>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8">
          {portfolio.categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FFB400] text-white shadow-sm scale-105'
                    : 'bg-white text-[#767676] hover:text-[#2B2B2B] hover:bg-gray-100 border border-[#F0F0F6]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
            delayMs={(index % 3) * 80}
            className="h-full"
          >
            <div className="bg-white rounded-xl border border-[#F0F0F6] overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col h-full group relative">
              {/* Blurred glowing background color mesh */}
              <SectionBackgroundMesh variant="compact" />
              {/* Project Preview Image / Banner */}
              {project.image ? (
                <div className="h-48 w-full relative overflow-hidden bg-slate-100 border-b border-[#F0F0F6]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Subtle dark gradient overlay for high contrast text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Top Category Badge and External Link */}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-sm text-[#2B2B2B] px-2.5 py-1 rounded-md shadow-xs">
                      {project.category}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name}`}
                        className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#2B2B2B] hover:bg-[#FFB400] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Bottom Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <h4 className="text-base font-extrabold text-white drop-shadow-sm group-hover:text-[#FFB400] transition-colors leading-snug">
                      {project.name}
                    </h4>
                  </div>
                </div>
              ) : (
                <div
                  className={`h-48 w-full bg-gradient-to-br ${
                    project.gradient || 'from-amber-500/20 via-orange-500/20 to-yellow-500/20'
                  } relative p-6 flex flex-col justify-between overflow-hidden border-b border-[#F0F0F6]`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#2B2B2B] px-2.5 py-1 rounded-md shadow-xs">
                      {project.category}
                    </span>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.name}`}
                        className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-[#2B2B2B] hover:bg-[#FFB400] hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm hover:scale-110"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-1">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#FFB400] group-hover:scale-110 transition-transform">
                      <Layers className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-extrabold text-[#2B2B2B] group-hover:text-amber-600 transition-colors">
                      {project.name}
                    </h4>
                  </div>

                  <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full border-4 border-white/40 pointer-events-none" />
                </div>
              )}

              {/* Project Info */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4 relative z-10">
                <p className="text-xs text-[#767676] leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 pt-2 border-t border-[#F0F0F6]">
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-medium bg-[#F0F0F6] text-[#2B2B2B] px-2 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2B2B2B] group-hover:text-amber-600 transition-colors pt-1"
                    >
                      <span>Explore Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#FFB400]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
