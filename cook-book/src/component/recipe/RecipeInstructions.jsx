import PropTypes from 'prop-types';
import React from 'react';

import { RecipeInstructionProp } from '../../prop-types/RecipeProp';

export function RecipeInstructions({ instructions }) {
  return (
    <ol>
      {instructions.map((instruction, index) => (
        <li key={index}>{instruction.text}</li>
      ))}
    </ol>
  );
}

RecipeInstructions.propTypes = {
  instructions: PropTypes.arrayOf(RecipeInstructionProp),
};
