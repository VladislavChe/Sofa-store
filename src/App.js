import React from 'react';
import 'macro-css'
import Header from './Components/Header/Header';
import Gallery from './Components/Gallery/Gallery';


function App() {
  return (
    <div className='App'>
      <div className="container">
        <Header />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
