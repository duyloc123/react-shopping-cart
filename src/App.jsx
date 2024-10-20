import React from 'react';
import Typography from './components/Typography';
import ProductItem from './components/ProductItem';
import ProductCard from './components/ProductCart';
import Cart from './components/Cart';
function App() {

  return (
    <div className="mainContent">
      <div className="card">
        <div className="cardTop">
          <img alt="" src="https://cdn-icons-png.flaticon.com/512/732/732084.png" />
        </div>
        <Typography 
          component="h1"
          className="cardTitle"
          text="Our Products"
        />
        <div className="cardBody">
          <ProductItem />
        </div>
      </div>

      <div className="card">
        <Cart />

        <ProductCard />
      </div>     
    </div>
  )
}

export default App
