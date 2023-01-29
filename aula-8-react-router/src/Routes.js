import React from "react";
import { Route, Routes } from "react-router-dom";
// PAGES
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import MaisInformacao from "./pages/MaisInformacao";
import Contato from "./pages/Contato";
import Perfil from "./pages/Perfil";
import NotFound from "./pages/NotFound";
import Formulario from "./pages/Formulario";
import Formulario2 from "./pages/Formulario2";

const Routers = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="home" initial element={<Home />} />
      <Route path="sobre" element={<Sobre />} />
      <Route path="sobre/mais-informacao" element={<MaisInformacao />} />
      <Route path="contato" element={<Contato />}>
        <Route path="formulario" element={<Formulario />} />
        <Route path="formulario2" element={<Formulario2 />} />
      </Route>
      <Route path="perfil/:nome" element={<Perfil />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
