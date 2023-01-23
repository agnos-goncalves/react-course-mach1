import Pokemon from "./Pokemon";
function ManipulacaoEventos() {
  const manipularClickGeral = (pokemonName) => {
    alert(`manipulando clique ${pokemonName}`);
  };
  return (
    <div>
      <Pokemon
        image="pikachu.jpg"
        escutarClick={(pokemonName) => manipularClickGeral(pokemonName)}
      />
      <Pokemon
        image="charmander.jpg"
        escutarClick={(pokemonName) => manipularClickGeral(pokemonName)}
      />
    </div>
  );
}

export default ManipulacaoEventos;
