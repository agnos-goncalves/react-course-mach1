import "./Pokemon.css";
function Pokemon(props) {
  return (
    <li
      className="pokemon-item"
      onClick={() => props.escutarClick(props.image)}
    >
      <img src={props.image} alt="" />
    </li>
  );
}
export default Pokemon;
