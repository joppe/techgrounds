import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { useId } from '../../helper/useId';
import { RecipeInstructionProp } from '../../prop-types/RecipeProp';
import { Textarea } from '../form/Textarea';
import { isRequired } from '../form/validation/isRequired';

export function RecipeInstructions({ initial = [] }) {
  const { generate } = useId();
  const [instructions, setInstructions] = useState(() => {
    return initial.map((instruction) => {
      return {
        id: generate(),
        ...instruction,
      };
    });
  });

  function addInstruction() {
    setInstructions(
      instructions.concat({
        id: generate(),
        text: '',
      }),
    );
  }

  function removeInstruction(id) {
    setInstructions(
      instructions.filter((instruction) => {
        return instruction.id !== id;
      }),
    );
  }

  return (
    <fieldset>
      <legend>Instructies</legend>
      <ul className="list-unstyled">
        {instructions.map((instruction) => {
          return (
            <li className="row item-row" key={instruction.id}>
              <div className="col-md-10">
                <Textarea
                  label="Instructie"
                  name={`instructions[${instruction.id}].text`}
                  id={`instruction-${instruction.id}-text`}
                  value={instruction.text}
                  validityChecker={isRequired}
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => removeInstruction(instruction.id)}
                >
                  <span className="visually-hidden">Verwijder instructie</span>
                  <i className="bi bi-trash" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-link" onClick={addInstruction}>
          Voeg instructie toe
        </button>
      </div>
    </fieldset>
  );
}

RecipeInstructions.propTypes = {
  initial: PropTypes.arrayOf(RecipeInstructionProp),
};
