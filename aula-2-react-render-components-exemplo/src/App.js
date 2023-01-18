import "./App.css";
import Artigo from "./components/Artigo";
import Titulo from "./components/Titulo";

function App() {
  const artigoData = {
    titulo: "Meu artigo 1",
    descricao: "lorem ipsuidsmd dsudushudhushudhshuds",
    destaque: false,
  };
  const artigosLista = [
    {
      titulo: "Meu artigo 1",
      descricao: "lorem ipsuidsmd dsudushudhushudhshuds",
      destaque: false,
    },
    {
      titulo: "Meu artigo 2",
      descricao: "lorem ipsuidsmd dsudushudhushudhshuds",
      destaque: true,
    },
    {
      titulo: "Meu artigo 3",
      descricao: "lorem ipsuidsmd dsudushudhushudhshuds",
      destaque: false,
    },
    {
      titulo: "Meu artigo 3",
      descricao: "lorem ipsuidsmd dsudushudhushudhshuds",
      destaque: false,
    },
    {
      titulo: "Meu artigo 3",
      descricao: "lorem ipsuidsmd dsudushudhushudhshuds",
      destaque: false,
    },
    {
      titulo: "Meu artigo 3",
      descricao: "lorem ipsuidsmd dsudushudhushudhshuds",
      destaque: false,
    },
  ];
  return (
    <div>
      <Titulo />
      <div className="grid">
      <Artigo data={artigo}>
      <Artigo/>
      </div>
    </div>
  );
}

export default App;
