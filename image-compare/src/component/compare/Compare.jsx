import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { STATE_ERROR, STATE_LOADING, useImage } from '../../hook/useImage';
import { Divider } from '../divider/Divider';
import { Error } from '../error/Error';
import { Image } from '../image/Image';
import { Loading } from '../loading/Loading';

const INITIAL_SIZE = 50;

export function Compare({ src, name }) {
  const [size, setSize] = useState(INITIAL_SIZE);
  const [dimensions, state] = useImage(src);

  if (state === STATE_LOADING) {
    return <Loading />;
  }

  if (state === STATE_ERROR) {
    return <Error />;
  }

  return (
    <div
      className="position-relative overflow-hidden d-flex"
      style={{ ...dimensions }}
    >
      <Image src={src} alt={name} />
      <Image src={src} alt={name} filter={'grayscale(100%)'} size={size} />
      <Divider
        position={INITIAL_SIZE}
        total={dimensions.width}
        setSize={setSize}
      />
    </div>
  );
}
Compare.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
};
