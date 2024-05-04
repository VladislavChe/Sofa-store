import React from "react";
import AppContext from "../../../context";
import Plus from "../../_Utils/Plus/Plus";
import styles from "./BasketItem.module.css";

const BasketItem = ({ item: { title, price, url }, removeHandler }) => {
  const { totalPrice, setTotalPrice } = React.useContext(AppContext);

  const [count, setCount] = React.useState(1);

  const changeCount = (boolean, price) => () => {
    if (boolean) {
      setCount(count + 1);
      setTotalPrice(totalPrice + price);
    } else if (count > 1) {
      setCount(count - 1);
      setTotalPrice(totalPrice - price);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.counterWrapp}>
        <img className={styles.modelPic} src={url} alt="sofa" />
        <div className={styles.counter}>
          <div onClick={changeCount(false, price)} className={styles.less} />
          <div className={styles.count}>{count}</div>
          <div onClick={changeCount(true, price)} className={styles.more} />
        </div>
      </div>

      <div className={styles.wrapper}>
        <h4>{title}</h4>
        <span>{price} руб.</span>
      </div>
      <div onClick={removeHandler}>
        <Plus check={false} deg45={true} />
      </div>
    </li>
  );
};

export default BasketItem;
