import './app.css';

import React from 'react';

import { RecipeContextProvider } from '../../context/recipe/RecipeContext';
import { RecipeList } from '../recipe-list/RecipeList';

export function App() {
  return (
    <RecipeContextProvider>
      <div className="container py-3">
        <h1 className="mb-3">Mijn kookboek</h1>
        <RecipeList />
      </div>
    </RecipeContextProvider>
  );
}
