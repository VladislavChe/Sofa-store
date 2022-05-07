import React from 'react';
import 'macro-css'
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';
import Basket from './Components/Basket/Basket';




function App() {
  const [openBasket, setOpenBasket] = React.useState(false);

  const [basketItems, setBasketItems] = React.useState([]);
  const addToCart = (url, title, price, index) => {
    let model = {url, title, price, index}

    let checkItems = basketItems.some(function(e){
      return e.index == index;
    });

    if(!checkItems){
      setBasketItems(prevState => [...prevState, model])
    }
  }

  React.useEffect(() => {
    // console.log(JSON.stringify([...basketItems]))
    }, [basketItems])

  return (
    <div className='App'>
      {openBasket && <Basket items={basketItems} onClickCart={() => setOpenBasket(false)} />}
      <div className="container">
        <Header onClickCart={() => setOpenBasket(true)} />
        <Gallery addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
