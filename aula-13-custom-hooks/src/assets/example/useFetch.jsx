import { useEffect, useState } from "react";

function useFetch(url) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setResponse(json);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, [url]);

  return { response, error, loading };
}

function MyComponent() {
  const { response, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );
  if (loading) {
    return "carregando...";
  }
  if (error) {
    return "api error";
  }
  if (response) {
    return <div>{response.map((post) => post.title)}</div>;
  }
}
export default MyComponent;
