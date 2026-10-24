'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '@/types/portfolio';
import { IconRenderer } from '@/components/common/IconRenderer';
import { ArrowLeft, ArrowUp, Download } from 'lucide-react';
import { triggerPdfDownload } from '@/utils/download';

interface RightNavProps {
  items: NavigationItem[];
  cvUrl?: string;
}

export const RightNav: React.FC<RightNavProps> = ({ items, cvUrl = '/Akhil%20Aravind.pdf' }) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className="hidden xl:flex flex-col items-center gap-5 fixed right-6 top-1/2 -translate-y-1/2 z-40 bg-white shadow-lg border border-[#F0F0F6] rounded-full py-6 px-3"
      aria-label="Quick page navigation"
    >
      <div className="flex flex-col gap-3.5">
        {items.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path !== '/' && pathname.startsWith(item.path));

          return (
            <Link
              key={item.id}
              href={item.path}
              aria-label={`Navigate to ${item.label}`}
              className={`group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'bg-[#FFB400] text-white shadow-md scale-110'
                  : 'bg-[#F0F0F6] text-[#767676] hover:bg-[#FFB400] hover:text-white hover:scale-105'
              }`}
            >
              <IconRenderer name={item.icon} className="w-4 h-4" />

              {/* Tooltip on hover */}
              <span className="absolute right-14 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#2B2B2B] text-white text-[11px] font-semibold py-1 px-2.5 rounded shadow-md whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="w-5 h-[1px] bg-[#F0F0F6]" />

      {/* Download CV Button in RightNav as requested */}
      <a
        href={cvUrl || '/Akhil%20Aravind.pdf'}
        download="Akhil Aravind.pdf"
        target="_blank"
        rel="noopener noreferrer"
        onClick={triggerPdfDownload}
        aria-label="Download CV"
        className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 hover:bg-[#FFB400] hover:text-white flex items-center justify-center transition-all duration-200 group relative border border-amber-200 cursor-pointer"
      >
        <Download className="w-4 h-4" />
        <span className="absolute right-14 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#2B2B2B] text-white text-[11px] font-semibold py-1 px-2.5 rounded shadow-md whitespace-nowrap">
          Download CV
        </span>
      </a>

      {/* Conditional Back to Top / Back to Home Button */}
      {isHome ? (
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="w-10 h-10 rounded-full bg-[#F0F0F6] text-[#767676] hover:bg-[#FFB400] hover:text-white flex items-center justify-center transition-all duration-200 group relative"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="absolute right-14 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#2B2B2B] text-white text-[11px] font-semibold py-1 px-2.5 rounded shadow-md whitespace-nowrap">
            Back to Top
          </span>
        </button>
      ) : (
        <Link
          href="/"
          aria-label="Back to Home"
          className="w-10 h-10 rounded-full bg-[#F0F0F6] text-[#767676] hover:bg-[#FFB400] hover:text-white flex items-center justify-center transition-all duration-200 group relative"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="absolute right-14 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#2B2B2B] text-white text-[11px] font-semibold py-1 px-2.5 rounded shadow-md whitespace-nowrap">
            Back
          </span>
        </Link>
      )}
    </nav>
  );
};
