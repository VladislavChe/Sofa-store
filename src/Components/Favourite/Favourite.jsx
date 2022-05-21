import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Vektor } from '../../img/vector-back.svg';
import Card from './../Card/Card';
import styles from './Favourite.module.scss';

const Favourite = ({
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
}) => {
  React.useEffect(() => {
    setShowHeaderModels(false);
  }, []);

  return (
    <div className={styles.favourite}>
      <div className={styles.row}>
        <NavLink to={'/galery'}>
          <div className={styles.back}>
            <Vektor />
          </div>
        </NavLink>
        <h1>Избранное</h1>
      </div>
      <ul className={styles.favouriteList}>
        {favouriteModels.map((obj, index) => (
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
        ))}
      </ul>
    </div>
  );
};

export default Favourite;
