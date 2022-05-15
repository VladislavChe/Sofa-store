import React from 'react';
import { ReactComponent as HurtChecked } from '../../img/hurt-checked.svg';
import { ReactComponent as Hurt } from '../../img/hurt.svg';
import Plus from '../_Utils/Plus/Plus';
import styles from './Card.module.scss';

const Card = ({ url, title, price, addToCart, index, activeLayout }) => {
  const [activeHurt, setActiveHurt] = React.useState(false);
  const onSelectHurt = () => {
    if (activeHurt) {
      setActiveHurt(false);
    } else {
      setActiveHurt(true);
    }
  };

  return (
    <div className={`${styles.cardColumn} ${activeLayout === 1 ? styles.cardColumn_two : ''}`}>
      <div className={styles.card}>
        <div onClick={onSelectHurt} className={`${styles.hurt} ${activeHurt ? styles.active : ''}`}>
          {activeHurt ? <HurtChecked /> : <Hurt />}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.body}>
            <img className={styles.modelImg} src={url} alt="Martin-sofa" />
            <div className={styles.cont}>
              <h4 className={styles.title}>{title}</h4>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque eum harum
                repellendus veniam. Ab ad animi aut beatae, culpa, cum earum explicabo non numquam,
                optio pariatur recusandae suscipit tenetur voluptatibus?
              </p>
            </div>
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.priceWrap}>
            <span className={styles.priceName}>цена: </span>
            <span className={styles.priceSum}>
              {price}
              <span> руб</span>
            </span>
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
