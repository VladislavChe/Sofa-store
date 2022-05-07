import React from "react";
import styles from "./Plus.module.scss";

import Check from '../../../img/check-arrow.jpg'

const Plus = ({deg45, check}) => {
  const [activeItem, setActiveItem] = React.useState(false);
  const onSelect = () => {
    if(activeItem) {
      setActiveItem(false)
    } else {
      setActiveItem(true)
    }
  }
  return (
    <div onClick={onSelect}>
      {activeItem && check? <img className={styles.img} src={Check} alt="check"/> :
        <div className={styles.closeWrap}>
          <span className={`${styles.close} ${deg45? styles.deg45 : null}`}></span>
        </div>}
    </div>
  );
};

export default Plus;

