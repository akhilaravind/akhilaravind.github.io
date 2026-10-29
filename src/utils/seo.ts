import type { Metadata } from 'next';
import portfolioData from '@/data/portfolio.json';

const rawSiteUrl = portfolioData.meta.siteUrl.replace(/\/+$/, '');

/**
 * Builds the canonical URL for a route, matching `trailingSlash: true` on GitHub Pages
 * so sitemap URLs, canonical tags, and OpenGraph URLs resolve with 200 OK and zero redirects.
 */
export function getCanonicalUrl(path: string = '/'): string {
  if (!path || path === '/') {
    return `${rawSiteUrl}/`;
  }
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const withTrailingSlash = normalizedPath.endsWith('/')
    ? normalizedPath
    : `${normalizedPath}/`;
  return `${rawSiteUrl}${withTrailingSlash}`;
}

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  useAbsoluteTitle?: boolean;
  ogType?: 'website' | 'profile';
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  useAbsoluteTitle = false,
  ogType = 'website',
}: PageMetadataOptions): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  const fullTitle = useAbsoluteTitle
    ? title
    : `${title} | ${portfolioData.profile.name}`;

  return {
    title: useAbsoluteTitle ? { absolute: title } : title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: ogType,
      ...(ogType === 'profile'
        ? {
            firstName: portfolioData.profile.firstName,
            lastName: portfolioData.profile.lastName,
            username: 'akhilaravind',
            gender: 'male',
          }
        : {}),
      locale: portfolioData.meta.locale,
      url: canonicalUrl,
      title: fullTitle,
      description,
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
      title: fullTitle,
      description,
      images: ['/images/hero-developer.png'],
    },
  };
}

export function createBreadcrumbJsonLd(pageName: string, path: string) {
  const pageUrl = getCanonicalUrl(path);
  const homeUrl = getCanonicalUrl('/');

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${pageName} | ${portfolioData.profile.name}`,
        isPartOf: {
          '@id': `${homeUrl}#website`,
        },
        about: {
          '@id': `${homeUrl}#person`,
        },
        breadcrumb: {
          '@id': `${pageUrl}#breadcrumb`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: homeUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: pageName,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

