import React from "react";
import * as axios from "axios";
import styles from "./Gallery.module.scss";
import Card from '../Card/Card';
import SubMenu from '../SubMenu/SubMenu';


//pictures
import { ReactComponent as Layout8 } from '../../img/layout-8.svg'
import { ReactComponent as Layout4 } from '../../img/layout-4.svg'
import { ReactComponent as SearchLoop } from '../../img/search-loop.svg'
import martin from '../../img/models/martin.jpg';
import alba from '../../img/models/alba.jpg';

const Gallery = () => {
  const layouts = [<Layout8 width={'55px'} height={'26px'} />, <Layout4 width={'55px'} height={'26px'} />]
  const [activeLayout, setActiveLayout] = React.useState(0);

  const onSelectLayout = (index) => {
    setActiveLayout(index)
  }

  const [modelsArr, setModelsArr] = React.useState([]);
 React.useEffect(() => {
   async function getUser() {
     try {
       const response = await axios.get('https://6271742d25fed8fcb5e66f8f.mockapi.io/models');
       setModelsArr(response.data)
     } catch (error) {
       console.error(error);
     }
   }
   getUser()
   }, [])

  const modelsArr3 = [
    {
      "url": "/img/models/martin.jpg",
      "title": "Martin",
      "price": 15000,
    },
    {
      "url": "/img/models/alba.jpg",
      "title": "Alba",
      "price": 11000,
    },
  ]


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
        {modelsArr.map((obj, index) => <Card key={`${obj} ${index}`} url={obj.url} title={obj.title} price={obj.price} /> )}
      </div>
    </div>
  );
};

export default Gallery;

