import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { ServicesSection } from '@/components/ServicesSection';
import { FaqSection } from '@/components/FaqSection';
import { createBreadcrumbJsonLd, createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Best Freelance React & Next.js Development Services',
  description:
    'Hire the best freelance React and Next.js developer for scalable, affordable web application architecture, Core Web Vitals optimization, and contract frontend engineering.',
  path: '/services',
  keywords: [
    'best freelance developer',
    'top reactjs developer',
    'affordable nextjs developer',
    'Freelance React developer',
    'Freelance Next.js developer',
    'Contract frontend engineer',
    'React freelance expert',
    'Next.js consultant',
    'hire frontend engineer',
    'UI architecture consulting',
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
      <div className="mt-8">
        <FaqSection />
      </div>
    </>
  );
}
