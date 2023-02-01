import { createContext, useReducer } from "react";
import CountReducer, { initialState } from "./reducer";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(CountReducer, initialState);
  return (
    <CounterContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default CounterProvider;
