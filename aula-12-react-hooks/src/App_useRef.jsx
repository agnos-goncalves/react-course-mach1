import { useEffect, useRef, useState } from "react";

function App() {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  function sendData(e) {
    e.preventDefault();
    console.log(emailRef.current.value, passRef.current.value);
  }
  alert("render render render");

  return (
    <div className="App">
      <form action="" onSubmit={sendData}>
        <label htmlFor="">Email:</label>
        <input type="email" ref={emailRef} />
        <br />
        <label htmlFor="">Password:</label>
        <input type="password" ref={passRef} />
        <br />
        <button>registrar</button>
      </form>
    </div>
  );
}

export default App;
