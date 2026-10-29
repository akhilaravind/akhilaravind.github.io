'use client';

import React from 'react';
import portfolioJson from '@/data/portfolio.json';
import { FullPortfolioSchema } from '@/types/portfolio';
import { Sidebar } from '@/components/Sidebar';
import { RightNav } from '@/components/RightNav';
import { MobileHeader } from '@/components/MobileHeader';
import { Footer } from '@/components/Footer';
import { FloatingBackgroundOrbs } from '@/components/common/FloatingBackgroundOrbs';
import { SmoothScrollProvider } from '@/components/common/SmoothScrollProvider';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const data = portfolioJson as FullPortfolioSchema;

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#F0F0F6] flex flex-col relative">
        {/* Floating Background Blurred Orbs (Orange, Yellow, Blue, Red) */}
        <FloatingBackgroundOrbs />

        {/* Mobile Sticky Header */}
        <MobileHeader profile={data.profile} navigation={data.navigation} />

        {/* Main 3-Column Shell */}
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex-1 flex flex-col relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 relative items-start flex-1 w-full">
          {/* Left Sticky Sidebar: Profile & Skills */}
          <Sidebar profile={data.profile} skills={data.skills} />

          {/* Center Main Content Area */}
          <main id="main-content" tabIndex={-1} className="flex-1 min-w-0 flex flex-col w-full xl:pr-16 self-stretch min-h-[calc(100vh-4rem)] focus:outline-none">
            <div className="flex-1 flex flex-col gap-4">
              {children}
            </div>
            <Footer name={data.profile.name} navigation={data.navigation} />
          </main>

          {/* Right Floating Quick Nav Dock with real routes */}
          <RightNav items={data.navigation} cvUrl={data.profile.contact.cvUrl} />
        </div>
      </div>
    </div>
  </SmoothScrollProvider>
);
};
