import Pokemon from "./components/Pokemon";

function PokemonsLista(props) {
  const pokemonsMapeados = props.lista.map((pokemonImage) => (
    <Pokemon key={pokemonImage} image={`${pokemonImage}.jpg`} />
  ));
  return pokemonsMapeados;
}

function ManipulacaoLista() {
  const pokemons = ["pikachu", "charmander", "bulbasaur", "squirtle"];
  const pokemonsMapeados = pokemons.map((pokemonImage) => (
    <Pokemon key={pokemonImage} image={`${pokemonImage}.jpg`} />
  ));
  return (
    <div>
      <h4>Pokemon lista component</h4>
      <PokemonsLista lista={pokemons} />
      <h4>map com varaivel</h4>
      {pokemonsMapeados}
      <h4>map via interpolacao</h4>
      {pokemons.map((pokemonImage) => (
        <Pokemon key={pokemonImage} image={`${pokemonImage}.jpg`} />
      ))}
    </div>
  );
}

export default ManipulacaoLista;
