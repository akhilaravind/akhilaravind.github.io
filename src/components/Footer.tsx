import React from 'react';
import Link from 'next/link';
import { NavigationItem } from '@/types/portfolio';

interface FooterProps {
  name: string;
  navigation?: NavigationItem[];
}

export const Footer: React.FC<FooterProps> = ({ name, navigation = [] }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto pt-6 pb-6 px-4 bg-white border border-[#F0F0F6] rounded-xl text-center shadow-xs w-full space-y-4">
      {navigation.length > 0 && (
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-[#767676]">
            {navigation.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className="hover:text-[#FFB400] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <p className="text-xs text-[#767676]">
        &copy; {currentYear} All Rights Reserved. Crafted with Next.js, Tailwind CSS &amp; SSR by{' '}
        <span className="font-bold text-[#2B2B2B]">
          <a href="mailto:akhilaravindsb@gmail.com">{name}</a>
        </span>
      </p>
    </footer>
  );
};
