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

const homeUrl = getCanonicalUrl('/');

export const metadata: Metadata = {
  metadataBase: new URL(homeUrl),
  title: {
    default: portfolioData.meta.siteTitle,
    template: `%s | ${portfolioData.profile.name}`,
  },
  description: portfolioData.meta.siteDescription,
  keywords: portfolioData.meta.keywords,
  authors: [{ name: portfolioData.meta.author, url: homeUrl }],
  creator: portfolioData.meta.author,
  publisher: portfolioData.meta.author,
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
    url: homeUrl,
    title: portfolioData.meta.siteTitle,
    description: portfolioData.meta.siteDescription,
    siteName: `${portfolioData.profile.name} - Best Freelance Front-End Developer`,
    images: [
      {
        url: '/images/hero-developer.png',
        width: 1200,
        height: 630,
        alt: `${portfolioData.profile.name} - Best Freelance Front-End Developer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioData.meta.siteTitle,
    description: portfolioData.meta.siteDescription,
    images: ['/images/hero-developer.png'],
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
  const siteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${homeUrl}#person`,
        name: portfolioData.profile.name,
        jobTitle: 'Best Freelance Senior Front-End Developer & Web Architect',
        description: portfolioData.meta.siteDescription,
        url: homeUrl,
        email: portfolioData.profile.contact.email,
        telephone: portfolioData.profile.contact.phone,
        address: {
          '@type': 'PostalAddress',
          addressLocality: portfolioData.profile.location.city,
          addressRegion: portfolioData.profile.location.region,
          addressCountry: portfolioData.profile.location.country,
        },
        knowsAbout: [
          'Front-End Web Development',
          'Freelance Software Engineering',
          'React.js Architecture',
          'Next.js Fullstack',
          'TypeScript',
          'Web Performance & Core Web Vitals',
          'UI/UX Engineering',
          'State Management',
          'Interactive Data Visualizations',
        ],
        award: [
          'Top Rated Plus Freelance Front-End Engineer',
          '10+ Years Professional Web Engineering Excellence',
          '20+ Enterprise Projects Successfully Delivered',
        ],
        alumniOf: 'College of Engineering, Attingal',
        sameAs: portfolioData.profile.socialLinks.map((s) => s.url),
      },
      {
        '@type': 'WebSite',
        '@id': `${homeUrl}#website`,
        url: homeUrl,
        name: `${portfolioData.profile.name} - Best Freelance Front-End Developer`,
        description: portfolioData.meta.siteDescription,
        publisher: {
          '@id': `${homeUrl}#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
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
