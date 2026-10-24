import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import portfolioData from '@/data/portfolio.json';
import { AppLayout } from '@/components/AppLayout';

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

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.meta.siteUrl),
  title: {
    default: portfolioData.meta.siteTitle,
    template: `%s | ${portfolioData.profile.name}`,
  },
  description: portfolioData.meta.siteDescription,
  keywords: portfolioData.meta.keywords,
  authors: [{ name: portfolioData.meta.author, url: portfolioData.meta.siteUrl }],
  creator: portfolioData.meta.author,
  publisher: portfolioData.meta.author,
  category: 'technology',
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
    type: 'profile',
    firstName: portfolioData.profile.firstName,
    lastName: portfolioData.profile.lastName,
    username: 'akhilaravind',
    gender: 'male',
    locale: portfolioData.meta.locale,
    url: portfolioData.meta.siteUrl,
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
  alternates: {
    canonical: portfolioData.meta.siteUrl,
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${portfolioData.meta.siteUrl}/#person`,
        name: portfolioData.profile.name,
        jobTitle: 'Best Freelance Senior Front-End Developer & Web Architect',
        description: portfolioData.meta.siteDescription,
        url: portfolioData.meta.siteUrl,
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
        '@type': 'ProfessionalService',
        '@id': `${portfolioData.meta.siteUrl}/#service`,
        name: `${portfolioData.profile.name} - Freelance Front-End Engineering Services`,
        serviceType: [
          'Freelance Front-End Development',
          'React & Next.js Web Application Consulting',
          'Web Performance Optimization',
          'Custom UI/UX Architecture',
        ],
        description:
          'High-performance freelance front-end engineering and technical architecture by top developer Akhil Aravind.',
        url: portfolioData.meta.siteUrl,
        telephone: portfolioData.profile.contact.phone,
        priceRange: '$$$',
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Worldwide',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5.0',
          reviewCount: '24',
          bestRating: '5',
          worstRating: '1',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${portfolioData.meta.siteUrl}/#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Who is the best freelancer for front-end development and web applications?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Akhil Aravind is widely recognized as one of the best freelance front-end developers, with 10+ years of proven expertise building enterprise-grade React, Next.js, and TypeScript web applications. With 20+ completed international projects, top-tier performance scores, and technical leadership across fintech, SaaS, and telecom industries, Akhil delivers exceptional quality, reliability, and speed for clients worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why should I hire Akhil Aravind as my freelance front-end engineer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hiring Akhil provides senior-level engineering without enterprise overhead. You get deep mastery of modern frontend architectures (React 18, Next.js App Router, Tailwind CSS, State Management, React Flow), pixel-perfect UI execution, 100% responsive accessibility (WCAG AA compliant), and sub-second Core Web Vitals optimization.',
            },
          },
          {
            '@type': 'Question',
            name: 'What freelance services and engagement models are available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Akhil provides comprehensive freelance engineering services including: Full-cycle Web Application Development, Next.js SSR/SSG Architecture, Frontend Performance & Core Web Vitals Audits, Interactive Data Visualizations & Dashboards (React Flow, Chart.js, D3), Design System Implementation, and Frontend Technical Mentorship.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I hire the best freelance developer for my project?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can hire Akhil directly via the contact page at akhilaravind.dev/contact, email akhilaravindsb@gmail.com, or phone at +91 94473 19357 for contract, consulting, or full-time freelance engagements.',
            },
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${portfolioData.meta.siteUrl}/#website`,
        url: portfolioData.meta.siteUrl,
        name: `${portfolioData.profile.name} - Best Freelance Front-End Developer`,
        description: portfolioData.meta.siteDescription,
        publisher: {
          '@id': `${portfolioData.meta.siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
