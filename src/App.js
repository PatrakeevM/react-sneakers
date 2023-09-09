import Cart from "./components/Cart";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://64f9a4064098a7f2fc14c0b0.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setcartItems((prev) => [...prev, obj]);
  };

  return (
    <>
      <div className="container clear">
        {cartOpened && (
          <Cart
            items={cartItems}
            onClose={() => setCartOpened(false)}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="searchWrapper">
              <img className="p-15" src="/img/search.svg" alt="Поиск" />
              <input className="opacity-5" placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {items.map((item) => (
              <Card
                imageUrl={item.imageUrl}
                title={item.title}
                price={item.price}
                id={item.id}
                onFavorite={() => alert("Добавленно в избранное")}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
