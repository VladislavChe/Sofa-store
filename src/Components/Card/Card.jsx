import * as axios from 'axios';
import React from 'react';
import { ReactComponent as HurtChecked } from '../../img/hurt-checked.svg';
import { ReactComponent as Hurt } from '../../img/hurt.svg';
import Plus from '../_Utils/Plus/Plus';
import styles from './Card.module.scss';

const Card = ({
  url,
  title,
  price,
  addToCart,
  index,
  activeLayout,
  activePlus,
  setActivePlus,
  activeHurt,
  setActiveHurt,
  deleteBasketItems,
  setFavouriteModels,
}) => {
  const onSelectHurt = () => {
    let favObj = { url, title, price, index };

    if (activeHurt.includes(index)) {
      setActiveHurt((prev) => prev.filter((item) => item !== index));
      setFavouriteModels((prev) => prev.filter((item) => item.index !== index));
    } else {
      setActiveHurt((prevState) => [...prevState, index]);
      setFavouriteModels((prevState) => [...prevState, favObj]);
    }
  };

  const clickOnPlus = () => {
    if (activePlus.includes(index)) {
      axios
        .get('https://6271742d25fed8fcb5e66f8f.mockapi.io/cart')
        .then(function (response) {
          let toDeleteItem = response.data.filter((item) => item.index === index);
          toDeleteItem.map((obj) => deleteBasketItems(obj.index, obj.id));
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    } else {
      addToCart(url, title, price, index);

      setActivePlus((prevState) => [...prevState, index]);
    }
  };

  return (
    <div className={`${styles.cardColumn} ${activeLayout === 1 ? styles.cardColumn_two : ''}`}>
      <div className={styles.card}>
        <div
          onClick={onSelectHurt}
          className={`${styles.hurt} ${activeHurt.includes(index) ? styles.active : ''}`}>
          {activeHurt.includes(index) ? <HurtChecked /> : <Hurt />}
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
          <div onClick={clickOnPlus}>
            <Plus check={activePlus.includes(index) ? true : false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
