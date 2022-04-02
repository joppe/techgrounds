import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { RecipeForm } from '../recipe-form/RecipeForm';

export function AddRecipe({ children }) {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(true);
  }

  function handleClose() {
    setShowForm(false);
  }

  return (
    <>
      <button type="button" className="btn btn-primary" onClick={handleClick}>
        {children}
      </button>
      {showForm && <RecipeForm onClose={handleClose} />}
    </>
  );
}

AddRecipe.propTypes = {
  children: PropTypes.node,
};
