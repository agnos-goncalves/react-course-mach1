import { useState, useEffect } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  // executa sempre que value ou delay é alterado
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    // quando destroi o component
    return () => clearInterval(handler);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
