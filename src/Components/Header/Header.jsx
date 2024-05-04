import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";
import armchairs from "../../img/armchairs.png";
import beds from "../../img/beds.png";
import { ReactComponent as Cart } from "../../img/cart.svg";
import chairs from "../../img/chairs.png";
import exclusive from "../../img/exclusive.png";
import { ReactComponent as Hurt } from "../../img/hurt.svg";
import logo from "../../img/logo.png";
import mattresses from "../../img/mattresses.png";
import poufs from "../../img/poufs.png";
import sofa from "../../img/sofa.png";
import AppContext from "./../../context";
import styles from "./Header.module.css";

const Header = () => {
  const { allModels, setModels, showHeaderModels, showCart, totalPrice } =
    React.useContext(AppContext);

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
  ];

  //Сортировка из шапки
  const [activeItem, setActiveItem] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(null);

  const onClickItem = (obj, index) => () => {
    setActiveItem(obj);
    setActiveIndex(index);
  };

  React.useEffect(() => {
    if (activeItem) {
      setModels(
        allModels.filter((item) =>
          item.description
            .toLowerCase()
            .includes(activeItem.title.toLowerCase()),
        ),
      );
    }
  }, [activeItem, setModels, allModels]);

  //Клик вне элемента
  const itemsRef = React.useRef();
  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);
  const handleOutsideClick = (e) => {
    if (!e.path.includes(itemsRef.current)) {
      setActiveIndex(null);
    }
  };

  const showCartHandler = () => showCart(true);

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul
          className={classNames(
            "justify-between align-center d-flex",
            styles.list,
          )}
        >
          <li>
            <NavLink to={"/"}>
              <img src={logo} alt="logo" className={styles.logo} />
            </NavLink>
          </li>
          <li className={classNames("d-flex align-center", styles.added)}>
            <NavLink to={"/favourite"}>
              <Hurt width={"20px"} height={"20px"} />
            </NavLink>
            <div onClick={showCartHandler} className={styles.summ}>
              <span>{totalPrice} руб.</span>
              <Cart width={"30px"} height={"30px"} />
              <div className={classNames({ [styles.gold]: totalPrice > 0 })} />
            </div>
          </li>
        </ul>
      </nav>
      {showHeaderModels && (
        <ul
          ref={itemsRef}
          className={classNames(styles.furniture, "d-flex align-center")}
        >
          {headerModels.map((obj, index) => (
            <li
              className={classNames({ [styles.active]: activeIndex === index })}
              onClick={onClickItem(obj, index, obj.title)}
              key={index}
            >
              <img src={obj.url} alt={obj.title} />
              <span>{obj.title}</span>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header;
