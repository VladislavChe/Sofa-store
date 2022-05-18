import React from 'react';
import Check from '../../../img/check-arrow.jpg';
import styles from './Plus.module.scss';

const Plus = ({ deg45, check }) => {
  return (
    <div>
      {check ? (
        <img className={styles.img} src={Check} alt="check" />
      ) : (
        <div className={styles.closeWrap}>
          <span className={`${styles.close} ${deg45 ? styles.deg45 : null}`}></span>
        </div>
      )}
    </div>
  );
};

export default Plus;
