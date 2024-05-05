import React, { useContext } from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { ReactComponent as VectorLeft } from "../../../img/vector-left.svg";
import AppContext from "./../../../context";
import styles from "./Info.module.css";

const Info = ({ img, title, description, isOrder, nav }) => {
  const { showCart } = useContext(AppContext);
  const closeCart = () => showCart(false);
  const titleClassName = isOrder
    ? classNames(styles.boxTitle, styles.boxTitle_order)
    : styles.boxTitle;

  return (
    <div className={styles.box}>
      <img className={styles.boxImg} src={img} alt="box" />
      <h3 className={titleClassName}>{title}</h3>
      <p className={styles.boxText}>{description}</p>
      {nav ? (
        <NavLink className={styles.linkBtn} to={"/"}>
          <button
            onClick={closeCart}
            className={classNames(styles.btn, styles.btn_Left)}
          >
            <VectorLeft className={styles.svg} />
            <span>Вернуться назад</span>
          </button>
        </NavLink>
      ) : (
        <button
          onClick={closeCart}
          className={classNames(styles.btn, styles.btn_Left)}
        >
          <VectorLeft className={styles.svg} />
          <span>Вернуться назад</span>
        </button>
      )}
    </div>
  );
};

export default Info;
