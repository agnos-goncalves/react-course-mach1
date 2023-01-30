import { Routes, Route } from "react-router-dom";
import UserDetail from "./UserDetail";
import Users from "./Users";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default Router;
