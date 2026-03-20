import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type, keywords }) {
  const siteName = 'Get Credentialing Done';
  const fullTitle = title !== siteName ? `${title} | ${siteName}` : title;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name='description' content={description} />
      {keywords && <meta name='keywords' content={keywords} />}
      
      {/* OpenGraph tags */}
      <meta property='og:title' content={fullTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content={type || 'website'} />
      {name && <meta property='og:site_name' content={name} />}
      
      {/* Twitter tags */}
      <meta name='twitter:title' content={fullTitle} />
      <meta name='twitter:description' content={description} />
    </Helmet>
  );
}
