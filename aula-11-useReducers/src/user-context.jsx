import { createContext, useReducer } from "react";
import UserReducer, { initialState } from "./user-reducer";

export const userContext = createContext(initialState);

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  );
}
export default UserProvider;
