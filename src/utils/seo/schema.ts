import { SITE_URL, SITE_NAME } from './constants';

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": `${SITE_URL}/og-image.jpg`,
  "description": "Professional appliance repair services in Edmonton and surrounding areas.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Edmonton",
    "addressRegion": "AB",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "53.5461",
    "longitude": "-113.4938"
  },
  "telephone": "(825) 888-3333",
  "priceRange": "$$"
});

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Appliance Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": SITE_NAME
  },
  "areaServed": {
    "@type": "City",
    "name": "Edmonton"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Appliance Repair Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Refrigerator Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Washer Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dryer Repair"
        }
      }
    ]
  }
});