import { useContext } from "react";
import { userContext } from "../user-context";

function Users() {
  const { state, dispatch } = useContext(userContext);
  const addUser = () => {
    const numberUser = state.length + 1;
    const user = {
      name: "user",
      lastName: `lorem summer ${numberUser}`,
    };
    dispatch({
      type: "USER_ADD",
      payload: user,
    });
  };
  const removerUser = () => {
    dispatch({
      type: "USER_REMOVE",
    });
  };
  return (
    <>
      <button onClick={() => addUser()}>adicionar usuario</button>
      <ul>
        {state.map((user) => (
          <li key={state.length + 1}>{user.fullName}</li>
        ))}
      </ul>
      <button onClick={() => removerUser()}>remover ultimo</button>
    </>
  );
}
export default Users;
