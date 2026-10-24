'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Download } from 'lucide-react';
import { NavigationItem, ProfileData } from '@/types/portfolio';
import { IconRenderer } from '@/components/common/IconRenderer';
import { triggerPdfDownload } from '@/utils/download';

interface MobileHeaderProps {
  profile: ProfileData;
  navigation: NavigationItem[];
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ profile, navigation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="lg:hidden sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F0F0F6] px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden relative border-2 border-[#FFB400]">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
          <div>
            <span className="font-bold text-sm text-[#2B2B2B] block leading-none">
              {profile.name}
            </span>
            <span className="text-[11px] text-[#767676]">{profile.headline}</span>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
          className="w-9 h-9 rounded-lg bg-[#F0F0F6] text-[#2B2B2B] flex items-center justify-center hover:bg-[#FFB400] hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <nav
          id="mobile-navigation-menu"
          className="mt-3 pt-3 border-t border-[#F0F0F6] flex flex-col gap-1 pb-2 animate-fade-in-up"
          aria-label="Mobile navigation links"
        >
          {navigation.map((item) => {
            const isActive =
              pathname === item.path ||
              (item.path !== '/' && pathname.startsWith(item.path));

            return (
              <Link
                key={item.id}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? 'bg-[#FFB400] text-white font-bold'
                    : 'text-[#2B2B2B] hover:bg-amber-50 hover:text-amber-900'
                  }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${isActive ? 'bg-white text-[#FFB400]' : 'bg-[#FFB400] text-white'
                    }`}
                >
                  <IconRenderer name={item.icon} className="w-3.5 h-3.5" />
                </div>
                <span>{item.label}</span>
              </Link>
            );
          })}
          <div className="pt-2 mt-1 border-t border-[#F0F0F6] flex flex-col gap-2">
            <a
              href="/Akhil%20Aravind.pdf"
              download="Akhil Aravind.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                triggerPdfDownload(e);
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-amber-50 border border-amber-200 hover:bg-[#FFB400] hover:text-white text-amber-800 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              <span>Download CV</span>
              <Download className="w-3.5 h-3.5" />
            </a>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center py-2.5 bg-[#FFB400] hover:bg-[#E5A200] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors"
            >
              Hire Me
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
