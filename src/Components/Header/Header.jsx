import React from "react";
import styles from "./Header.module.scss";

//pictures
import logo from '../../img/logo.png'
import sofa from '../../img/sofa.png'
import chairs from '../../img/chairs.png'
import armchairs from '../../img/armchairs.png'
import beds from '../../img/beds.png'
import mattresses from '../../img/mattresses.png'
import poufs from '../../img/poufs.png'
import exclusive from '../../img/exclusive.png'
import { ReactComponent as Cart } from '../../img/cart.svg'

const Header = ({onClickCart}) => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={`justify-between align-center d-flex ${styles.menu__list}`}>
          <li>Каталог</li>
          <li>Индивидуальная мебель</li>
          <li>Контакты</li>
          <li><img src={logo} alt="logo" className={styles.logo}/></li>
          <li>О компании</li>
          <li><a href="tel:+74959825364" className={styles.tel}>+7 (495) 982-53-64</a></li>
          <li onClick={onClickCart}><Cart className='logo' width={'30px'} height={'30px'} /></li>
        </ul>
      </nav>
      <ul className={`${styles.furniture} d-flex align-center`}>
        <li>
          <img src={sofa} alt="sofa"/>
          <span>Диваны</span>
        </li>
        <li>
          <img src={chairs} alt="chairs"/>
          <span>Стулья</span>
        </li>
        <li>
          <img src={armchairs} alt="armchairs"/>
          <span>Кресла</span>
        </li>
        <li>
          <img src={beds} alt="beds"/>
          <span>Кровати</span>
        </li>
        <li>
          <img src={mattresses} alt="mattresses"/>
          <span>Матрацы</span>
        </li>
        <li>
          <img src={poufs} alt="poufs"/>
          <span>пуфы</span>
        </li>
        <li>
          <img src={exclusive} alt="exclusive"/>
          <span>Эксклюзивная мебель </span>
        </li>
      </ul>
    </header>
  );
};

export default Header;

