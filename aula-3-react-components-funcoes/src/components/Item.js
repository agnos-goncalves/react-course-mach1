import "./Item.css";
function Item(props) {
  return (
    <li>
      {props.ativo === false && <span className="inativo">{props.texto}</span>}
      {props.ativo === true && <span className="ativo">{props.texto}</span>}
    </li>
  );
}
export default Item;
