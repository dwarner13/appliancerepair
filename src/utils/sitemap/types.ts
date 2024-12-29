export interface SitemapItem {
  url: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
}

export interface SitemapConfig {
  hostname: string;
  cacheTime: number;
  xmlNs: string;
  xslUrl: string;
  outputDir: string;
}