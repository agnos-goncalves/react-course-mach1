import { useLocation } from "react-router-dom";
function Page() {
  let location = useLocation();
  return <div>not found {location.pathname}</div>;
}
export default Page;
