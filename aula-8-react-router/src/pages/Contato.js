import { Link, Outlet } from "react-router-dom";
function Page() {
  return (
    <div>
      <h4>Meu contato</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, animi
        quam? Doloribus tempore, cum labore magni, reiciendis corrupti
        voluptatem fugiat animi dicta nisi sequi odio corporis maiores aperiam
        voluptate? Possimus.
      </p>
      <Link to="formulario">formulario 1</Link>
      <Link to="formulario2">formulario 2</Link>
      <br />
      <Outlet />
    </div>
  );
}
export default Page;
