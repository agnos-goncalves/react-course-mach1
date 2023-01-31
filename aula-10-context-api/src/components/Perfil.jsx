import { useContext } from "react";
import userContext from "../user-context";
import Avatar from "./Avatar";
import MoreInfo from "./MoreInfo";
import "./Perfil.css";
function Perfil() {
  const { user, setUser } = useContext(userContext);
  const changeName = () => {
    setUser({ ...user, name: "Nome alterado" });
  };
  return (
    <div className="perfil">
      {user.name}
      <button onClick={() => changeName()}>alterar nome</button>
      <Avatar />
      <MoreInfo />
    </div>
  );
}
export default Perfil;
