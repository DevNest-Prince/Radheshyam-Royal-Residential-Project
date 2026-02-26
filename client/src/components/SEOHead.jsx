import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Radheshyam Royal';
const SITE_URL = 'https://www.radheshyamroyal.com';
const DEFAULT_IMAGE = `${SITE_URL}/RR_135.jpg`;

function SEOHead({
  title,
  description,
  keywords,
  canonical,
  image = DEFAULT_IMAGE,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | 1 & 2 BHK Flats in Upper Ghansoli, Navi Mumbai`;
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEOHead;
