import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function NotFound() {
  return (
    <section
      aria-label="Page Not Found"
      className="bg-white rounded-2xl shadow-sm border border-[#F0F0F6] p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[380px] space-y-5"
    >
      <span className="text-xs font-bold uppercase tracking-widest bg-amber-50 text-amber-800 px-3.5 py-1.5 rounded-full border border-amber-200">
        Error 404
      </span>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2B2B2B] tracking-tight">
        Page Not Found
      </h1>
      <p className="text-sm text-[#767676] max-w-md leading-relaxed">
        The page you requested doesn&apos;t exist or may have been moved. Explore my portfolio, services, and experience from the home page.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFB400] hover:bg-[#E5A200] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </Link>
    </section>
  );
}

