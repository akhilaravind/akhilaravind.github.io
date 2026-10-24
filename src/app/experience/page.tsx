import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { ExperienceSection } from '@/components/ExperienceSection';

export const metadata: Metadata = {
  title: 'Work Experience & Enterprise Track Record | Akhil Aravind - Best Freelance Developer',
  description:
    '10+ years of enterprise and freelance front-end engineering experience across global fintech, telecom, SaaS, and analytics applications by Akhil Aravind.',
  keywords: [
    'best freelancer portfolio',
    'senior frontend developer experience',
    'React lead developer',
    'hire freelance engineer',
    'web development track record',
  ],
};

export default function ExperiencePage() {
  const data = portfolioJson as FullPortfolioSchema;

  return (
    <ExperienceSection experience={data.experience} headingTag="h1" />
  );
}
