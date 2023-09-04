import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <div className="overlay pos-a none">
      <div className="cart d-flex flex-column pos-a p-30">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="cu-p" src="/img/remove.svg" alt="Удалить товар" />
        </h2>
        <div className="items flex">
          <CartItem />
          <CartItem />
        </div>
        <CartTotal />
      </div>
    </div>
  );
};

export default Cart;
