import { MetadataRoute } from 'next';
import portfolioData from '@/data/portfolio.json';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${portfolioData.meta.siteUrl}/sitemap.xml`,
  };
}
