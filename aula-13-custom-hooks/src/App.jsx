import { useEffect, useState } from "react";
import "./App.css";
import useDebounce from "./hooks/useDebounce";
function App() {
  const [term, setTerm] = useState("");
  const debouncedValue = useDebounce(term, 1000);
  useEffect(() => {
    alert("chamar api da busca");
  }, [debouncedValue]);
  return (
    <div className="App">
      <input type="search" onChange={(e) => setTerm(e.target.value)} />
    </div>
  );
}

export default App;
