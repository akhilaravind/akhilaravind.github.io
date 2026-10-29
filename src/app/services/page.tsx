import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { ServicesSection } from '@/components/ServicesSection';
import { createBreadcrumbJsonLd, createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Freelance Front-End Development Services',
  description:
    'Hire the best freelance front-end developer for high-performance React, Next.js, and TypeScript web applications. UI/UX engineering, web performance, and technical architecture.',
  path: '/services',
  keywords: [
    'hire best freelancer',
    'best freelance developer',
    'freelance front-end developer',
    'React freelance expert',
    'Next.js consultant',
    'hire frontend engineer',
  ],
});

export default function ServicesPage() {
  const data = portfolioJson as FullPortfolioSchema;
  const jsonLd = createBreadcrumbJsonLd('Services', '/services');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesSection services={data.services} headingTag="h1" />
    </>
  );
}
