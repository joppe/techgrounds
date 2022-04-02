import PropTypes from 'prop-types';
import React from 'react';

export function Confirm({
  title,
  cancel,
  confirm,
  onCancel,
  onConfirm,
  children,
}) {
  function cancelClick(event) {
    event.stopPropagation();
  }

  return (
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: 'block' }}
      aria-modal="true"
      aria-labelledby="modal-title"
      role="dialog"
      onClick={onCancel}
    >
      <div className="modal-dialog" onClick={cancelClick}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Sluiten"
              onClick={onCancel}
            />
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onCancel}
            >
              {cancel}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onConfirm}
            >
              {confirm}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Confirm.propTypes = {
  title: PropTypes.string.isRequired,
  cancel: PropTypes.string.isRequired,
  confirm: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
