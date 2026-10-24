import React from 'react';

interface FooterProps {
  name: string;
}

export const Footer: React.FC<FooterProps> = ({ name }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto pt-8 pb-6 bg-white border border-[#F0F0F6] rounded-xl text-center shadow-xs w-full">
      <p className="text-xs text-[#767676]">
        &copy; {currentYear} All Rights Reserved. Crafted with Next.js, Tailwind CSS & SSR by{' '}
        <span className="font-bold text-[#2B2B2B]">
          <a href="mailto:akhilaravindsb@gmail.com">{name}</a>
        </span>
      </p>
    </footer>
  );
};
