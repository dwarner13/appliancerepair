import { SitemapItem } from './types';

export const pages: SitemapItem[] = [
  // Core pages
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/calculator', changefreq: 'weekly', priority: 0.9 }, // Added calculator with high priority
  { url: '/faq', changefreq: 'monthly', priority: 0.7 },
  { url: '/troubleshooting', changefreq: 'weekly', priority: 0.8 },
  
  // Blog pages
  { url: '/blog', changefreq: 'daily', priority: 0.9 },
  { url: '/blog/winter-proofing-appliances-edmonton', changefreq: 'weekly', priority: 0.7 },
  
  // Service areas
  { url: '/areas', changefreq: 'weekly', priority: 0.8 },
  { url: '/areas/downtown-edmonton', changefreq: 'weekly', priority: 0.7 },
  { url: '/areas/south-edmonton', changefreq: 'weekly', priority: 0.7 },
  { url: '/areas/north-edmonton', changefreq: 'weekly', priority: 0.7 },
  { url: '/areas/st-albert', changefreq: 'weekly', priority: 0.7 },
  { url: '/areas/sherwood-park', changefreq: 'weekly', priority: 0.7 },
  { url: '/areas/spruce-grove', changefreq: 'weekly', priority: 0.7 }
];