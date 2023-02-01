import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import Usuarios from "./Usuarios";
function Example2() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADICIONAR",
            payload: `user ${state.users.length + 1}`,
          })
        }
      >
        add user
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "REMOVER",
            payload: `user ${state.users.length - 1}`,
          })
        }
      >
        remove user
      </button>
      <Usuarios users={state.users} />
    </div>
  );
}
export default Example2;
