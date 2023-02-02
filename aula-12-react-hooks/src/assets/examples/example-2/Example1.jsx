import { useEffect, useRef } from "react";

function Example1() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  useEffect(() => {
    inputRef.current.onclick = () => {
      alert();
    };
  }, []);
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </>
  );
}

export default Example1;
