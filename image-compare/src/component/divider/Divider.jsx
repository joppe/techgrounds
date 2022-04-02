import './divider.css';

import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

export const Divider = React.memo(function Divider({
  position = 50,
  total,
  setSize,
}) {
  const outer = useRef();
  const inner = useRef();
  let offset = 0;

  function start(event) {
    offset = inner.current.offsetLeft - event.clientX;
    outer.current.addEventListener('mousemove', move, true);
  }
  function stop() {
    outer.current.removeEventListener('mousemove', move, true);
  }

  function move(event) {
    const left = event.clientX + offset;
    const percentage = (left / total) * 100;

    inner.current.style.left = `${percentage}%`;

    setSize(percentage);
  }

  useEffect(() => {
    if (!outer.current) {
      return;
    }

    outer.current.addEventListener('mouseup', stop, true);
    inner.current.addEventListener('mousedown', start, true);

    return () => {
      outer.current.removeEventListener('mouseup', stop, true);
      inner.current.removeEventListener('mousedown', start, true);
      outer.current.removeEventListener('mousemove', move, true);
    };
  }, []);

  return (
    <div ref={outer} className="divider">
      <div ref={inner} className="ruler" style={{ left: `${position}%` }} />
    </div>
  );
});
Divider.propTypes = {
  setSize: PropTypes.func,
  position: PropTypes.number,
  total: PropTypes.number,
};
