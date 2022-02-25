import './recipe.css';

import PropTypes from 'prop-types';
import React from 'react';

import { RecipeProp } from '../../prop-types/RecipeProp';
import { RecipeImage } from './RecipeImage';

export function Recipe({ recipe, labelledby, id, isHidden }) {
  return (
    <div role="region" aria-labelledby={labelledby} id={id} hidden={isHidden}>
      <p>{recipe.description}</p>

      <RecipeImage image={recipe.image} caption={recipe.title} />
    </div>
  );
}

Recipe.propTypes = {
  recipe: RecipeProp.isRequired,
  id: PropTypes.string.isRequired,
  labelledby: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
