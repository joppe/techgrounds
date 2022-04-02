import './image.css';

import PropTypes from 'prop-types';
import React from 'react';

export function Image({ src, alt, filter, size }) {
  if (size === undefined) {
    return <img src={src} alt={alt} className="image" />;
  }

  return (
    <div
      className="image position-absolute overflow-hidden"
      style={{ width: `${size}%` }}
    >
      <img src={src} alt={alt} style={{ filter: filter }} />
    </div>
  );
}
Image.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
  alt: PropTypes.string,
  filter: PropTypes.string,
};
