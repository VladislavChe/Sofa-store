import React from "react";
import styles from "./Card.module.scss";

import { ReactComponent as Hurt } from '../../img/hurt.svg'
import { ReactComponent as HurtChecked } from '../../img/hurt-checked.svg'
import Plus from '../_Utils/Plus/Plus';

const Card = ({url, title, price, addToCart, index}) => {
  const [activeHurt, setActiveHurt] = React.useState(false);
  const onSelectHurt = () => {
    if(activeHurt) {
      setActiveHurt(false)
    } else {
      setActiveHurt(true)
    }
  }

  return (
    <div className={styles.cardColumn}>
      <div className={styles.card}>
        <div onClick={onSelectHurt} className={`${styles.hurt} ${activeHurt? styles.active : null}`}>
          {activeHurt? <HurtChecked /> : <Hurt />}
        </div>
        <img className={styles.modelImg} src={url} alt="Martin-sofa"/>
        <span className={styles.title}>{title}</span>
        <div className={styles.price}>
          <div className={styles.priceWrap}>
            <span className={styles.priceName}>цена: </span>
            <span className={styles.priceSum}>{price}<span> руб</span></span>
          </div>
          <div onClick={() => addToCart(url, title, price, index)}>
            <Plus check={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

