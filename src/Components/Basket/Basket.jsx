import React from "react";
import styles from "./Basket.module.scss";

//pictures
import { ReactComponent as VectorRight } from '../../img/vector-right.svg'
import sofa from '../../img/sofa.png'
import chairs from '../../img/chairs.png'
import Plus from '../_Utils/Plus/Plus';
import Card from '../Card/Card';

const Basket = ({onClickCart, items}) => {
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
          {items.map((item, index) =>
            <li key={`${item} ${index}`} className={styles.item}>
              <img className={styles.modelPic} src={item.url} alt="sofa"/>
              <div className={styles.wrapper}>
              <h4>{item.title}</h4>
              <span>{item.price} руб.</span>
              </div>
              <Plus check={true} deg45={true} />
            </li>)}

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

