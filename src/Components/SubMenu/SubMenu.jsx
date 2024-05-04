import React from "react";
//pictures
import { ReactComponent as VectorDown } from "../../img/vector-down.svg";
import styles from "./SubMenu.module.css";
import classNames from "classnames";

const SubMenu = ({
  allModels,
  setModels,
  searchValue,
  setActiveSubMenuItem,
}) => {
  const models = [
    "Диваны",
    "Кресла",
    "Стулья",
    "Кровати",
    "Матрацы",
    "Пуфы",
    "Эксклюзивная мебель",
  ];

  const [visibleSubMenu, setVisibleSubMenu] = React.useState(false);
  const toggleVisibleSubMenu = () => {
    setVisibleSubMenu(!visibleSubMenu);
  };

  const modelsRef = React.useRef();
  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);
  const handleOutsideClick = (e) => {
    if (!e.path.includes(modelsRef.current)) {
      setVisibleSubMenu(false);
    }
  };

  const [activeItem, setActiveItem] = React.useState(null);
  const [activeName, setActiveName] = React.useState("Товары");
  const onSelectItem = (index, model) => {
    setActiveItem(index);
    setVisibleSubMenu(!visibleSubMenu);
    setActiveName(model);

    setActiveSubMenuItem(model);
  };

  const onSelectAll = () => {
    setVisibleSubMenu(!visibleSubMenu);
    setActiveName("Товары");
    setActiveItem(null);
    setModels(allModels);
    setActiveSubMenuItem("");
  };

  return (
    <div className={classNames(styles.menu, "d-flex align-center")}>
      {searchValue ? (
        <span className={classNames(styles.allModels, styles.allModels_search)}>
          Поиск по: "{searchValue}"
        </span>
      ) : (
        <div ref={modelsRef} onClick={toggleVisibleSubMenu}>
          <span className={styles.allModels}>{`Все ${activeName}`}</span>
          <VectorDown width={"13px"} height={"7.5px"} />
        </div>
      )}

      {visibleSubMenu && (
        <div className={styles.subMenu}>
          <div className={styles.all}>
            <span onClick={onSelectAll}>Все товары</span>
            <VectorDown width={"13px"} height={"7.5px"} />
          </div>
          <ul className={styles.list}>
            {models.map((model, index) => (
              <li
                onClick={() => onSelectItem(index, model)}
                className={activeItem === index ? styles.active : ""}
                key={index}
              >
                <span>{model}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SubMenu;
