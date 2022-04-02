import PropTypes from 'prop-types';
import React from 'react';

export function RecipeImage({ image, caption }) {
  return (
    <div className="mb-3 recipe__image">
      <img src={image} alt={caption} />
    </div>
  );
}

RecipeImage.propTypes = {
  image: PropTypes.string,
  caption: PropTypes.string,
};
