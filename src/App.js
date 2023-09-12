import axios from "axios";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://64f9a4064098a7f2fc14c0b0.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://64f9a4064098a7f2fc14c0b0.mockapi.io/cart")
      .then((res) => {
        setcartItems(res.data);
      });
  }, []);

  const onAddToFavorites = (obj) => {
    axios.post("https://64f9a4064098a7f2fc14c0b0.mockapi.io/favorites", obj);
    setcartItems((prev) => [...prev, obj]);
  };

  const onAddToCart = (obj) => {
    axios.post("https://64f9a4064098a7f2fc14c0b0.mockapi.io/cart", obj);
    setcartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://64f9a4064098a7f2fc14c0b0.mockapi.io/cart/${id}`);
    setcartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <div className="container clear">
        {cartOpened && (
          <Cart
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>
              {searchValue
                ? `Результаты по запросу: ${searchValue}`
                : "Все кроссовки"}
            </h1>
            <div className="searchWrapper">
              <img className="p-15" src="/img/search.svg" alt="Поиск" />
              <input
                className="opacity-5"
                onChange={onSearchInput}
                placeholder="Поиск..."
              />
            </div>
          </div>

          <div className="d-flex flex-wrap">
            {items
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => (
                <Card
                  imageUrl={item.imageUrl}
                  title={item.title}
                  price={item.price}
                  key={index}
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
