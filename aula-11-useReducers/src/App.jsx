import { useContext, useReducer } from "react";
import "./App.css";
import Counter from "./component/Counter";
import { counterContext } from "./counter-context";
import Users from "./component/Users";
function App() {
  const { state, dispatch } = useContext(counterContext);
  return (
    <div className="App">
      {/* <button onClick={() => dispatch({ type: "COUNTER_RESET" })}>
        resetar
      </button>
      <br />
      <Counter /> */}
      <Users />
    </div>
  );
}

export default App;
