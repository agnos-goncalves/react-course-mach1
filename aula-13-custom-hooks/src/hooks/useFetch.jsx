import { useEffect, useState } from "react";

function useFetch(url) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // request api
  async function fetchData() {
    try {
      const request = await fetch(url);
      const response = await request.json();
      setResponse(response);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  // chama sempre que a url mudar
  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, loading, error };
}

export default useFetch;
