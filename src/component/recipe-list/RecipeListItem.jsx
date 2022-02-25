import PropTypes from 'prop-types';
import React from 'react';

import { RecipeProp } from '../../prop-types/RecipeProp';
import { Recipe } from '../recipe/Recipe';

export function RecipeListItem({ recipe, isActive, toggleActive }) {
  const id = `recipe-list-item-${recipe.id}`;
  const detailId = `recipe-detail-${recipe.id}`;

  return (
    <li key={recipe.title} className="list-group-item">
      <h2 className="recipe-list__item__title">
        <button
          style={{ all: 'inherit' }}
          className="d-flex justify-content-between align-items-center w-100"
          aria-expanded={isActive}
          aria-controls={detailId}
          tabIndex={0}
          id={id}
          onClick={() => toggleActive(recipe.id)}
        >
          <span>{recipe.title}</span>
        </button>
      </h2>

      <Recipe
        recipe={recipe}
        id={detailId}
        labelledby={id}
        isHidden={!isActive}
      />
    </li>
  );
}

RecipeListItem.propTypes = {
  recipe: RecipeProp.isRequired,
  isActive: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
};
