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
  const [models, setModels] = React.useState([]);
  React.useEffect(() => {
    axios.get('https://6271742d25fed8fcb5e66f8f.mockapi.io/models')
      .then(function (response) {
        setModels(response.data)
      })
      .catch(function (error) {
        let models = [
          {
            url: martin,
            title: "Martin",
            price: 15000
          },
          {
            url: alba,
            title: "Alba",
            price: 11000
          }
        ]
        setModels(models)
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [])

  const layouts = [<Layout8 width={'55px'} height={'26px'} />, <Layout4 width={'55px'} height={'26px'} />]
  const [activeLayout, setActiveLayout] = React.useState(0);
  const onSelectLayout = (index) => {
    setActiveLayout(index)
  }

  return (
    <div className={styles.gallery}>
      <div className={`${styles.searchRow} d-flex align-center`}>
        <SubMenu />
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
        <div className={`${styles.searchInput} pos-r`}>
          <input type='text' placeholder='Поиск'/>
          <SearchLoop width={'19px'} height={'19px'} />
        </div>
      </div>
      <div className={`${styles.models} d-flex`}>
        {models.map((obj, index) => <Card index={index} addToCart={addToCart} key={`${obj} ${index}`} url={obj.url} title={obj.title} price={obj.price} /> )}
      </div>
    </div>
  );
};

export default Gallery;

