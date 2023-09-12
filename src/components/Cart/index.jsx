import styles from "./Cart.module.scss";

const Cart = ({ onClose, onRemove, items = [] }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.cart}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            className="cu-p"
            onClick={onClose}
            src="/img/remove.svg"
            alt="Закрыть корзину"
          />
        </h2>
        {items.length > 0 ? (
          <div className={styles.wrapper}>
            <div className={styles.items}>
              {items.map((obj) => (
                <div className={styles.cartItem}>
                  <img
                    className="mr-20"
                    width={70}
                    height={70}
                    src={obj.imageUrl}
                    alt="Кроссовки"
                  />
                  <div className="mr-15">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className={styles.removeBtn}
                    src="/img/remove.svg"
                    alt="Удалить товар"
                  />
                </div>
              ))}
            </div>
            <div className={styles.cartTotal}>
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
              <button className={styles.btnArrow}>
                Оформить заказ
                <img src="/img/arrow.svg" alt="Оформить заказ" />
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.cartEmpty}>
            <img
              className="mb-20"
              width={120}
              height={120}
              src="/img/cart-box.png"
              alt="Корзина пуста"
            />
            <h2 className="mb-10">Корзина пуста</h2>
            <p className="opacity-6 mb-40">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button className={styles.greenBtn} onClick={onClose}>
              Вернуться назад
              <img
                className={styles.arrowLeft}
                src="/img/arrow-left.svg"
                alt="Оформить заказ"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
