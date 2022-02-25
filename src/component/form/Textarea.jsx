import PropTypes from 'prop-types';
import React from 'react';

import { Field } from './Field';
import { useValidation } from './validation/useValidation';

export function Textarea({
  label,
  name,
  help,
  id,
  value = '',
  children,
  validityChecker = () => true,
}) {
  const [hasError, setHasError] = useValidation(name, validityChecker);

  function handleFocus() {
    if (hasError) {
      setHasError(false);
    }
  }

  return (
    <Field label={label} help={help} id={id}>
      {children}
      <textarea
        className={`form-control ${hasError ? 'is-invalid' : ''}`}
        name={name}
        id={id}
        aria-describedby={help ? `${id}_help` : null}
        onFocus={handleFocus}
        defaultValue={value}
      />
    </Field>
  );
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  help: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  children: PropTypes.node,
  validityChecker: PropTypes.func,
};
