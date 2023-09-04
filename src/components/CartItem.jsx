import React from "react";

const CartItem = () => {
  return (
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
      <img className="removeBtn" src="/img/remove.svg" alt="Удалить товар" />
    </div>
  );
};

export default CartItem;