import { useParams } from "react-router-dom";

function Page() {
  const params = useParams();
  const usuarios = {
    agnos: {
      nome: "agnos goncalves",
      descricao: "trabalho com programacao",
    },
    joao: {
      nome: "joao silva",
      descricao: "trabalho de uber",
    },
    maria: {
      nome: "maria carvalho",
      descricao: "sou advogada",
    },
  };
  return (
    <div>
      <h4>{usuarios[params.nome].nome}</h4>
      <p>{usuarios[params.nome].descricao}</p>
    </div>
  );
}
export default Page;
