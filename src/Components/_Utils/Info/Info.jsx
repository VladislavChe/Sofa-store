import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as VectorLeft } from '../../../img/vector-left.svg';
import AppContext from './../../../context';
import styles from './Info.module.scss';

const Info = ({ img, title, description, isOrder, nav }) => {
  const { showCart } = React.useContext(AppContext);
  return (
    <div className={styles.box}>
      <img className={styles.boxImg} src={img} alt="box" />
      <h3 className={isOrder ? `${styles.boxTitle} ${styles.boxTitle_order}` : styles.boxTitle}>
        {title}
      </h3>
      <p className={styles.boxText}>{description}</p>
      {nav ? (
        <NavLink className={styles.linkBtn} to={'/'}>
          <button onClick={() => showCart(false)} className={`${styles.btn} ${styles.btn_Left}`}>
            <VectorLeft className={styles.svg} />
            <span>Вернуться назад</span>
          </button>
        </NavLink>
      ) : (
        <button onClick={() => showCart(false)} className={`${styles.btn} ${styles.btn_Left}`}>
          <VectorLeft className={styles.svg} />
          <span>Вернуться назад</span>
        </button>
      )}
    </div>
  );
};

export default Info;
