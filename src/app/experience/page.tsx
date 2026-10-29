import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { ExperienceSection } from '@/components/ExperienceSection';
import { createBreadcrumbJsonLd, createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Work Experience & Enterprise Track Record',
  description:
    '10+ years of enterprise and freelance front-end engineering experience across global fintech, telecom, SaaS, and analytics applications by Akhil Aravind.',
  path: '/experience',
  keywords: [
    'best freelancer portfolio',
    'senior frontend developer experience',
    'React lead developer',
    'hire freelance engineer',
    'web development track record',
  ],
});

export default function ExperiencePage() {
  const data = portfolioJson as FullPortfolioSchema;
  const jsonLd = createBreadcrumbJsonLd('Work History', '/experience');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ExperienceSection experience={data.experience} headingTag="h1" />
    </>
  );
}
