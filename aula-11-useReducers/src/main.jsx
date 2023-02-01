import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CounterProvider from "./counter-context";
import "./index.css";
import UserProvider from "./user-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <CounterProvider>
      <App />
    </CounterProvider>
  </UserProvider>
);
