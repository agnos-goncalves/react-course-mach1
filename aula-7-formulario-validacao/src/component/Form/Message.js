function Message(props) {
  return (
    <>
      {props.exibir && <span className="mensagem">{props.campo} inválido</span>}
    </>
  );
}
export default Message;
