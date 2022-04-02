import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { useForm } from './Form';

export function InputHidden({ name, value }) {
  const { register, unregister } = useForm();

  useEffect(() => {
    register(
      name,
      () => true,
      (value) => value,
    );

    return () => {
      unregister(name);
    };
  }, []);

  return <input type="hidden" name={name} value={value} />;
}

InputHidden.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
