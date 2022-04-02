import React, { useState } from 'react';

import { useRecipes } from '../../context/recipe/RecipeContext';
import { RecipeProp } from '../../prop-types/RecipeProp';
import { Confirm } from '../modal/Confirm';
import { RecipeForm } from '../recipe-form/RecipeForm';

export function Controls({ recipe }) {
  const { remove } = useRecipes();
  const [showEditForm, setShowEditForm] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  return (
    <div className="d-flex justify-content-end">
      <ul className="list-inline">
        <li className="list-inline-item">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setShowEditForm(true)}
          >
            <i className="bi bi-pencil" aria-hidden="true" />
            <span className="visually-hidden">Bewerk recept</span>
          </button>
        </li>
        <li className="list-inline-item">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => setShowConfirmDelete(true)}
          >
            <i className="bi bi-trash" aria-hidden="true" />
            <span className="visually-hidden">Verwijder recept</span>
          </button>
        </li>
      </ul>

      {showConfirmDelete && (
        <Confirm
          title="Verwijder recepet?"
          cancel="Annuleren"
          confirm="Bevestigen"
          onCancel={() => setShowConfirmDelete(false)}
          onConfirm={() => {
            remove(recipe);
            setShowConfirmDelete(false);
          }}
        >
          <p>Weet u zeker dat u het recept wilt verwijderen?</p>
        </Confirm>
      )}

      {showEditForm && (
        <RecipeForm recipe={recipe} onClose={() => setShowEditForm(false)} />
      )}
    </div>
  );
}

Controls.propTypes = {
  recipe: RecipeProp,
};
