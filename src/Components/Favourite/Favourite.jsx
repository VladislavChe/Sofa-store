import React from 'react';
import { NavLink } from 'react-router-dom';
import No from '../../img/no-favorites.png';
import { ReactComponent as Vektor } from '../../img/vector-back.svg';
import Info from '../_Utils/Info/Info';
import AppContext from './../../context';
import Card from './../Card/Card';
import styles from './Favourite.module.scss';

const Favourite = ({}) => {
  const {
    activeHurt,
    setActiveHurt,
    setShowHeaderModels,
    addToCart,
    activePlus,
    setActivePlus,
    favouriteModels,
    deleteBasketItems,
    basketItems,
    setFavouriteModels,
    models,
  } = React.useContext(AppContext);

  React.useEffect(() => {
    setShowHeaderModels(false);
  }, []);

  return (
    <div className={styles.favourite}>
      <div className={styles.row}>
        <NavLink to={'/'}>
          <div className={styles.back}>
            <Vektor />
          </div>
        </NavLink>
        <h1>Избранное</h1>
      </div>
      <ul
        className={!favouriteModels.length > 0 ? styles.favouriteList_empty : styles.favouriteList}>
        {!favouriteModels.length > 0 ? (
          <Info
            nav={true}
            img={No}
            title={'Избранных нет :('}
            description={'Вы ничего не добавляли в закладки'}
          />
        ) : (
          favouriteModels.map((obj, index) => (
            <Card
              activeHurt={activeHurt}
              setActiveHurt={setActiveHurt}
              activePlus={activePlus}
              setActivePlus={setActivePlus}
              addToCart={addToCart}
              key={`${obj} ${index}`}
              index={obj.index}
              url={obj.url}
              title={obj.title}
              price={obj.price}
              deleteBasketItems={deleteBasketItems}
              basketItems={basketItems}
              setFavouriteModels={setFavouriteModels}
              favouriteModels={favouriteModels}
              models={models}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default Favourite;
