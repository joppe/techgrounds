import './app.css';

import React from 'react';

import { RecipeContextProvider } from '../../context/recipe/RecipeContext';
import { RecipeList } from '../recipe-list/RecipeList';

export function App() {
  return (
    <RecipeContextProvider>
      <div className="container py-3">
        <header className="d-flex justify-content-between align-items-center mb-3">
          <h1 className="mb-3">Mijn kookboek</h1>
        </header>
        <RecipeList />
      </div>
    </RecipeContextProvider>
  );
}
