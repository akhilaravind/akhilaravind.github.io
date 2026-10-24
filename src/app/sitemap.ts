import { MetadataRoute } from 'next';
import portfolioData from '@/data/portfolio.json';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/education', '/experience', '/portfolio', '/contact'];

  return routes.map((route) => ({
    url: `${portfolioData.meta.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
