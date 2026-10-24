import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { PortfolioSection } from '@/components/PortfolioSection';

export const metadata: Metadata = {
  title: 'Client Work & Production Web Apps | Best Freelance Front-End Developer - Akhil Aravind',
  description:
    'Explore production web applications, interactive visual flow builders, React Dashboards, and design systems built by top freelance developer Akhil Aravind.',
  keywords: [
    'best freelancer projects',
    'front end developer portfolio',
    'React projects',
    'Next.js applications',
    'hire top freelance developer',
  ],
};

export default function PortfolioPage() {
  const data = portfolioJson as FullPortfolioSchema;

  return (
    <PortfolioSection portfolio={data.portfolio} headingTag="h1" />
  );
}
