import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const MetaTags = ({ title: _title, description: customDescription, imageURL: _imageURL, url: customURL }) => {
  const _customDescription = (customDescription || '').substring(0, 500);
  const _description = (_customDescription && _customDescription + '...');

  const title = (_title && _title + ' – Online Gedenk- & Trauerfeiern') || 'Online Gedenk- & Trauerfeiern';
  const description = _description || 'Kostenlose Online Gedenk- und Trauerfeiern während der COVID19 Pandemie.';
  const imageURL = _imageURL || 'https://trauerfeier.online/meta-image.jpg';
  const url = customURL || window.location.href;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageURL && <meta property="og:image" content={imageURL} />}

      {/* Twitter */}
      <meta property="twitter:card" content={`summary${imageURL ? '_large_image' : ''}`} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {imageURL && <meta property="twitter:image" content={imageURL} />}
    </Helmet>
  );
};

MetaTags.propTypes = {
  description: PropTypes.string,
  imageURL: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string
};

export default MetaTags;
