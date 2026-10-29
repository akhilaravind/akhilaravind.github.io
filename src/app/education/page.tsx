import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { EducationSection } from '@/components/EducationSection';
import { createBreadcrumbJsonLd, createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Education & Software Engineering Qualifications',
  description:
    'Academic foundation in Computer Science and software engineering degrees of Senior Front-End Developer & Freelance Consultant Akhil Aravind.',
  path: '/education',
  keywords: [
    'Akhil Aravind education',
    'Computer Science degree',
    'software engineering qualifications',
    'College of Engineering Attingal',
  ],
});

export default function EducationPage() {
  const data = portfolioJson as FullPortfolioSchema;
  const jsonLd = createBreadcrumbJsonLd('Education', '/education');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <EducationSection education={data.education} headingTag="h1" />
    </>
  );
}
