import * as axios from 'axios';
import React from 'react';
//pictures
import { ReactComponent as VectorRight } from '../../img/vector-right.svg';
import Plus from '../_Utils/Plus/Plus';
import styles from './Basket.module.scss';

const Basket = ({ onClickCart, items, setBasketItems }) => {
  React.useEffect(() => {
    axios
      .get('https://6271742d25fed8fcb5e66f8f.mockapi.io/cart')
      .then(function (response) {
        setBasketItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const onRemoveItem = (id) => {
    axios.delete(`https://6271742d25fed8fcb5e66f8f.mockapi.io/cart/${id}`);
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.basket}>
      <div className={styles.line}>
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>Корзина</h2>
          <div onClick={onClickCart}>
            <Plus check={false} deg45={true} />
          </div>
        </div>
        <div className={styles.list}>
          {items.map((item, index) => (
            <li key={`${item} ${index}`} className={styles.item}>
              <img className={styles.modelPic} src={item.url} alt="sofa" />
              <div className={styles.wrapper}>
                <h4>{item.title}</h4>
                <span>{item.price} руб.</span>
              </div>
              <div onClick={() => onRemoveItem(item.id)}>
                <Plus check={false} deg45={true} />
              </div>
            </li>
          ))}
        </div>
        <div className={styles.counter}>
          <div className={styles.countPrice}>
            <span className={styles.totalText}>Итого: </span>
            <div className={styles.dotted}></div>
            <span className={styles.totalSum}>21 498 руб.</span>
          </div>
          <button className={styles.btn}>
            <span>Оформить заказ</span>
            <VectorRight className={styles.svg} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Basket;
