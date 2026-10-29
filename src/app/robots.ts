import type { MetadataRoute } from 'next';
import portfolioData from '@/data/portfolio.json';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = portfolioData.meta.siteUrl.replace(/\/+$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/_not-found/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
