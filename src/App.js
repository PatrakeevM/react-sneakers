import Cart from "./components/Cart";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="container clear">
        <Cart />
        <Header />
        <div className="content p-40">
          <Search />

          <div className="d-flex justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
