import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { ReactComponent as Layout4 } from "../../img/layout-4.svg";
import { ReactComponent as Layout8 } from "../../img/layout-8.svg";
import { ReactComponent as SearchLoop } from "../../img/search-loop.svg";
import Card from "../Card/Card";
import SubMenu from "../SubMenu/SubMenu";
import AppContext from "./../../context";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const {
    activeHurt,
    setActiveHurt,
    addToCart,
    allModels,
    models,
    setModels,
    activePlus,
    setActivePlus,
    deleteBasketItems,
    basketItems,
    setFavouriteModels,
    favouriteModels,
    searchValue,
    setSearchValue,
    setShowHeaderModels,
  } = useContext(AppContext);

  useEffect(() => {
    setShowHeaderModels(true);
  }, [setShowHeaderModels]);

  //Сортировка из searchInput
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
    setVisibleAutoCompleteMenu(true);

    if (!event.target.value) {
      setVisibleAutoCompleteMenu(false);
      setModels(allModels);
    }
  };

  useEffect(() => {
    setModels(
      allModels.filter((item) =>
        item.description.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }, [searchValue, setModels, allModels]);

  //Сортировка по фильтру из subMenu
  const [activeSubMenuItem, setActiveSubMenuItem] = useState("");
  useEffect(() => {
    setModels(
      allModels.filter((item) =>
        item.description
          .toLowerCase()
          .includes(activeSubMenuItem.toLowerCase()),
      ),
    );
  }, [activeSubMenuItem, setModels, allModels]);

  //Autocomplete menu
  const [visibleAutoCompleteMenu, setVisibleAutoCompleteMenu] = useState(false);
  const clearSearchInput = () => {
    setSearchValue("");
    setVisibleAutoCompleteMenu(false);
    setModels(allModels);
  };
  const autoCompleteMenu = () => {
    const closeAutoCompleteMenu = (text) => {
      setSearchValue(text);
      setVisibleAutoCompleteMenu(false);
    };

    const filteredItems = allModels.filter((item) =>
      item.description.toLowerCase().includes(searchValue.toLowerCase()),
    );

    if (filteredItems.length > 0) {
      const descriptions = filteredItems.map((item) => item.description);
      const unique = descriptions.filter(
        (el, id) => descriptions.indexOf(el) === id,
      );

      return unique.map((obj, index) => (
        <li key={index} onClick={() => closeAutoCompleteMenu(obj)}>
          <span>{obj}</span>
        </li>
      ));
    } else {
      return <span className={styles.notSearch}>ничего не найдено</span>;
    }
  };
  const autoCompleteMenuRef = useRef();
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  const handleOutsideClick = (e) => {
    !autoCompleteMenuRef.current?.contains(e.target) &&
      setVisibleAutoCompleteMenu(false);
  };

  // Выбор раскладки моделей
  const layouts = [
    <Layout8 width={"55px"} height={"26px"} />,
    <Layout4 width={"55px"} height={"26px"} />,
  ];
  const [activeLayout, setActiveLayout] = useState(0);
  const onSelectLayout = (index) => () => {
    setActiveLayout(index);
  };

  return (
    <div className={styles.gallery}>
      <div className={classNames(styles.searchRow, "d-flex align-center")}>
        <SubMenu
          allModels={allModels}
          setModels={setModels}
          setActiveSubMenuItem={setActiveSubMenuItem}
          searchValue={searchValue}
        />
        <div className={classNames(styles.layouts, "d-flex")}>
          {layouts.map((layout, index) => (
            <div
              onClick={onSelectLayout(index)}
              className={classNames(styles.layout, {
                [styles.activeLayout]: activeLayout === index,
              })}
              key={index}
            >
              {layout}
            </div>
          ))}
        </div>
        <div
          ref={autoCompleteMenuRef}
          className={classNames(styles.searchInput, "pos-r")}
        >
          <input
            onChange={onChangeSearchInput}
            value={searchValue}
            type="text"
            placeholder="Поиск"
          />
          {searchValue ? (
            <span onClick={clearSearchInput} className={styles.clear}>
              очистить
            </span>
          ) : (
            <SearchLoop width={"19px"} height={"19px"} />
          )}
          {visibleAutoCompleteMenu && (
            <ul className={styles.autoCompleteList}>
              {searchValue && autoCompleteMenu()}
            </ul>
          )}
        </div>
      </div>
      <div
        className={classNames(styles.models, {
          [styles.models_two]: activeLayout === 1,
        })}
      >
        {models.map((obj, index) => (
          <Card
            activeLayout={activeLayout}
            activePlus={activePlus}
            setActivePlus={setActivePlus}
            activeHurt={activeHurt}
            setActiveHurt={setActiveHurt}
            addToCart={addToCart}
            key={index}
            index={index}
            id={obj.id}
            url={obj.url}
            title={obj.title}
            price={obj.price}
            deleteBasketItems={deleteBasketItems}
            basketItems={basketItems}
            setFavouriteModels={setFavouriteModels}
            favouriteModels={favouriteModels}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
