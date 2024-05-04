import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { ReactComponent as VectorDown } from "../../img/vector-down.svg";
import styles from "./SubMenu.module.css";

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

  const [visibleSubMenu, setVisibleSubMenu] = useState(false);

  const modelsRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => document.body.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleOutsideClick = (e) => {
    !modelsRef.current?.contains(e.target) && setVisibleSubMenu(false);
  };
  const toggleVisibleSubMenu = () => {
    setVisibleSubMenu(!visibleSubMenu);
  };

  const [activeItem, setActiveItem] = useState(null);
  const [activeName, setActiveName] = useState("Товары");
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
