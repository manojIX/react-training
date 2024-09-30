import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchFunction = async () => {
      try {
        const response = await fetch(url);
        setLoading(false);
        const data = await response.json();
        setData(data);
      } catch (e) {
        setError(e);
      }
    };
    fetchFunction();
  }, []);
  return { loading, error, data };
}
