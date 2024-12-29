import { generateSitemap } from '../../src/utils/sitemap/generator.js';
import { pages } from '../../src/data/pages.js';

export const generatePagesSitemap = async () => {
  try {
    await generateSitemap(pages, 'sitemap-pages.xml');
    console.log('Pages sitemap generated successfully');
  } catch (error) {
    console.error('Error generating pages sitemap:', error);
    throw error;
  }
};