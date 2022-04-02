import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { useId } from '../../helper/useId';
import { RecipeIngredientProp } from '../../prop-types/RecipeProp';
import { InputNumber } from '../form/InputNumber';
import { InputText } from '../form/InputText';
import { isRequired } from '../form/validation/isRequired';

export function RecipeIngredients({ initial = [] }) {
  const { generate } = useId();
  const [ingredients, setIngredients] = useState(() => {
    return initial.map((ingredient) => {
      return {
        id: generate(),
        ...ingredient,
      };
    });
  });

  function addIngredient() {
    setIngredients(
      ingredients.concat({
        id: generate(),
        name: '',
        quantity: '',
        unit: '',
      }),
    );
  }

  function removeIngredient(id) {
    setIngredients(
      ingredients.filter((ingredient) => {
        return ingredient.id !== id;
      }),
    );
  }

  return (
    <fieldset>
      <legend>Ingredi&euml;nten</legend>
      <ul className="list-unstyled">
        {ingredients.map((ingredient) => {
          return (
            <li className="row item-row" key={ingredient.id}>
              <div className="col-md-5">
                <InputText
                  label="Naam"
                  name={`ingredients[${ingredient.id}].name`}
                  id={`ingredient-${ingredient.id}-name`}
                  value={ingredient.name}
                  validityChecker={isRequired}
                />
              </div>
              <div className="col-md-3">
                <InputNumber
                  label="Hoeveelheid"
                  name={`ingredients[${ingredient.id}].quantity`}
                  id={`ingredient-${ingredient.id}-quantity`}
                  value={ingredient.quantity}
                  validityChecker={isRequired}
                />
              </div>
              <div className="col-md-2">
                <InputText
                  label="Eenheid"
                  name={`ingredients[${ingredient.id}].unit`}
                  id={`ingredient-${ingredient.id}-unit`}
                  value={ingredient.unit}
                />
              </div>
              <div className="col-md-2 d-flex align-items-end">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => removeIngredient(ingredient.id)}
                >
                  <span className="visually-hidden">Verwijder ingredient</span>
                  <i className="bi bi-trash" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-end">
        <button type="button" className="btn btn-link" onClick={addIngredient}>
          Voeg ingredient toe
        </button>
      </div>
    </fieldset>
  );
}

RecipeIngredients.propTypes = {
  initial: PropTypes.arrayOf(RecipeIngredientProp),
};
