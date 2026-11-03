import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import portfolioData from '@/data/portfolio.json';
import { AppLayout } from '@/components/AppLayout';
import { getCanonicalUrl } from '@/utils/seo';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#FFB400',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = 'https://akhilaravind.in';
const OG_IMAGE_URL = 'https://akhilaravind.in/og-image.png';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Akhil Aravind | Freelance React & Next.js Developer',
    template: `%s | ${portfolioData.profile.name}`,
  },
  description:
    'Senior Freelance React & Next.js Developer specializing in scalable web applications, UI architecture, and high-performance frontend engineering. Available for hire and contract roles.',
  keywords: portfolioData.meta.keywords,
  authors: [{ name: portfolioData.profile.name, url: SITE_URL }],
  creator: portfolioData.profile.name,
  publisher: portfolioData.profile.name,
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  category: 'technology',
  verification: {
    google: 'KAzlcovUcwE6dlCmodNLMqG99Qj0HwXH4MmVwJ5-CUs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: portfolioData.meta.locale,
    url: SITE_URL,
    title: 'Akhil Aravind | Freelance React & Next.js Developer',
    description:
      'Senior Freelance React & Next.js Developer available for contract engineering and consulting.',
    siteName: 'Akhil Aravind | Freelance React & Next.js Developer',
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: 'Akhil Aravind | Freelance React & Next.js Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Akhil Aravind | Freelance React & Next.js Developer',
    description:
      'Senior Freelance React & Next.js Developer available for contract engineering and consulting.',
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Akhil Aravind',
    url: 'https://akhilaravind.in',
    jobTitle: 'Freelance Front-End & Next.js Engineer',
    description:
      'Senior Freelance React & Next.js Developer specializing in scalable web applications, UI architecture, and high-performance frontend engineering. Available for hire and contract roles.',
    sameAs: [
      'https://github.com/akhilaravind',
      'https://www.linkedin.com/in/akhilaravind',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Frontend Architecture',
      'Web Performance',
      'Core Web Vitals',
      'React Flow',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior Freelance React & Next.js Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Worldwide',
      },
      skills:
        'React.js, Next.js App Router, TypeScript, Tailwind CSS, Frontend Architecture, Core Web Vitals Optimization',
    },
    award: [
      'Top Rated Freelance React & Next.js Engineer',
      '10+ Years Professional Web Engineering Excellence',
      '20+ Enterprise Projects Successfully Delivered',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'College of Engineering, Attingal',
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: 'Akhil Aravind | Freelance React & Next.js Developer',
    description:
      'Senior Freelance React & Next.js Developer specializing in scalable web applications, UI architecture, and high-performance frontend engineering. Available for hire and contract roles.',
    publisher: {
      '@type': 'Person',
      name: 'Akhil Aravind',
      url: SITE_URL,
    },
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=UA-136356288-1"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-136356288-1');
          `}
        </Script>
      </head>
      <body className="bg-[#F0F0F6] text-[#2B2B2B] antialiased min-h-screen selection:bg-[#FFB400] selection:text-white">
        {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-[#FFB400] focus:text-white focus:rounded-lg focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 font-bold text-xs uppercase tracking-wider"
        >
          Skip to main content
        </a>
        <AppLayout>
          {children}
        </AppLayout>
      </body>
    </html>
  );
}
