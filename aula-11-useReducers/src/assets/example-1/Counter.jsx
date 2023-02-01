import { useReducer } from "react";
import CountReducer, { initialState } from "./reducer";

function Counter() {
  const [state, dispatch] = useReducer(CountReducer, initialState);
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
      <button
        onClick={() =>
          dispatch({
            type: "RESET",
          })
        }
      >
        resetar
      </button>
    </div>
  );
}
export default Counter;
