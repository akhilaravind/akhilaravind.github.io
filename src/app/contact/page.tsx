import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { ContactSection } from '@/components/ContactSection';
import { createBreadcrumbJsonLd, createPageMetadata } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Hire Freelance Front-End Developer | Contact',
  description:
    'Looking to hire the best freelancer for your front-end development project? Contact Akhil Aravind for contract, consulting, and full-stack front-end engineering engagements.',
  path: '/contact',
  keywords: [
    'hire best freelancer',
    'contact freelance developer',
    'hire front end developer',
    'hire React developer',
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
