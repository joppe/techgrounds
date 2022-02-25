import PropTypes from 'prop-types';
import React from 'react';

export function Modal({ onClose, children }) {
  function cancelClick(event) {
    event.stopPropagation();
  }

  return (
    <>
      <div
        className="modal"
        tabIndex="-1"
        style={{ display: 'block' }}
        aria-modal="true"
        aria-labelledby="modal-title"
        role="dialog"
        onClick={onClose}
      >
        <div className="modal-dialog modal-lg" onClick={cancelClick}>
          {children}
        </div>
      </div>
      <div className="modal-backdrop show"></div>
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
