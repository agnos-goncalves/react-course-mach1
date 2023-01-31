import { createContext } from "react";

const UserContext = createContext({
  name: "my user",
  age: 20,
});
export default UserContext;
