import { createContext, useState } from "react";

const userContext = createContext({});

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "joao luiz",
    email: "joao@gmail.com",
    image:
      "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png",
    social: {
      facebook: "http://facebook",
      instagram: "http://instagram",
    },
  });
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

export default userContext;
