import PropTypes from 'prop-types';
import React from 'react';

import { Field } from './Field';
import { useValidation } from './validation/useValidation';

export function InputNumber({
  label,
  name,
  help,
  id,
  value = '',
  children,
  validityChecker = () => true,
}) {
  const [hasError, setHasError] = useValidation(
    name,
    validityChecker,
    (value) => (value ? parseInt(value, 10) : value),
  );

  function handleFocus() {
    if (hasError) {
      setHasError(false);
    }
  }

  return (
    <Field label={label} help={help} id={id}>
      {children}
      <input
        type="number"
        className={`form-control ${hasError ? 'is-invalid' : ''}`}
        name={name}
        id={id}
        aria-describedby={help ? `${id}_help` : null}
        onFocus={handleFocus}
        defaultValue={String(value)}
      />
    </Field>
  );
}

InputNumber.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  help: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.number,
  children: PropTypes.node,
  validityChecker: PropTypes.func,
};
