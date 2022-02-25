import PropTypes from 'prop-types';
import React from 'react';

export function Field({ label, help, id, children }) {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="input-group">{children}</div>
      {help && (
        <div id={`${id}_help`} className="form-text">
          {help}
        </div>
      )}
    </>
  );
}

Field.propTypes = {
  label: PropTypes.string.isRequired,
  help: PropTypes.string,
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};
