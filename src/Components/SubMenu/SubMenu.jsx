import React from "react";
import styles from "./SubMenu.module.scss";

import { ReactComponent as VectorDown } from '../../img/vector-down.svg'

const SubMenu = () => {
  return (
    <div className={styles.subMenu}>
      <div className={styles.all}>
        <span>Все товары</span>
        <VectorDown width={'13px'} height={'7.5px'} />
      </div>
      <ul className={styles.list}>
        <li><span>Диваны</span></li>
        <li><span>Кресла</span></li>
        <li><span>Стулья</span></li>
        <li><span>Кровати</span></li>
        <li><span>Матрацы</span></li>
        <li><span>Пуфы</span></li>
        <li><span>Эксклюзивная мебель</span></li>
        <li><span>2D-3D модели</span></li>
      </ul>
    </div>
  );
};

export default SubMenu;

