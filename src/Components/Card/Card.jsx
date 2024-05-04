import React from "react";
import classNames from "classnames";
import { ReactComponent as HurtChecked } from "../../img/hurt-checked.svg";
import { ReactComponent as Hurt } from "../../img/hurt.svg";
import Plus from "../_Utils/Plus/Plus";
import styles from "./Card.module.css";

const Card = ({
  url,
  title,
  price,
  addToCart,
  index,
  id,
  activeLayout,
  activePlus,
  setActivePlus,
  activeHurt,
  setActiveHurt,
  deleteBasketItems,
  setFavouriteModels,
}) => {
  const onSelectHurt = () => {
    let favObj = { url, title, price, index, id };

    if (activeHurt.includes(id)) {
      setActiveHurt((prev) => prev.filter((item) => item !== id));
      setFavouriteModels((prev) => prev.filter((item) => item.id !== id));
    } else {
      setActiveHurt((prevState) => [...prevState, id]);
      setFavouriteModels((prevState) => [...prevState, favObj]);
    }
  };

  const plusHandler = () => {
    if (!activePlus.includes(id)) {
      addToCart(url, title, price, index, id);

      setActivePlus((prevState) => [...prevState, id]);
    } else {
      deleteBasketItems(id);
    }
  };

  return (
    <div
      className={classNames(styles.cardColumn, {
        [styles.cardColumn_two]: activeLayout === 1,
      })}
    >
      <div className={styles.card}>
        <div
          onClick={onSelectHurt}
          className={classNames(styles.hurt, {
            [styles.active]: activeHurt.includes(id),
          })}
        >
          {activeHurt.includes(id) ? <HurtChecked /> : <Hurt />}
        </div>
        <div className={styles.wrapper}>
          <div className={styles.body}>
            <img className={styles.modelImg} src={url} alt="Martin-sofa" />
            <div className={styles.cont}>
              <h4 className={styles.title}>{title}</h4>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                eum harum repellendus veniam. Ab ad animi aut beatae, culpa, cum
                earum explicabo non numquam, optio pariatur recusandae suscipit
                tenetur voluptatibus?
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
          <div onClick={plusHandler}>
            <Plus check={activePlus.includes(id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
