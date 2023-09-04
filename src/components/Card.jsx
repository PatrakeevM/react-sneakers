import React from "react";

const Card = () => {
  return (
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
          <img className="plusBtn" src="/img/plus.svg" alt="Добавить товар" />
        </button>
      </div>
    </div>
  );
};

export default Card;