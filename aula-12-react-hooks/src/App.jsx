import { useCallback, useMemo, useState } from "react";
import ProductList from "./ProductList";
import Profile from "./Profile";

function App() {
  const [cart, setCard] = useState({
    items: [
      {
        name: "product 1",
        price: 30,
      },
      {
        name: "product 2",
        price: 40,
      },
    ],
    user: "maria estrela",
  });
  const addProduct = useCallback(() => {
    setCard({
      user: cart.user,
      items: [
        ...cart.items,
        {
          name: `product ${cart.items.length + 1}`,
          price: 20,
        },
      ],
    });
  }, [cart.items]);
  function updateUsuario() {
    setCard({
      user: "usuario alterado",
      items: [...cart.items],
    });
  }
  return (
    <div className="App">
      <button onClick={updateUsuario}>alterar usuario</button>
      <Profile user={cart.user} />
      <ProductList items={cart.items} onAddProduct={cart.addProduct} />
    </div>
  );
}

export default App;
