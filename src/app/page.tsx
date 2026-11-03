import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';
import { createPageMetadata, getCanonicalUrl } from '@/utils/seo';

export const metadata: Metadata = createPageMetadata({
  title: portfolioJson.meta.siteTitle,
  description: portfolioJson.meta.siteDescription,
  path: '/',
  keywords: portfolioJson.meta.keywords,
  useAbsoluteTitle: true,
  ogType: 'website',
  ogTitle: 'Akhil Aravind | Freelance React & Next.js Developer',
  ogDescription:
    'Senior Freelance React & Next.js Developer available for contract engineering and consulting.',
  ogImage: 'https://akhilaravind.in/og-image.png',
  ogUrl: 'https://akhilaravind.in',
});

export default function HomePage() {
  const data = portfolioJson as FullPortfolioSchema;
  const homeUrl = getCanonicalUrl('/');

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${homeUrl}#service`,
        name: `${data.profile.name} - Freelance React & Next.js Developer`,
        serviceType: [
          'Best Freelance Developer',
          'Freelance React developer',
          'Freelance Next.js developer',
          'Top React.js Developer',
          'Affordable Next.js Developer',
          'Contract frontend engineer',
          'React & Next.js Web Application Consulting',
          'Web Performance Optimization',
          'Custom UI/UX Architecture',
        ],
        description:
          'Top-ranked freelance React & Next.js developer offering affordable, high-performance web engineering and frontend architecture by senior specialist Akhil Aravind.',
        url: homeUrl,
        telephone: data.profile.contact.phone,
        priceRange: '$$',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Worldwide',
        },
        provider: {
          '@id': `${homeUrl}#person`,
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Freelance Engineering Services',
          itemListElement: [
            {
              '@type': 'Offer',
              name: 'Freelance React & Next.js Web Development',
              description:
                'Full-cycle enterprise React 18/19 and Next.js App Router application development.',
            },
            {
              '@type': 'Offer',
              name: 'Affordable Frontend Contract Engineering',
              description:
                'Cost-effective contract engineering for startups and scaleups without agency markup.',
            },
            {
              '@type': 'Offer',
              name: 'Web Performance & Core Web Vitals Audits',
              description:
                'Sub-second LCP, zero CLS, and Lighthouse 95+ performance optimization.',
            },
          ],
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '24',
          bestRating: '5',
          worstRating: '1',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HeroSection profile={data.profile} />
      <ServicesSection services={data.services} />
      <EducationSection education={data.education} />
      <ExperienceSection experience={data.experience} />
      <PortfolioSection portfolio={data.portfolio} />
      <ContactSection contact={data.contact} />
    </>
  );
}
