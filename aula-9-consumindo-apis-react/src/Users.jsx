import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentUserID, setCurrentUserID] = useState(1);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({
    username: "....",
  });
  // executar apenas quando inicializar o componente
  // listar todos usuarios
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        // throw new Error("Api error 500");
        setTimeout(() => {
          setUsers(users);
          setLoading(true);
        }, 500);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${currentUserID}`)
      .then((response) => response.json())
      .then((user) => setSelectedUser(user));
  }, [currentUserID]);

  return (
    <div className="App">
      {loading ? (
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id} onClick={() => setCurrentUserID(user.id)}>
                {user.username}
              </li>
            ))}
          </ul>
          <div>
            <strong>usuario selecionado: </strong>
            <span>
              <Link to={`/users/${selectedUser.id}`}>
                {selectedUser.username}
              </Link>
            </span>
            {/* <span onClick={() => navigate(`/users/${selectedUser.id}`)}>
              {selectedUser.username}
            </span> */}
          </div>
        </div>
      ) : (
        <h1>{error ? error : "Carregando dados..."}</h1>
      )}
    </div>
  );
}

export default App;
