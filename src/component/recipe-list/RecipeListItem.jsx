import PropTypes from 'prop-types';
import React from 'react';

import { RecipeProp } from '../../prop-types/RecipeProp';

export function RecipeListItem({ recipe, isActive, toggleActive }) {
  return (
    <li key={recipe.title} className="list-group-item">
      <h2 className="recipe-list__item__title">
        <button
          aria-expanded={isActive}
          tabIndex={0}
          onClick={() => toggleActive(recipe.id)}
        >
          {recipe.title}
        </button>
      </h2>
      {isActive && <p>{recipe.description}</p>}
    </li>
  );
}

RecipeListItem.propTypes = {
  recipe: RecipeProp,
  isActive: PropTypes.bool,
  toggleActive: PropTypes.func,
};
