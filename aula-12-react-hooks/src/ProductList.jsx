import { useMemo } from "react";

function ProductList(props) {
  const { items, onAddProduct } = props;
  const priceTotal = useMemo(
    () =>
      items.reduce(
        (prevValue, currentProduct) => prevValue + currentProduct.price,
        0
      ),
    [items]
  );
  return (
    <>
      <span>
        <br />
        <strong>Total: </strong>
        {priceTotal}
      </span>
      <ul className="ProductList">
        {items.map((product) => (
          <li>{product.name}</li>
        ))}
      </ul>
      <button onClick={onAddProduct}>adicionar produto</button>
    </>
  );
}

export default ProductList;
