import { useCallback, useEffect, useState } from 'react';

const useFetch = (fetchFunction: () => any, deps: any = []) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = useCallback(fetchFunction, deps);
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const data = await fetchData();
        setData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [fetchData]);

  return [loading, data, error];
};

export default useFetch;
