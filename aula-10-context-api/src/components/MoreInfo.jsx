import { useContext } from "react";
import userContext from "../user-context";
import "./MoreInfo.css";
import SocialMedia from "./SocialMedia";
function MoreInfo() {
  const { user } = useContext(userContext);
  return (
    <div className="more-info">
      <div className="more-info-line">
        <strong>nome: </strong>
        <span>{user.name}</span>
        <br />
      </div>
      <div className="more-info-line">
        <strong>email: </strong>
        <span>{user.email}</span>
        <br />
      </div>
      <SocialMedia />
    </div>
  );
}
export default MoreInfo;
