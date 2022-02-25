import './recipe.css';

import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { RecipeProp } from '../../prop-types/RecipeProp';
import { Panel } from '../tab/Panel';
import { Tab } from '../tab/Tab';
import { Controls } from './Controls';
import { RecipeImage } from './RecipeImage';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeInstructions } from './RecipeInstructions';

const INGREDIENTS_TAB = 'ingredients';
const INSTRUCTIONS_TAB = 'instructions';
const TABS = [INGREDIENTS_TAB, INSTRUCTIONS_TAB];

export function Recipe({ recipe, labelledby, id, isHidden }) {
  const [activeTab, setActiveTab] = useState(INGREDIENTS_TAB);

  function handleTabKeydown(event) {
    if (event.which === 37) {
      const index = TABS.indexOf(activeTab) - 1;

      setActiveTab(TABS[index < 0 ? TABS.length - 1 : index]);
    }

    if (event.which === 39) {
      const index = TABS.indexOf(activeTab) + 1;

      setActiveTab(TABS[index >= TABS.length ? 0 : index]);
    }
  }

  return (
    <div role="region" aria-labelledby={labelledby} id={id} hidden={isHidden}>
      <Controls recipe={recipe} />

      <p>{recipe.description}</p>

      <RecipeImage image={recipe.image} caption={recipe.title} />

      <ul className="nav nav-tabs" role="tablist">
        <Tab
          id={`${id}-ingredients`}
          isActive={activeTab === INGREDIENTS_TAB}
          onClick={() => setActiveTab(INGREDIENTS_TAB)}
          onKeydown={handleTabKeydown}
        >
          Ingredi&euml;nten
        </Tab>
        <Tab
          id={`${id}-instructions`}
          isActive={activeTab === INSTRUCTIONS_TAB}
          onClick={() => setActiveTab(INSTRUCTIONS_TAB)}
          onKeydown={handleTabKeydown}
        >
          Instructies
        </Tab>
      </ul>

      <Panel id={`${id}-ingredients`} isActive={activeTab === INGREDIENTS_TAB}>
        <RecipeIngredients ingredients={recipe.ingredients} />
      </Panel>

      <Panel
        id={`${id}-instructions`}
        isActive={activeTab === INSTRUCTIONS_TAB}
      >
        <RecipeInstructions instructions={recipe.instructions} />
      </Panel>
    </div>
  );
}

Recipe.propTypes = {
  recipe: RecipeProp.isRequired,
  id: PropTypes.string.isRequired,
  labelledby: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
};
