import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Field } from './Field';
import { useValidation } from './validation/useValidation';

export function InputFile({
  label,
  name,
  help,
  id,
  value = '',
  children,
  validityChecker = () => true,
}) {
  const [hasError, setHasError] = useValidation(name, validityChecker);
  const [image, setImage] = useState(value !== '' ? value : undefined);

  function handleFocus() {
    if (hasError) {
      setHasError(false);
    }
  }

  if (image) {
    return (
      <div className="mb-3">
        <input type="hidden" name={name} value={value} />
        <span className="form-label">{label}</span>
        <div className="d-flex">
          <div className="preview">
            <img src={image} />
          </div>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setImage(undefined)}
          >
            Verwijder afbeelding
          </button>
        </div>
      </div>
    );
  }

  return (
    <Field label={label} help={help} id={id}>
      {children}
      <input
        type="file"
        className={`form-control ${hasError ? 'is-invalid' : ''}`}
        name={name}
        id={id}
        aria-describedby={help ? `${id}_help` : null}
        onFocus={handleFocus}
      />
    </Field>
  );
}

InputFile.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  help: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.node,
  validityChecker: PropTypes.func,
};
