import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Vektor } from '../../img/vector-back.svg';
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
