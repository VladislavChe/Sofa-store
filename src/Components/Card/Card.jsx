import React from "react";
import styles from "./Card.module.scss";

//pictures
import martin from '../../img/models/martin.jpg'

const Card = () => {
  return (
    <div className={styles.card}>
      <img src={martin} alt="Martin-sofa"/>
      <span>Martin</span>
    </div>
  );
};

export default Card;

