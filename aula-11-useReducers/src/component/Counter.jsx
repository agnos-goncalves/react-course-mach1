import { useContext } from "react";
import { counterContext } from "../counter-context";

function Counter() {
  const { state, dispatch } = useContext(counterContext);
  return (
    <>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "COUNTER_REMOVE",
          })
        }
      >
        -
      </button>
      <span> {state.counter} </span>
      <button
        type="button"
        onClick={() =>
          dispatch({
            type: "COUNTER_ADD",
          })
        }
      >
        +
      </button>
    </>
  );
}
export default Counter;
