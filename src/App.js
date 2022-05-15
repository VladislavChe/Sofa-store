import React from 'react';
import 'macro-css'
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import Basket from './Components/Basket/Basket';
import * as axios from 'axios';

// pictures
import martin from './img/models/martin.png';
import alba from './img/models/alba.png';
import toscana from './img/models/toscana.png';
import leonardo from './img/models/leonardo.png';
import boorbon from './img/models/boorbon.png';
import emilio from './img/models/emilio.png';
import nensi from './img/models/nensi.png';
import tatami from './img/models/tatami.png';
import regina from './img/models/regina.png';
import malta from './img/models/malta.png';
import versal from './img/models/versal.png';
import exclusive1 from './img/models/exclusive1.png';
import floret from './img/models/floret.png';
import exlusivebed2 from './img/models/exlusivebed2.png';
import arni from './img/models/arni.png';
import taiti from './img/models/taiti.png';
import chair1 from './img/models/chair1.png';
import chair2 from './img/models/chair2.png';
import exclusive3 from './img/models/exclusive3.png';

function App() {
  const [allModels, setAllModels] = React.useState([]);
  const [models, setModels] = React.useState(allModels);

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
          },
          {
            url: toscana,
            title: "Toscana",
            description: 'Кресла',
            price: 10500
          },
          {
            url: leonardo,
            title: "Leonardo",
            description: 'Диваны',
            price: 12000
          },
          {
            url: boorbon,
            title: "Boorbon",
            description: 'Диваны',
            price: 17000
          },
          {
            url: emilio,
            title: "emilio",
            description: 'Диваны',
            price: 7000
          },
          {
            url: nensi,
            title: "nensi",
            description: 'Кровати',
            price: 13000
          },
          {
            url: tatami,
            title: "tatami",
            description: 'Диваны',
            price: 14000
          },
          {
            url: regina,
            title: "regina",
            description: 'Диваны',
            price: 16000
          },
          {
            url: malta,
            title: "malta",
            description: 'Матрацы',
            price: 5000
          },
          {
            url: versal,
            title: "versal",
            description: 'Пуфы',
            price: 4000
          },
          {
            url: exclusive1,
            title: "exclusive 1",
            description: 'Эксклюзивная мебель',
            price: 24000
          },
          {
            url: floret,
            title: "floret",
            description: 'Кресла',
            price: 8000
          },
          {
            url: exlusivebed2,
            title: "exlusive bed 2",
            description: 'Кровати Эксклюзивная мебель',
            price: 18000
          },
          {
            url: arni,
            title: "arni",
            description: 'Диваны',
            price: 9000
          },
          {
            url: taiti,
            title: "taiti",
            description: 'Матрацы',
            price: 8000
          },
          {
            url: chair1,
            title: "chair 1",
            description: 'Стулья',
            price: 6000
          },
          {
            url: chair2,
            title: "chair 2",
            description: 'Стулья',
            price: 8000
          },
          {
            url: exclusive3,
            title: "exclusive 3",
            description: 'Стулья Эксклюзивная мебель',
            price: 12000
          },
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

  //Корзина
  const [openBasket, setOpenBasket] = React.useState(false);
  const [basketItems, setBasketItems] = React.useState([]);
  const addToCart = (url, title, price, index) => {
    let model = {url, title, price, index}

    //Проверка на существующий товар в корзине
    let checkItems = basketItems.some(function(e){
      return e.index == index;
    });

    if(!checkItems){
      axios.post('https://6271742d25fed8fcb5e66f8f.mockapi.io/cart', model);
      setBasketItems(prevState => [...prevState, model])
    }

  }

  return (
    <div className='App'>
      {openBasket && <Basket items={basketItems} setBasketItems={setBasketItems} onClickCart={() => setOpenBasket(false)} />}
      <div className="container">
        <Header allModels={allModels} models={models} setModels={setModels} onClickCart={() => setOpenBasket(true)} />
        <Gallery allModels={allModels} models={models} setModels={setModels} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
