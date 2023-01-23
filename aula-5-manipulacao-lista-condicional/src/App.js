import Message from "./components/Mensagem";
import Pokemon from "./components/Pokemon";
import PokemonDestaque from "./components/PokemonDestaque";

function PokemonPorFuncao(props) {
  const { tipo } = props;
  const MyPokemon = () => {
    if (tipo === "eletrico") {
      return <PokemonDestaque image="pikachu.jpg" />;
    } else if (tipo === "fogo") {
      return <Pokemon image="charmander.jpg" />;
    } else {
      return <Pokemon image="squirtle.jpg" />;
    }
  };
  return MyPokemon();
}

function App() {
  const tipo = "fogo";
  const meuPokemonPorVariavel = tipo === "fogo" && (
    <Pokemon image="charmander.jpg" />
  );
  const pokemons = ["pikachu", "charmander", "bulbasaur", "squirtle"];
  const pokemonsMapeados = pokemons.map((pokemon) => (
    <Pokemon key={pokemon} image={`${pokemon}.jpg`} />
  ));
  return (
    <div>
      <h4>Pokemon por variavel</h4>
      {meuPokemonPorVariavel}
      <h4>Pokemon mapeado</h4>
      {pokemonsMapeados}
      <h4>Pokemon mapeado JSX</h4>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon} image={`${pokemon}.jpg`} />
      ))}
      <h4>Pokemon retornado de funcao</h4>
      {PokemonPorFuncao("fogo")}
    </div>
  );
}

export default App;
