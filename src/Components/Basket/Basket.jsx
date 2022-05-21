import * as axios from 'axios';
import React from 'react';
import Box from '../../img/box.png';
import { ReactComponent as VectorLeft } from '../../img/vector-left.svg';
import { ReactComponent as VectorRight } from '../../img/vector-right.svg';
import Plus from '../_Utils/Plus/Plus';
import styles from './Basket.module.scss';

const Basket = (props) => {
  React.useEffect(() => {
    axios
      .get('https://6271742d25fed8fcb5e66f8f.mockapi.io/cart')
      .then(function (response) {
        props.setBasketItems(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const onRemoveItem = (id, index) => {
    props.deleteBasketItems(id, index);
  };

  return (
    <div className={styles.basket}>
      <div className={styles.line}>
        <div className={styles.top}>
          <h2 className={styles.title}>Корзина</h2>
          <div onClick={props.onClickCart}>
            <Plus check={false} deg45={true} />
          </div>
        </div>
        {props.items.length > 0 ? (
          <div className={styles.body}>
            <div className={styles.list}>
              {props.items.map((item, index) => (
                <li key={`${item} ${index}`} className={styles.item}>
                  <img className={styles.modelPic} src={item.url} alt="sofa" />
                  <div className={styles.wrapper}>
                    <h4>{item.title}</h4>
                    <span>{item.price} руб.</span>
                  </div>
                  <div onClick={() => onRemoveItem(item.id, item.index)}>
                    <Plus check={false} deg45={true} />
                  </div>
                </li>
              ))}
            </div>
            <div className={styles.bottom}>
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
        ) : (
          <div className={styles.box}>
            <img className={styles.boxImg} src={Box} alt="box" />
            <h3 className={styles.boxTitle}>Корзина пустая</h3>
            <p className={styles.boxText}>Добавьте хотя бы один товар, чтобы сделать заказ</p>
            <button onClick={props.onClickCart} className={`${styles.btn} ${styles.btn_Left}`}>
              <VectorLeft className={styles.svg} />
              <span>Вернуться назад</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
