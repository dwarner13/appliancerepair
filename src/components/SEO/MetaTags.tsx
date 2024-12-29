import { SITE_NAME } from '../../utils/seo/constants';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export default function MetaTags({ title, description, keywords, ogImage, canonical }: MetaTagsProps) {
  return (
    <>
      {/* Basic Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_CA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Additional */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </>
  );
}