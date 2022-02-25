import { useRef } from 'react';

export function useId(initial = 0) {
  const id = useRef(initial);

  return {
    generate: () => {
      id.current += 1;

      return id.current;
    },
  };
}
