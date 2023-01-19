import { useState } from "react";
import User from "./components/User";

function App() {
  const [valor, setValor] = useState("marcos");
  const [exibir, setExibir] = useState(true);
  const handleChange = (e) => {
    setValor(e.target.value);
  };
  const handleButtonClick = (e) => {
    if (exibir) {
      setExibir(false);
    } else {
      setExibir(true);
    }
  };
  return (
    <div>
      <input
        type="text"
        defaultValue={valor}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button type="button" onClick={() => handleButtonClick()}>
        esconder component
      </button>
      {exibir && <User nome={valor} />}
    </div>
  );
}
export default App;
