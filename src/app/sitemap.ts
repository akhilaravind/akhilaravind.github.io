import type { MetadataRoute } from 'next';
import { getCanonicalUrl } from '@/utils/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['/', '/services', '/education', '/experience', '/portfolio', '/contact'];

  return routes.map((route) => ({
    url: getCanonicalUrl(route),
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }));
}
