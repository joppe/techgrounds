import React from 'react';

import { useRecipes } from '../../context/recipe/RecipeContext';

export function RecipeList() {
  const { recipes } = useRecipes();

  return (
    <ul className="list-group">
      {recipes.map((recipe, index) => (
        <li key={index} className="list-group-item">
          {recipe.title}
        </li>
      ))}
    </ul>
  );
}
