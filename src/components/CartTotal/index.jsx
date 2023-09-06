import React from "react";
import styles from "./CartTotal.module.scss";

const CartTotal = (props) => {
  return (
    <div className={styles.cartTotal}>
      <ul>
        <li>
          <span>{props.title1}</span>
          <div></div>
          <b>{props.price1} руб.</b>
        </li>
        <li>
          <span>{props.title2}</span>
          <div></div>
          <b>{props.price2} руб.</b>
        </li>
      </ul>
      <button className={styles.btnArrow}>
        {props.btn}
        <img src="/img/arrow.svg" alt="Оформить заказ" />
      </button>
    </div>
  );
};

export default CartTotal;
