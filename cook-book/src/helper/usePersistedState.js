import { useEffect, useReducer } from 'react';

export function usePersistedState(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, () => {
    const storedState = window.localStorage.getItem(key);

    if (storedState === null) {
      return initialState;
    }

    return JSON.parse(storedState);
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state, dispatch]);

  return [state, dispatch];
}
