import { useEffect, useRef } from "react";

function Example2() {
  const inputName = useRef(null);
  const inputPassword = useRef(null);
  function sendData(e) {
    e.preventDefault();
    console.log("input name", inputName.current.value);
    console.log("input password", inputPassword.current.value);
  }

  return (
    <form action="">
      <input type="text" name="nome" ref={inputName} />
      <input type="text" name="password" ref={inputPassword} />
      <button onClick={sendData}>submit</button>
    </form>
  );
}

export default Example2;
