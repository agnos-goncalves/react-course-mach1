import Perfil from "./Perfil";
import MoreInfo from "./MoreInfo";
import { UserProvider } from "./UserContext";

function Example2() {
  return (
    <UserProvider>
      <Perfil />
      <MoreInfo />
    </UserProvider>
  );
}
export default Example2;
