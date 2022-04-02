import { useEffect, useState } from 'react';

import { useForm } from '../Form';

export function useValidation(
  name,
  validityChecker,
  transform = (value) => value,
) {
  const { register, unregister } = useForm();
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    register(
      name,
      (value) => {
        if (validityChecker(value)) {
          return true;
        }

        setHasError(true);

        return false;
      },
      transform,
    );

    return () => {
      unregister(name);
    };
  }, []);

  return [hasError, setHasError];
}
