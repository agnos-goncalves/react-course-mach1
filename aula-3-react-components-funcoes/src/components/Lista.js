import Item from "./Item";

function Lista(props) {
  return (
    <ul>
      {props.textos.map((texto) => (
        <Item texto={texto} ativo={true} />
      ))}
    </ul>
  );
}
export default Lista;
