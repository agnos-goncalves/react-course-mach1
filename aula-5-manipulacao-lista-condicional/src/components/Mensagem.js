import "./Mensagem.css";
function Mensagem(props) {
  return (
    <div>
      {props.sucesso && (
        <h4 className="mensagem-info sucesso">{props.texto}</h4>
      )}
      {props.error && <h4 className="mensagem-info error">{props.texto}</h4>}
    </div>
  );
}
export default Mensagem;
