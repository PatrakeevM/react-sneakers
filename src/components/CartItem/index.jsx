import React from "react";
import styles from "./CartItem.module.scss";

const CartItem = (props) => {
  return (
    <div className={styles.items}>
      <div className={styles.cartItem}>
        <img
          className="mr-20"
          width={70}
          height={70}
          src={props.imageUrl}
          alt="Кроссовки"
        />
        <div className="mr-15">
          <p className="mb-5">{props.title}</p>
          <b>{props.price} руб.</b>
        </div>
        <img
          className={styles.removeBtn}
          src="/img/remove.svg"
          alt="Удалить товар"
        />
      </div>
    </div>
  );
};

export default CartItem;
