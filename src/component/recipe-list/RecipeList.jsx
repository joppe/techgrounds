import React, { useState } from 'react';

import { useRecipes } from '../../context/recipe/RecipeContext';
import { RecipeListItem } from './RecipeListItem';

export function RecipeList() {
  const { recipes } = useRecipes();
  const [activeId, setActiveId] = useState(() => {
    return recipes[0].id;
  });

  function toggleActive(id) {
    if (activeId !== id) {
      setActiveId(id);
    }
  }

  return (
    <ul className="list-group">
      {recipes.map((recipe) => (
        <RecipeListItem
          key={recipe.id}
          recipe={recipe}
          isActive={recipe.id === activeId}
          toggleActive={toggleActive}
        />
      ))}
    </ul>
  );
}
