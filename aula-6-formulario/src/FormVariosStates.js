import { useState } from "react";
import "./App.css";

// ATRIBUTO defaultValue ou value
function App() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const enviarDados = (e) => {
    e.preventDefault();
    console.log("GET DATA FORM", firstName, email, password);
  };
  return (
    <div className="App">
      <form action="" onSubmit={enviarDados}>
        <fieldset>
          <label htmlFor="firstName">Nome</label>
          <input
            name="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Senha</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <button type="submit">enviar dados</button>
      </form>
    </div>
  );
}

export default App;
