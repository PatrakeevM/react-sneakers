function App() {
  return (
    <>
      <div className="container clear">
        <div className="overlay pos-a none">
          <div className="cart d-flex flex-column pos-a p-30">
            <h2 className="mb-30 d-flex justify-between">
              Корзина
              <img
                className="cu-p"
                src="/img/remove.svg"
                alt="Удалить товар"
              />
            </h2>
            <div className="items flex">
              <div className="cartItem d-flex align-center mb-20">
                <img
                  className="mr-20"
                  width={70}
                  height={70}
                  src="/img/sneakers/2.jpg"
                  alt="Кроссовки"
                />
                <div className="mr-15">
                  <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <img
                  className="removeBtn"
                  src="/img/remove.svg"
                  alt="Удалить товар"
                />
              </div>
            </div>

            <div className="cartTotal">
              <ul>
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>21 498 руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>1074 руб.</b>
                </li>
              </ul>
              <button className="btnArrow">
                Оформить заказ
                <img src="/img/arrow.svg" alt="Оформить заказ" />
              </button>
            </div>
          </div>
        </div>
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img width={40} height={40} src="/img/logo.png" alt="Логотип" />
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="d-flex">
            <li className="mr-30">
              <img width={18} height={18} src="/img/cart.svg" alt="Корзина" />
              <span>1205 руб.</span>
            </li>
            <li>
              <img width={20} height={20} src="/img/user.svg" alt="Профиль" />
            </li>
          </ul>
        </header>

        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="search-wrapper d-flex">
              <img className="p-15" src="/img/search.svg" alt="Поиск" />
              <input className="opacity-5" placeholder="Поиск..." />
            </div>
          </div>

          <div className="d-flex justify-between">
            <div className="card">
              <div className="favorite">
                <img src="/img/liked.svg" alt="В корзине" />
              </div>
              <img
                className="mb-15"
                width={133}
                height={112}
                src="/img/sneakers/1.jpg"
                alt="Зелёные кроссовки"
              />
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img
                    className="plusBtn"
                    src="/img/plus.svg"
                    alt="Добавить товар"
                  />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                className="mb-15"
                width={133}
                height={112}
                src="/img/sneakers/2.jpg"
                alt="Зелёные кроссовки"
              />
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>12 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="Добавить товар" />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                className="mb-15"
                width={133}
                height={112}
                src="/img/sneakers/3.jpg"
                alt="Зелёные кроссовки"
              />
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>8 499 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="Добавить товар" />
                </button>
              </div>
            </div>
            <div className="card">
              <img
                className="mb-15"
                width={133}
                height={112}
                src="/img/sneakers/4.jpg"
                alt="Зелёные кроссовки"
              />
              <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
              <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                  <span>Цена:</span>
                  <b>8 999 руб.</b>
                </div>
                <button className="button">
                  <img src="/img/plus.svg" alt="Добавить товар" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
