import PropTypes from 'prop-types';
import React from 'react';

import { useRecipes } from '../../context/recipe/RecipeContext';
import { RecipeProp } from '../../prop-types/RecipeProp';
import { Form } from '../form/Form';
import { Modal } from '../modal/Modal';
import { RecipeCommon } from './RecipeCommon';
import { RecipeIngredients } from './RecipeIngredients';
import { RecipeInstructions } from './RecipeInstructions';

export function RecipeForm({ recipe, onClose }) {
  const { add, update } = useRecipes();

  function handleClose() {
    onClose();
  }

  function handleSubmit(data) {
    onClose();

    if (recipe === undefined) {
      add(data);
    } else {
      update(data);
    }
  }

  return (
    <Modal onClose={handleClose}>
      <Form onSubmit={handleSubmit}>
        <div className="modal-header">
          <h5 className="modal-title" id="modal-title">
            Voeg een recept toe
          </h5>
          <button
            type="button"
            className="btn-close"
            aria-label="Sluiten"
            onClick={onClose}
          />
        </div>
        <div className="modal-body">
          <RecipeCommon recipe={recipe} />

          <RecipeIngredients initial={recipe?.ingredients ?? []} />

          <RecipeInstructions initial={recipe?.instructions ?? []} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Sluiten
          </button>
          <button type="submit" className="btn btn-primary">
            Opslaan
          </button>
        </div>
      </Form>
    </Modal>
  );
}

RecipeForm.propTypes = {
  recipe: RecipeProp,
  onClose: PropTypes.func.isRequired,
};
