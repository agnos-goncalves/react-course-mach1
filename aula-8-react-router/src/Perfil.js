import { useParams } from "react-router-dom";
function Page() {
  let { id } = useParams();
  return <div>perfil {id}</div>;
}
export default Page;
