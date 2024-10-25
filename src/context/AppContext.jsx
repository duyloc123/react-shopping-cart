import React from "react";

import { dataCart } from "../mocks/dataCart.js";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [product, setProduct] = React.useState(dataCart);
  const [cart, setCart] = React.useState([]);

  function AddToCart(id) {
    const productItem = product.find((item) => item.id === id);

    if (!productItem) return;
    setCart((prevState) => [...prevState, productItem]);
  }

  function deleteCart(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  function plusProduct(id) {
    const newCart = [...cart];
    const index = newCart.findIndex(item => item.id === id);
    newCart[index].quanlity = newCart[index].quanlity + 1;
    setCart(newCart);
  }

  function minsProduct(id){
    const newCart = [...cart];
    const index = newCart.findIndex(item => item.id === id);
    const currentQuanlity = newCart[index].quanlity;
    if(currentQuanlity === 1){
        newCart.splice(index,1);
    } else {
        newCart[index]. quanlity = newCart[index].quanlity - 1;
    }
    setCart(newCart);
  }

  return (
    <AppContext.Provider
      value={{
        // state
        product,
        cart,

        //action
        AddToCart,
        deleteCart,
        plusProduct,
        minsProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const userAppContext = () => React.useContext(AppContext);
