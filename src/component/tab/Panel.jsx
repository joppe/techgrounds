import PropTypes from 'prop-types';
import React from 'react';

export function Panel({ id, isActive, children }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-tab`}
      role="tabpanel"
      tabIndex="-1"
      className="py-3"
      hidden={!isActive}
    >
      {children}
    </section>
  );
}

Panel.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};
