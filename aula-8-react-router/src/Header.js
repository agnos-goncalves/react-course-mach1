import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const GoPage = () => {
    navigate("sobre/mais-informacao");
  };
  return (
    <ul>
      <button onClick={GoPage}>ir a mais informacao</button>
      <li>
        <NavLink to="home">home</NavLink>
      </li>

      <li>
        <NavLink to="sobre">sobre</NavLink>
      </li>

      <li>
        <NavLink to="contato">contato</NavLink>
      </li>
      <li>
        <NavLink to="perfil/maria">maria</NavLink>
      </li>
    </ul>
  );
}

export default Header;
