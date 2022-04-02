import { useEffect, useState } from 'react';

export const STATE_LOADING = 'loading';
export const STATE_ERROR = 'error';
export const STATE_READY = 'ready';

export function useImage(src) {
  const [state, setState] = useState(STATE_LOADING);
  const [dimensions, setDimensions] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const preloader = new Image();

    function onLoad() {
      const { width, height } = preloader;

      setDimensions({ width, height });
      setState(STATE_READY);
    }
    function onError() {
      setState(STATE_ERROR);
    }

    preloader.addEventListener('load', onLoad);
    preloader.addEventListener('error', onError);
    preloader.setAttribute('src', src);

    return () => {
      preloader.removeEventListener('load', onLoad);
      preloader.removeEventListener('error', onError);
    };
  }, [src]);

  return [dimensions, state];
}
