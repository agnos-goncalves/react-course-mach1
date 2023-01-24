import "./App.css";

// ATRIBUTO defaultValue ou value
function App() {
  const enviarDados = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    for (const key of form.keys()) {
      console.log("campo:", key, "valor:", form.get(key));
    }
  };
  return (
    <div className="App">
      <form action="" onSubmit={enviarDados}>
        <fieldset>
          <label htmlFor="firstName">Nome</label>
          <input name="firstName" type="text" defaultValue="" />
        </fieldset>
        <fieldset>
          <label htmlFor="email">E-mail</label>
          <input name="email" type="email" defaultValue="" />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Senha</label>
          <input name="password" type="password" defaultValue="" />
        </fieldset>
        <button type="submit">enviar dados</button>
      </form>
    </div>
  );
}

export default App;
