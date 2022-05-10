import React from "react";
import * as axios from "axios";
import styles from "./Gallery.module.scss";
import Card from '../Card/Card';
import SubMenu from '../SubMenu/SubMenu';


//pictures
import { ReactComponent as Layout8 } from '../../img/layout-8.svg'
import { ReactComponent as Layout4 } from '../../img/layout-4.svg'
import { ReactComponent as SearchLoop } from '../../img/search-loop.svg'
import martin from '../../../src/img/models/martin.png'
import alba from '../../img/models/alba.png'

const Gallery = ({addToCart}) => {
  const [allModels, setAllModels] = React.useState([]);
  const [models, setModels] = React.useState(allModels);

  //Получение списка всех моделей
  const getAllModels = () => {
    axios.get('https://6271742d25fed8fcb5e66f8f.mockapi.io/models')
      .then(function (response) {
        setAllModels(response.data)
        setModels(response.data)
      })
      .catch(function (error) {
        let models = [
          {
            url: martin,
            title: "Martin",
            description: 'Диваны',
            price: 15000
          },
          {
            url: alba,
            title: "Alba",
            description: 'Кресла',
            price: 11000
          }
        ]
        setAllModels(models)
        setModels(models)
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  React.useEffect(() => {
    getAllModels()
  }, [])

  // Выбор раскладки моделей
  const layouts = [<Layout8 width={'55px'} height={'26px'} />, <Layout4 width={'55px'} height={'26px'} />]
  const [activeLayout, setActiveLayout] = React.useState(0);
  const onSelectLayout = (index) => {
    setActiveLayout(index)
  }

  //Сортировка из searchInput
  const [searchValue, setSearchValue] = React.useState('');
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
    setVisibleAutoCompleteMenu(true)

    if(!event.target.value) {
      setVisibleAutoCompleteMenu(false)
      setModels(allModels)
    }
  }
  React.useEffect(() => {
    setModels(allModels.filter(item => item.description.toLowerCase().includes(searchValue.toLowerCase())))
  }, [searchValue])

  //Сортировка по фильтру из subMenu
  const [activeSubMenuItem, setActiveSubMenuItem] = React.useState('');
  React.useEffect(() => {
    setModels(allModels.filter(item => item.description.toLowerCase().includes(activeSubMenuItem.toLowerCase())))
  }, [activeSubMenuItem])

  //Autocomplete menu
  const [visibleAutoCompleteMenu, setVisibleAutoCompleteMenu] = React.useState(false);
  const clearSearchInput = () => {
    setSearchValue('')
    setVisibleAutoCompleteMenu(false)
    setModels(allModels)
  }
  const autoCompleteMenu = () => {
    const closeAutoCompleteMenu = (text) => {
      setSearchValue(text)
      setVisibleAutoCompleteMenu(false)
    }

    const onFilterItems = allModels.filter((item) => item.description.toLowerCase().includes(searchValue.toLowerCase()))

    if(onFilterItems.length > 0) {
      return (
        onFilterItems.map((obj, index) => <li key={`${obj} ${index}`} onClick={() => closeAutoCompleteMenu(obj.description)}><span>{obj.description}</span></li>)
      )
    } else {
      return <span className={styles.notSearch}>ничего не найдено</span>
    }
  }
  const autoCompleteMenuRef = React.useRef();
  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)
  }, [])
  const handleOutsideClick = (e) => {
    if(!e.path.includes(autoCompleteMenuRef.current)) {
      setVisibleAutoCompleteMenu(false)
    }
  };

  return (
    <div className={styles.gallery}>
      <div className={`${styles.searchRow} d-flex align-center`}>
        <SubMenu mainModels={models} allModels={allModels} setModels={setModels} setActiveSubMenuItem={setActiveSubMenuItem} searchValue={searchValue} />
        <div className={`${styles.layouts} d-flex`}>
          {layouts.map((layout, index) => {
            return (
              <div onClick={() => onSelectLayout(index)}
                   className={`${styles.layout} ${activeLayout === index ? styles.activeLayout : ""}`}
                   key={`${layout} ${index}`}>
                {layout}
              </div>
            )
          })}
        </div>
        <div ref={autoCompleteMenuRef} className={`${styles.searchInput} pos-r`}>
          <input onChange={onChangeSearchInput} value={searchValue} type='text' placeholder='Поиск'/>
          {searchValue ?
            <span onClick={clearSearchInput} className={styles.clear}>очистить</span> :
            <SearchLoop width={'19px'} height={'19px'} />
          }
          {visibleAutoCompleteMenu ?
            <ul className={styles.autoCompleteList}>
              {searchValue ?
                autoCompleteMenu() :
                null
              }
            </ul> :
            null}
        </div>
      </div>
      <div className={`${styles.models} d-flex`}>
        {models.map((obj, index) => <Card index={index} addToCart={addToCart} key={`${obj} ${index}`} url={obj.url} title={obj.title} price={obj.price} />)}
      </div>
    </div>
  );
};

export default Gallery;

