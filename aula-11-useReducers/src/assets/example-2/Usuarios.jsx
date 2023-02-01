import { useReducer } from "react";
import reducer, { initialState } from "./reducer";

function Usuarios({ users }) {
  return (
    <div>
      lista Usuarios
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
export default Usuarios;
