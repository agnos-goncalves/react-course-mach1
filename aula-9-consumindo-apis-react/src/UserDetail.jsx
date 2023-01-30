import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, []);
  return (
    <div>
      <div>
        <strong>name </strong>
        <span>{user.name}</span>
      </div>
      <div>
        <strong>username </strong>
        <span>{user.username}</span>
      </div>
      <div>
        <strong>email </strong>
        <span>{user.email}</span>
      </div>
    </div>
  );
}
export default UserDetail;
