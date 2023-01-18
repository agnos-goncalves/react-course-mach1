import "./App.css";
import Artigo from "./components/Artigo";
import Titulo from "./components/Titulo";

function App() {
  const artigosLista = [
    {
      titulo: "Meu artigo 1",
      descricao: "lorem ipsuidsmd dummer",
      destaque: false,
    },
    {
      titulo: "Meu artigo 2",
      descricao: "lorem ipsuidsmd dummer",
      destaque: true,
    },
    {
      titulo: "Meu artigo 3",
      descricao: "lorem ipsuidsmd dummer",
      destaque: false,
    },
  ];
  return (
    <div>
      <Titulo />
      <div className="grid">
        {artigosLista.map((artigo) => (
          <Artigo data={artigo} />
        ))}
      </div>
    </div>
  );
}

export default App;
