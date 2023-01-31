import { useContext } from "react";
import userContext from "../user-context";
import "./SocialMedia.css";
function SocialMedia() {
  const { user } = useContext(userContext);
  return (
    <div className="social-media">
      <a href={user.social.facebook}>facebook</a>
      <a href={user.social.instagram}>instagram</a>
    </div>
  );
}
export default SocialMedia;
