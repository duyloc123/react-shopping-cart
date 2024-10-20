import React from 'react';

import { dataCart } from '../mocks/dataCart';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [products] = React.useState(dataCart);
  const [carts, setCarts] = React.useState([]);

  function addToCart(productId) {
    const productItem = products.find(item => item.id === productId);

    if(!productItem) return;
    const item = {
      ...productItem,
      quanlity: 1
    }
    setCarts(prevState => [...prevState, item])
  }

  function deleteCart(productId) {
    const newCarts = carts.filter(item => item.id !== productId);
    setCarts(newCarts)
  }

  function plusProduct(productId) {
    const newCarts = [...carts];
    const productIndex = newCarts.findIndex(item => item.id === productId);
    newCarts[productIndex].quanlity = newCarts[productIndex].quanlity + 1;
    setCarts(newCarts);
  }

  function minusProduct(productId) {
    const newCarts = [...carts];
    const productIndex = newCarts.findIndex(item => item.id === productId);
    const currentQuanlity = newCarts[productIndex].quanlity;

    if(currentQuanlity === 1) {
      // remove this item in carts
      newCarts.splice(productIndex, 1);
    } else {
      newCarts[productIndex].quanlity = newCarts[productIndex].quanlity - 1;
    }
    setCarts(newCarts);
  }

  return ( 
    <AppContext.Provider
      value={{
        // states
        products,
        carts,
        // actions
        addToCart,
        deleteCart,
        plusProduct,
        minusProduct
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => React.useContext(AppContext);