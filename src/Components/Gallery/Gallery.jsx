import React from "react";
import { ReactComponent as Layout4 } from "../../img/layout-4.svg";
//pictures
import { ReactComponent as Layout8 } from "../../img/layout-8.svg";
import { ReactComponent as SearchLoop } from "../../img/search-loop.svg";
import Card from "../Card/Card";
import SubMenu from "../SubMenu/SubMenu";
import AppContext from "./../../context";
import styles from "./Gallery.module.css";
import classNames from "classnames";

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
  } = React.useContext(AppContext);

  React.useEffect(() => {
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

  React.useEffect(() => {
    setModels(
      allModels.filter((item) =>
        item.description.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    );
  }, [searchValue, setModels, allModels]);

  //Сортировка по фильтру из subMenu
  const [activeSubMenuItem, setActiveSubMenuItem] = React.useState("");
  React.useEffect(() => {
    setModels(
      allModels.filter((item) =>
        item.description
          .toLowerCase()
          .includes(activeSubMenuItem.toLowerCase()),
      ),
    );
  }, [activeSubMenuItem, setModels, allModels]);

  //Autocomplete menu
  const [visibleAutoCompleteMenu, setVisibleAutoCompleteMenu] =
    React.useState(false);
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

    const onFilterItems = allModels.filter((item) =>
      item.description.toLowerCase().includes(searchValue.toLowerCase()),
    );

    const itemDiscription = onFilterItems.map((item) => item.description);

    const makeUniq = (arr) => {
      return arr.filter((el, id) => arr.indexOf(el) === id);
    };

    const removeDublicate = makeUniq(itemDiscription);

    if (onFilterItems.length > 0) {
      return removeDublicate.map((obj, index) => (
        <li key={index} onClick={() => closeAutoCompleteMenu(obj)}>
          <span>{obj}</span>
        </li>
      ));
    } else {
      return <span className={styles.notSearch}>ничего не найдено</span>;
    }
  };
  const autoCompleteMenuRef = React.useRef();
  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);
  const handleOutsideClick = (e) => {
    if (!e.path.includes(autoCompleteMenuRef.current)) {
      setVisibleAutoCompleteMenu(false);
    }
  };

  // Выбор раскладки моделей
  const layouts = [
    <Layout8 width={"55px"} height={"26px"} />,
    <Layout4 width={"55px"} height={"26px"} />,
  ];
  const [activeLayout, setActiveLayout] = React.useState(0);
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
