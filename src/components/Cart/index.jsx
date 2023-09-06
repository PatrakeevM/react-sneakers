import React from "react";
import CartItem from "../CartItem";
import CartTotal from "../CartTotal";
import styles from "./Cart.module.scss";

const arr1 = [
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 4444,
    imageUrl: "/img/sneakers/4.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 5555,
    imageUrl: "/img/sneakers/1.jpg",
  },
];

const Cart = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="cu-p" src="/img/remove.svg" alt="Удалить товар" />
        </h2>
        <div className="items flex">
          {arr1.map((obj1) => (
            <CartItem
              title={obj1.title}
              imageUrl={obj1.imageUrl}
              price={obj1.price}
            />
          ))}
        </div>
        <CartTotal
          title1="Итого:"
          price1={21498}
          title2="Налог 5%:"
          price2={1074}
          btn="Оформить заказ"
        />
      </div>
    </div>
  );
};

export default Cart;
