import React from 'react';
import { useDispatch } from 'react-redux';

import Typography from './components/Typography';
import ProductItem from './components/ProductItem';
import ProductCard from './components/ProductCart';
import Cart from './components/Cart';

import { dataProducts } from './mocks/dataProducts';

import { fetchProduct } from './redux/product.action';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    function getProducts() {
      const response = dataProducts;
      dispatch(fetchProduct(response))
    }
    getProducts();
  }, [])

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
