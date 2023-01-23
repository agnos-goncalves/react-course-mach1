import "./PokemonDestaque.css";
function Pokemon(props) {
  return (
    <li className="pokemon-destaque">
      <img src={props.image} alt="" />
    </li>
  );
}
export default Pokemon;
