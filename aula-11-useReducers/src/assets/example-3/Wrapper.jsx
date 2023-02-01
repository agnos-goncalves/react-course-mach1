import Counter from "./Counter";
import { CounterContext } from "./context";
import { useContext } from "react";

function Wrapper() {
  const { dispatch } = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "RESET",
          })
        }
      >
        resetar
      </button>
      <Counter />
    </div>
  );
}
export default Wrapper;
