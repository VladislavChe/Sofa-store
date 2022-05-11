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
import martin from '../../img/models/martin.png';
import alba from '../../img/models/alba.png';
import Card from '../Card/Card';

const Header = ({onClickCart, allModels, setModels}) => {
  const headerModels = [
    {
      url: sofa,
      title: "Диваны",
      description: "Диваны",
    },
    {
      url: armchairs,
      title: "Кресла",
      description: "Кресла",
    },
    {
      url: chairs,
      title: "Стулья",
      description: "Стулья",
    },
    {
      url: beds,
      title: "Кровати",
      description: "Кровати",
    },
    {
      url: mattresses,
      title: "Матрацы",
      description: "Матрацы",
    },
    {
      url: poufs,
      title: "Пуфы",
      description: "Пуфы",
    },
    {
      url: exclusive,
      title: "Эксклюзивная мебель",
      description: "Эксклюзивная мебель",
    },
  ]

  //Сортировка из шапки
  const [activeItem, setActiveItem] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(false);

  const onClickItem = (obj, index) => {
    setActiveItem(obj)
    setActiveIndex(index)

  }
  React.useEffect(() => {
    setModels(allModels.filter(item => item.description.toLowerCase().includes(activeItem.title.toLowerCase())))
  }, [activeItem])

  //Клик вне элемента
  const itemsRef = React.useRef();
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])
  const handleOutsideClick = (e) => {
    if(!e.path.includes(itemsRef.current)) {
      setActiveIndex(false)
    }
  };

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
      <ul ref={itemsRef} className={`${styles.furniture} d-flex align-center`}>
        {headerModels.map((obj, index) =>
          <li className={activeIndex === index ? styles.active : null} onClick={() => onClickItem(obj, index)} key={`${obj} ${index}`}>
            <img src={obj.url} alt={obj.title}/>
            <span>{obj.title}</span>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;

