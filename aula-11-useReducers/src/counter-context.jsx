import { createContext, useReducer } from "react";
import CounterReducer, { initialState } from "./counter-reducer";

export const counterContext = createContext(initialState);

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <counterContext.Provider value={{ state, dispatch }}>
      {children}
    </counterContext.Provider>
  );
}
export default CounterProvider;
