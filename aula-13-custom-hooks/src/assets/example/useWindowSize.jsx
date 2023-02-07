import { useEffect, useState } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function MyComponent() {
  const windowSize = useWindowSize();
  return (
    <div>
      <h1>resize da tela</h1>
      width : {windowSize.width}
      height : {windowSize.height}
    </div>
  );
}

export default MyComponent;
