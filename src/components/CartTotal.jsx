import React from "react";

const CartTotal = () => {
  return (
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
  );
};

export default CartTotal;
