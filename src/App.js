import * as axios from 'axios';
import 'macro-css';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Basket from './Components/Basket/Basket';
import Favourite from './Components/Favourite/Favourite';
import Gallery from './Components/Gallery/Gallery';
import Header from './Components/Header/Header';
import alba from './img/models/alba.png';
import arni from './img/models/arni.png';
import boorbon from './img/models/boorbon.png';
import chair1 from './img/models/chair1.png';
import chair2 from './img/models/chair2.png';
import emilio from './img/models/emilio.png';
import exclusive1 from './img/models/exclusive1.png';
import exclusive3 from './img/models/exclusive3.png';
import exlusivebed2 from './img/models/exlusivebed2.png';
import floret from './img/models/floret.png';
import leonardo from './img/models/leonardo.png';
import malta from './img/models/malta.png';
import martin from './img/models/martin.png';
import nensi from './img/models/nensi.png';
import regina from './img/models/regina.png';
import taiti from './img/models/taiti.png';
import tatami from './img/models/tatami.png';
import toscana from './img/models/toscana.png';
import versal from './img/models/versal.png';

function App() {
  const [allModels, setAllModels] = React.useState([]);
  const [models, setModels] = React.useState(allModels);
  const [favouriteModels, setFavouriteModels] = React.useState([]);

  const [activePlus, setActivePlus] = React.useState([]);
  const [activeHurt, setActiveHurt] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [showHeaderModels, setShowHeaderModels] = React.useState(true);

  const getAllModels = () => {
    axios
      .get('https://6271742d25fed8fcb5e66f8f.mockapi.io/models')
      .then(function (response) {
        setAllModels(response.data);
        setModels(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        let models = [
          {
            url: martin,
            title: 'Martin',
            description: 'Диваны',
            price: 15000,
          },
          {
            url: alba,
            title: 'Alba',
            description: 'Кресла',
            price: 11000,
          },
          {
            url: toscana,
            title: 'Toscana',
            description: 'Кресла',
            price: 10500,
          },
          {
            url: leonardo,
            title: 'Leonardo',
            description: 'Диваны',
            price: 12000,
          },
          {
            url: boorbon,
            title: 'Boorbon',
            description: 'Диваны',
            price: 17000,
          },
          {
            url: emilio,
            title: 'emilio',
            description: 'Диваны',
            price: 7000,
          },
          {
            url: nensi,
            title: 'nensi',
            description: 'Кровати',
            price: 13000,
          },
          {
            url: tatami,
            title: 'tatami',
            description: 'Диваны',
            price: 14000,
          },
          {
            url: regina,
            title: 'regina',
            description: 'Диваны',
            price: 16000,
          },
          {
            url: malta,
            title: 'malta',
            description: 'Матрацы',
            price: 5000,
          },
          {
            url: versal,
            title: 'versal',
            description: 'Пуфы',
            price: 4000,
          },
          {
            url: exclusive1,
            title: 'exclusive 1',
            description: 'Эксклюзивная мебель',
            price: 24000,
          },
          {
            url: floret,
            title: 'floret',
            description: 'Кресла',
            price: 8000,
          },
          {
            url: exlusivebed2,
            title: 'exlusive bed 2',
            description: 'Кровати Эксклюзивная мебель',
            price: 18000,
          },
          {
            url: arni,
            title: 'arni',
            description: 'Диваны',
            price: 9000,
          },
          {
            url: taiti,
            title: 'taiti',
            description: 'Матрацы',
            price: 8000,
          },
          {
            url: chair1,
            title: 'chair 1',
            description: 'Стулья',
            price: 6000,
          },
          {
            url: chair2,
            title: 'chair 2',
            description: 'Стулья',
            price: 8000,
          },
          {
            url: exclusive3,
            title: 'exclusive 3',
            description: 'Стулья Эксклюзивная мебель',
            price: 12000,
          },
        ];
        setAllModels(models);
        setModels(models);
        setLoading(false);
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };
  React.useEffect(() => {
    setLoading(true);
    getAllModels();
  }, []);

  //Корзина
  const [openBasket, setOpenBasket] = React.useState(false);
  const [basketItems, setBasketItems] = React.useState([]);
  const addToCart = (url, title, price, index) => {
    let model = { url, title, price, index };

    axios.post('https://6271742d25fed8fcb5e66f8f.mockapi.io/cart', model);
    setBasketItems((prevState) => [...prevState, model]);

    // //Проверка на существующий товар в корзине
    // let checkItems = basketItems.some(function (e) {
    //   return e.index == index;
    // });

    // if (!checkItems) {
    //   axios.post('https://6271742d25fed8fcb5e66f8f.mockapi.io/cart', model);
    //   setBasketItems((prevState) => [...prevState, model]);
    // }
  };

  const deleteBasketItems = (index, id) => {
    if (id === undefined) {
      setBasketItems((prev) => prev.filter((item) => item.index !== index));
      setActivePlus((prev) => prev.filter((item) => item !== index));
    } else {
      axios.delete(`https://6271742d25fed8fcb5e66f8f.mockapi.io/cart/${id}`);
      setBasketItems((prev) => prev.filter((item) => item.index !== index));
      setActivePlus((prev) => prev.filter((item) => item !== index));
    }
  };

  return (
    <BrowserRouter>
      <div className="App">
        {openBasket && (
          <Basket
            items={basketItems}
            setBasketItems={setBasketItems}
            activePlus={activePlus}
            setActivePlus={setActivePlus}
            onClickCart={() => setOpenBasket(false)}
            deleteBasketItems={deleteBasketItems}
          />
        )}
        <div className="container">
          {!loading && (
            <Header
              allModels={allModels}
              models={models}
              setModels={setModels}
              onClickCart={() => setOpenBasket(true)}
              showHeaderModels={showHeaderModels}
            />
          )}
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Gallery
                  allModels={allModels}
                  models={models}
                  setModels={setModels}
                  addToCart={addToCart}
                  activePlus={activePlus}
                  setActivePlus={setActivePlus}
                  activeHurt={activeHurt}
                  setActiveHurt={setActiveHurt}
                  deleteBasketItems={deleteBasketItems}
                  basketItems={basketItems}
                  setFavouriteModels={setFavouriteModels}
                  favouriteModels={favouriteModels}
                />
              }
            />
            <Route
              path="galery"
              element={
                <Gallery
                  allModels={allModels}
                  models={models}
                  setModels={setModels}
                  addToCart={addToCart}
                  activePlus={activePlus}
                  setActivePlus={setActivePlus}
                  activeHurt={activeHurt}
                  setActiveHurt={setActiveHurt}
                  deleteBasketItems={deleteBasketItems}
                  basketItems={basketItems}
                  setFavouriteModels={setFavouriteModels}
                  favouriteModels={favouriteModels}
                />
              }
            />
            <Route
              path="favourite"
              element={
                <Favourite
                  setShowHeaderModels={setShowHeaderModels}
                  allModels={allModels}
                  models={models}
                  setModels={setModels}
                  addToCart={addToCart}
                  activePlus={activePlus}
                  setActivePlus={setActivePlus}
                  activeHurt={activeHurt}
                  setActiveHurt={setActiveHurt}
                  favouriteModels={favouriteModels}
                  setFavouriteModels={setFavouriteModels}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
