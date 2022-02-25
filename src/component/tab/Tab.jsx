import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

export function Tab({ id, isActive, onClick, onKeydown, children }) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && isActive) {
      ref.current.focus();
    }
  }, [ref.current, isActive]);

  return (
    <li className="nav-item" role="presentation">
      <a
        className={`nav-link ${isActive ? 'active' : ''}`}
        role="tab"
        aria-selected={isActive}
        tabIndex={isActive ? 0 : -1}
        id={`${id}-tab`}
        href={`#${id}`}
        onClick={onClick}
        onKeyDown={onKeydown}
        ref={ref}
      >
        {children}
      </a>
    </li>
  );
}

Tab.propTypes = {
  id: PropTypes.string,
  isActive: PropTypes.bool.isRequired,
  onKeydown: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
