import React from "react";
import styles from "./Gallery.module.scss";

//pictures

import martin from '../../img/models/martin.jpg'
import { ReactComponent as VectorDown } from '../../img/vector-down.svg'
import { ReactComponent as Layout8 } from '../../img/layout-8.svg'
import { ReactComponent as Layout4 } from '../../img/layout-4.svg'
import { ReactComponent as SearchLoop } from '../../img/search-loop.svg'
import Card from '../Card/Card';
import SubMenu from '../SubMenu/SubMenu';

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={`${styles.searchRow} d-flex align-center`}>
        <div className={`${styles.menu} d-flex align-center`}>
          <span className={styles.gallery__allModels}>Все 2D-3D модели</span>
          <VectorDown width={'13px'} height={'7.5px'} />
          <SubMenu />
        </div>
        <div className={`${styles.layout} d-flex`}>
          <div className={styles.layout8}>
            <Layout8 width={'55px'} height={'26px'} />
          </div>
          <div className={styles.layout4}>
            <Layout4 width={'55px'} height={'26px'} />
          </div>

        </div>
        <div className={`${styles.searchInput} pos-r`}>
          <input type='text' placeholder='Поиск'/>
          <SearchLoop width={'19px'} height={'19px'} />
        </div>
      </div>
      <div className={`${styles.models} d-flex justify-between`}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Gallery;

