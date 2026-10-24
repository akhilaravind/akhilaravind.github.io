import React from 'react';
import type { Metadata } from 'next';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { EducationSection } from '@/components/EducationSection';

export const metadata: Metadata = {
  title: 'Education & Software Engineering Qualifications | Akhil Aravind',
  description:
    'Academic foundation in Computer Science and software engineering degrees of Senior Front-End Developer & Freelance Consultant Akhil Aravind.',
};

export default function EducationPage() {
  const data = portfolioJson as FullPortfolioSchema;

  return (
    <EducationSection education={data.education} headingTag="h1" />
  );
}
