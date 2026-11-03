import type { MetadataRoute } from 'next';
import portfolioData from '@/data/portfolio.json';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (portfolioData.meta.siteUrl || 'https://akhilaravind.in').replace(/\/+$/, '');

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_not-found/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'ClaudeBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'cohere-ai',
        ],
        allow: '/',
        disallow: ['/_not-found/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
