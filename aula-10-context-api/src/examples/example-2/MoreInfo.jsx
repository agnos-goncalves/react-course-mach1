import { useContext, useEffect } from "react";
import UserContext from "./UserContext";
function MoreInfo() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    setUser((state) => ({ ...state, name: "change name" }));
  }, []);
  return (
    <div>
      <strong>{user.name}</strong>
    </div>
  );
}
export default MoreInfo;
