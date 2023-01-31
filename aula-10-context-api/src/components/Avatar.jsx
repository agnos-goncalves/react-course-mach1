import { useContext } from "react";
import "./Avatar.css";
import userContext from "../user-context";
function Avatar() {
  const { user } = useContext(userContext);
  return (
    <div className="avatar">
      <img src={user.image} alt="" />
    </div>
  );
}
export default Avatar;
