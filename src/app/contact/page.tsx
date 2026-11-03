import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { ContactSection } from '@/components/ContactSection';
import { createBreadcrumbJsonLd, createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Hire Best Freelance React & Next.js Developer | Contact',
  description:
    'Looking to hire a top-rated, affordable freelance React and Next.js developer? Contact Akhil Aravind for contract, consulting, and staff-level frontend engineering.',
  path: '/contact',
  keywords: [
    'best freelance developer',
    'top reactjs developer',
    'affordable nextjs developer',
    'Freelance React developer',
    'Freelance Next.js developer',
    'Contract frontend engineer',
    'hire React developer',
    'hire Next.js developer',
    'contact freelance developer',
    'hire front end developer',
    'freelance web engineer contact',
  ],
});

export default function ContactPage() {
  const data = portfolioJson as FullPortfolioSchema;
  const jsonLd = createBreadcrumbJsonLd('Contact', '/contact');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactSection contact={data.contact} headingTag="h1" />
    </>
  );
}
