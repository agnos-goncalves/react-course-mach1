import { useContext } from "react";
import UserContext from "./UserContext";
function MoreInfo() {
  const user = useContext(UserContext);
  return (
    <div>
      <strong>{user.name}</strong>
    </div>
  );
}
export default MoreInfo;
