import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream, mkdirSync } from 'fs';
import { SITE_URL } from '../src/utils/sitemap/config.js';
import { pages } from '../src/utils/sitemap/pages.js';

async function generateSitemap() {
  try {
    // Ensure dist directory exists
    mkdirSync('./dist', { recursive: true });

    // Create sitemap stream
    const smStream = new SitemapStream({
      hostname: SITE_URL,
      xmlns: {
        news: false,
        xhtml: true,
        image: false,
        video: false
      }
    });

    const writeStream = createWriteStream('./dist/sitemap.xml');

    // Add each URL to the stream
    pages.forEach(page => {
      smStream.write({
        url: page.url,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString()
      });
    });

    // End the stream
    smStream.end();

    // Generate sitemap XML
    const sitemap = await streamToPromise(smStream);
    writeStream.write(sitemap.toString());
    writeStream.end();

    console.log('✓ Sitemap generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

generateSitemap();