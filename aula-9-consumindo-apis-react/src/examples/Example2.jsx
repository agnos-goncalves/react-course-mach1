import { useState, useEffect } from "react";

// Carregando dados com parametro dinamico
function Example2({ id }) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [id]);

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.description}</div>
    </div>
  );
}

export default Example2;
