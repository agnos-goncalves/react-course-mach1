import "./Artigo.css";

function Artigo(props) {
  return (
    <div className="box">
      <h4>{props.data.titulo}</h4>
      <span>{props.data.descricao}</span>
      <br />
      {props.destaque === true && <b>EM DESTAQUE</b>}
    </div>
  );
}
export default Artigo;
