import { useState } from "react";
import "./App.css";
import Perfil from "./components/Perfil";
import { UserProvider } from "./user-context";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <Perfil />
      </UserProvider>
    </div>
  );
}

export default App;
