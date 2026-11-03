import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { PortfolioSection } from '@/components/PortfolioSection';
import { createBreadcrumbJsonLd, createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'React & Next.js Production Projects | Best Freelance Developer Portfolio',
  description:
    'Explore 20+ production web applications, interactive visual node builders (React Flow), enterprise Next.js dashboards, and design systems built by top freelance developer Akhil Aravind.',
  path: '/portfolio',
  keywords: [
    'best freelance developer',
    'top reactjs developer',
    'affordable nextjs developer',
    'Freelance React developer',
    'Freelance Next.js developer',
    'Contract frontend engineer',
    'front end developer portfolio',
    'React projects',
    'Next.js applications',
    'hire freelance developer',
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
