
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  type?: string;
  name?: string;
  twitterHandle?: string;
}

const Seo = ({
  title = 'Floral Designer - Diseña Arreglos Florales Personalizados con IA',
  description = 'Crea arreglos florales únicos adaptados a tus necesidades con nuestra aplicación intuitiva basada en IA.',
  canonical = 'https://tudominio.com/',
  type = 'website',
  name = 'Floral Designer',
  twitterHandle = '@floraldesigner',
}: SeoProps) => {
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;
