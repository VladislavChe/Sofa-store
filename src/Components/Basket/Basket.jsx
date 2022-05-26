import React from 'react';
import Box from '../../img/box.png';
import Order from '../../img/order.png';
import { ReactComponent as VectorRight } from '../../img/vector-right.svg';
import Info from '../_Utils/Info/Info';
import Plus from '../_Utils/Plus/Plus';
import AppContext from './../../context';
import styles from './Basket.module.scss';
import BasketItem from './BasketItem/BasketItem';

const Basket = ({ openBasket }) => {
  const { basketItems, deleteBasketItems, showCart, setBasketItems, setActivePlus, totalPrice } =
    React.useContext(AppContext);

  const [isOrder, setIsOrder] = React.useState(false);

  const onRemoveItem = (index) => {
    deleteBasketItems(index);
  };

  const createOrder = () => {
    setBasketItems([]);
    setActivePlus([]);
    setIsOrder(true);
  };

  return (
    <div className={`${styles.basket} ${openBasket ? styles.basket_visible : ''}`}>
      <div className={`${styles.line} ${openBasket ? styles.line_visible : ''}`}>
        <div className={styles.top}>
          <h2 className={styles.title}>Корзина</h2>
          <div onClick={() => showCart(false)}>
            <Plus check={false} deg45={true} />
          </div>
        </div>
        {basketItems.length > 0 ? (
          <div className={styles.body}>
            <div className={styles.list}>
              {basketItems.map((item, index) => (
                <BasketItem
                  key={`${item} ${index}`}
                  item={item}
                  index={index}
                  onRemoveItem={onRemoveItem}
                />
              ))}
            </div>
            <div className={styles.bottom}>
              <div className={styles.countPrice}>
                <span className={styles.totalText}>Итого: </span>
                <div className={styles.dotted}></div>
                <span className={styles.totalSum}>{totalPrice} руб.</span>
              </div>
              <button onClick={createOrder} className={styles.btn}>
                <span>Оформить заказ</span>
                <VectorRight className={styles.svg} />
              </button>
            </div>
          </div>
        ) : (
          <Info
            isOrder={isOrder}
            img={isOrder ? Order : Box}
            title={isOrder ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrder
                ? 'Ваш заказ скоро будет передан курьерской доставке'
                : 'Добавьте хотя бы один товар, чтобы сделать заказ'
            }
          />
        )}
      </div>
    </div>
  );
};

export default Basket;
