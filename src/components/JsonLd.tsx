import React from 'react';

export const JsonLd = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Amra BNP Poribar",
    "url": "https://amrabnpporibar.org",
    "logo": "https://amrabnpporibar.org/logo.png",
    "sameAs": [
      "https://www.facebook.com/amrabnpporibar",
      "https://twitter.com/amrabnpporibar"
    ],
    "description": "Amra BNP Poribar is a platform dedicated to the Bangladesh Nationalist Party (BNP) and its supporters."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

