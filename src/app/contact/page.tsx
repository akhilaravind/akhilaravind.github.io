import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { ContactSection } from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'Hire The Best Freelance Front-End Developer | Contact Akhil Aravind',
  description:
    'Looking to hire the best freelancer for your front-end development project? Contact Akhil Aravind for contract, consulting, and full-stack front-end engineering engagements.',
  keywords: [
    'hire best freelancer',
    'contact freelance developer',
    'hire front end developer',
    'hire React developer',
    'freelance web engineer contact',
  ],
};

export default function ContactPage() {
  const data = portfolioJson as FullPortfolioSchema;

  return (
    <ContactSection contact={data.contact} headingTag="h1" />
  );
}
