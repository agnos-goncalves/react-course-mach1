/* eslint-disable no-useless-escape */
import { useEffect, useState } from "react";
import Message from "./Message";
import "./style.css";

function invalidoNome(nome) {
  return nome.length <= 3;
}
function invalidaSenha(senha) {
  return senha.length <= 4;
}
function invalidoEmail(email) {
  return !email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}

function Form() {
  const info = {
    title: "Cadastro",
  };
  const [formValido, setFormValido] = useState(false);
  const [formData, setFormData] = useState({
    nome: {
      valor: "",
      invalido: false,
      exibirMensagem: true,
    },
    email: {
      valor: "",
      invalido: false,
      exibirMensagem: true,
    },
    senha: {
      valor: "",
      invalido: false,
      exibirMensagem: true,
    },
  });

  const salvarValorCampo = (e) => {
    const { name, value } = e.target;
    let invalido = false;
    if (name === "nome") {
      invalido = invalidoNome(value);
    } else if (name === "senha") {
      invalido = invalidaSenha(value);
    } else if (name === "email") {
      invalido = invalidoEmail(value);
    }
    setFormData({
      ...formData,
      [name]: {
        valor: value,
        invalido: invalido,
        exibirMensagem: invalido,
      },
    });
  };
  const removerMensagem = (e) => {
    const { name } = e.target;
    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        exibirMensagem: false,
      },
    });
  };
  const salvarDados = (e) => {
    e.preventDefault();
    if (formValido) {
      console.log("pegar dados", formData);
    }
  };
  useEffect(() => {
    // const camposValidos =
    //   formData.nome.invalido ||
    //   formData.email.invalido ||
    //   formData.senha.invalido ||
    //   formData.nome.valor === "" ||
    //   formData.email.valor === "" ||
    //   formData.senha.valor === "";

    // setFormValido(!camposValidos);

    // const listaValidacaoCampos = [
    //   formData.nome.invalido,
    //   formData.email.invalido,
    //   formData.senha.invalido,
    // ];
    // const todosCamposValidos = listaValidacaoCampos.every((campo) => campo);
    // setFormValido(todosCamposValidos);

    const temCampoInvalido =
      formData.nome.invalido ||
      formData.email.invalido ||
      formData.senha.invalido ||
      formData.nome.valor === "" ||
      formData.email.valor === "" ||
      formData.senha.valor === "";
    setFormValido(!temCampoInvalido);
  }, [formData]);
  return (
    <form action="" className="formulario" onSubmit={salvarDados}>
      <h4>{info.title}</h4>
      <fieldset>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={formData.nome.valor}
          onFocus={removerMensagem}
          onChange={salvarValorCampo}
        />
        <Message
          exibir={formData.nome.exibirMensagem && formData.nome.invalido}
          campo="Nome"
        />
      </fieldset>
      <fieldset>
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          value={formData.email.valor}
          onFocus={removerMensagem}
          onChange={salvarValorCampo}
        />
        <Message
          exibir={formData.email.exibirMensagem && formData.email.invalido}
          campo="Email"
        />
      </fieldset>
      <fieldset>
        <label>Senha</label>
        <input
          type="password"
          name="senha"
          value={formData.senha.valor}
          onFocus={removerMensagem}
          onChange={salvarValorCampo}
        />
        <Message
          exibir={formData.senha.exibirMensagem && formData.senha.invalido}
          campo="Senha"
        />
      </fieldset>
      <input type="submit" value="Registrar" disabled={!formValido} />
    </form>
  );
}

export default Form;
