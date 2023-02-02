import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);
  const onFocus = () => {
    console.log(inputRef, "inputRef");
    inputRef.current.focus();
  };
  useEffect(() => {
    inputRef.current.onclick = () => {
      alert("clicou");
    };
  }, []);
  return (
    <div className="App">
      <input type="text" defaultValue="" ref={inputRef} />
      <button onClick={onFocus}>aplicar foco</button>
    </div>
  );
}

export default App;
