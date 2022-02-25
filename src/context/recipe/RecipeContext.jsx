import PropTypes from 'prop-types';
import React, { createContext, useContext } from 'react';

import data from '../../../recipes.json';

const RecipeContext = createContext({
  recipes: [],
});

export function RecipeContextProvider({ children }) {
  return (
    <RecipeContext.Provider value={{ recipes: data.recipes }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}

RecipeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
