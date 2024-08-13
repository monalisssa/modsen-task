import { useEffect } from 'react';

export function useTimer(cb: () => void, ms: number) {
  useEffect(() => {
    const id = setTimeout(cb, ms);
    return () => clearTimeout(id);
  }, [cb, ms]);
}
