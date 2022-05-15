import React from 'react';
import armchairs from '../../img/armchairs.png';
import beds from '../../img/beds.png';
import { ReactComponent as Cart } from '../../img/cart.svg';
import chairs from '../../img/chairs.png';
import exclusive from '../../img/exclusive.png';
//pictures
import logo from '../../img/logo.png';
import mattresses from '../../img/mattresses.png';
import poufs from '../../img/poufs.png';
import sofa from '../../img/sofa.png';
import styles from './Header.module.scss';

const Header = ({ onClickCart, allModels, setModels }) => {
  const headerModels = [
    {
      url: sofa,
      title: 'Диваны',
      description: 'Диваны',
    },
    {
      url: armchairs,
      title: 'Кресла',
      description: 'Кресла',
    },
    {
      url: chairs,
      title: 'Стулья',
      description: 'Стулья',
    },
    {
      url: beds,
      title: 'Кровати',
      description: 'Кровати',
    },
    {
      url: mattresses,
      title: 'Матрацы',
      description: 'Матрацы',
    },
    {
      url: poufs,
      title: 'Пуфы',
      description: 'Пуфы',
    },
    {
      url: exclusive,
      title: 'Эксклюзивная мебель',
      description: 'Эксклюзивная мебель',
    },
  ];

  //Сортировка из шапки
  const [activeItem, setActiveItem] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(false);

  const onClickItem = (obj, index) => {
    setActiveItem(obj);
    setActiveIndex(index);
  };
  React.useEffect(() => {
    setModels(
      allModels.filter((item) =>
        item.description.toLowerCase().includes(activeItem.title.toLowerCase()),
      ),
    );
  }, [activeItem]);

  //Клик вне элемента
  const itemsRef = React.useRef();
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);
  const handleOutsideClick = (e) => {
    if (!e.path.includes(itemsRef.current)) {
      setActiveIndex(false);
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={`justify-between align-center d-flex ${styles.list}`}>
          <li>Каталог</li>
          <li>Индивидуальная мебель</li>
          <li>Контакты</li>
          <li>
            <img src={logo} alt="logo" className={styles.logo} />
          </li>
          <li>О компании</li>
          <li>
            <a href="tel:+74959825364" className={styles.tel}>
              +7 (495) 982-53-64
            </a>
          </li>
          <li onClick={onClickCart}>
            <Cart width={'30px'} height={'30px'} />
          </li>
        </ul>
      </nav>
      <ul ref={itemsRef} className={`${styles.furniture} d-flex align-center`}>
        {headerModels.map((obj, index) => (
          <li
            className={activeIndex === index ? styles.active : null}
            onClick={() => onClickItem(obj, index)}
            key={`${obj} ${index}`}>
            <img src={obj.url} alt={obj.title} />
            <span>{obj.title}</span>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
