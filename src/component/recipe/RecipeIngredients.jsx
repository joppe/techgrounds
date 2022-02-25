import PropTypes from 'prop-types';
import React from 'react';

import { RecipeIngredientProp } from '../../prop-types/RecipeProp';

export function RecipeIngredients({ ingredients }) {
  return (
    <ul>
      {ingredients.map((ingredient) => {
        return (
          <li key={ingredient.name}>
            {ingredient.quantity}
            {ingredient.unit ? ` ${ingredient.unit}` : ''} {ingredient.name}
          </li>
        );
      })}
    </ul>
  );
}

RecipeIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(RecipeIngredientProp),
};
