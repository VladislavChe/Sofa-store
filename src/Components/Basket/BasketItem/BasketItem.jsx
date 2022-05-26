import React from 'react';
import AppContext from '../../../context';
import Plus from '../../_Utils/Plus/Plus';
import styles from './BasketItem.module.scss';

const BasketItem = ({ item, index, onRemoveItem }) => {
  const { totalPrice, setTotalPrice } = React.useContext(AppContext);

  const [count, setCount] = React.useState(1);

  const changeCount = (boolean, price) => {
    if (boolean) {
      setCount(count + 1);
      setTotalPrice(totalPrice + price);
    } else {
      if (count > 1) {
        setCount(count - 1);
        setTotalPrice(totalPrice - price);
      }
    }
  };

  return (
    <>
      <li key={`${item} ${index}`} className={styles.item}>
        <div className={styles.counterWrapp}>
          <img className={styles.modelPic} src={item.url} alt="sofa" />
          <div className={styles.counter}>
            <div onClick={() => changeCount(false, item.price)} className={styles.less}></div>
            <div className={styles.count}>{count}</div>
            <div onClick={() => changeCount(true, item.price)} className={styles.more}></div>
          </div>
        </div>

        <div className={styles.wrapper}>
          <h4>{item.title}</h4>
          <span>{item.price} руб.</span>
        </div>
        <div onClick={() => onRemoveItem(item.index)}>
          <Plus check={false} deg45={true} />
        </div>
      </li>
    </>
  );
};

export default BasketItem;
