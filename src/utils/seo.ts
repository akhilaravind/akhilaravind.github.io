import type { Metadata } from 'next';
import portfolioData from '@/data/portfolio.json';

const rawSiteUrl = (portfolioData.meta.siteUrl || 'https://akhilaravind.in').replace(/\/+$/, '');
const DEFAULT_OG_IMAGE = 'https://akhilaravind.in/og-image.png';

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
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  useAbsoluteTitle = false,
  ogType = 'website',
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogUrl,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = getCanonicalUrl(path);
  const fullTitle = useAbsoluteTitle
    ? title
    : `${title} | ${portfolioData.profile.name}`;

  const resolvedOgUrl = ogUrl || (path === '/' ? rawSiteUrl : canonicalUrl);
  const resolvedOgTitle = ogTitle || fullTitle;
  const resolvedOgDesc = ogDescription || description;

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
      url: resolvedOgUrl,
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      siteName: portfolioData.meta.siteTitle,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: resolvedOgTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      images: [ogImage],
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

