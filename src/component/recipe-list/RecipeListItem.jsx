import PropTypes from 'prop-types';
import React from 'react';

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
  recipe: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    cooking_time: PropTypes.number,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string,
        caption: PropTypes.string,
      }),
    ),
    ingredients: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        quantity: PropTypes.number,
        unit: PropTypes.string,
      }),
    ),
    instructions: PropTypes.arrayOf(PropTypes.string),
  }),
  isActive: PropTypes.bool,
  toggleActive: PropTypes.func,
};
