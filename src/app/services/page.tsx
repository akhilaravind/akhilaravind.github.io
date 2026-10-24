import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { ServicesSection } from '@/components/ServicesSection';

export const metadata: Metadata = {
  title: 'Freelance Front-End Development Services | Hire Best Freelancer - Akhil Aravind',
  description:
    'Hire the best freelance front-end developer for high-performance React, Next.js, and TypeScript web applications. UI/UX engineering, web performance, and technical architecture.',
  keywords: [
    'hire best freelancer',
    'best freelance developer',
    'freelance front-end developer',
    'React freelance expert',
    'Next.js consultant',
    'hire frontend engineer',
  ],
};

export default function ServicesPage() {
  const data = portfolioJson as FullPortfolioSchema;

  return (
    <ServicesSection services={data.services} headingTag="h1" />
  );
}
