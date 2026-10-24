import React from 'react';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  const data = portfolioJson as FullPortfolioSchema;

  return (
    <>
      <HeroSection profile={data.profile} />
      <ServicesSection services={data.services} />
      <EducationSection education={data.education} />
      <ExperienceSection experience={data.experience} />
      <PortfolioSection portfolio={data.portfolio} />
      <ContactSection contact={data.contact} />
    </>
  );
}
