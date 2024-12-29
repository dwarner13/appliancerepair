import { Helmet } from 'react-helmet-async';
import { SEOProps } from '../../utils/seo/types';
import { SITE_URL, DEFAULT_IMAGE } from '../../utils/seo/constants';

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonical = '/',
  ogImage = DEFAULT_IMAGE,
  schema
}: SEOProps) {
  const fullCanonicalUrl = `${SITE_URL}${canonical}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Edmonton Appliance Repair" />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Schema.org */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}