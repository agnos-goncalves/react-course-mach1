import { useState } from "react";
import "./App.css";

// ATRIBUTO defaultValue ou value
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    password: "",
  });
  // eslint-disable-next-line no-unused-vars
  const handlerChangeInputWithIf = (e) => {
    const { name, value } = e.target;
    if (name === "firstName") {
      setFormData({
        ...formData,
        firstName: value,
      });
    } else if (name === "email") {
      setFormData({
        ...formData,
        email: value,
      });
    } else if (name === "password") {
      setFormData({
        ...formData,
        password: value,
      });
    }
  };
  const handlerChangeInput = (e) => {
    const { name, value } = e.target;
    const eventos = {
      firstName: () => {
        setFormData({
          ...formData,
          firstName: value,
        });
      },
      email: () => {
        setFormData({
          ...formData,
          email: value,
        });
      },
      password: () => {
        setFormData({
          ...formData,
          password: value,
        });
      },
    };
    eventos[name]();
  };
  return (
    <div className="App">
      <form action="">
        <fieldset>
          <label htmlFor="firstName">Nome</label>
          <input
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handlerChangeInput}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handlerChangeInput}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Senha</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handlerChangeInput}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
