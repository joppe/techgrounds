import './form.css';

import PropTypes from 'prop-types';
import React, { createContext, useContext, useRef } from 'react';

import { transform } from './data/transform';

const FormContext = createContext({ register: () => {}, unregister: () => {} });

export function Form({ onSubmit = () => {}, onError = () => {}, children }) {
  const form = useRef();
  const elements = useRef({});

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(form.current);
    const isValid = Object.keys(elements.current).reduce((acc, name) => {
      const result = elements.current[name].validator(formData.get(name));

      return acc && result;
    }, true);

    if (isValid) {
      const raw = Object.keys(elements.current).reduce((acc, name) => {
        acc[name] = elements.current[name].transform(formData.get(name));

        return acc;
      }, {});
      const data = await transform(raw);

      onSubmit(data);
    } else {
      onError();
    }
  }

  function register(id, validator, transform = (value) => value) {
    elements.current[id] = { validator, transform };
  }

  function unregister(id) {
    delete elements.current[id];
  }

  return (
    <FormContext.Provider value={{ register, unregister }}>
      <form className="modal-content" onSubmit={handleSubmit} ref={form}>
        {children}
      </form>
    </FormContext.Provider>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
};

export function useForm() {
  return useContext(FormContext);
}
