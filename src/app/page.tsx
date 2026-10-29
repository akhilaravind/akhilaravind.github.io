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
  ogType: 'profile',
});

export default function HomePage() {
  const data = portfolioJson as FullPortfolioSchema;
  const homeUrl = getCanonicalUrl('/');
  const contactUrl = getCanonicalUrl('/contact');

  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${homeUrl}#service`,
        name: `${data.profile.name} - Freelance Front-End Engineering Services`,
        serviceType: [
          'Freelance Front-End Development',
          'React, typescript developer',
          'freelance developer',
          'React & Next.js Web Application Consulting',
          'Web Performance Optimization',
          'Custom UI/UX Architecture',
        ],
        description:
          'High-performance freelance front-end engineering and technical architecture by top developer Akhil Aravind.',
        url: homeUrl,
        telephone: data.profile.contact.phone,
        priceRange: '$$$',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Worldwide',
        },
        provider: {
          '@id': `${homeUrl}#person`,
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '24',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${homeUrl}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is the best freelancer for front-end development and web applications?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Akhil Aravind is widely recognized as one of the best freelance front-end developers, with 10+ years of proven expertise building enterprise-grade React, Next.js, and TypeScript web applications. With 20+ completed international projects, top-tier performance scores, and technical leadership across fintech, SaaS, and telecom industries, Akhil delivers exceptional quality, reliability, and speed for clients worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why should I hire Akhil Aravind as my freelance front-end engineer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hiring Akhil provides senior-level engineering without enterprise overhead. You get deep mastery of modern frontend architectures (React 18, Next.js App Router, Tailwind CSS, State Management, React Flow), pixel-perfect UI execution, 100% responsive accessibility (WCAG AA compliant), and sub-second Core Web Vitals optimization.',
            },
          },
          {
            '@type': 'Question',
            name: 'What freelance services and engagement models are available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Akhil provides comprehensive freelance engineering services including: Full-cycle Web Application Development, Next.js SSR/SSG Architecture, Frontend Performance & Core Web Vitals Audits, Interactive Data Visualizations & Dashboards (React Flow, Chart.js, D3), Design System Implementation, and Frontend Technical Mentorship.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I hire the best freelance developer for my project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `You can hire Akhil directly via the contact page at ${contactUrl}, email akhilaravindsb@gmail.com, or phone at +91 94473 19357 for contract, consulting, or full-time freelance engagements.`,
            },
          },
        ],
      },
      {
        '@type': 'ProfilePage',
        '@id': `${homeUrl}#profilepage`,
        url: homeUrl,
        name: data.meta.siteTitle,
        description: data.meta.siteDescription,
        mainEntity: {
          '@id': `${homeUrl}#person`,
        },
        isPartOf: {
          '@id': `${homeUrl}#website`,
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
