import { useState } from "react";
import "./App.css";

// ATRIBUTO defaultValue ou value
function App() {
  const handlerInputValue = (e) => {
    console.log("onchange", e.target.value);
  };
  const enviarDados = (e) => {
    console.log("enviar dados", e);
    e.preventDefault();
  };
  return (
    <div className="App">
      <form action="" onSubmit={enviarDados}>
        <label>Texto</label>
        <input
          name="nome"
          type="text"
          defaultValue=""
          onChange={handlerInputValue}
        />
        <br />
        <label>Number</label>
        <input
          name="numero"
          type="number"
          defaultValue=""
          onChange={handlerInputValue}
        />
        <br />
        <label>Textarea</label>
        <textarea
          name="mensagem"
          placeholder="inserir meu texto aqui"
          onChange={handlerInputValue}
        />
        <br />
        <label>Checkbox</label>
        <input
          type="checkbox"
          name="habilitado"
          onChange={handlerInputValue}
          defaultValue="yes"
        />
        habilitado?
        <br />
        <label>Radio</label>
        <fieldset onChange={handlerInputValue}>
          <label>Selecione o perfil</label>
          <br />
          <input name="perfil" type="radio" defaultValue="professor" />
          professor
          <input name="perfil" type="radio" defaultValue="aluno" />
          aluno
        </fieldset>
        <br />
        <label>Selecionar cidade</label>
        <select name="cidade" onChange={handlerInputValue}>
          <option value="">nenhuma cidade selecionada</option>
          <option value="sao_paulo">sao paulo</option>
          <option value="rio_de_janeiro">rio de janeiro</option>
        </select>
        <br />
        <br />
        <button type="submit">enviar dados</button>
      </form>
    </div>
  );
}

export default App;
