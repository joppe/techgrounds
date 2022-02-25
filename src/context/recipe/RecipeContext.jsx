import PropTypes from 'prop-types';
import React, { createContext, useContext, useReducer, useState } from 'react';

import data from '../../../recipes.json';
import { guid } from '../../helper/guid';

const RecipeContext = createContext({
  recipes: [],
});

const ADD_RECIPE = 'ADD_RECIPE';
const UPDATE_RECIPE = 'UPDATE_RECIPE';
const REMOVE_RECIPE = 'REMOVE_RECIPE';

const initialState = {
  recipes: data.recipes,
};

function reducer(state, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        recipes: state.recipes.concat({
          ingredients: [],
          instructions: [],
          ...action.recipe,
          id: guid(),
        }),
      };
    case REMOVE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.id),
      };
    case UPDATE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) => {
          if (recipe.id !== action.recipe.id) {
            return recipe;
          }

          return {
            ingredients: [],
            instructions: [],
            ...action.recipe,
          };
        }),
      };
  }
}

export function RecipeContextProvider({ children }) {
  const [feedback, setFeedback] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);

  function add(recipe) {
    dispatch({ type: ADD_RECIPE, recipe });
    setFeedback(`${recipe.title} toegevoegd`);
  }

  function remove(recipe) {
    dispatch({ type: REMOVE_RECIPE, id: recipe.id });
    setFeedback(`${recipe.title} verwijderd`);
  }

  function update(recipe) {
    dispatch({ type: UPDATE_RECIPE, recipe });
  }

  return (
    <RecipeContext.Provider
      value={{ recipes: state.recipes, add, remove, update }}
    >
      {children}
      <div className="visually-hidden" role="status">
        {feedback}
      </div>
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}

RecipeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
