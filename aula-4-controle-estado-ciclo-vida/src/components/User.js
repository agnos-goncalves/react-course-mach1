import { useEffect } from "react";

function User(props) {
  // amounting
  useEffect(() => {
    console.log("criando component");
  }, []);

  // update
  useEffect(() => {
    console.log("prop nome alterada");
  }, [props.nome]);

  // unmounting
  useEffect(() => {
    return () => {
      console.log("component destruido");
    };
  }, []);

  return (
    <div>
      <strong>{props.nome}</strong>
    </div>
  );
}
export default User;
