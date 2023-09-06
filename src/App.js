import Cart from "./components/Cart";
import Header from "./components/Header";
import Card from "./components/Card";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
    id: 0,
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 9999,
    imageUrl: "/img/sneakers/2.jpg",
    id: 1,
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.jpg",
    id: 2,
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg",
    id: 3,
  },
];

function App() {
  return (
    <>
      <div className="container clear">
        <Cart />
        <Header />
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="searchWrapper">
              <img className="p-15" src="/img/search.svg" alt="Поиск" />
              <input className="opacity-5" placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex">
            {arr.map((obj) => (
              <Card
                imageUrl={obj.imageUrl}
                title={obj.title}
                price={obj.price}
                id={obj.id}
                onClick={() => alert(obj.price)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
