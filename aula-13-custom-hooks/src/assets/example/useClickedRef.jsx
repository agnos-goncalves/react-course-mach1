import { useEffect, useRef, useState } from "react";

function useClickedRef() {
  const ref = useRef(null);
  const [clicked, setClicked] = useState(false);
  const handleclick = () => {
    setClicked(() => true);
  };
  useEffect(() => {
    ref.current.addEventListener("click", handleclick);
    return () => ref.current.removeEventListener("click", () => handleclick);
  }, []);
  return [ref, clicked];
}

function MyComponent() {
  const [ref, clicked] = useClickedRef();
  const [ref2, clicked2] = useClickedRef();
  return (
    <div>
      {clicked ? "clicado" : "..."}
      <br />
      <button ref={ref}>btn 1</button>
      <br />
      {clicked2 ? "clicado" : "..."}
      <br />
      <button ref={ref2}>btn 2</button>
    </div>
  );
}

export default MyComponent;
