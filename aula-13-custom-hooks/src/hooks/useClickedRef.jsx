import { useEffect, useRef, useState } from "react";
function useClickedRef() {
  const ref = useRef(null);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
  };
  // executar quando renderizar o component
  useEffect(() => {
    ref.current.addEventListener("click", handleClick);
    // executa quando component é destruido
    return () => ref.current.removeEventListener("click", handleClick);
  }, []);

  return [ref, clicked, setClicked];
}

export default useClickedRef;
