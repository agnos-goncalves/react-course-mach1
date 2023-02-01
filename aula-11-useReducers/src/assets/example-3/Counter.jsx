import { useContext } from "react";
import { CounterContext } from "./context";
function Counter() {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <strong>{state.count}</strong>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENTAR",
          })
        }
      >
        adicionar
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENTAR",
          })
        }
      >
        remover
      </button>
    </div>
  );
}
export default Counter;
