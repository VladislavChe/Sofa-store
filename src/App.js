import axios from "axios";
import "macro-css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "./Components/Basket/Basket";
import Favourite from "./Components/Favourite/Favourite";
import Gallery from "./Components/Gallery/Gallery";
import Header from "./Components/Header/Header";
import AppContext from "./context";
import alba from "./img/models/alba.png";
import arni from "./img/models/arni.png";
import boorbon from "./img/models/boorbon.png";
import chair1 from "./img/models/chair1.png";
import chair2 from "./img/models/chair2.png";
import emilio from "./img/models/emilio.png";
import exclusive1 from "./img/models/exclusive1.png";
import exclusive3 from "./img/models/exclusive3.png";
import exlusivebed2 from "./img/models/exlusivebed2.png";
import floret from "./img/models/floret.png";
import leonardo from "./img/models/leonardo.png";
import malta from "./img/models/malta.png";
import martin from "./img/models/martin.png";
import nensi from "./img/models/nensi.png";
import regina from "./img/models/regina.png";
import taiti from "./img/models/taiti.png";
import tatami from "./img/models/tatami.png";
import toscana from "./img/models/toscana.png";
import versal from "./img/models/versal.png";

function App() {
  return <div>hello</div>;
  const [allModels, setAllModels] = React.useState([]);
  const [models, setModels] = React.useState(allModels);
  const [favouriteModels, setFavouriteModels] = React.useState([]);
  const [showHeaderModels, setShowHeaderModels] = React.useState(true);

  const [activePlus, setActivePlus] = React.useState([]);
  const [activeHurt, setActiveHurt] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  const getAllModels = () => {
    axios
      .get("https://6271742d25fed8fcb5e66f8f.mockapi.io/models")
      .then(function (response) {
        setAllModels(response.data);
        setModels(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        let models = [
          {
            id: 1,
            url: martin,
            title: "Martin",
            description: "Диваны Martin",
            price: 15000,
          },
          {
            id: 2,
            url: alba,
            title: "Alba",
            description: "Кресла Alba",
            price: 11000,
          },
          {
            id: 3,
            url: toscana,
            title: "Toscana",
            description: "Кресла Toscana",
            price: 10500,
          },
          {
            id: 4,
            url: leonardo,
            title: "Leonardo",
            description: "Диваны Leonardo",
            price: 12000,
          },
          {
            id: 5,
            url: boorbon,
            title: "Boorbon",
            description: "Диваны Boorbon",
            price: 17000,
          },
          {
            id: 6,
            url: emilio,
            title: "emilio",
            description: "Диваны emilio",
            price: 7000,
          },
          {
            id: 7,
            url: nensi,
            title: "nensi",
            description: "Кровати nensi",
            price: 13000,
          },
          {
            id: 8,
            url: tatami,
            title: "tatami",
            description: "Диваны tatami",
            price: 14000,
          },
          {
            id: 9,
            url: regina,
            title: "regina",
            description: "Диваны regina",
            price: 16000,
          },
          {
            id: 10,
            url: malta,
            title: "malta",
            description: "Матрацы malta",
            price: 5000,
          },
          {
            id: 11,
            url: versal,
            title: "versal",
            description: "Пуфы versal",
            price: 4000,
          },
          {
            id: 12,
            url: exclusive1,
            title: "exclusive 1",
            description: "Эксклюзивная мебель exclusive 1",
            price: 24000,
          },
          {
            id: 13,
            url: floret,
            title: "floret",
            description: "Кресла floret",
            price: 8000,
          },
          {
            id: 14,
            url: exlusivebed2,
            title: "exlusive bed 2",
            description: "Кровати Эксклюзивная мебель exlusive bed 2",
            price: 18000,
          },
          {
            id: 15,
            url: arni,
            title: "arni",
            description: "Диваны arni",
            price: 9000,
          },
          {
            id: 16,
            url: taiti,
            title: "taiti",
            description: "Матрацы taiti",
            price: 8000,
          },
          {
            id: 17,
            url: chair1,
            title: "chair 1",
            description: "Стулья chair 1",
            price: 6000,
          },
          {
            id: 18,
            url: chair2,
            title: "chair 2",
            description: "Стулья chair 2",
            price: 8000,
          },
          {
            id: 19,
            url: exclusive3,
            title: "exclusive 3",
            description: "Стулья Эксклюзивная мебель exclusive3",
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
  const [totalPrice, setTotalPrice] = React.useState(0);
  React.useEffect(() => {
    setTotalPrice(basketItems.reduce((sum, obj) => obj.price + sum, 0));
  }, [basketItems]);

  const addToCart = (url, title, price, index, id) => {
    let model = { url, title, price, index, id };
    setBasketItems((prevState) => [...prevState, model]);
  };

  const showCart = (boolean) => {
    setOpenBasket(boolean);
  };

  const deleteBasketItems = (id) => {
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
    setActivePlus((prev) => prev.filter((item) => item !== id));
  };

  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          allModels,
          addToCart,
          activePlus,
          setActivePlus,
          activeHurt,
          setActiveHurt,
          basketItems,
          deleteBasketItems,
          setBasketItems,
          favouriteModels,
          models,
          showCart,
          showHeaderModels,
          setShowHeaderModels,
          setModels,
          setFavouriteModels,
          searchValue,
          setSearchValue,
          totalPrice,
          setTotalPrice,
        }}
      >
        <div className="App">
          {/*
          <Basket openBasket={openBasket} />
          <div className="container">
            {!loading && <Header />}
            <Routes>
              <Route path="/" element={<Gallery />} />
              <Route exact path="favourite" element={<Favourite />} />
            </Routes>
          </div>
*/}
        </div>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
