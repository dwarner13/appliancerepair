import { createWriteStream } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';
import { SITEMAP_CONFIG } from './config';

export interface SitemapItem {
  url: string;
  changefreq?: string;
  priority?: number;
  lastmod?: string;
}

export async function generateSitemap(items: SitemapItem[], filename: string): Promise<void> {
  try {
    // Create sitemap stream
    const smStream = new SitemapStream({
      hostname: SITEMAP_CONFIG.hostname,
      xmlns: {
        news: false,
        xhtml: false,
        image: false,
        video: false
      }
    });

    // Write each item to the stream
    items.forEach(item => smStream.write(item));
    smStream.end();

    // Generate sitemap XML
    const sitemapXML = await streamToPromise(smStream);

    // Write to file
    const writeStream = createWriteStream(`${SITEMAP_CONFIG.outputDir}/${filename}`);
    writeStream.write(sitemapXML.toString());
    writeStream.end();

    return new Promise((resolve, reject) => {
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });
  } catch (error) {
    console.error(`Error generating sitemap ${filename}:`, error);
    throw error;
  }
}