import React from "react";
import styles from "./Card.module.scss";

const Card = ({url, title, price}) => {
  return (
    <div className={styles.card}>
      <img src={url} alt="Martin-sofa"/>
      <span>{title}</span>
      <div className={styles.price}>{price} <span>Р</span></div>
    </div>
  );
};

export default Card;

