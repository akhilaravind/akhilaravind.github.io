import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { PortfolioSection } from '@/components/PortfolioSection';
import { createBreadcrumbJsonLd, createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Client Work & Production Web Apps',
  description:
    'Explore production web applications, interactive visual flow builders, React Dashboards, and design systems built by top freelance developer Akhil Aravind.',
  path: '/portfolio',
  keywords: [
    'best freelancer projects',
    'front end developer portfolio',
    'React projects',
    'Next.js applications',
    'hire top freelance developer',
  ],
});

export default function PortfolioPage() {
  const data = portfolioJson as FullPortfolioSchema;
  const jsonLd = createBreadcrumbJsonLd('Portfolio', '/portfolio');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioSection portfolio={data.portfolio} headingTag="h1" />
    </>
  );
}
