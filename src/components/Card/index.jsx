import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ title, imageUrl, price, onFavorite, onPlus }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onFavorite();
  };

  const onClickPlus = () => {
    setIsAdded(!isAdded);
    onPlus({ title, imageUrl, price });
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          width={32}
          height={32}
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="В корзине"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="Зелёные кроссовки" />
      <h5 className="mb-15">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plusBtn}
          onClick={onClickPlus}
          src={isAdded ? "/img/accept.svg" : "/img/plus.svg"}
          alt="Добавить товар"
        />
      </div>
    </div>
  );
};

export default Card;
